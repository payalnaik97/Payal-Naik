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
				//sh 'rm -f /var/lib/jenkins/workspace/FEI_PetClinic_Protractorui/`date +"%Y-%m-%d"`.html'
				sh """
					JOB_NAME=${env.JOB_BASE_NAME}
					rm -f /var/lib/jenkins/workspace/\$JOB_NAME/cucumber_report.html
					cp /app/cucumber_report.html /var/lib/jenkins/workspace/\$JOB_NAME
				   """
				//sh 'cp /app/Reports/`date +"%Y-%m-%d"`.html /var/lib/jenkins/workspace/${env.BUILD_TAG}'
				
			}
		}
		
    	}
	post { 
		success { 
		    echo "Your Test execution is done and reports at - /Pipeline_A740992/cucumber_report.html"
		}
		failure { 
		    echo "Please check logs for more details."
		}
    	}
}
