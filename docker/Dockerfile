FROM ubuntu:latest

ENV LANG en_GB.utf8
ENV ANDROID_SDK_TOOLS 3859397
ENV ANDROID_HOME /opt/android
ENV NVM_DIR /usr/local/nvm
ENV NODE_VERSION 8.9.4
ENV NODE_PATH $NVM_DIR/versions/node/v$NODE_VERSION/lib/node_modules
ENV PATH $NVM_DIR/versions/node/v$NODE_VERSION/bin:/opt/android/platform-tools:$PATH

## Install 32bit support for Android SDK
RUN dpkg --add-architecture i386 && \
    apt-get update -q && \
    apt-get install -qy --no-install-recommends libstdc++6:i386 libgcc1:i386 zlib1g:i386 libncurses5:i386

# Replace shell with bash so we can source files
RUN rm /bin/sh && ln -s /bin/bash /bin/sh

# Update apt and install necessary packages
RUN apt-get -y update --fix-missing && apt-get -y upgrade
RUN apt-get install -y \
		curl \
		build-essential \
		libssl-dev \
		software-properties-common \
		git \
		libtool \
		m4 \
		automake \
		autoconf \
		python-setuptools \
		python-dev

## Install NVM/Node/Npm
RUN curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash \
		&& source $NVM_DIR/nvm.sh \
		&& nvm install $NODE_VERSION
RUN npm install -g yarn


# Install JDK 7 & 8
RUN add-apt-repository -y ppa:webupd8team/java \
		&& apt-get update \
		&& echo oracle-java8-installer shared/accepted-oracle-license-v1-1 select true | /usr/bin/debconf-set-selections \
		&& apt-get install -y maven oracle-java8-installer oracle-java8-unlimited-jce-policy oracle-java8-set-default

RUN mkdir -p ${ANDROID_HOME} \
  && cd ${ANDROID_HOME} \
  && wget --quiet --output-document=${ANDROID_HOME}/android-sdk.zip https://dl.google.com/android/repository/sdk-tools-linux-${ANDROID_SDK_TOOLS}.zip \
  && cd ${ANDROID_HOME} && unzip android-sdk.zip

RUN echo y | ${ANDROID_HOME}/tools/bin/sdkmanager --update
RUN ${ANDROID_HOME}/tools/bin/sdkmanager "platform-tools" \
  "build-tools;23.0.3" \
  "build-tools;24.0.3" \
  "build-tools;25.0.3" \
  "build-tools;26.0.3" \
  "build-tools;27.0.3" \
  "platforms;android-23" \
  "platforms;android-24" \
  "platforms;android-25" \
  "platforms;android-26" \
  "platforms;android-27"

RUN yarn global add react-native-cli

## Clean up when done
RUN apt-get clean && \
    rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* && \
    npm cache verify

CMD ["react-native", "run-android"]
