cd .. ..
pyside6-lupdate examples/ -ts examples/languages/en_US.ts
pyside6-lupdate examples/ -ts examples/languages/zh_CN.ts

pyside6-lrelease examples/languages/en_US.ts
pyside6-lrelease examples/languages/zh_CN.ts
