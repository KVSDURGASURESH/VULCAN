FROM jenkins/jenkins

LABEL       Description="Jenkins with Gradle & Docker Image" \
            Maintainer="<suresh.kvsd@gmail.com>"

USER root

ENV GRADLE_VERSION=6.7
ENV GRADLE_USER_HOME /.gradle
ENV GRADLE_HOME=/opt/gradle

# docker adequate permission clear

RUN groupadd docker
RUN usermod -a -G docker jenkins

ENV WORKSPACE_HOME=${JENKINS_HOME}/workspace
# The below  parameter are set specifically for this project , can be changed accordingly 
# WORKDIR ${WORKSPACE_HOME}/{jenkins-workspace-name}/{directory-name}
WORKDIR ${WORKSPACE_HOME}/vulcan-1.5/vulcan-1.5/
ENV PROJECT_HOME=${WORKSPACE_HOME}/vulcan-1.5/vulcan-1.5

RUN apt-get update && \
apt-get -y install apt-transport-https \
    ca-certificates \
    curl \
    gnupg2 \
    locales \
    unzip \
    vim \
    software-properties-common && \
curl -fsSL https://download.docker.com/linux/$(. /etc/os-release; echo "$ID")/gpg > /tmp/dkey; apt-key add /tmp/dkey && \
add-apt-repository \
    "deb [arch=amd64] https://download.docker.com/linux/$(. /etc/os-release; echo "$ID") \
    $(lsb_release -cs) \
    stable" && \
apt-get update && \
apt-get -y install docker-ce
RUN apt-get install -y docker-ce
RUN usermod -a -G docker jenkins
RUN set -o errexit -o nounset \
	&& echo "Downloading Gradle" \
	&& curl -Lo gradle.zip https://services.gradle.org/distributions/gradle-${GRADLE_VERSION}-bin.zip \
	&& echo "Installing Gradle" \
	&& unzip gradle.zip \
	&& rm gradle.zip \
	&& mv "gradle-${GRADLE_VERSION}" "${GRADLE_HOME}/" \
	&& ln --symbolic "${GRADLE_HOME}/bin/gradle" /usr/bin/gradle \
	&& echo "Testing Gradle installation" \
	&& gradle --version

# .gradle and .android are a cache folders
RUN mkdir -p ${GRADLE_USER_HOME}/caches /.android \
	&& chmod -R 777 ${GRADLE_USER_HOME} \
    && chown -R jenkins:jenkins ${GRADLE_USER_HOME} \
	&& chmod 777 /.android

# Copy file to initialise gradle
COPY ./entrypoint.sh /
RUN chmod +x /entrypoint.sh \
&& chown -R jenkins:jenkins /entrypoint.sh \
&& chown -R jenkins:jenkins ${PROJECT_HOME}

# ENTRYPOINT [ "/entrypoint.sh" ]

USER jenkins