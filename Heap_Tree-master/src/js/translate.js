
const translations = {
    en: {
        //the index page
        select: ' Languages',
        english: 'English',
        arabic: 'Arabic',
        visualising: 'visualising data structures & algorithms through animation',
        heapTree: 'Heap-tree',
        aHeap: 'A Heap is a special Tree-based data structure in which the tree is a complete binary tree.',
        tryIt: 'try it now',
        stay: 'stay tooned',
        comming: 'comming soon',
        //the heap page
        HeapD: "Heap Data Structure",
        WhatIs: "What is Heap Data Structure?",
        AHeap: "A Heap is a special Tree-based data structure in which the tree is a",
        complete: "complete binary tree",
        Operations: "Operations of Heap Data Structure:",
        Heapify: "Heapify: a process of creating a heap from an array.",
        Insertion: "Insertion: process to insert an element in existing heap time Complexity O(log N).",
        deleting: " Deletion: deleting the top element of the heap or the highest priority element, and then organizing the heap and returning the element with time complexity O(log N)",
        Peek: "Peek: to check or find the most prior element in the heap, (max or min element for max and min heap).",
        Types: "Types of Heap Data Structure",
        Generally: "Generally, Heaps can be of two types:",
        InAMaxHeap: "Max-Heap: In a Max-Heap the key present at the root node must be greatest among the keys present at all of it's children.  The same property must be recursively true for all sub-trees in that Binary Tree.",
        InAMinHeap: "Min-Heap: In a Min-Heap the key present at the root node must be minimum among the keys present at all of it's children.  The same property must be recursively true for all sub-trees in that Binary Tree.",
        Application: "Application of Heap Data Structure",
        HeapIsUsed: "Heap is used to construct a priority queue.",
        HeapSortIS: "Heap sort is one of the fastest sorting algorithms with time complexity of O(N* log(N), and it's easy to implement.",
        RealTimeApplication: "Real-Time Application of Heap",
        InAHospital: "Patient treatment: In a hospital, an emergency patient, or the patient with more injury is treated first. Here the priority is the degree of injury.",
        UseHeapSort: " Systems concerned with security use heap sort, like the Linux kernel.",
        Advantages: "Advantages of Heap",
        Disadvantages: "Disadvantages of Heap",
        LessTimeComp: "Less time complexity, for inserting or deleting an element in the heap the time complexity is just O(log N).",
        TheTimeSearching: "The time complexity for searching an element in Heap is O(N).",
        ToJustPeek: "To just peek at the most prior element the time complexity is constant O(1)",
        ToPrintAll: "To print all elements of the heap in sorted order time complexity is O(N*log N), whereas, for BST, it takes only O(N) time.",
        EsaytoImp: "A binary heap is a balanced binary tree, and easy to implement.",
        Memory: "Memory management is more complex in heap memory.",
        MINHeapVis: "Min Heap tree visualaiztion",
        GenrateNewValue: "genrate tree for new value",
        GenratedeleteValue: "genrate tree for delete a value",
        PushData: "Push Data",
        DeleteValue: "Delete value",
        Clear: "CLEARE",
        MAXHeapVis: "Min Heap tree visualaiztion",
        Still: "Still have some doubt?",
        Quiz: "You can Start a POP-Quiz now!",
        Start: "Start",

    },
    ar: {
        select: 'اختر اللغة',
        english: 'الانجليزية',
        arabic: 'العربية',
        visualising: ' عرض بينات المعطيات والخوارزميات عن طريق الرسوم المتحركة',
        heapTree: 'الكومة الشجرية',
        aHeap: 'الكومة الشجرية هي بنية معطيات خاصة من الشجرة الكاملة',
        tryIt: 'تعلمها الآن',
        stay: 'استعد للقادم ',
        comming: 'قريبا',
        //

        HeapD: "بنية الكومة الشجرية",
        WhatIs: "ما هي الكومة الشجرية ؟",
        AHeap: "هي بنية خاصة من بنيان الأشجار حيث تكون الشجرة شجرة-كاملة",
        complete: "",
        Operations: "العمليات في الكومة ",
        Heapify: "Heapify:عملية إنشاء الكومة من المصفوفات.",
        Insertion: "Insertion: O(log N). تعنى بإدخال القيمة داخل بنية الكومة كما أن زمنها المعقد في الحالة الأسوء هو ",
        deleting: " Deletion:  O(log N).وتعنى بحذف القيمة ذات الأولوية الأعلى ثم يعاد ترتيب القيم بحسب أهميتها تستغرق هذه العملية ",
        Peek: "Peek:للتحقق أو العثور على العنصر الأكثر سابقًا في الكومة ، (الحد الأقصى أو الحد الأدنى للعنصر لكومة الحد الأقصى والأدنى).",
        Types: "أنواع بنيةالكومة",
        Generally: "بشكل أعم ينقسم الكومة لنوعين رئيسيين",
        InAMaxHeap: "Max-Heap: يجب أن يكون المفتاح الموجود في عقدة الجذر هو الأكبر بين المفاتيح الموجودة على الإطلاق في العناصر الفرعية. يجب أن تكون نفس الخاصية صحيحة بشكل متكرر لجميع الأشجار الفرعية في تلك الشجرة الثنائية.",
        InAMinHeap: "Min-Heap:يجب أن يكون المفتاح الموجود في عقدة الجذر في حده الأدنى بين المفاتيح الموجودة على الإطلاق من العناصر الفرعية. يجب أن تكون نفس الخاصية صحيحة بشكل متكرر لجميع الأشجار الفرعية في تلك الشجرة الثنائية.",
        Application: "التطبيقات المستخدمة في الكومة",
        HeapIsUsed: "يتم استخدام الكومة لإنشاء قائمة انتظار ذات أولوية.",
        HeapSortIS: "هي واحدة من أسرع خوارزميات الفرز مع تعقيد زمني ، ومن السهل تنفيذها.",
        RealTimeApplication: "التطبيقات المستخدمة للكومة في الوقت الحقيقي",
        InAHospital: "علاج المريض: في المستشفى ، يتم علاج مريض الطوارئ أو المريض الذي يعاني من إصابة أكثر أولاً. هنا الأولوية هي درجة الإصابة.",
        UseHeapSort: " الأنظمة المعنية بالأمان تستخدم نوع الكومة ، مثل Linux kernel.",
        Advantages: "مزايا الكومة",
        Disadvantages: "عيوب الكومة",
        LessTimeComp: "O(logN)يعتبر زمنها المعقد ,لإدخال قيمة أو حذفها هو فقط",
        TheTimeSearching: " O (N)التعقيد الزمني للبحث عن عنصر في الكومة هو",
        ToJustPeek: "O (1) لإلقاء نظرة خاطفة على العنصر الأكثر سابقًا ، يكون التعقيد الزمني ثابتًا ",
        ToPrintAll: "لطباعة جميع عناصر الكومة بالترتيب الذي تم فرزه تعقيد الوقت هو O (N * log N) ، بينما ، بالنسبة لـ BST ، يستغرق الأمر وقت O (N) فقط.",
        EsaytoImp: "الكومة الثنائية هي شجرة ثنائية متوازنة وسهلة التنفيذ.",
        Memory: "إدارة الذاكرة أكثر تعقيدًا في ذاكرة الكومة.",
        MINHeapVis: "الكومة الشجرية الأصغرية بالرسوم المتحركة",
        GenrateNewValue: "توليد الشجرة من أجل قيمة جديدة",
        GenratedeleteValue: "توليد الشجرة من أجل حذف القيمة",
        PushData: "أدخل قيمة",
        DeleteValue: "أحذف قيمة موجودة",
        Clear: "مسح الكل",
        MAXHeapVis: "الكومة الشجرية الكبرى بالرسوم المتحركة",
        Still: "لديك بعض الشكوك بفهمها ؟",
        Quiz: "يمكنك الآن أن تبدأ اختبارا لمعلوماتك",
        Start: "البدء",
    },
}
const languageSelector = document.querySelector("select");
languageSelector.addEventListener('change', (event) => {

    setLanguage(event.target.value);
});
const setLanguage = (language) => {
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach((element) => {
        const translateKey = element.getAttribute("data-i18n");
        element.textContent = translations[language][translateKey];
    });
    //document.dir = language === "ar" ? "rtl" : "ltr";
};

