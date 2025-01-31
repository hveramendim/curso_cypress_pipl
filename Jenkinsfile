pipeline {
    agent any

    tools {
        nodejs "node"  // Cambia "node" por el nombre correcto configurado en Jenkins para NodeJS
    }

    stages {
        stage('Preparar entorno') {
            steps {
                echo 'Preparando entorno...'
                git url: 'https://github.com/hveramendim/curso_cypress_pipl.git'
                bat 'npm ci --legacy-peer-deps'  // Mejor opción para entorno de CI/CD, más rápido que npm install
                bat 'npx cypress --version'  // Verifica la instalación de Cypress
            }
        }

        stage('Ejecutar pruebas en paralelo') {
            parallel {
                stage('Pruebas en Slave 1') {
                    agent {
                        label "Agente2_1"
                    }
                    steps {
                        bat 'npm ci'  // Asegura que las dependencias estén en cada agente
                        bat 'npx cypress run --record --parallel --key b17c96e1-7d53-43d2-8f33-39fa74b7e766'
                    }
                }

                stage('Pruebas en Slave 2') {
                    agent {
                        label "Agente2_2"
                    }
                    steps {
                        bat 'npm ci'  // Asegura las dependencias en este agente también
                        bat 'npx cypress run --record --parallel --key b17c96e1-7d53-43d2-8f33-39fa74b7e766'
                    }
                }
            }
        }
    }

    post {
        always {
            echo 'Finalizando ejecución del pipeline...'
        }

        success {
            echo 'Pipeline ejecutado con éxito.'
        }

        failure {
            echo 'El pipeline ha fallado.'
        }
    }
}
