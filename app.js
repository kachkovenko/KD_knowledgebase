const APP_VERSION = '1.1.14';

/* === FAQ Data === */
const faqData = [
  {
    "category": "Шрифты",
    "question": "Какие шрифты безопасны и не слетят на другом компьютере?",
    "answer": "Безопасные системные шрифты: <strong>Arial, Calibri, Times New Roman, Georgia, Verdana, Trebuchet MS, Tahoma</strong> — они установлены на большинстве компьютеров с Windows и macOS.<br><br><strong>Важно:</strong> если презентация корпоративная, используйте брендовые шрифты компании — единообразие важнее универсальности. А если в презентации использованы нестандартные шрифты и вы не уверены, что они есть у получателя — отправляйте файл в <strong>формате PDF</strong>, а не PPTX. Так шрифты гарантированно сохранятся."
  },
  {
    "category": "Шрифты",
    "question": "Как встроить шрифт в файл презентации?",
    "answer": "<strong>Файл → Параметры → Сохранение</strong> → поставить галочку «Внедрять шрифты в файл». Рекомендуется также включить «Внедрять только символы из презентации» для экономии размера. После этого шрифт будет отображаться корректно на любом компьютере, даже если там он не установлен."
  },
  {
    "category": "Шрифты",
    "question": "Как заменить шрифт во всей презентации разом?",
    "answer": "Вкладка <strong>«Главная» → «Заменить» → «Заменить шрифты»</strong> (Replace Fonts). В диалоге выберите исходный шрифт и тот, на который нужно заменить — изменение применится ко всем слайдам сразу. Это быстрее и надёжнее, чем менять шрифт вручную на каждом слайде."
  },
  {
    "category": "Шрифты",
    "question": "Как подобрать шрифтовую пару?",
    "answer": "В большинстве случаев <strong>одного шрифта вполне достаточно</strong> — просто используйте разные начертания (Regular для текста, Bold для заголовков). Но если хотите добавить второй шрифт, классическое правило: один с засечками (serif) для заголовков, один без засечек (sans-serif) для основного текста — или оба без засечек с разным характером. Удобные инструменты подбора: <strong><a href='https://fontpair.co' target='_blank'>fontpair.co</a></strong>, Google Fonts (фильтр «Popular pairings»). Больше двух шрифтов в одной презентации использовать не стоит."
  },
  {
    "category": "Шрифты",
    "question": "Какой минимальный размер шрифта читаем на экране / проекторе?",
    "answer": "Минимальный читаемый размер для основного текста — <strong>18–20 pt</strong>, для заголовков — <strong>28–36 pt</strong> и крупнее. На проекторе в большом зале размер нужно увеличивать: текст 14–16 pt с задних рядов практически не читается. Ориентир: если текст выглядит слишком крупным на мониторе, на проекторе он будет как раз."
  },
  {
    "category": "Цвета",
    "question": "Как подобрать цветовую палитру?",
    "answer": "Если презентация корпоративная — палитру нужно брать из <strong>брендбука</strong>. Сделайте скриншот палитры из брендбука, поместите его на слайд и используйте пипетку для подбора цветов.<br><br>Если нужно подобрать другую палитру, используйте сервисы <a href='https://coolors.co' target='_blank'>coolors.co</a>, <a href='https://color.adobe.com' target='_blank'>color.adobe.com</a> или <a href='https://paletton.com' target='_blank'>paletton.com</a> — они генерируют гармоничные палитры на основе теории цвета. Базовый принцип: 1 основной цвет, 1 акцентный, 2–3 нейтральных (оттенки серого, белый, бежевый). Также можно извлечь палитру из референсного изображения через Adobe Color."
  },
  {
    "category": "Цвета",
    "question": "Сколько цветов использовать в презентации?",
    "answer": "Оптимально <strong>3–5 цветов</strong>: 1–2 основных, 1 акцентный и 1–2 нейтральных. Большее количество цветов создаёт визуальный шум. Правило <strong>«60–30–10»</strong>: 60% — доминирующий цвет (фон), 30% — вторичный, 10% — акцент."
  },
  {
    "category": "Цвета",
    "question": "Как задать фирменные цвета по умолчанию (Theme Colors)?",
    "answer": "Вкладка <strong>«Дизайн» → «Варианты» → «Цвета» → «Настроить цвета»</strong>. В диалоге задайте нужные HEX/RGB-значения для каждой роли (Accent 1–6, фон, текст) и сохраните тему под именем. После этого фирменные цвета будут доступны во всех цветовых палитрах PowerPoint."
  },
  {
    "category": "Цвета",
    "question": "Как узнать точный цвет с картинки / сайта (пипетка)?",
    "answer": "В PowerPoint: выберите объект, нажмите на заливку, выберите <strong>«Другие цвета заливки» → пипетка (Eyedropper)</strong> — она позволяет подобрать цвет с любого места на экране. Для сайтов используйте расширение <strong>ColorZilla</strong> для Chrome или встроенные инструменты разработчика (F12 → пипетка). На macOS работает встроенное приложение «Цветомер»."
  },
  {
    "category": "Работа с изображениями",
    "question": "Где брать бесплатные качественные фото?",
    "answer": "Лучшие бесплатные стоки: <strong><a href='https://unsplash.com' target='_blank'>Unsplash</a></strong>, <strong><a href='https://pexels.com' target='_blank'>Pexels</a></strong>, <strong><a href='https://pixabay.com' target='_blank'>Pixabay</a></strong> — все предоставляют фото высокого разрешения без обязательного указания авторства. Для иллюстраций — <a href='https://freepik.com' target='_blank'>Freepik</a> и <a href='https://stocksnap.io' target='_blank'>StockSnap.io</a>. Всегда проверяйте лицензию перед использованием в коммерческих материалах."
  },
  {
    "category": "Работа с изображениями",
    "question": "Какой размер / разрешение нужен для презентации?",
    "answer": "Для слайдов 16:9 оптимальный размер изображения — <strong>1920×1080 px</strong> (Full HD). Изображения меньше 800×600 px будут выглядеть размытыми при полноэкранном показе."
  },
  {
    "category": "Работа с изображениями",
    "question": "Как обрезать фото внутри PowerPoint?",
    "answer": "Выделите изображение → вкладка <strong>«Формат рисунка» → «Обрезать»</strong> (Crop). Потяните за чёрные маркеры по краям. Опция <strong>«Обрезать по фигуре»</strong> (Crop to Shape) позволяет обрезать фото по любой геометрической форме — кругу, звезде и т.д."
  },
  {
    "category": "Работа с изображениями",
    "question": "Как сделать фото фоном слайда?",
    "answer": "Правый клик по пустому месту слайда → <strong>«Формат фона» → «Рисунок или текстура» → «Вставить»</strong> → выберите файл.<br><br>Есть и второй способ — просто <strong>растянуть изображение на весь слайд</strong>. Так вам в дальнейшем будет проще использовать это изображение повторно на других слайдах."
  },
  {
    "category": "Работа с изображениями",
    "question": "Как наложить затемнение поверх фото для читаемости текста?",
    "answer": "Вставьте прямоугольник поверх фото, покройте его чёрным цветом и установите <strong>прозрачность 40–60%</strong> (Формат фигуры → Заливка → Прозрачность). <strong>Обязательно выключите контур у фигуры</strong> (Формат фигуры → Контур → Нет контура), иначе он будет виден при показе презентации. Затем разместите текст поверх прямоугольника. Альтернатива: используйте полупрозрачный градиент от чёрного к прозрачному — он выглядит изящнее."
  },
  {
    "category": "Работа с изображениями",
    "question": "Как убрать фон у картинки в PowerPoint?",
    "answer": "Выделите изображение → вкладка <strong>«Формат рисунка» → «Удалить фон»</strong> (Remove Background). PowerPoint автоматически выделит область удаления — уточните её вручную. Инструмент хорошо работает на фото с однородным фоном."
  },
  {
    "category": "Работа с изображениями",
    "question": "Как сжать все изображения, чтобы уменьшить размер файла?",
    "answer": "Выделите любое изображение → <strong>«Формат рисунка» → «Сжать рисунки»</strong>. Снимите галочку «Применить только к этому рисунку», выберите разрешение «Экран (150 ppi)» или «Веб (96 ppi)». Отметьте <strong>«Удалить обрезанные области»</strong>. Это может сократить размер файла в несколько раз.<br><br><strong>Важно:</strong> после сжатия обязательно проверьте всю презентацию — этот способ иногда ломает некоторые изображения, особенно мелкие иконки и графику с прозрачностью."
  },
  {
    "category": "Иконки",
    "question": "Где брать бесплатные иконки?",
    "answer": "Лучшие источники: <strong><a href='https://flaticon.com' target='_blank'>Flaticon</a></strong>, <strong><a href='https://icons8.com' target='_blank'>Icons8</a></strong>, <strong><a href='https://thenounproject.com' target='_blank'>The Noun Project</a></strong>, Heroicons, Lucide и Feather Icons. Для коммерческого использования без ограничений — <strong>Google Material Icons</strong> и Bootstrap Icons (MIT-лицензия)."
  },
  {
    "category": "Иконки",
    "question": "Как вставить SVG-иконку в PowerPoint?",
    "answer": "<strong>Вставка → Рисунки → выберите SVG-файл</strong>. PowerPoint (2016+) поддерживает SVG нативно. После вставки иконку можно преобразовать в фигуры: правый клик → <strong>«Преобразовать в фигуры Microsoft Office»</strong> — каждый элемент становится отдельной фигурой, цвет которой легко менять."
  },
  {
    "category": "Иконки",
    "question": "Как перекрасить иконку?",
    "answer": "Если иконка вставлена как SVG — преобразуйте в фигуры (правый клик → «Преобразовать в фигуры»), выделите элементы и меняйте цвет заливки. Для <strong>PNG-иконок</strong>: Формат рисунка → «Перекрасить» (Color) → выберите нужный тон. Для точной перекраски в конкретный цвет SVG-подход предпочтительнее."
  },
  {
    "category": "Иконки",
    "question": "Встроенные иконки PowerPoint — где найти и как использовать?",
    "answer": "<strong>Вставка → Иконки</strong> (Icons) — в Microsoft 365 доступна библиотека из тысяч векторных иконок. Они вставляются как SVG, их можно перекрашивать, масштабировать без потери качества и преобразовывать в фигуры. Поиск ведётся по категориям или ключевым словам на английском языке."
  },
  {
    "category": "Графики и таблицы",
    "question": "Как добавить недостающий элемент диаграммы?",
    "answer": "Выделите диаграмму → на вкладке <strong>«Конструктор» нажмите «Добавить элемент диаграммы»</strong>. Здесь можно добавить или настроить: заголовок, подписи данных, легенду, оси, линии сетки, линию тренда и другие элементы. Каждый элемент можно дополнительно отформатировать двойным кликом."
  },
  {
    "category": "Графики и таблицы",
    "question": "Как правильно выровнять контент в таблице?",
    "answer": "Основные правила выравнивания: <strong>текст — по левому краю</strong>, <strong>цифры — по правому краю</strong> (так легче сравнивать разряды). Заголовки столбцов выравниваются так же, как данные под ними. Единицы измерения лучше вынести в заголовок, а не повторять в каждой ячейке."
  },
  {
    "category": "Графики и таблицы",
    "question": "Как вставить диаграмму из Excel с сохранением связи?",
    "answer": "В Excel скопируйте диаграмму → в PowerPoint используйте <strong>«Специальная вставка» (Ctrl+Alt+V)</strong> → выберите «Диаграмма Microsoft Excel (объект)» → <strong>«Вставить связь»</strong>. При изменении данных в Excel диаграмма обновится. Обновление: правый клик по диаграмме → «Обновить связь»."
  },
  {
    "category": "Фигуры и объекты",
    "question": "Как выровнять объекты (Align / Distribute)?",
    "answer": "Выделите несколько объектов (Shift+клик) → вкладка <strong>«Формат фигуры» → «Выровнять»</strong> (Align). <strong>«Распределить равномерно»</strong> (Distribute Horizontally/Vertically) расставит объекты с одинаковыми интервалами. Убедитесь, что выбрано «Выровнять выделенные объекты», а не «Выровнять по слайду»."
  },
  {
    "category": "Фигуры и объекты",
    "question": "Как объединить / вычесть фигуры (Merge Shapes)?",
    "answer": "Выделите две или более фигуры → <strong>«Формат фигуры» → «Объединить фигуры»</strong>. Доступные операции: объединение (Union), пересечение (Intersect), вычитание (Subtract), исключение (Combine), фрагментация (Fragment). Порядок выделения влияет на результат: фигура, выделенная первой, является основной."
  },
  {
    "category": "Фигуры и объекты",
    "question": "Как заблокировать объект от случайного перемещения?",
    "answer": "В PowerPoint нет нативной блокировки. Обходное решение: разместите объект (например, логотип) <strong>в мастер-слайде</strong> — тогда он будет недоступен для редактирования на обычном слайде. Также используйте <strong>панель «Область выделения»</strong> (Главная → Выделить) для скрытия/показа элементов."
  },
  {
    "category": "Фигуры и объекты",
    "question": "Как скопировать форматирование (Format Painter)?",
    "answer": "Выделите объект с нужным форматированием → нажмите <strong>«Формат по образцу»</strong> (Format Painter) на вкладке «Главная» → кликните по целевому объекту. Для применения к нескольким объектам <strong>дважды кликните</strong> по кнопке Format Painter — режим останется активным. Нажмите Esc для выхода.<br><br>Горячие клавиши: <strong>Ctrl+Shift+C</strong> — скопировать форматирование, <strong>Ctrl+Shift+V</strong> — вставить форматирование (на Mac: <strong>⌘+Shift+C / V</strong>)."
  },
  {
    "category": "Фигуры и объекты",
    "question": "Как сгруппировать объекты?",
    "answer": "Выделите нужные объекты (Shift+клик) → правый клик → <strong>«Группировать»</strong>. Горячая клавиша: <strong>Ctrl+G</strong> (Windows) / <strong>⌘+⌥+G</strong> (Mac). Разгруппировать — <strong>Ctrl+Shift+G</strong> (Windows) / <strong>⌘+⌥+Shift+G</strong> (Mac). Группировка позволяет перемещать, масштабировать и анимировать несколько объектов как единое целое."
  },
  {
    "category": "Анимация и переходы",
    "question": "Какие анимации уместны в деловой презентации?",
    "answer": "В деловой презентации уместны сдержанные анимации: <strong>Fade</strong> (появление), <strong>Appear</strong> (мгновенное) и <strong>Wipe</strong> (шторка). Избегайте вращений, отскоков, спиралей — они отвлекают от содержания. Анимация должна помогать последовательно раскрывать информацию, а не демонстрировать возможности программы."
  },
  {
    "category": "Анимация и переходы",
    "question": "Как настроить порядок появления элементов?",
    "answer": "Вкладка <strong>«Анимация» → «Область анимации»</strong> (Animation Pane). В панели отображается список всех анимаций — перетаскивайте их, чтобы менять порядок. Для каждого элемента настройте запуск: <strong>«По щелчку»</strong>, «С предыдущей» (одновременно) или «После предыдущей» (автоматически)."
  },
  {
    "category": "Анимация и переходы",
    "question": "Как сделать плавное появление (Fade)?",
    "answer": "Выделите объект → вкладка <strong>«Анимация» → «Появление» (Fade)</strong> в группе «Вход». Настройте длительность: рекомендуется <strong>0.3–0.5 секунды</strong> для делового стиля. Слишком медленное появление (>1 сек) замедляет презентацию и раздражает аудиторию."
  },
  {
    "category": "Анимация и переходы",
    "question": "Morph-переход — как использовать?",
    "answer": "Morph создаёт плавный переход между двумя слайдами. <strong>Продублируйте слайд</strong> (Ctrl+D), на копии переместите/измените объекты, затем назначьте переход <strong>«Morph»</strong> (вкладка «Переходы»). Объекты с одинаковыми именами или текстом будут плавно трансформироваться — эффект анимации без настройки ключевых кадров."
  },
  {
    "category": "Мастер-слайды и шаблоны",
    "question": "Как создать свой мастер-слайд?",
    "answer": "<strong>Вид → «Образец слайдов»</strong> (Slide Master). Верхний крупный слайд — главный мастер, дочерние — макеты. Настройте шрифты, цвета, фон, логотип и колонтитулы — все изменения применятся к слайдам с соответствующими макетами. Нажмите <strong>«Закрыть режим образца»</strong> после завершения."
  },
  {
    "category": "Мастер-слайды и шаблоны",
    "question": "Как применить шаблон к готовой презентации?",
    "answer": "Вкладка <strong>«Дизайн» → «Темы»</strong> → выберите нужную тему или импортируйте .thmx-файл. Для переноса мастер-слайдов из другого PPTX: <strong>Вид → «Образец слайдов» → «Тема»</strong> → выбрать из файла. Учтите: применение новой темы может изменить шрифты и цвета."
  },
  {
    "category": "Мастер-слайды и шаблоны",
    "question": "Как добавить логотип на все слайды сразу?",
    "answer": "Войдите в <strong>«Образец слайдов»</strong> (Вид → Образец слайдов), вставьте логотип на главный мастер (верхний в списке). После закрытия режима логотип появится на всех слайдах и не будет доступен для случайного редактирования. Чтобы скрыть на отдельных слайдах — снимите галочку «Фоновая графика» на вкладке «Дизайн»."
  },
  {
    "category": "Мастер-слайды и шаблоны",
    "question": "Как настроить нумерацию слайдов?",
    "answer": "<strong>Вставка → «Номер слайда»</strong> → отметьте «Номер слайда» → «Применить ко всем». Начальный номер: <strong>Дизайн → «Размер слайда» → «Параметры страницы»</strong> → «Номер первого слайда». Положение номера задаётся через мастер-слайд — переместите поле номера в нужное место."
  },
  {
    "category": "Горячие клавиши",
    "question": "Горячие клавиши для Windows",
    "answer": "<ul><li><strong>Ctrl+D</strong> — дублировать объект / слайд</li><li><strong>Ctrl+G</strong> — сгруппировать объекты</li><li><strong>Ctrl+Shift+G</strong> — разгруппировать</li><li><strong>Ctrl+M</strong> — новый слайд</li><li><strong>Ctrl+Z</strong> — отмена действия</li><li><strong>Ctrl+Y</strong> — повторить действие</li><li><strong>Ctrl+] / Ctrl+[</strong> — увеличить / уменьшить шрифт</li><li><strong>Ctrl+B / I / U</strong> — жирный / курсив / подчёркивание</li><li><strong>Ctrl+перетаскивание</strong> — дублировать объект с перемещением</li><li><strong>F5</strong> — показ с начала</li><li><strong>Shift+F5</strong> — показ с текущего слайда</li><li><strong>Esc</strong> — выход из режима показа</li><li><strong>B / W</strong> — чёрный / белый экран во время показа</li><li><strong>PageUp / PageDown</strong> — переход между слайдами</li><li><strong>Ctrl+Home / Ctrl+End</strong> — первый / последний слайд</li><li><strong>Tab</strong> — выбор следующего объекта на слайде</li><li><strong>Ctrl+A</strong> — выделить все объекты</li><li><strong>Alt+Shift+↑/↓</strong> — изменить уровень маркера</li><li><strong>Ctrl+Shift+C / V</strong> — копировать / вставить форматирование</li></ul>"
  },
  {
    "category": "Горячие клавиши",
    "question": "Горячие клавиши для Mac",
    "answer": "<ul><li><strong>⌘+D</strong> — дублировать объект / слайд</li><li><strong>⌘+⌥+G</strong> — сгруппировать объекты</li><li><strong>⌘+⌥+Shift+G</strong> — разгруппировать</li><li><strong>⌘+Shift+N</strong> — новый слайд</li><li><strong>⌘+Z</strong> — отмена действия</li><li><strong>⌘+Y</strong> — повторить действие</li><li><strong>⌘+] / ⌘+[</strong> — увеличить / уменьшить шрифт</li><li><strong>⌘+B / I / U</strong> — жирный / курсив / подчёркивание</li><li><strong>⌥+перетаскивание</strong> — дублировать объект с перемещением</li><li><strong>⌘+Shift+Return</strong> — показ с начала</li><li><strong>⌘+Return</strong> — показ с текущего слайда</li><li><strong>Esc</strong> — выход из режима показа</li><li><strong>B / W</strong> — чёрный / белый экран во время показа</li><li><strong>Page Up / Page Down</strong> — переход между слайдами</li><li><strong>Fn+← / Fn+→</strong> — первый / последний слайд</li><li><strong>Tab</strong> — выбор следующего объекта на слайде</li><li><strong>⌘+A</strong> — выделить все объекты</li><li><strong>⌥+Shift+↑/↓</strong> — изменить уровень маркера</li><li><strong>⌘+Shift+C / V</strong> — копировать / вставить форматирование</li></ul>"
  },
  {
    "category": "Экспорт и совместимость",
    "question": "PPTX или PDF — когда что использовать?",
    "answer": "<strong>PPTX</strong> — для демонстрации с анимациями, редактирования, передачи заказчику. <strong>PDF</strong> — для финальной версии без права редактирования, гарантированного сохранения шрифтов и вёрстки. PDF предпочтительнее при отправке в типографию или публикации в открытом доступе."
  },
  {
    "category": "Экспорт и совместимость",
    "question": "Как сохранить в PDF без потери качества?",
    "answer": "<strong>Файл → «Сохранить как» → PDF → «Параметры»</strong> → убедитесь, что выбрано «Высокое качество печати» (не «Минимальный размер файла»). Флажок «PDF/A» повысит совместимость. Избегайте экспорта через «Печать» — качество изображений при этом снижается."
  },
  {
    "category": "Экспорт и совместимость",
    "question": "Как уменьшить размер файла?",
    "answer": "Сожмите изображения (<strong>Формат рисунка → Сжать рисунки, 150 ppi</strong>, удалить обрезанные области). Встройте только используемые символы шрифтов. Удалите скрытые слайды и ненужные мастера в Slide Master. Уберите встроенное аудио/видео и замените ссылками."
  },
  {
    "category": "Экспорт и совместимость",
    "question": "Как сохранить слайд как картинку (PNG)?",
    "answer": "<strong>Файл → «Сохранить как» → PNG или JPEG</strong> → PowerPoint спросит, экспортировать один слайд или все. Разрешение по умолчанию — 96 dpi (1280×720 px). Для повышения: на Windows — параметр ExportBitmapResolution в реестре; на Mac: <strong>Файл → «Экспортировать» → PNG</strong> с настройкой разрешения."
  }
];

/* === DOM Elements === */
const searchInput = document.getElementById('search');
const searchClear = document.getElementById('search-clear');
const contentEl = document.getElementById('content');
const noResults = document.getElementById('no-results');
const categoryNav = document.getElementById('category-nav');
const header = document.querySelector('.header');
const searchWrap = document.querySelector('.search-wrap');
const headerSearchBtn = document.getElementById('header-search-btn');

let activeCategory = null;

/* === Sticky Header on Scroll === */
function updateHeader() {
  // Find the visible hero to determine pin point
  const visibleHero = mainHero.style.display !== 'none' ? mainHero :
    (checklistHero && checklistHero.style.display !== 'none' ? checklistHero :
    (fontsHero && fontsHero.style.display !== 'none' ? fontsHero : null));
  if (visibleHero) {
    const heroBottom = visibleHero.getBoundingClientRect().bottom;
    header.classList.toggle('pinned', heroBottom < 56);
  }
}

window.addEventListener('scroll', updateHeader, { passive: true });

/* === Header Search Button === */
headerSearchBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  setTimeout(() => searchInput.focus(), 400);
});

/* === Render === */
function render(filter = '', category = null) {
  const query = filter.toLowerCase().trim();
  let totalVisible = 0;

  // Group by category
  const categories = {};
  faqData.forEach((item) => {
    if (!categories[item.category]) categories[item.category] = [];
    categories[item.category].push(item);
  });

  contentEl.innerHTML = '';

  Object.entries(categories).forEach(([catName, items]) => {
    if (category && catName !== category) return;

    const filtered = items.filter((item) => {
      if (!query) return true;
      return (
        item.question.toLowerCase().includes(query) ||
        item.answer.toLowerCase().includes(query)
      );
    });

    if (filtered.length === 0) return;
    totalVisible += filtered.length;

    const section = document.createElement('div');
    section.className = 'category-section';
    section.innerHTML = `<h2 class="category-title">${catName}</h2>`;

    filtered.forEach((item) => {
      const el = document.createElement('div');
      el.className = 'accordion-item';
      el.innerHTML = `
        <button class="accordion-header" aria-expanded="false">
          <span>${item.question}</span>
          <svg class="accordion-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
        </button>
        <div class="accordion-body">
          <div class="accordion-content">${item.answer}</div>
        </div>
      `;
      section.appendChild(el);
    });

    contentEl.appendChild(section);
  });

  noResults.classList.toggle('visible', totalVisible === 0);
}

/* === Accordion Toggle === */
contentEl.addEventListener('click', (e) => {
  const header = e.target.closest('.accordion-header');
  if (!header) return;

  const item = header.parentElement;
  const body = item.querySelector('.accordion-body');
  const isOpen = item.classList.contains('open');

  if (isOpen) {
    body.style.maxHeight = '0';
    item.classList.remove('open');
    header.setAttribute('aria-expanded', 'false');
  } else {
    body.style.maxHeight = body.scrollHeight + 'px';
    item.classList.add('open');
    header.setAttribute('aria-expanded', 'true');
  }
});

/* === Search === */
let searchTimeout;
searchInput.addEventListener('input', () => {
  clearTimeout(searchTimeout);
  const val = searchInput.value;
  searchClear.classList.toggle('visible', val.length > 0);
  searchTimeout = setTimeout(() => render(val, activeCategory), 200);
});

searchClear.addEventListener('click', () => {
  searchInput.value = '';
  searchClear.classList.remove('visible');
  render('', activeCategory);
  searchInput.focus();
});

/* === Sidebar Menu === */
const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');
const sidebarClose = document.getElementById('sidebar-close');
const sidebarLinks = document.getElementById('sidebar-links');
const menuOverlay = document.getElementById('menu-overlay');

function openSidebar() {
  sidebar.classList.add('open');
  menuOverlay.classList.add('visible');
  document.body.style.overflow = 'hidden';
}

function closeSidebar() {
  sidebar.classList.remove('open');
  menuOverlay.classList.remove('visible');
  document.body.style.overflow = '';
}

menuToggle.addEventListener('click', openSidebar);
sidebarClose.addEventListener('click', closeSidebar);
menuOverlay.addEventListener('click', closeSidebar);

function renderSidebarLinks() {
  const cats = [...new Set(faqData.map((i) => i.category))];
  sidebarLinks.innerHTML = '';

  const allLink = document.createElement('button');
  allLink.className = 'sidebar-link active';
  allLink.textContent = 'Все разделы';
  allLink.addEventListener('click', () => { setCategory(null); closeSidebar(); });
  sidebarLinks.appendChild(allLink);

  cats.forEach((cat) => {
    const link = document.createElement('button');
    link.className = 'sidebar-link';
    link.textContent = cat;
    link.addEventListener('click', () => { setCategory(cat); closeSidebar(); });
    sidebarLinks.appendChild(link);
  });

  // Divider + contacts link
  const divider = document.createElement('div');
  divider.className = 'sidebar-divider';
  sidebarLinks.appendChild(divider);

  const contactLink = document.createElement('a');
  contactLink.className = 'sidebar-link';
  contactLink.href = '#contacts';
  contactLink.textContent = 'Контакты';
  contactLink.addEventListener('click', () => closeSidebar());
  sidebarLinks.appendChild(contactLink);

  // Share button in sidebar
  const shareWrap = document.createElement('div');
  shareWrap.className = 'sidebar-share';
  const sidebarShareBtn = document.createElement('button');
  sidebarShareBtn.className = 'share-btn';
  sidebarShareBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg> Поделиться';
  sidebarShareBtn.addEventListener('click', () => { closeSidebar(); shareApp(); });
  shareWrap.appendChild(sidebarShareBtn);
  sidebarLinks.appendChild(shareWrap);
}

function setCategory(cat) {
  activeCategory = cat;
  document.querySelectorAll('.sidebar-link').forEach((link, i) => {
    if (cat === null && i === 0) link.classList.add('active');
    else if (link.textContent === cat) link.classList.add('active');
    else link.classList.remove('active');
  });
  render(searchInput.value, cat);
}

/* === Keep old chips rendering for compatibility === */
function renderCategoryChips() {
  // No-op, using sidebar now
}

/* === PWA Install === */
let deferredPrompt;
const installBanner = document.getElementById('install-banner');
const installBtn = document.getElementById('install-btn');
const installHint = document.getElementById('install-hint');
const installHintClose = document.getElementById('install-hint-close');

// Android: native install prompt
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  installBanner.classList.add('visible');
});

if (installBtn) {
  installBtn.addEventListener('click', async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      installBanner.classList.remove('visible');
    }
    deferredPrompt = null;
  });
}

window.addEventListener('appinstalled', () => {
  installBanner.classList.remove('visible');
});

// iOS: show hint if not already installed as PWA
const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
const isStandalone = window.navigator.standalone === true;
if (isIOS && !isStandalone && !localStorage.getItem('install-hint-dismissed')) {
  installHint.classList.add('visible');
}

if (installHintClose) {
  installHintClose.addEventListener('click', () => {
    installHint.classList.remove('visible');
    localStorage.setItem('install-hint-dismissed', '1');
  });
}

/* === Share === */
const shareBtn = document.getElementById('share-btn');
function shareApp() {
  const shareData = { title: 'Презентации — База знаний', url: window.location.href };
  if (navigator.share) {
    navigator.share(shareData).catch(() => {});
  } else {
    navigator.clipboard.writeText(window.location.href).then(() => {
      shareBtn.textContent = 'Ссылка скопирована!';
      setTimeout(() => { shareBtn.textContent = 'Поделиться'; }, 2000);
    });
  }
}
if (shareBtn) shareBtn.addEventListener('click', shareApp);

/* === Service Worker & Version === */
const versionLabel = document.getElementById('app-version');
const updateBtn = document.getElementById('update-btn');
const updateToast = document.getElementById('update-toast');

if (versionLabel) versionLabel.textContent = 'v' + APP_VERSION;

let swRegistration = null;

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js').then(reg => {
    swRegistration = reg;
  });

  navigator.serviceWorker.addEventListener('controllerchange', () => {
    showToast('Приложение обновлено');
  });
}

function showToast(msg) {
  if (!updateToast) return;
  updateToast.textContent = msg;
  updateToast.classList.add('visible');
  setTimeout(() => updateToast.classList.remove('visible'), 3000);
}

if (updateBtn) {
  updateBtn.addEventListener('click', () => {
    if (!swRegistration) {
      showToast('Вы используете актуальную версию приложения');
      return;
    }
    updateBtn.disabled = true;

    // already waiting from a previous update
    if (swRegistration.waiting) {
      swRegistration.waiting.postMessage({ type: 'SKIP_WAITING' });
      return;
    }

    // listen for new SW BEFORE triggering update to avoid race condition
    const timeout = setTimeout(() => {
      showToast('Вы используете актуальную версию приложения');
      updateBtn.disabled = false;
    }, 5000);

    swRegistration.addEventListener('updatefound', () => {
      clearTimeout(timeout);
      const newWorker = swRegistration.installing;
      if (!newWorker) return;
      newWorker.addEventListener('statechange', () => {
        if (newWorker.state === 'installed') {
          newWorker.postMessage({ type: 'SKIP_WAITING' });
        }
      });
    }, { once: true });

    swRegistration.update().catch(() => {
      clearTimeout(timeout);
      showToast('Вы используете актуальную версию приложения');
      updateBtn.disabled = false;
    });
  });
}

/* === Lightbox for images === */
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

contentEl.addEventListener('click', (e) => {
  if (e.target.tagName === 'IMG' && e.target.closest('.accordion-content')) {
    lightboxImg.src = e.target.src;
    lightboxImg.alt = e.target.alt;
    lightbox.classList.add('visible');
  }
});

lightbox.addEventListener('click', () => {
  lightbox.classList.remove('visible');
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && lightbox.classList.contains('visible')) {
    lightbox.classList.remove('visible');
  }
});

/* === Tab Bar Navigation === */
const tabBar = document.getElementById('tab-bar');
const tabItems = tabBar.querySelectorAll('.tab-bar-item');
const tabPanels = document.querySelectorAll('.tab-panel');
const mainHero = document.querySelector('.header + .hero');
const checklistHero = document.getElementById('hero-checklist');
const fontsHero = document.getElementById('hero-fonts');
const palettesHero = document.getElementById('hero-palettes');

function switchTab(tabId) {
  // Update tab bar
  tabItems.forEach(item => {
    item.classList.toggle('active', item.dataset.tab === tabId);
  });

  // Update panels
  tabPanels.forEach(panel => {
    panel.classList.toggle('active', panel.id === 'tab-' + tabId);
  });

  // Show/hide hero and burger depending on tab
  const isFaq = tabId === 'faq';
  const hasHero = tabId === 'faq' || tabId === 'checklist' || tabId === 'fonts' || tabId === 'inspiration';
  mainHero.style.display = isFaq ? '' : 'none';
  menuToggle.style.visibility = isFaq ? '' : 'hidden';
  headerSearchBtn.style.display = 'none';

  // Tab-specific heroes
  if (checklistHero) checklistHero.style.display = tabId === 'checklist' ? '' : 'none';
  if (fontsHero) fontsHero.style.display = tabId === 'fonts' ? '' : 'none';
  if (palettesHero) palettesHero.style.display = tabId === 'inspiration' ? '' : 'none';

  if (hasHero) {
    header.classList.remove('pinned');
    updateHeader();
  } else {
    header.classList.add('pinned');
  }

  // Scroll to top
  window.scrollTo({ top: 0 });
}

tabBar.addEventListener('click', (e) => {
  const item = e.target.closest('.tab-bar-item');
  if (!item) return;
  switchTab(item.dataset.tab);
});

/* === Checklist === */
const checklistEl = document.getElementById('checklist');
const checklistCounter = document.getElementById('checklist-counter');
const checklistClearBtn = document.getElementById('checklist-clear');
const CHECKLIST_KEY = 'checklist-state';

function loadChecklist() {
  const saved = JSON.parse(localStorage.getItem(CHECKLIST_KEY) || '[]');
  const checkboxes = checklistEl.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach(cb => {
    const idx = parseInt(cb.dataset.index);
    if (saved.includes(idx)) {
      cb.checked = true;
      cb.closest('.checklist-item').classList.add('checked');
    }
  });
  updateChecklistCounter();
}

function saveChecklist() {
  const checked = [];
  checklistEl.querySelectorAll('input[type="checkbox"]:checked').forEach(cb => {
    checked.push(parseInt(cb.dataset.index));
  });
  localStorage.setItem(CHECKLIST_KEY, JSON.stringify(checked));
  updateChecklistCounter();
}

function updateChecklistCounter() {
  const total = checklistEl.querySelectorAll('input[type="checkbox"]').length;
  const checked = checklistEl.querySelectorAll('input[type="checkbox"]:checked').length;
  checklistCounter.textContent = checked + ' из ' + total;
}

checklistEl.addEventListener('change', (e) => {
  if (e.target.type === 'checkbox') {
    e.target.closest('.checklist-item').classList.toggle('checked', e.target.checked);
    saveChecklist();
  }
});

checklistClearBtn.addEventListener('click', () => {
  checklistEl.querySelectorAll('input[type="checkbox"]').forEach(cb => {
    cb.checked = false;
    cb.closest('.checklist-item').classList.remove('checked');
  });
  localStorage.removeItem(CHECKLIST_KEY);
  updateChecklistCounter();
});

loadChecklist();

/* === Font Pairs === */
const fontPairsData = [
  {
    category: 'Классика',
    description: 'Serif + Sans-serif\u00a0— проверенные временем сочетания',
    pairs: [
      { heading: 'Playfair Display', body: 'Source Sans 3', style: 'Элегантный контраст\u00a0— идеально для\u00a0корпоративных и\u00a0брендовых презентаций' },
      { heading: 'Merriweather', body: 'Open Sans', style: 'Тёплое и\u00a0читаемое сочетание\u00a0— отлично для\u00a0образовательных материалов' },
      { heading: 'Lora', body: 'Inter', style: 'Утончённый и\u00a0современный\u00a0— хорош для\u00a0аналитических отчётов' },
      { heading: 'PT Serif', body: 'PT Sans', style: 'Одно семейство\u00a0— гарантированная гармония, отличная кириллица' },
      { heading: 'Playfair Display', body: 'Playfair Display SC', style: 'Заголовок + капитель\u00a0— изысканное единообразие для\u00a0премиальных материалов' },
      { heading: 'Unica One', body: 'Vollkorn', style: 'Сжатый декоративный + классическая антиква\u00a0— для\u00a0афиш и\u00a0обложек' }
    ]
  },
  {
    category: 'Современные',
    description: 'Sans + Sans\u00a0— чистый и\u00a0минималистичный стиль',
    pairs: [
      { heading: 'Montserrat', body: 'Open Sans', style: 'Универсальная пара\u00a0— подходит для\u00a0любых задач' },
      { heading: 'Raleway', body: 'Lato', style: 'Лёгкий и\u00a0воздушный\u00a0— отлично для\u00a0стартапов и\u00a0digital-проектов' },
      { heading: 'Manrope', body: 'Inter', style: 'Геометричный и\u00a0строгий\u00a0— для\u00a0технологичных и\u00a0IT-презентаций' },
      { heading: 'Nunito', body: 'Work Sans', style: 'Мягкий и\u00a0дружелюбный\u00a0— для\u00a0неформальных и\u00a0HR-презентаций' },
      { heading: 'Merriweather Sans', body: 'Merriweather', style: 'Одно семейство\u00a0— sans для\u00a0заголовков, serif для\u00a0текста, идеальная гармония' },
      { heading: 'Oswald', body: 'Playfair Display', style: 'Сжатый гротеск + элегантная антиква\u00a0— сильный визуальный контраст' }
    ]
  },
  {
    category: 'Выразительные',
    description: 'Яркие пары для\u00a0креативных проектов',
    pairs: [
      { heading: 'Space Grotesk', body: 'DM Sans', style: 'Футуристичный\u00a0— для\u00a0инноваций, технологий, продуктовых презентаций' },
      { heading: 'Comfortaa', body: 'Open Sans', style: 'Округлый и\u00a0дружелюбный\u00a0— для\u00a0детских, lifestyle и\u00a0wellness-проектов' },
      { heading: 'Yeseva One', body: 'Merriweather Sans', style: 'Декоративный serif + чистый sans\u00a0— для\u00a0ярких заголовков и\u00a0событий' },
      { heading: 'Philosopher', body: 'Mulish', style: 'Характерный + нейтральный\u00a0— для\u00a0культурных и\u00a0образовательных проектов' }
    ]
  }
];

function renderFontPairs() {
  const container = document.getElementById('font-pairs-content');
  if (!container) return;
  container.innerHTML = '';

  // Info banner
  const info = document.createElement('div');
  info.className = 'font-info';
  info.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg><p>Нажмите «Поделиться», чтобы отправить ссылку на&nbsp;скачивание шрифтов себе на&nbsp;почту</p>';
  container.appendChild(info);

  fontPairsData.forEach(group => {
    const section = document.createElement('div');
    section.className = 'font-section';
    section.innerHTML = `<h2 class="category-title">${group.category}</h2><p class="font-section-desc">${group.description}</p>`;

    group.pairs.forEach(pair => {
      const headingFamily = pair.heading.replace(/ /g, '+');
      const bodyFamily = pair.body.replace(/ /g, '+');
      const fontsUrl = 'https://fonts.google.com/share?selection.family=' + headingFamily + '|' + bodyFamily;
      const shareText = pair.heading + ' + ' + pair.body + '\n' + fontsUrl;

      const card = document.createElement('div');
      card.className = 'font-card';
      card.innerHTML =
        '<div class="font-card-preview">' +
          '<p class="font-card-heading" style="font-family:\'' + pair.heading + '\',serif">Создавайте презентации с\u00a0уверенностью</p>' +
          '<p class="font-card-body" style="font-family:\'' + pair.body + '\',sans-serif">Хорошая типографика\u00a0— основа любой презентации. Правильно подобранные шрифты делают слайды читаемыми и\u00a0профессиональными.</p>' +
        '</div>' +
        '<div class="font-card-info">' +
          '<div class="font-card-names">' +
            '<span class="font-card-label">Заголовок</span> <strong>' + pair.heading + '</strong>' +
            '<span class="font-card-separator">+</span>' +
            '<span class="font-card-label">Текст</span> <strong>' + pair.body + '</strong>' +
          '</div>' +
          '<p class="font-card-style">' + pair.style + '</p>' +
          '<div class="font-card-actions">' +
            '<a href="' + fontsUrl + '" target="_blank" rel="noopener" class="font-card-link">Открыть в Google Fonts</a>' +
            '<button class="font-card-share" data-text="' + shareText.replace(/"/g, '&quot;') + '">Поделиться</button>' +
          '</div>' +
        '</div>';
      section.appendChild(card);
    });

    container.appendChild(section);
  });

  // Share buttons
  container.addEventListener('click', (e) => {
    const btn = e.target.closest('.font-card-share');
    if (!btn) return;
    const text = btn.dataset.text;
    if (navigator.share) {
      navigator.share({ title: 'Шрифтовая пара', text: text }).catch(() => {});
    } else {
      navigator.clipboard.writeText(text).then(() => {
        btn.textContent = 'Скопировано!';
        setTimeout(() => { btn.textContent = 'Поделиться'; }, 2000);
      });
    }
  });
}

renderFontPairs();

/* === Palettes & Gradients === */
function hexToRgb(hex) {
  const n = parseInt(hex.replace('#', ''), 16);
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
}

function rgbToHex(r, g, b) {
  return '#' + [r, g, b].map(v => Math.round(v).toString(16).padStart(2, '0')).join('');
}

function rgbToHsl(r, g, b) {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  const l = (max + min) / 2;
  if (max === min) return { h: 0, s: 0, l: l * 100 };
  const d = max - min;
  const s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
  let h;
  if (max === r) h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
  else if (max === g) h = ((b - r) / d + 2) / 6;
  else h = ((r - g) / d + 4) / 6;
  return { h: h * 360, s: s * 100, l: l * 100 };
}

function hslToRgb(h, s, l) {
  h /= 360; s /= 100; l /= 100;
  if (s === 0) { const v = Math.round(l * 255); return { r: v, g: v, b: v }; }
  const hue2rgb = (p, q, t) => {
    if (t < 0) t += 1; if (t > 1) t -= 1;
    if (t < 1/6) return p + (q - p) * 6 * t;
    if (t < 1/2) return q;
    if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
    return p;
  };
  const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q;
  return {
    r: Math.round(hue2rgb(p, q, h + 1/3) * 255),
    g: Math.round(hue2rgb(p, q, h) * 255),
    b: Math.round(hue2rgb(p, q, h - 1/3) * 255)
  };
}

function hexToHsl(hex) { const {r, g, b} = hexToRgb(hex); return rgbToHsl(r, g, b); }
function hslToHex(h, s, l) { const {r, g, b} = hslToRgb(h, s, l); return rgbToHex(r, g, b); }

function clamp(v, min, max) { return Math.max(min, Math.min(max, v)); }
function normHue(h) { return ((h % 360) + 360) % 360; }
function randRange(a, b) { return a + Math.random() * (b - a); }

function luminance(hex) {
  const {r, g, b} = hexToRgb(hex);
  const [rs, gs, bs] = [r, g, b].map(v => {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

/* Harmony strategies */
function analogous(h, s, l) {
  return [
    { h, s, l },
    { h: normHue(h + 30 + randRange(-5, 5)), s: clamp(s + randRange(-10, 10), 30, 95), l: clamp(l + randRange(-8, 8), 25, 75) },
    { h: normHue(h + 60 + randRange(-5, 5)), s: clamp(s + randRange(-10, 10), 30, 95), l: clamp(l + randRange(-8, 8), 25, 75) },
    { h: normHue(h - 30 + randRange(-5, 5)), s: clamp(s + randRange(-10, 10), 30, 95), l: clamp(l + randRange(-8, 8), 25, 75) },
    { h: normHue(h - 60 + randRange(-5, 5)), s: clamp(s + randRange(-10, 10), 30, 95), l: clamp(l + randRange(-8, 8), 25, 75) }
  ];
}

function complementary(h, s, l) {
  return [
    { h, s, l },
    { h: normHue(h + 180), s: clamp(s + randRange(-10, 10), 30, 95), l: clamp(l + randRange(-10, 10), 25, 75) },
    { h: normHue(h + randRange(20, 40)), s: clamp(s + randRange(-15, 5), 30, 95), l: clamp(l + randRange(-15, 15), 25, 75) },
    { h: normHue(h + 180 + randRange(-30, -10)), s: clamp(s + randRange(-10, 10), 30, 95), l: clamp(l + randRange(-10, 15), 25, 75) },
    { h: normHue(h + randRange(-15, 15)), s: clamp(s - 15, 20, 90), l: clamp(l + 20, 30, 85) }
  ];
}

function triadic(h, s, l) {
  return [
    { h, s, l },
    { h: normHue(h + 120), s: clamp(s + randRange(-10, 10), 30, 95), l: clamp(l + randRange(-8, 8), 25, 75) },
    { h: normHue(h + 240), s: clamp(s + randRange(-10, 10), 30, 95), l: clamp(l + randRange(-8, 8), 25, 75) },
    { h: normHue(h + 60), s: clamp(s - 10, 25, 85), l: clamp(l + 15, 30, 80) },
    { h: normHue(h + 300), s: clamp(s - 10, 25, 85), l: clamp(l - 10, 25, 70) }
  ];
}

function splitComp(h, s, l) {
  return [
    { h, s, l },
    { h: normHue(h + 150), s: clamp(s + randRange(-10, 10), 30, 95), l: clamp(l + randRange(-8, 8), 25, 75) },
    { h: normHue(h + 210), s: clamp(s + randRange(-10, 10), 30, 95), l: clamp(l + randRange(-8, 8), 25, 75) },
    { h: normHue(h + 30), s: clamp(s - 10, 25, 85), l: clamp(l + 12, 30, 80) },
    { h: normHue(h - 30), s: clamp(s - 10, 25, 85), l: clamp(l - 10, 25, 70) }
  ];
}

function shades(h, s, l) {
  return [
    { h, s: clamp(s + 5, 30, 95), l: clamp(l - 20, 15, 45) },
    { h, s: clamp(s + 3, 30, 95), l: clamp(l - 10, 20, 55) },
    { h, s, l },
    { h, s: clamp(s - 5, 20, 90), l: clamp(l + 12, 45, 80) },
    { h, s: clamp(s - 10, 15, 85), l: clamp(l + 25, 60, 90) }
  ];
}

const HARMONY_STRATEGIES = [analogous, complementary, triadic, splitComp];

function generatePalette(seedHex, mode) {
  let h, s, l;
  if (seedHex) {
    ({h, s, l} = hexToHsl(seedHex));
    if (s < 5) { s = 50; h = Math.random() * 360; }
  } else {
    h = Math.random() * 360;
    s = randRange(45, 80);
    l = randRange(40, 60);
  }
  let hslColors;
  if (mode === 'shades') {
    hslColors = shades(h, s, l);
  } else {
    const strategy = HARMONY_STRATEGIES[Math.floor(Math.random() * HARMONY_STRATEGIES.length)];
    hslColors = strategy(h, s, l);
  }
  return hslColors.map(c => hslToHex(c.h, c.s, c.l));
}

let currentPalette = [];
let currentPalMode = 'auto';

function renderPalette(colors) {
  currentPalette = colors;
  const container = document.getElementById('pal-display');
  container.innerHTML = '';
  colors.forEach(hex => {
    const swatch = document.createElement('div');
    swatch.className = 'pal-swatch';
    swatch.style.backgroundColor = hex;
    const lum = luminance(hex);
    const textColor = lum > 0.4 ? '#273043' : '#ffffff';

    const label = document.createElement('span');
    label.className = 'pal-swatch-hex';
    label.style.color = textColor;
    label.textContent = hex.toUpperCase();

    const hint = document.createElement('span');
    hint.className = 'pal-swatch-hint';
    hint.style.color = textColor;
    hint.textContent = 'Копировать';

    swatch.appendChild(label);
    swatch.appendChild(hint);
    swatch.addEventListener('click', () => {
      navigator.clipboard.writeText(hex.toUpperCase()).then(() => {
        hint.textContent = 'Скопировано!';
        setTimeout(() => { hint.textContent = 'Копировать'; }, 1500);
      });
    });
    container.appendChild(swatch);
  });
}

function getPalSeedColor() {
  const input = document.getElementById('pal-seed-input');
  let val = (input.value || '').trim();
  if (val && !val.startsWith('#')) val = '#' + val;
  if (/^#[0-9a-fA-F]{6}$/.test(val)) return val;
  return null;
}

// Sub-tab switching
document.getElementById('pal-tabs').addEventListener('click', (e) => {
  const tab = e.target.closest('.pal-tab');
  if (!tab) return;
  document.querySelectorAll('.pal-tab').forEach(t => t.classList.remove('active'));
  tab.classList.add('active');
  document.querySelectorAll('.pal-subtab').forEach(p => p.classList.remove('active'));
  document.getElementById('subtab-' + tab.dataset.subtab).classList.add('active');
});

// Mode segmented control
document.getElementById('pal-mode-seg').addEventListener('click', (e) => {
  const item = e.target.closest('.pal-seg-item');
  if (!item) return;
  document.querySelectorAll('.pal-seg-item').forEach(c => c.classList.remove('active'));
  item.classList.add('active');
  currentPalMode = item.dataset.mode;
});

// Generate button
document.getElementById('pal-generate-btn').addEventListener('click', () => {
  const seed = getPalSeedColor();
  renderPalette(generatePalette(seed, currentPalMode));
});

// Sync color picker <-> text input (palette)
function activatePickerWrap(picker) {
  picker.closest('.pal-color-picker-wrap').classList.add('has-color');
}
document.getElementById('pal-color-picker').addEventListener('input', (e) => {
  activatePickerWrap(e.target);
  document.getElementById('pal-seed-input').value = e.target.value;
});
document.getElementById('pal-seed-input').addEventListener('input', (e) => {
  let val = e.target.value.trim();
  if (val && !val.startsWith('#')) val = '#' + val;
  if (/^#[0-9a-fA-F]{6}$/.test(val)) {
    const picker = document.getElementById('pal-color-picker');
    picker.value = val;
    activatePickerWrap(picker);
  }
});

// Copy all hex
document.getElementById('pal-copy-btn').addEventListener('click', () => {
  const text = currentPalette.map(c => c.toUpperCase()).join(', ');
  navigator.clipboard.writeText(text).then(() => showToast('Палитра скопирована'));
});

// Share palette (canvas image + Web Share API)
function generatePaletteImage(colors) {
  const canvas = document.createElement('canvas');
  const w = 1200, h = 630;
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext('2d');
  const swatchH = (h - 70) / colors.length;
  colors.forEach((hex, i) => {
    ctx.fillStyle = hex;
    ctx.fillRect(0, i * swatchH, w, swatchH);
    const lum = luminance(hex);
    ctx.fillStyle = lum > 0.4 ? 'rgba(39,48,67,0.8)' : 'rgba(255,255,255,0.9)';
    ctx.font = '600 28px sans-serif';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';
    ctx.fillText(hex.toUpperCase(), 40, i * swatchH + swatchH / 2);
  });
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, h - 70, w, 70);
  ctx.fillStyle = '#5a6478';
  ctx.font = '500 22px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText(colors.map(c => c.toUpperCase()).join('  ·  '), w / 2, h - 30);
  return canvas;
}

document.getElementById('pal-share-btn').addEventListener('click', () => {
  const canvas = generatePaletteImage(currentPalette);
  const text = currentPalette.map(c => c.toUpperCase()).join(', ');

  canvas.toBlob(async (blob) => {
    if (navigator.share && navigator.canShare) {
      const file = new File([blob], 'palette.png', { type: 'image/png' });
      const shareData = { text: text, files: [file] };
      if (navigator.canShare(shareData)) {
        try { await navigator.share(shareData); } catch(e) {}
        return;
      }
    }
    if (navigator.share) {
      try { await navigator.share({ text: text }); } catch(e) {}
    } else {
      navigator.clipboard.writeText(text).then(() => showToast('Палитра скопирована'));
    }
  }, 'image/png');
});

/* Gradient generator */
function generateGradient(seedHex) {
  const {h, s, l} = hexToHsl(seedHex);
  const numStops = Math.random() > 0.4 ? 3 : 2;
  const stops = [seedHex];
  for (let i = 1; i < numStops; i++) {
    const newH = normHue(h + randRange(25, 60) * (Math.random() > 0.5 ? 1 : -1));
    const newS = clamp(s + randRange(-15, 15), 25, 95);
    const newL = clamp(l + randRange(-20, 20), 25, 75);
    stops.push(hslToHex(newH, newS, newL));
  }
  return stops;
}

let currentGradStops = [];

function renderGradient(stops) {
  currentGradStops = stops;
  const css = 'linear-gradient(to right, ' + stops.join(', ') + ')';
  document.getElementById('grad-preview').style.background = css;

  const markers = document.getElementById('grad-markers');
  markers.innerHTML = '';
  stops.forEach(hex => {
    const marker = document.createElement('div');
    marker.className = 'grad-marker';
    const dot = document.createElement('div');
    dot.className = 'grad-marker-dot';
    dot.style.backgroundColor = hex;
    const label = document.createElement('span');
    label.className = 'grad-marker-hex';
    label.textContent = hex.toUpperCase();
    marker.appendChild(dot);
    marker.appendChild(label);
    marker.addEventListener('click', () => {
      navigator.clipboard.writeText(hex.toUpperCase()).then(() => {
        label.textContent = 'Скопировано!';
        setTimeout(() => { label.textContent = hex.toUpperCase(); }, 1500);
      });
    });
    markers.appendChild(marker);
  });
}

function getGradSeedColor() {
  const input = document.getElementById('grad-seed-input');
  let val = (input.value || '').trim();
  if (val && !val.startsWith('#')) val = '#' + val;
  if (/^#[0-9a-fA-F]{6}$/.test(val)) return val;
  return document.getElementById('grad-color-picker').value;
}

document.getElementById('grad-generate-btn').addEventListener('click', () => {
  renderGradient(generateGradient(getGradSeedColor()));
});


document.getElementById('grad-color-picker').addEventListener('input', (e) => {
  activatePickerWrap(e.target);
  document.getElementById('grad-seed-input').value = e.target.value;
});
document.getElementById('grad-seed-input').addEventListener('input', (e) => {
  let val = e.target.value.trim();
  if (val && !val.startsWith('#')) val = '#' + val;
  if (/^#[0-9a-fA-F]{6}$/.test(val)) {
    const picker = document.getElementById('grad-color-picker');
    picker.value = val;
    activatePickerWrap(picker);
  }
});

document.getElementById('grad-copy-btn').addEventListener('click', () => {
  const text = currentGradStops.map(c => c.toUpperCase()).join(', ');
  navigator.clipboard.writeText(text).then(() => showToast('Цвета скопированы'));
});

// Initial palette & gradient
renderPalette(generatePalette(null, 'auto'));
renderGradient(generateGradient('#a674fe'));

/* === Init === */
if (checklistHero) checklistHero.style.display = 'none';
if (fontsHero) fontsHero.style.display = 'none';
if (palettesHero) palettesHero.style.display = 'none';
renderSidebarLinks();
render();
