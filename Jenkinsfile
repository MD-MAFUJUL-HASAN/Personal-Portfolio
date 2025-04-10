pipeline {
    agent any

    environment {
        AWS_ACCESS_KEY_ID = credentials('AWS_ACCESS_KEY_ID')
        AWS_SECRET_ACCESS_KEY = credentials('AWS_SECRET_KEY_ID')
    }
    stages {
        stage('Create') {
            steps {
                echo 'Creating resources on AWS EC2 using terraform script......'
                sh '''
                cd ./infra-as-code/
                terraform init
                terraform validate
                terraform plan
                terraform apply --auto-approve
                '''
            }
        }
        stage('Fetch public Ip of EC2 machine') {
            steps {
                echo 'Fetching public ip of ec2 resource'
                sh '''  
                PUBLIC_IP_ADDRESS=$(terraform output -json instance_ips | jq -r '.[0]')
                echo "[WEB_SERVER] > ./ansible/inventory"
                echo "${PUBLIC_IP_ADDRESS}" >> ./ansibe/inventory
                echo "${PUBLIC_IP_ADDRESS} ansible_user=ubuntu ansible_ssh_private_key_file="./terraform/MyEC2InstanceLoginKey" ansible_ssh_common_args='-o StrictHostKeyChecking=no'" >> ./ansibe/inventory
                '''
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploy the code using ansible on newly created resources by terraform'
                sh '''
                    ansible-playbook -i ./ansible/inventory ./ansible/deploy.yaml
                '''
            }
        }
    }
}
