RegExp
regular expression

^$

var a = "Hi"
a.match("^([a-z])$")
null
var a = "H"
a.match("^([a-z])$")
null
var a = "h"
a.match("^([a-z])$")
(2) ["h", "h", index: 0, input: "h", groups: undefined]

var a = "hi"
a.match("^([a-z])$")
null

//exact 2 character
var a = "hi"
a.match("^([a-z]{2})$")
(2) ["hi", "hi", index: 0, input: "hi", groups: undefined]

// range between 2 to 5 character
var a = "hierd"
a.match("^([a-z]{2,5})$")

// any number of character
var a = "hierd"
a.match("^([a-z]+)$")

var a = "Hierd"
a.match("^([A-Za-z]{2,5})$")

var a = "Hierd09"
a.match("^([A-Za-z0-9]{2,5})$")


var a = 6576568768
a.match("^([0-9]{10})$")

var a = 6576568768
a.match("^([0-9]{10})$")
a.toString().match("^([0-9]{10})$")

var email = "a@a.com";
email.match("^([a-zA-Z0-9$#]+)@([a-zA-Z0-9$#]+)\.([a-zA-Z]{2,5})$")
(4) ["a@a.com", "a", "a", "com", index: 0, input: "a@a.com", groups: undefined]

var email = "@a.com";
email.match("^([a-zA-Z0-9$#]+)@([a-zA-Z0-9$#]+)\.([a-zA-Z]{2,5})$")
null

var email = "a@.com";
email.match("^([a-zA-Z0-9$#]+)@([a-zA-Z0-9$#]+)\.([a-zA-Z]{2,5})$")
null