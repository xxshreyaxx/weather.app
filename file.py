import requests

api_key = 'YOUR_API_KEY'
city = 'London'

# Make a GET request to retrieve the current weather data for a city
url = f'http://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}'
response = requests.get(url)

# Extract the weather information from the response
data = response.json()
temperature = data['main']['temp']
humidity = data['main']['humidity']
wind_speed = data['wind']['speed']

# Print the weather information
print(f'Temperature: {temperature} K')
print(f'Humidity: {humidity}%')
print(f'Wind Speed: {wind_speed} m/s')
