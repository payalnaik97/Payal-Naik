pipeline {
	environment {
    		def APP_NAME = "Payal-Naik"
    		def GIT_REPO_NAME = "payalnaik97"
    		def DEPLOY_ENV = "dev"
	}
    	agent { dockerfile true }
	stages {
		stage('Initialize') {
			steps {
				echo 'Placeholder.'
			}
		}
		
    	}
	post { 
		success { 
		    echo "Your Test execution is done and reports at - /Pipeline_A740992/cucumber_repoer.html"
		}
		failure { 
		    echo "Please check logs for more details."
		}
    	}
}
