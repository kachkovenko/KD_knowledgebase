/* === FAQ Data === */
const faqData = [
  {
    "category": "Шрифты",
    "question": "Какие шрифты безопасны и не слетят на другом компьютере?",
    "answer": "Безопасные системные шрифты: <strong>Arial, Calibri, Times New Roman, Georgia, Verdana, Trebuchet MS, Tahoma</strong> — они установлены на большинстве компьютеров с Windows и macOS. Для корпоративных презентаций лучше использовать именно их, если нет возможности встроить шрифт. Шрифты Google Fonts (например, Roboto, Open Sans, Lato) тоже широко распространены, но их нужно встраивать или устанавливать заранее."
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
    "answer": "Классическое правило: один шрифт с засечками (serif) для заголовков, один без засечек (sans-serif) для основного текста — или оба без засечек с разным начертанием (Bold/Regular). Удобные инструменты подбора: <strong>fontpair.co</strong>, Google Fonts (фильтр «Popular pairings»). Избегайте больше двух шрифтов в одной презентации."
  },
  {
    "category": "Шрифты",
    "question": "Какой минимальный размер шрифта читаем на экране / проекторе?",
    "answer": "Минимальный читаемый размер для основного текста — <strong>18–20 pt</strong>, для заголовков — <strong>28–36 pt</strong> и крупнее. На проекторе в большом зале размер нужно увеличивать: текст 14–16 pt с задних рядов практически не читается. Ориентир: если текст выглядит слишком крупным на мониторе, на проекторе он будет как раз."
  },
  {
    "category": "Цвета",
    "question": "Как подобрать цветовую палитру?",
    "answer": "Используйте сервисы <strong>coolors.co</strong>, <strong>color.adobe.com</strong> или <strong>paletton.com</strong> — они генерируют гармоничные палитры на основе теории цвета. Базовый принцип: 1 основной цвет бренда, 1 акцентный, 2–3 нейтральных (оттенки серого, белый, бежевый). Также можно извлечь палитру из референсного изображения через Adobe Color."
  },
  {
    "category": "Цвета",
    "question": "Сколько цветов использовать в презентации?",
    "answer": "Оптимально <strong>3–5 цветов</strong>: 1–2 основных, 1 акцентный и 1–2 нейтральных. Большее количество цветов создаёт визуальный шум. Правило <strong>«60–30–10»</strong>: 60% — доминирующий цвет (фон), 30% — вторичный, 10% — акцент."
  },
  {
    "category": "Цвета",
    "question": "Как проверить контраст текста и фона?",
    "answer": "Используйте онлайн-инструмент <strong>WebAIM Contrast Checker</strong> (webaim.org/resources/contrastchecker). Стандарт WCAG AA требует соотношение контраста не менее 4.5:1 для обычного текста и 3:1 для крупного. Тёмный текст на светлом фоне или светлый на тёмном — самые безопасные сочетания."
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
    "answer": "Лучшие бесплатные стоки: <strong>Unsplash</strong> (unsplash.com), <strong>Pexels</strong> (pexels.com), <strong>Pixabay</strong> (pixabay.com) — все предоставляют фото высокого разрешения без обязательного указания авторства. Для иллюстраций — Freepik и StockSnap.io. Всегда проверяйте лицензию перед использованием в коммерческих материалах."
  },
  {
    "category": "Работа с изображениями",
    "question": "Какой размер / разрешение нужен для презентации?",
    "answer": "Для слайдов 16:9 оптимальный размер изображения — <strong>1920×1080 px</strong> (Full HD). Разрешение 96–150 DPI достаточно для экранной демонстрации; 150–300 DPI — если планируется печать. Изображения меньше 800×600 px будут выглядеть размытыми при полноэкранном показе."
  },
  {
    "category": "Работа с изображениями",
    "question": "Как обрезать фото внутри PowerPoint?",
    "answer": "Выделите изображение → вкладка <strong>«Формат рисунка» → «Обрезать»</strong> (Crop). Потяните за чёрные маркеры по краям. Опция <strong>«Обрезать по фигуре»</strong> (Crop to Shape) позволяет обрезать фото по любой геометрической форме — кругу, звезде и т.д."
  },
  {
    "category": "Работа с изображениями",
    "question": "Как сделать фото фоном слайда?",
    "answer": "Правый клик по пустому месту слайда → <strong>«Формат фона» → «Рисунок или текстура» → «Вставить»</strong> → выберите файл. Этот способ предпочтительнее, чем просто растянуть картинку: фоновое изображение не будет случайно выделено и сдвинуто."
  },
  {
    "category": "Работа с изображениями",
    "question": "Как наложить затемнение поверх фото для читаемости текста?",
    "answer": "Вставьте прямоугольник поверх фото, покройте его чёрным цветом и установите <strong>прозрачность 40–60%</strong> (Формат фигуры → Заливка → Прозрачность). Затем разместите текст поверх прямоугольника. Альтернатива: используйте полупрозрачный градиент от чёрного к прозрачному — он выглядит изящнее."
  },
  {
    "category": "Работа с изображениями",
    "question": "Как убрать фон у картинки в PowerPoint?",
    "answer": "Выделите изображение → вкладка <strong>«Формат рисунка» → «Удалить фон»</strong> (Remove Background). PowerPoint автоматически выделит область удаления — уточните её вручную. Инструмент хорошо работает на фото с однородным фоном; для сложных изображений лучше использовать <strong>remove.bg</strong>."
  },
  {
    "category": "Работа с изображениями",
    "question": "Как сжать все изображения, чтобы уменьшить размер файла?",
    "answer": "Выделите любое изображение → <strong>«Формат рисунка» → «Сжать рисунки»</strong>. Снимите галочку «Применить только к этому рисунку», выберите разрешение «Экран (150 ppi)» или «Веб (96 ppi)». Отметьте <strong>«Удалить обрезанные области»</strong>. Это может сократить размер файла в несколько раз."
  },
  {
    "category": "Иконки",
    "question": "Где брать бесплатные иконки?",
    "answer": "Лучшие источники: <strong>Flaticon</strong> (flaticon.com), <strong>Icons8</strong> (icons8.com), <strong>The Noun Project</strong> (thenounproject.com), Heroicons, Lucide и Feather Icons. Для коммерческого использования без ограничений — <strong>Google Material Icons</strong> и Bootstrap Icons (MIT-лицензия)."
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
    "question": "Как выбрать тип графика под задачу?",
    "answer": "<strong>Сравнение</strong> между категориями — столбчатая диаграмма. <strong>Динамика</strong> во времени — линейный график. <strong>Доля целого</strong> — круговая (не более 5–6 сегментов). <strong>Корреляция</strong> — точечная диаграмма. Правило: один слайд — один вопрос, одна диаграмма — один вывод."
  },
  {
    "category": "Графики и таблицы",
    "question": "Как упростить график, чтобы он читался?",
    "answer": "Удалите лишнее: линии сетки, рамки, избыточные подписи осей. <strong>Выделите главный вывод цветом</strong>, остальные данные покрасьте в серый. Добавьте короткий заголовок-утверждение («Продажи выросли на 40%» вместо «Динамика продаж»). Чем меньше элементов, тем быстрее считывается информация."
  },
  {
    "category": "Графики и таблицы",
    "question": "Как оформить таблицу, чтобы она не выглядела как Excel?",
    "answer": "Уберите все видимые границы ячеек — оставьте только горизонтальные разделители или чередование цвета строк. <strong>Шапку</strong> выделите жирным или другим фоном. Числа — по правому краю, текст — по левому. Уберите лишние столбцы: таблица в презентации должна быть максимально лаконичной."
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
    "answer": "Выделите объект с нужным форматированием → нажмите <strong>«Формат по образцу»</strong> (Format Painter) на вкладке «Главная» → кликните по целевому объекту. Для применения к нескольким объектам <strong>дважды кликните</strong> по кнопке Format Painter — режим останется активным. Нажмите Esc для выхода."
  },
  {
    "category": "Фигуры и объекты",
    "question": "Как сгруппировать объекты?",
    "answer": "Выделите нужные объекты (Shift+клик) → правый клик → <strong>«Группировать»</strong>. Горячая клавиша: <strong>Ctrl+G</strong> (Windows) / Cmd+G (Mac). Разгруппировать — Ctrl+Shift+G. Группировка позволяет перемещать, масштабировать и анимировать несколько объектов как единое целое."
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
    "question": "Что ломается при открытии в Google Slides?",
    "answer": "Google Slides <strong>не поддерживает</strong>: часть анимаций и Morph-переходы, нестандартные шрифты (заменяются на похожие), 3D-эффекты и тени, SmartArt (конвертируется в картинку), некоторые типы диаграмм. Для безопасного конвертирования используйте системные шрифты и стандартные анимации."
  },
  {
    "category": "Экспорт и совместимость",
    "question": "Как сохранить слайд как картинку (PNG)?",
    "answer": "<strong>Файл → «Сохранить как» → PNG или JPEG</strong> → PowerPoint спросит, экспортировать один слайд или все. Разрешение по умолчанию — 96 dpi (1280×720 px). Для повышения: на Windows — параметр ExportBitmapResolution в реестре; на Mac: <strong>Файл → «Экспортировать» → PNG</strong> с настройкой разрешения."
  },
  {
    "category": "Экспорт и совместимость",
    "question": "Что делать, если файл слишком большой для отправки?",
    "answer": "Сожмите изображения (96–150 ppi). Вынесите видеофайлы и вставьте ссылки вместо встроенных. Если файл всё ещё велик — загрузите на <strong>Google Drive</strong>, <strong>OneDrive</strong> или <strong>WeTransfer</strong> (до 2 ГБ бесплатно) и отправьте ссылку."
  }
];

/* === DOM Elements === */
const searchInput = document.getElementById('search');
const searchClear = document.getElementById('search-clear');
const contentEl = document.getElementById('content');
const noResults = document.getElementById('no-results');
const categoryNav = document.getElementById('category-nav');

let activeCategory = null;

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

/* === Category Chips === */
function renderCategoryChips() {
  const cats = [...new Set(faqData.map((i) => i.category))];
  categoryNav.innerHTML = '';

  const allChip = document.createElement('button');
  allChip.className = 'category-chip active';
  allChip.textContent = 'Все';
  allChip.addEventListener('click', () => setCategory(null));
  categoryNav.appendChild(allChip);

  cats.forEach((cat) => {
    const chip = document.createElement('button');
    chip.className = 'category-chip';
    chip.textContent = cat;
    chip.addEventListener('click', () => setCategory(cat));
    categoryNav.appendChild(chip);
  });
}

function setCategory(cat) {
  activeCategory = cat;
  document.querySelectorAll('.category-chip').forEach((chip, i) => {
    if (cat === null && i === 0) chip.classList.add('active');
    else if (chip.textContent === cat) chip.classList.add('active');
    else chip.classList.remove('active');
  });
  render(searchInput.value, cat);
}

/* === PWA Install === */
let deferredPrompt;
const installBanner = document.getElementById('install-banner');
const installBtn = document.getElementById('install-btn');

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

/* === Service Worker === */
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js');
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

/* === Init === */
renderCategoryChips();
render();
