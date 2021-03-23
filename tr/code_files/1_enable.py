from netmiko import ConnectHandler
device = {
    "device_type":"cisco_ios",
    "host":"192.168.10.15",
    "username":"keremcan",
    "password":"onemli",
    "verbose":"True",
    "secret":"onemli"

}
with ConnectHandler(**device) as connection:
    print(connection.find_prompt())
    connection.enable()
    print(connection.find_prompt())
