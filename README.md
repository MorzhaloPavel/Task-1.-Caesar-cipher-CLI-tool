# Task 1. Caesar cipher CLI tool


Привет)

Сейчас я вам расскажу как работает мой шифр Цезаря.

## Пункт 1)<br/>

  Для начала давайте сделаем клон моего репозитория (раз вы читаете данное письмо, значит, вы находитесь сейчас в моем GitHub): <br/>
  
    1. Нажмите на зелёную кнопку справа "Code";
    2. Копируем  данную ссылку или (https://github.com/MorzhaloPavel/Task-1.-Caesar-cipher-CLI-tool.git);
    3. Создаем пустую папку, открываем ее в кодовом редакторе, например (VSCode);
    4. Открываем терминал и прописываем команду "git clone" и добавляем скопированную ссылку моего репозитория;
    5. После скачивания напишите команду в терминале "npm install";
    6. Ну вот и всё, приложение готово к работе.
    
## Пункт 2)<br/>

  Запускаем приложение (сейчас будем работать с командной строкой):<br/>
  
    1. Пропишем команде "cd src" чтобы перейти в папку с корневым файлом;
    2. Пишем "node" и название корневого файла "index.js" (можно без расширения);
    3. Вводим обязательную команду "-s" или "--shift" и указываем целое число для сдвига (не целые числа будут округлены в меньшую сторону);
    4. Вводим обязательную команду "-a" или "--action" и указываем "encode" для зашифровки или "decode" для расшифровки;
    5. Вводим команду "-i" или "--input" и указываем название вводного файла "input.txt" (не обязательная команда); 
    5. Вводим команду "-o" или "--output" и указываем название выводного файла "output.txt" (не обязательная команда);
 
## Пример:
   
     1. node index -s 2 -a encode -i input.txt -o output.txt
     2. node index -s 2 -a decode -i input.txt -o output.txt
     3. node index.js --shift 2 --action encode --input input.txt --output output.txt
     4. node index -s -2 -a encode
     5. node index --shift 2 --action decode 
   
   
PS Приложение работает в полном объеме все условия выполнены.
