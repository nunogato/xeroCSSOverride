# Step-by-step Installation Instructions

Note: instructions to install on Chrome browsers, other browsers the location of extensions may be different

First you need to install tampermonkey on your browser. go to https://www.tampermonkey.net/ where you find the links to install based on your browser.

After installing the extension you need to enable developer mode, for that follow this instructions https://www.tampermonkey.net/faq.php#Q209

After installing tampermonkey you should have an icon on the top right that when you press you see something like this (if it's not visible it will be hidden inside the puzzle piece, press that and pin the tampermonkey extension so it will be visible)

![tampermonkey extension](https://github.com/nunogato/xeroCSSOverride/blob/main/screenshots/1.png?raw=true)

Go and press on "Dashboard"

Now press the + on the tampermonkey dashboard. This will create a new script like the screenshot below

![tampermonkey dashboard](https://github.com/nunogato/xeroCSSOverride/blob/main/screenshots/2.png?raw=true)

This is a text editor. Delete all the lines present on it and then paste all the lines from the code you find here https://github.com/nunogato/xeroCSSOverride/blob/main/XERONewInvoicingLayout.js

Still on the tampermonkey editor press File -> Save

![tampermonkey save](https://github.com/nunogato/xeroCSSOverride/blob/main/screenshots/3.png?raw=true)

This will bring you back to the tampermonkey dashboard where you will have now a new line with the script. Make sure that it's enabled (in green)

![tampermonkey script installed](https://github.com/nunogato/xeroCSSOverride/blob/main/screenshots/4.png?raw=true)

Now when you go to xero.com and create a new invoice you should have the new layout applied. You can see that the layout is being applied as the tampermonkey icon now shows a red number next to it

![tampermonkey script active](https://github.com/nunogato/xeroCSSOverride/blob/main/screenshots/5.png?raw=true)

As a final step, if you want to adjust the width of the columns to your taste go back to the tampermonkey dashboard, open the existing script (press the edit icon on the right side) go down to line 65 to 71 and adjust the required width for each column
You can see below that the code shows the nth column (the column 2 is the item column) and for each there's a width in px (pixels) you can change this number.

This will work if you have all the default columns visible. If you have less columns visible this code needs to be adapted. You can, in worst case scenario, delete lines 64 to 71 to leave the default width of all columns

![edit columns to your flavour](https://github.com/nunogato/xeroCSSOverride/blob/main/screenshots/6.png?raw=true)

Use it as you wish, licence CC BY-NC-SA

Need help installing this? email me to github (at) valedegato.pt

Liked the code? Buy me a beer here -> [https://www.buymeabeer.online/nunogato]
