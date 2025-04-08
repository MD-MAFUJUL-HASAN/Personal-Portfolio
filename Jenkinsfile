pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building website project....'
                sh '''
                npm i
                npm start
                '''
            }
        }
        stage('Test') {
            steps {
                echo 'Testing website project...'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploy using terraform through AWS'
                sh '''
                cd ../../terraform/project
                terraform validate
                terraform apply
                '''
            }
        }
    }
}
