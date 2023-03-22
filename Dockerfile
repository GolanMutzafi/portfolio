# # Start with the official Python image
# FROM python:3.9-alpine

# # Set the working directory
# WORKDIR /app

# # Copy the requirements file
# COPY requirements.txt requirements.txt

# # Install the required packages
# RUN apk update && apk add bash && pip install --no-cache-dir -r requirements.txt

# # Copy the application code
# COPY . .

# # Set the environment variables
# ENV FLASK_APP=app.py
# ENV FLASK_ENV=development

# # Expose the port for Flask
# EXPOSE 5000

# # Copy the application code to the Nginx container
# RUN mkdir -p /usr/share/nginx/html/flask-app
# COPY app.py /usr/share/nginx/html/flask-app
# COPY templates /usr/share/nginx/html/flask-app/templates

# # Copy the Nginx configuration
# COPY ./etc/nginx/nginx.conf /etc/nginx/nginx.conf

# # Expose port 80 for Nginx
# EXPOSE 80

# # Start both the Flask and Nginx applications
# CMD ["sh", "-c", "python app.py & nginx -g 'daemon off;'"]
# Start with the official Python image
FROM python:3.9-alpine

# Set the working directory
WORKDIR /app

# Copy the requirements file
COPY requirements.txt requirements.txt

# Install the required packages
RUN pip install --no-cache-dir -r requirements.txt

# Copy the application code
COPY . .

# Set the environment variables
ENV FLASK_APP=app.py
ENV FLASK_ENV=development

# Expose the port for Flask
EXPOSE 5000

# Start the Flask application
CMD ["sh", "-c", "python app.py"]