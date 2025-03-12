pipeline {
    agent any

    environment {
        CURRENT_BRANCH = "${env.GIT_BRANCH.replaceFirst('origin/', '')}"
        TRUNK_BRANCH = 'develop'
    }
    stages {
        stage('Validate PR Naming Conventions') {
            when {
                expression { env.CURRENT_BRANCH  != env.TRUNK_BRANCH }
            }
            steps {
                script {
                    def validBranch = env.CHANGE_BRANCH ==~ /^(feature|bugfix|hotfix)\/HPE-\d+(-.+)?$/
                    def validCommit = sh(script: "git log --format=%B -n 1", returnStdout: true).trim() ==~ /^HPE-\d+: .+$/

                    if (!validBranch) {
                        error("Branch name '${env.CHANGE_BRANCH}' does not follow the naming convention: feature/bugfix/hotfix/HPE-00[-optional-text]")
                    }

                    if (!validCommit) {
                        error("Commit message does not follow the naming convention: HPE-00: Description")
                    }

                    echo 'PR naming conventions validated successfully!'
                }
            }
        }              
    }
}
