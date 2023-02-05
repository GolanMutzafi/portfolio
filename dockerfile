# official Python image
FROM python:3.9-alpine

# Set the working directory
WORKDIR /app

# Copy the requirements file
COPY requirements.txt .

# Install the required packages
RUN pip install --no-cache-dir -r requirements.txt

# Copy the application code
COPY . .

# Set the environment variables
ENV FLASK_APP=app.py
ENV FLASK_ENV=development

# Expose the port for Flask
EXPOSE 5000

# Start the application
CMD ["flask", "run", "--host=0.0.0.0"]
