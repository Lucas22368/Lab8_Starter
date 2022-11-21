// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');
const { isPhoneNumber, isEmail, isStrongPassword,isDate,isHexColor } = require('../code-to-unit-test/unit-test-me.js');
// TODO - Part 2
//isPhoneNumber
test('correct format', ()=>{
    expect(isPhoneNumber('310-592-0348')).toBe(true);
});
test('invalid phone number',()=>{
    expect(isPhoneNumber('123471823947192834')).toBe(false);
});
test('other correct format',()=>{
    expect(isPhoneNumber('(310) 592-0348')).toBe(true);
});
test('all zeros correct format',()=>{
    expect(isPhoneNumber('000-000-000')).toBe(false);
});
//isEmail
test('correct format', ()=>{
    expect(isEmail('lucasxu42@gmail.com')).toBe(true);
});
test('invalid email',()=>{
    expect(isEmail('@gmail.com')).toBe(false);
});
test('only numbers',()=>{
    expect(isEmail('123412123@gmail.com')).toBe(true);
});
test('empty string',()=>{
    expect(isPhoneNumber('')).toBe(false);
});
//isStrongPassword
test('Strong password',()=>{
    expect(isStrongPassword('Jack_12412')).toBe(true);
});
test('Strong password 2',()=>{
    expect(isStrongPassword('Jack12341234')).toBe(true);
});
test('Weak password',()=>{
    expect(isStrongPassword('123')).toBe(false);
});
test('random special character',()=>{
    expect(isStrongPassword('b******')).toBe(false);
});
//isDate
test('real date',()=>{
    expect(isDate('09/18/2022')).toBe(true);
});
test('real date',()=>{
    expect(isDate('11/20/2022')).toBe(true);
});
test('letters date',()=>{
    expect(isDate('ab/ab/ascd')).toBe(false);
});
test('invalid format date',()=>{
    expect(isDate('11202022')).toBe(false);
});
//isHexColor
test('real hexcolor',()=>{
    expect(isHexColor('173d22')).toBe(true);
});
test('real hexcolor',()=>{
    expect(isHexColor('516e59')).toBe(true);
});
test('invalid format',()=>{
    expect(isHexColor('12341234123')).toBe(false);
});
test('fake hexcolor',()=>{
    expect(isHexColor('ZZZZZZ')).toBe(false);
});