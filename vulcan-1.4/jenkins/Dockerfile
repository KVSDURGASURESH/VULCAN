FROM jenkins/jenkins
USER root

ENV GRADLE_VERSION=6.7
ENV GRADLE_USER_HOME /.gradle
ENV GRADLE_HOME=/opt/gradle

RUN apt-get update && \
apt-get -y install apt-transport-https \
    ca-certificates \
    curl \
    gnupg2 \
    locales \
    unzip \
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
	&& chmod 777 /.android

USER jenkins