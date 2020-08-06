- Thermostat starts at 20 degrees
```
As a User
So that a User have a room in a certain temperature
I want a thermostat at a default temperature
```
You can increase the temperature with an up function
```
As a User
So that I can warm up
I want to be able to raise the temperature
```
You can decrease the temperature with a down function
```
As a User
So that I can cool down
I want to be able to lower the temperature
```
The minimum temperature is 10 degrees
```
As a User
So that the room is already cold enough
I can't go lower then 10 degree
```
If power saving mode is on, the maximum temperature is 25 degrees
```
As a User
So that I can save energy
I would like a maximum temperature of 25 degrees when PSM is on
```
If power saving mode is off, the maximum temperature is 32 degrees
```
As a User
So that I can have control over the maximum temperature
I want to be able to switch off power saving mode (and raise the temperature up to 32 degrees)
```
Power saving mode is on by default but it can also be turned off
You can reset the temperature to 20 with a reset function
You can ask about the thermostat's current energy usage: < 18 is low-usage, <= 25 is medium-usage, anything else is high-usage.
(In the challenges where we add an interface, low-usage will be indicated with green, medium-usage indicated with black, high-usage indicated with red.)
