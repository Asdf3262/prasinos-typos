import moment from 'moment'
export const state = () => ({
    posts: [
        {
            id: 1,
            category: 'ποδοσφαιρο',
            title: 'Super League: O Αυστριακός Βαϊνμπέργκερ ορίστηκε στο ΠΑΟΚ - Παναθηναϊκός',
            description: 'asdf asdf asdf',
            image: require('~/assets/post1.jpg'),
            timestamp: moment('11:35 9/29/2022').format('h:mm MM/DD/YY')
        },
        {
            id: 2,
            category: 'ποδοσφαιρο',
            title: 'Παναθηναϊκός: Διαθέσιμοι Κώτσιρας, Παλάσιος ενόψει ΠΑΟΚ, επέστρεψαν Κουρμπέλης, Ιωαννίδης',
            description: 'asdf asdf asdf',
            image: require('~/assets/post2.jpg'),
            timestamp: moment('11:39 9/29/2022').format('h:mm MM/DD/YY')
        },
        {
            id: 3,
            category: 'μπασκετ',
            title: 'Γκουντάιτις: «Ήταν ένας μεγάλος στόχος ζωής να φορέσω μια μέρα τη φανέλα του Παναθηναϊκού»',
            description: 'asdf asdf asdf',
            image: require('~/assets/post1.jpg'),
            timestamp: moment('3:30 7/20/2022').format('h:mm MM/DD/YY')
        },
        {
            id: 4,
            category: 'μπασκετ',
            title: 'Παίκτης του Παναθηναϊκού ο Γκουντάιτις!',
            description: 'asdf asdf asdf',
            image: require('~/assets/post2.jpg'),
            timestamp: moment('3:09 7/20/2022').format('h:mm MM/DD/YY')
        },
        {
            id: 5,
            category: 'ποδοσφαιρο',
            title: 'Λοντίγκιν: «Ήρθα στον Παναθηναϊκό για να πάρω τίτλους»',
            description: 'asdf asdf asdf',
            image: require('~/assets/post1.jpg'),
            timestamp: moment('1:00 7/20/2022').format('h:mm MM/DD/YY')
        },
        {
            id: 6,
            category: 'μπασκετ',
            title: 'Γουίλιαμς: «Ιδανικός προορισμός ο Παναθηναϊκός, νιώθω ήδη την ενέργεια του κόσμου»',
            description: 'asdf asdf asdf',
            image: require('~/assets/post2.jpg'),
            timestamp: moment('9:46:0 7/19/2022').format('h:mm MM/DD/YY')
        },
        {
            id: 7,
            category: 'μπασκετ',
            title: 'Γκριγκόνις: «Όλη η Ευρώπη ξέρει τι σημαίνει Παναθηναϊκός!»',
            description: 'asdf asdf asdf',
            image: require('~/assets/post1.jpg'),
            timestamp: moment('9:42 7/17/2022').format('h:mm MM/DD/YY')
        },
        {
            id: 8,
            category: 'μπασκετ',
            title: 'Επίσημο του Άντριους στον Παναθηναϊκό',
            description: 'asdf asdf asdf',
            image: require('~/assets/post2.jpg'),
            timestamp: moment('8:03 7/16/2022').format('h:mm MM/DD/YY')
        },
        {
            id: 9,
            category: 'μπασκετ',
            title: 'Στον Παναθηναϊκό ο «ηλεκτρολόγος» Γουίλιαμς!',
            description: 'asdf asdf asdf',
            image: require('~/assets/post1.jpg'),
            timestamp: moment('7:44 7/15/2022').format('h:mm MM/DD/YY')
        },
        {
            id: 10,
            category: 'μπασκετ',
            title: 'Γουόλτερς: «Ανυπομονώ να αγωνιστώ στο κατάμεστο ΟΑΚΑ»',
            description: 'asdf asdf asdf',
            image: require('~/assets/post2.jpg'),
            timestamp: moment('10:15 7/15/2022').format('h:mm MM/DD/YY')
        },
        {
            id: 11,
            category: 'μπασκετ',
            title: 'Στα πράσινα και με τη... βούλα ο Γουόλτερς!',
            description: 'asdf asdf asdf',
            image: require('~/assets/post1.jpg'),
            timestamp: moment('10:10 7/15/2022').format('h:mm MM/DD/YY')
        },
        {
            id: 12,
            category: 'μπασκετ',
            title: 'Επίσημη η «βόμβα» με Γκριγκόνις!',
            description: 'asdf asdf asdf',
            image: require('~/assets/post2.jpg'),
            timestamp: moment('8:00 7/14/2022').format('h:mm MM/DD/YY')
        },
        {
            id: 13,
            category: 'ποδοσφαιρο',
            title: 'Υπερβάσεις θα γίνονται όταν ο Ιβάν δίνει το «ΟΚ»',
            description: 'asdf asdf asdf',
            image: require('~/assets/post1.jpg'),
            timestamp: moment('10:30 7/8/2022').format('h:mm MM/DD/YY')
        },
        {
            id: 14,
            category: 'μπασκετ',
            title: 'Υπόθεση Καλάθη: Η πρόταση των 2,7 εκατ. ευρώ και η άμεση απάντηση που περιμένει ο Παναθηναϊκός!',
            description: 'asdf asdf asdf',
            image: require('~/assets/post2.jpg'),
            timestamp: moment('12:00 7/8/2022').format('h:mm MM/DD/YY')
        },
        {
            id: 15,
            category: 'μπασκετ',
            title: 'Πληρώνει μέχρι τις 15 Ιουλίου τον Παναθηναϊκό ο Ερυθρός Αστέρας για Νέντοβιτς',
            description: 'asdf asdf asdf',
            image: require('~/assets/post2.jpg'),
            timestamp: moment('10:35 7/8/2022').format('h:mm MM/DD/YY')
        },
        {
            id: 16,
            category: 'ποδοσφαιρο',
            title: 'Ευχές της ΠΑΕ στον Ιβάν Γιοβάνοβιτς για τα γενέθλιά του',
            description: 'asdf asdf asdf',
            image: require('~/assets/post1.jpg'),
            timestamp: moment('12:30 7/8/2022').format('h:mm MM/DD/YY')
        },
        {
            id: 17,
            category: 'μπασκετ',
            title: 'Στο κάδρο και ο Ντέρικ Γουίλιαμς!',
            description: 'asdf asdf asdf',
            image: require('~/assets/post2.jpg'),
            timestamp: moment('12:40 7/8/2022').format('h:mm MM/DD/YY')
        },
        {
            id: 18,
            category: 'ποδοσφαιρο',
            title: 'Σήμερα τα ιατρικά του Μάγκνουσον – Καθαρή η ακτινογραφία του Γκάνεα',
            description: 'asdf asdf asdf',
            image: require('~/assets/post2.jpg'),
            timestamp: moment('12:55 7/8/2022').format('h:mm MM/DD/YY')
        },
        {
            id: 19,
            category: 'μπασκετ',
            title: 'Πλησιάζει στον Ερυθρό ο Χασάν Μάρτιν που άρεσε στον Ράντονιτς',
            description: 'asdf asdf asdf',
            image: require('~/assets/post1.jpg'),
            timestamp: moment('12:56 7/8/2022').format('h:mm MM/DD/YY')
        },
        {
            id: 20,
            category: 'ποδοσφαιρο',
            title: 'H χρονική διάρκεια του συμβολαίου του Μάγκνουσον',
            description: 'asdf asdf asdf',
            image: require('~/assets/post2.jpg'),
            timestamp: moment('12:57 7/8/2022').format('h:mm MM/DD/YY')
        },
        {
            id: 21,
            category: 'μπασκετ',
            title: 'Παπαπέτρου σε Νέντοβιτς: «Αδερφός για μια ζωή»',
            description: 'asdf asdf asdf',
            image: require('~/assets/post2.jpg'),
            timestamp: moment('12:58 7/8/2022').format('h:mm MM/DD/YY')
        },
        {
            id: 22,
            category: 'ποδοσφαιρο',
            title: 'Super League: O Αυστριακός Βαϊνμπέργκερ ορίστηκε στο ΠΑΟΚ - Παναθηναϊκός',
            description: 'asdf asdf asdf',
            image: require('~/assets/post1.jpg'),
            timestamp: moment('11:35 9/29/2022').format('h:mm MM/DD/YY')
        },
        {
            id: 23,
            category: 'ποδοσφαιρο',
            title: 'Παναθηναϊκός: Διαθέσιμοι Κώτσιρας, Παλάσιος ενόψει ΠΑΟΚ, επέστρεψαν Κουρμπέλης, Ιωαννίδης',
            description: 'asdf asdf asdf',
            image: require('~/assets/post2.jpg'),
            timestamp: moment('11:39 9/29/2022').format('h:mm MM/DD/YY')
        },
        {
            id: 24,
            category: 'μπασκετ',
            title: 'Γκουντάιτις: «Ήταν ένας μεγάλος στόχος ζωής να φορέσω μια μέρα τη φανέλα του Παναθηναϊκού»',
            description: 'asdf asdf asdf',
            image: require('~/assets/post1.jpg'),
            timestamp: moment('3:30 7/20/2022').format('h:mm MM/DD/YY')
        },
        {
            id: 25,
            category: 'μπασκετ',
            title: 'Παίκτης του Παναθηναϊκού ο Γκουντάιτις!',
            description: 'asdf asdf asdf',
            image: require('~/assets/post2.jpg'),
            timestamp: moment('3:09 7/20/2022').format('h:mm MM/DD/YY')
        },
        {
            id: 26,
            category: 'ποδοσφαιρο',
            title: 'Λοντίγκιν: «Ήρθα στον Παναθηναϊκό για να πάρω τίτλους»',
            description: 'asdf asdf asdf',
            image: require('~/assets/post1.jpg'),
            timestamp: moment('1:00 7/20/2022').format('h:mm MM/DD/YY')
        },
        {
            id: 27,
            category: 'μπασκετ',
            title: 'Γουίλιαμς: «Ιδανικός προορισμός ο Παναθηναϊκός, νιώθω ήδη την ενέργεια του κόσμου»',
            description: 'asdf asdf asdf',
            image: require('~/assets/post2.jpg'),
            timestamp: moment('9:46:0 7/19/2022').format('h:mm MM/DD/YY')
        },
        {
            id: 28,
            category: 'μπασκετ',
            title: 'Γκριγκόνις: «Όλη η Ευρώπη ξέρει τι σημαίνει Παναθηναϊκός!»',
            description: 'asdf asdf asdf',
            image: require('~/assets/post1.jpg'),
            timestamp: moment('9:42 7/17/2022').format('h:mm MM/DD/YY')
        },
        {
            id: 29,
            category: 'μπασκετ',
            title: 'Επίσημο του Άντριους στον Παναθηναϊκό',
            description: 'asdf asdf asdf',
            image: require('~/assets/post2.jpg'),
            timestamp: moment('8:03 7/16/2022').format('h:mm MM/DD/YY')
        },
        {
            id: 30,
            category: 'μπασκετ',
            title: 'Στον Παναθηναϊκό ο «ηλεκτρολόγος» Γουίλιαμς!',
            description: 'asdf asdf asdf',
            image: require('~/assets/post1.jpg'),
            timestamp: moment('7:44 7/15/2022').format('h:mm MM/DD/YY')
        },
        {
            id: 31,
            category: 'μπασκετ',
            title: 'Γουόλτερς: «Ανυπομονώ να αγωνιστώ στο κατάμεστο ΟΑΚΑ»',
            description: 'asdf asdf asdf',
            image: require('~/assets/post2.jpg'),
            timestamp: moment('10:15 7/15/2022').format('h:mm MM/DD/YY')
        },
        {
            id: 32,
            category: 'μπασκετ',
            title: 'Στα πράσινα και με τη... βούλα ο Γουόλτερς!',
            description: 'asdf asdf asdf',
            image: require('~/assets/post1.jpg'),
            timestamp: moment('10:10 7/15/2022').format('h:mm MM/DD/YY')
        },
        {
            id: 33,
            category: 'μπασκετ',
            title: 'Επίσημη η «βόμβα» με Γκριγκόνις!',
            description: 'asdf asdf asdf',
            image: require('~/assets/post2.jpg'),
            timestamp: moment('8:00 7/14/2022').format('h:mm MM/DD/YY')
        },
        {
            id: 34,
            category: 'ποδοσφαιρο',
            title: 'Υπερβάσεις θα γίνονται όταν ο Ιβάν δίνει το «ΟΚ»',
            description: 'asdf asdf asdf',
            image: require('~/assets/post1.jpg'),
            timestamp: moment('10:30 7/8/2022').format('h:mm MM/DD/YY')
        },
        {
            id: 35,
            category: 'μπασκετ',
            title: 'Υπόθεση Καλάθη: Η πρόταση των 2,7 εκατ. ευρώ και η άμεση απάντηση που περιμένει ο Παναθηναϊκός!',
            description: 'asdf asdf asdf',
            image: require('~/assets/post2.jpg'),
            timestamp: moment('12:00 7/8/2022').format('h:mm MM/DD/YY')
        },
        {
            id: 36,
            category: 'μπασκετ',
            title: 'Πληρώνει μέχρι τις 15 Ιουλίου τον Παναθηναϊκό ο Ερυθρός Αστέρας για Νέντοβιτς',
            description: 'asdf asdf asdf',
            image: require('~/assets/post2.jpg'),
            timestamp: moment('10:35 7/8/2022').format('h:mm MM/DD/YY')
        },
        {
            id: 37,
            category: 'ποδοσφαιρο',
            title: 'Ευχές της ΠΑΕ στον Ιβάν Γιοβάνοβιτς για τα γενέθλιά του',
            description: 'asdf asdf asdf',
            image: require('~/assets/post1.jpg'),
            timestamp: moment('12:30 7/8/2022').format('h:mm MM/DD/YY')
        },
        {
            id: 38,
            category: 'μπασκετ',
            title: 'Στο κάδρο και ο Ντέρικ Γουίλιαμς!',
            description: 'asdf asdf asdf',
            image: require('~/assets/post2.jpg'),
            timestamp: moment('12:40 7/8/2022').format('h:mm MM/DD/YY')
        },
        {
            id: 39,
            category: 'ποδοσφαιρο',
            title: 'Σήμερα τα ιατρικά του Μάγκνουσον – Καθαρή η ακτινογραφία του Γκάνεα',
            description: 'asdf asdf asdf',
            image: require('~/assets/post2.jpg'),
            timestamp: moment('12:55 7/8/2022').format('h:mm MM/DD/YY')
        },
        {
            id: 40,
            category: 'μπασκετ',
            title: 'Πλησιάζει στον Ερυθρό ο Χασάν Μάρτιν που άρεσε στον Ράντονιτς',
            description: 'asdf asdf asdf',
            image: require('~/assets/post1.jpg'),
            timestamp: moment('12:56 7/8/2022').format('h:mm MM/DD/YY')
        },
        {
            id: 41,
            category: 'ποδοσφαιρο',
            title: 'H χρονική διάρκεια του συμβολαίου του Μάγκνουσον',
            description: 'asdf asdf asdf',
            image: require('~/assets/post2.jpg'),
            timestamp: moment('12:57 7/8/2022').format('h:mm MM/DD/YY')
        },
        {
            id: 42,
            category: 'μπασκετ',
            title: 'Παπαπέτρου σε Νέντοβιτς: «Αδερφός για μια ζωή»',
            description: 'asdf asdf asdf',
            image: require('~/assets/post2.jpg'),
            timestamp: moment('12:58 7/8/2022').format('h:mm MM/DD/YY')
        },
        {
            id: 43,
            category: 'μπασκετ',
            title: 'Παπαπέτρου σε Νέντοβιτς: «Αδερφός για μια ζωή»',
            description: 'asdf asdf asdf',
            image: require('~/assets/post2.jpg'),
            timestamp: moment('12:58 7/8/2022').format('h:mm MM/DD/YY')
        },{
            id: 44,
            category: 'ποδοσφαιρο',
            title: 'Super League: O Αυστριακός Βαϊνμπέργκερ ορίστηκε στο ΠΑΟΚ - Παναθηναϊκός',
            description: 'asdf asdf asdf',
            image: require('~/assets/post1.jpg'),
            timestamp: moment('11:35 9/29/2022').format('h:mm MM/DD/YY')
        },
        {
            id: 45,
            category: 'ποδοσφαιρο',
            title: 'Παναθηναϊκός: Διαθέσιμοι Κώτσιρας, Παλάσιος ενόψει ΠΑΟΚ, επέστρεψαν Κουρμπέλης, Ιωαννίδης',
            description: 'asdf asdf asdf',
            image: require('~/assets/post2.jpg'),
            timestamp: moment('11:39 9/29/2022').format('h:mm MM/DD/YY')
        },
        {
            id: 46,
            category: 'μπασκετ',
            title: 'Γκουντάιτις: «Ήταν ένας μεγάλος στόχος ζωής να φορέσω μια μέρα τη φανέλα του Παναθηναϊκού»',
            description: 'asdf asdf asdf',
            image: require('~/assets/post1.jpg'),
            timestamp: moment('3:30 7/20/2022').format('h:mm MM/DD/YY')
        },
        {
            id: 47,
            category: 'μπασκετ',
            title: 'Παίκτης του Παναθηναϊκού ο Γκουντάιτις!',
            description: 'asdf asdf asdf',
            image: require('~/assets/post2.jpg'),
            timestamp: moment('3:09 7/20/2022').format('h:mm MM/DD/YY')
        },
        {
            id: 48,
            category: 'ποδοσφαιρο',
            title: 'Λοντίγκιν: «Ήρθα στον Παναθηναϊκό για να πάρω τίτλους»',
            description: 'asdf asdf asdf',
            image: require('~/assets/post1.jpg'),
            timestamp: moment('1:00 7/20/2022').format('h:mm MM/DD/YY')
        },
        {
            id: 49,
            category: 'μπασκετ',
            title: 'Γουίλιαμς: «Ιδανικός προορισμός ο Παναθηναϊκός, νιώθω ήδη την ενέργεια του κόσμου»',
            description: 'asdf asdf asdf',
            image: require('~/assets/post2.jpg'),
            timestamp: moment('9:46:0 7/19/2022').format('h:mm MM/DD/YY')
        },
        {
            id: 50,
            category: 'μπασκετ',
            title: 'Γκριγκόνις: «Όλη η Ευρώπη ξέρει τι σημαίνει Παναθηναϊκός!»',
            description: 'asdf asdf asdf',
            image: require('~/assets/post1.jpg'),
            timestamp: moment('9:42 7/17/2022').format('h:mm MM/DD/YY')
        },
        {
            id: 51,
            category: 'μπασκετ',
            title: 'Επίσημο του Άντριους στον Παναθηναϊκό',
            description: 'asdf asdf asdf',
            image: require('~/assets/post2.jpg'),
            timestamp: moment('8:03 7/16/2022').format('h:mm MM/DD/YY')
        },
        {
            id: 52,
            category: 'μπασκετ',
            title: 'Στον Παναθηναϊκό ο «ηλεκτρολόγος» Γουίλιαμς!',
            description: 'asdf asdf asdf',
            image: require('~/assets/post1.jpg'),
            timestamp: moment('7:44 7/15/2022').format('h:mm MM/DD/YY')
        },
        {
            id: 53,
            category: 'μπασκετ',
            title: 'Γουόλτερς: «Ανυπομονώ να αγωνιστώ στο κατάμεστο ΟΑΚΑ»',
            description: 'asdf asdf asdf',
            image: require('~/assets/post2.jpg'),
            timestamp: moment('10:15 7/15/2022').format('h:mm MM/DD/YY')
        },
        {
            id: 54,
            category: 'μπασκετ',
            title: 'Στα πράσινα και με τη... βούλα ο Γουόλτερς!',
            description: 'asdf asdf asdf',
            image: require('~/assets/post1.jpg'),
            timestamp: moment('10:10 7/15/2022').format('h:mm MM/DD/YY')
        },
        {
            id: 55,
            category: 'μπασκετ',
            title: 'Επίσημη η «βόμβα» με Γκριγκόνις!',
            description: 'asdf asdf asdf',
            image: require('~/assets/post2.jpg'),
            timestamp: moment('8:00 7/14/2022').format('h:mm MM/DD/YY')
        },
        {
            id: 56,
            category: 'ποδοσφαιρο',
            title: 'Υπερβάσεις θα γίνονται όταν ο Ιβάν δίνει το «ΟΚ»',
            description: 'asdf asdf asdf',
            image: require('~/assets/post1.jpg'),
            timestamp: moment('10:30 7/8/2022').format('h:mm MM/DD/YY')
        },
        {
            id: 57,
            category: 'μπασκετ',
            title: 'Υπόθεση Καλάθη: Η πρόταση των 2,7 εκατ. ευρώ και η άμεση απάντηση που περιμένει ο Παναθηναϊκός!',
            description: 'asdf asdf asdf',
            image: require('~/assets/post2.jpg'),
            timestamp: moment('12:00 7/8/2022').format('h:mm MM/DD/YY')
        },
        {
            id: 58,
            category: 'μπασκετ',
            title: 'Πληρώνει μέχρι τις 15 Ιουλίου τον Παναθηναϊκό ο Ερυθρός Αστέρας για Νέντοβιτς',
            description: 'asdf asdf asdf',
            image: require('~/assets/post2.jpg'),
            timestamp: moment('10:35 7/8/2022').format('h:mm MM/DD/YY')
        },
        {
            id: 59,
            category: 'ποδοσφαιρο',
            title: 'Ευχές της ΠΑΕ στον Ιβάν Γιοβάνοβιτς για τα γενέθλιά του',
            description: 'asdf asdf asdf',
            image: require('~/assets/post1.jpg'),
            timestamp: moment('12:30 7/8/2022').format('h:mm MM/DD/YY')
        },
        {
            id: 60,
            category: 'μπασκετ',
            title: 'Στο κάδρο και ο Ντέρικ Γουίλιαμς!',
            description: 'asdf asdf asdf',
            image: require('~/assets/post2.jpg'),
            timestamp: moment('12:40 7/8/2022').format('h:mm MM/DD/YY')
        },
        {
            id: 61,
            category: 'ποδοσφαιρο',
            title: 'Σήμερα τα ιατρικά του Μάγκνουσον – Καθαρή η ακτινογραφία του Γκάνεα',
            description: 'asdf asdf asdf',
            image: require('~/assets/post2.jpg'),
            timestamp: moment('12:55 7/8/2022').format('h:mm MM/DD/YY')
        },
        {
            id: 62,
            category: 'μπασκετ',
            title: 'Πλησιάζει στον Ερυθρό ο Χασάν Μάρτιν που άρεσε στον Ράντονιτς',
            description: 'asdf asdf asdf',
            image: require('~/assets/post1.jpg'),
            timestamp: moment('12:56 7/8/2022').format('h:mm MM/DD/YY')
        },
        {
            id: 63,
            category: 'ποδοσφαιρο',
            title: 'H χρονική διάρκεια του συμβολαίου του Μάγκνουσον',
            description: 'asdf asdf asdf',
            image: require('~/assets/post2.jpg'),
            timestamp: moment('12:57 7/8/2022').format('h:mm MM/DD/YY')
        },
        {
            id: 64,
            category: 'μπασκετ',
            title: 'Παπαπέτρου σε Νέντοβιτς: «Αδερφός για μια ζωή»',
            description: 'asdf asdf asdf',
            image: require('~/assets/post2.jpg'),
            timestamp: moment('12:58 7/8/2022').format('h:mm MM/DD/YY')
        },
        {
            id: 65,
            category: 'ποδοσφαιρο',
            title: 'Super League: O Αυστριακός Βαϊνμπέργκερ ορίστηκε στο ΠΑΟΚ - Παναθηναϊκός',
            description: 'asdf asdf asdf',
            image: require('~/assets/post1.jpg'),
            timestamp: moment('11:35 9/29/2022').format('h:mm MM/DD/YY')
        },
        {
            id: 66,
            category: 'ποδοσφαιρο',
            title: 'Παναθηναϊκός: Διαθέσιμοι Κώτσιρας, Παλάσιος ενόψει ΠΑΟΚ, επέστρεψαν Κουρμπέλης, Ιωαννίδης',
            description: 'asdf asdf asdf',
            image: require('~/assets/post2.jpg'),
            timestamp: moment('11:39 9/29/2022').format('h:mm MM/DD/YY')
        },
        {
            id: 67,
            category: 'μπασκετ',
            title: 'Γκουντάιτις: «Ήταν ένας μεγάλος στόχος ζωής να φορέσω μια μέρα τη φανέλα του Παναθηναϊκού»',
            description: 'asdf asdf asdf',
            image: require('~/assets/post1.jpg'),
            timestamp: moment('3:30 7/20/2022').format('h:mm MM/DD/YY')
        },
        {
            id: 68,
            category: 'μπασκετ',
            title: 'Παίκτης του Παναθηναϊκού ο Γκουντάιτις!',
            description: 'asdf asdf asdf',
            image: require('~/assets/post2.jpg'),
            timestamp: moment('3:09 7/20/2022').format('h:mm MM/DD/YY')
        },
        {
            id: 69,
            category: 'ποδοσφαιρο',
            title: 'Λοντίγκιν: «Ήρθα στον Παναθηναϊκό για να πάρω τίτλους»',
            description: 'asdf asdf asdf',
            image: require('~/assets/post1.jpg'),
            timestamp: moment('1:00 7/20/2022').format('h:mm MM/DD/YY')
        },
        {
            id: 70,
            category: 'μπασκετ',
            title: 'Γουίλιαμς: «Ιδανικός προορισμός ο Παναθηναϊκός, νιώθω ήδη την ενέργεια του κόσμου»',
            description: 'asdf asdf asdf',
            image: require('~/assets/post2.jpg'),
            timestamp: moment('9:46:0 7/19/2022').format('h:mm MM/DD/YY')
        },
        {
            id: 71,
            category: 'μπασκετ',
            title: 'Γκριγκόνις: «Όλη η Ευρώπη ξέρει τι σημαίνει Παναθηναϊκός!»',
            description: 'asdf asdf asdf',
            image: require('~/assets/post1.jpg'),
            timestamp: moment('9:42 7/17/2022').format('h:mm MM/DD/YY')
        },
        {
            id: 72,
            category: 'μπασκετ',
            title: 'Επίσημο του Άντριους στον Παναθηναϊκό',
            description: 'asdf asdf asdf',
            image: require('~/assets/post2.jpg'),
            timestamp: moment('8:03 7/16/2022').format('h:mm MM/DD/YY')
        },
        {
            id: 73,
            category: 'μπασκετ',
            title: 'Στον Παναθηναϊκό ο «ηλεκτρολόγος» Γουίλιαμς!',
            description: 'asdf asdf asdf',
            image: require('~/assets/post1.jpg'),
            timestamp: moment('7:44 7/15/2022').format('h:mm MM/DD/YY')
        },
        {
            id: 74,
            category: 'μπασκετ',
            title: 'Γουόλτερς: «Ανυπομονώ να αγωνιστώ στο κατάμεστο ΟΑΚΑ»',
            description: 'asdf asdf asdf',
            image: require('~/assets/post2.jpg'),
            timestamp: moment('10:15 7/15/2022').format('h:mm MM/DD/YY')
        },
        {
            id: 75,
            category: 'μπασκετ',
            title: 'Στα πράσινα και με τη... βούλα ο Γουόλτερς!',
            description: 'asdf asdf asdf',
            image: require('~/assets/post1.jpg'),
            timestamp: moment('10:10 7/15/2022').format('h:mm MM/DD/YY')
        },
        {
            id: 76,
            category: 'μπασκετ',
            title: 'Επίσημη η «βόμβα» με Γκριγκόνις!',
            description: 'asdf asdf asdf',
            image: require('~/assets/post2.jpg'),
            timestamp: moment('8:00 7/14/2022').format('h:mm MM/DD/YY')
        },
        {
            id: 77,
            category: 'ποδοσφαιρο',
            title: 'Υπερβάσεις θα γίνονται όταν ο Ιβάν δίνει το «ΟΚ»',
            description: 'asdf asdf asdf',
            image: require('~/assets/post1.jpg'),
            timestamp: moment('10:30 7/8/2022').format('h:mm MM/DD/YY')
        },
        {
            id: 78,
            category: 'μπασκετ',
            title: 'Υπόθεση Καλάθη: Η πρόταση των 2,7 εκατ. ευρώ και η άμεση απάντηση που περιμένει ο Παναθηναϊκός!',
            description: 'asdf asdf asdf',
            image: require('~/assets/post2.jpg'),
            timestamp: moment('12:00 7/8/2022').format('h:mm MM/DD/YY')
        },
        {
            id: 79,
            category: 'μπασκετ',
            title: 'Πληρώνει μέχρι τις 15 Ιουλίου τον Παναθηναϊκό ο Ερυθρός Αστέρας για Νέντοβιτς',
            description: 'asdf asdf asdf',
            image: require('~/assets/post2.jpg'),
            timestamp: moment('10:35 7/8/2022').format('h:mm MM/DD/YY')
        },
        {
            id: 80,
            category: 'ποδοσφαιρο',
            title: 'Ευχές της ΠΑΕ στον Ιβάν Γιοβάνοβιτς για τα γενέθλιά του',
            description: 'asdf asdf asdf',
            image: require('~/assets/post1.jpg'),
            timestamp: moment('12:30 7/8/2022').format('h:mm MM/DD/YY')
        },
        {
            id: 81,
            category: 'μπασκετ',
            title: 'Στο κάδρο και ο Ντέρικ Γουίλιαμς!',
            description: 'asdf asdf asdf',
            image: require('~/assets/post2.jpg'),
            timestamp: moment('12:40 7/8/2022').format('h:mm MM/DD/YY')
        },
        {
            id: 82,
            category: 'ποδοσφαιρο',
            title: 'Σήμερα τα ιατρικά του Μάγκνουσον – Καθαρή η ακτινογραφία του Γκάνεα',
            description: 'asdf asdf asdf',
            image: require('~/assets/post2.jpg'),
            timestamp: moment('12:55 7/8/2022').format('h:mm MM/DD/YY')
        },
        {
            id: 83,
            category: 'μπασκετ',
            title: 'Πλησιάζει στον Ερυθρό ο Χασάν Μάρτιν που άρεσε στον Ράντονιτς',
            description: 'asdf asdf asdf',
            image: require('~/assets/post1.jpg'),
            timestamp: moment('12:56 7/8/2022').format('h:mm MM/DD/YY')
        },
        {
            id: 84,
            category: 'ποδοσφαιρο',
            title: 'H χρονική διάρκεια του συμβολαίου του Μάγκνουσον',
            description: 'asdf asdf asdf',
            image: require('~/assets/post2.jpg'),
            timestamp: moment('12:57 7/8/2022').format('h:mm MM/DD/YY')
        },
        {
            id: 85,
            category: 'μπασκετ',
            title: 'Παπαπέτρου σε Νέντοβιτς: «Αδερφός για μια ζωή»',
            description: 'asdf asdf asdf',
            image: require('~/assets/post2.jpg'),
            timestamp: moment('12:58 7/8/2022').format('h:mm MM/DD/YY')
        },
        {
            id: 86,
            category: 'μπασκετ',
            title: 'Παπαπέτρου σε Νέντοβιτς: «Αδερφός για μια ζωή»',
            description: 'asdf asdf asdf',
            image: require('~/assets/post2.jpg'),
            timestamp: moment('12:58 7/8/2022').format('h:mm MM/DD/YY')
        }
    ]
  })

export const getters = {
    getCategory: (state) => (cat) => {
        return state.posts.filter(post => post.category === cat);
    },
    getPost: (state) => (idx) => {
        return state.posts.find(post => post.id === idx);
    },
    getLatest(state) {
        return state.posts.filter(post => post.id < 16);
    },
    getPostCategory: (state) => (idx) => {
        let post = state.posts.find(post => post.id === idx);
        return post.category;
    }
}