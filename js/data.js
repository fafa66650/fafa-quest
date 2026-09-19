export const APP_VERSION = '0.1.0';
export const CONTENT_VERSION = '2026-09-19';

export const DIFFICULTIES = [
  { id:'decouverte', label:'Découverte', minAge:11, hintBudget:6, multiplier:1, description:'Guidé, accessible et coopératif.' },
  { id:'aventure', label:'Aventure', minAge:12, hintBudget:4, multiplier:1.15, description:'Le niveau standard pour les groupes ados.' },
  { id:'expert', label:'Expert', minAge:14, hintBudget:3, multiplier:1.3, description:'Plus de croisements d’indices et moins d’aide.' },
  { id:'maitre', label:'Maître', minAge:15, hintBudget:2, multiplier:1.5, description:'Pour les équipes expérimentées.' },
];

export const ROLE_LIBRARY = [
  { id:'observateur', label:'Observateur', icon:'◉', mission:'Repère les détails et garde l’œil sur les indices visuels.' },
  { id:'decodeur', label:'Décodeur', icon:'⌘', mission:'S’occupe des codes, suites et messages secrets.' },
  { id:'messager', label:'Messager', icon:'↔', mission:'Fait circuler les informations entre les joueurs.' },
  { id:'gardien', label:'Gardien du temps', icon:'◷', mission:'Surveille le chrono et décide quand demander un indice.' },
  { id:'archiviste', label:'Archiviste', icon:'▤', mission:'Suit l’inventaire et mémorise les informations utiles.' },
  { id:'coordinateur', label:'Coordinateur', icon:'◇', mission:'S’assure que tout le monde participe avant de valider.' },
];

export const TEAM_NAMES = ['Phoenix','Kraken','Nova','Cobra','Orion','Shadow','Atlas','Comète','Titan','Vortex','Lynx','Éclipse'];

export const SCENARIOS = [
  {
    id:'temple-quatre-sceaux',
    category:'fun',
    title:'Le Temple des Quatre Sceaux',
    subtitle:'Fantasy • Coopération • Artefacts',
    age:'11+', durationMin:55, players:'3–6', indoor:true, outdoor:true,
    colorTag:'Fantasy',
    description:'Quatre sceaux protègent un artefact ancien. Chaque joueur détient une partie de la vérité : l’équipe doit observer, communiquer et combiner ses découvertes avant la fermeture du temple.',
    intro:'Les portes se refermeront dans moins d’une heure. Le temple ne s’ouvre qu’aux équipes capables de réunir les quatre sceaux sans laisser un seul explorateur de côté.',
    learning:null,
    chapters:[
      { id:'seuil', title:'1. Le Seuil', icon:'Ⅰ' },
      { id:'archives', title:'2. Les Archives', icon:'Ⅱ' },
      { id:'sanctuaire', title:'3. Le Sanctuaire', icon:'Ⅲ' },
      { id:'final', title:'4. Le Sceau Maître', icon:'Ⅳ' },
    ],
    steps:[
      {id:'tq1',chapter:'seuil',type:'choice',title:'La porte aux symboles',prompt:'Trois symboles sont gravés sur la porte : △ ○ □. Une inscription indique : « Celui qui n’a aucun angle ouvre le passage. » Quel symbole actives-tu ?',options:['△ Triangle','○ Cercle','□ Carré'],answer:1,points:100,hints:['Cherche la forme qui ne possède aucun angle.','Un cercle n’a pas d’angle.'],fact:'Le premier sceau réagit à l’observation, pas à la force.',role:'observateur'},
      {id:'tq2',chapter:'seuil',type:'order',title:'Les dalles du passage',prompt:'Replace les dalles du plus petit au plus grand nombre.',items:['VIII','III','XI','V'],answer:['III','V','VIII','XI'],points:120,hints:['Ce sont des chiffres romains.','III=3, V=5, VIII=8, XI=11.'],reward:{id:'fragment-lune',label:'Fragment de lune',icon:'◔'},role:'decodeur'},
      {id:'tq3',chapter:'archives',type:'team_split',title:'Le message partagé',prompt:'Chaque rôle reçoit une information. Rassemblez-les pour trouver le code à 4 chiffres.',cards:{observateur:'Le premier chiffre est le nombre de côtés d’un triangle.',decodeur:'Le deuxième chiffre est 2 × 2.',archiviste:'Le troisième chiffre est le nombre de lettres du mot « LUNE ».',gardien:'Le dernier chiffre est 10 ÷ 2.',default:'Échange ton information avec l’équipe.'},answer:'3445',points:180,hints:['Chaque information donne exactement un chiffre.','Triangle=3, 2×2=4, LUNE=4 lettres, 10÷2=5.'],reward:{id:'cle-ambre',label:'Clé d’ambre',icon:'◆'},role:'messager'},
      {id:'tq4',chapter:'archives',type:'multi',title:'L’inventaire du gardien',prompt:'Quels objets possédez-vous déjà ?',options:[{id:'fragment-lune',label:'Fragment de lune'},{id:'cle-ambre',label:'Clé d’ambre'},{id:'couronne',label:'Couronne solaire'}],answer:['fragment-lune','cle-ambre'],points:100,hints:['Regarde votre inventaire commun.','Deux objets ont été débloqués dans les épreuves précédentes.'],role:'archiviste'},
      {id:'tq5',chapter:'sanctuaire',type:'text',title:'L’inscription inversée',prompt:'Le miroir révèle : « ERBMO ». Quel mot lis-tu en remettant les lettres dans le bon sens ?',answer:['OMBRE'],points:130,hints:['Lis le mot de droite à gauche.','ERBMO → OMBRE.'],reward:{id:'sceau-ombre',label:'Sceau de l’ombre',icon:'✦'},role:'decodeur'},
      {id:'tq6',chapter:'sanctuaire',type:'choice',title:'Le choix du groupe',prompt:'Un passage n’autorise qu’un seul joueur à regarder l’indice suivant. Quelle stratégie respecte le mieux la coopération ?',options:['Le plus rapide décide seul','Le rôle concerné regarde puis explique à tous','On ignore l’indice'],answer:1,points:100,hints:['Le jeu doit faire circuler l’information.','Un joueur observe, puis partage avec toute l’équipe.'],role:'coordinateur'},
      {id:'tq7',chapter:'final',type:'text',title:'Le Sceau Maître',prompt:'Combine les trois éléments : LUNE + AMBRE + OMBRE. Prends leurs initiales pour former le mot de passe final.',answer:['LAO'],points:250,hints:['Ne garde que la première lettre de chaque mot.','Lune = L, Ambre = A, Ombre = O.'],fact:'Vous avez ouvert le temple en utilisant plusieurs compétences complémentaires.',role:'coordinateur'}
    ],
    finale:'Le temple reconnaît votre équipe. Les quatre sceaux s’alignent et la porte s’ouvre : vous avez réussi parce que les informations ont circulé entre les joueurs.'
  },
  {
    id:'mode-silence',
    category:'impact',
    title:'Mode Silence',
    subtitle:'Enquête • Harcèlement • Réseaux sociaux',
    age:'11–17', durationMin:50, players:'3–6', indoor:true, outdoor:false,
    colorTag:'Mission à impact',
    description:'Une enquête interactive sur une situation fictive de harcèlement. Les joueurs doivent reconstituer les faits, distinguer conflit et harcèlement, identifier le rôle des témoins et choisir des réactions utiles.',
    intro:'Depuis plusieurs jours, un compte anonyme vise un élève. Votre mission n’est pas de “trouver un coupable” à tout prix : vous devez comprendre la situation et empêcher qu’elle continue.',
    learning:'Reconnaître répétition, rapport de force, isolement, cyberharcèlement et possibilités d’aide.',
    sources:[
      {label:'Ministère de l’Éducation nationale — Non au harcèlement',url:'https://www.education.gouv.fr/non-au-harcelement'},
      {label:'Ministère de l’Éducation nationale — Politique de lutte contre le harcèlement à l’École',url:'https://www.education.gouv.fr/non-au-harcelement/politique-de-lutte-contre-le-harcelement-l-ecole-289530'}
    ],
    debrief:[
      'À quel moment avez-vous compris qu’il ne s’agissait plus d’une simple dispute ?',
      'Quel rôle les témoins ont-ils joué ?',
      'Quelles actions peuvent aider sans mettre la victime davantage en difficulté ?',
      'À quel moment faut-il demander l’aide d’un adulte ou d’un professionnel ?'
    ],
    chapters:[
      {id:'signal',title:'1. Les signaux',icon:'Ⅰ'},
      {id:'chronologie',title:'2. La chronologie',icon:'Ⅱ'},
      {id:'temoins',title:'3. Les témoins',icon:'Ⅲ'},
      {id:'agir',title:'4. Agir',icon:'Ⅳ'},
    ],
    steps:[
      {id:'ms1',chapter:'signal',type:'choice',title:'Un message isolé ?',prompt:'Un élève reçoit une remarque blessante une seule fois après une dispute. À ce stade, quelle conclusion est la plus juste ?',options:['C’est automatiquement du harcèlement','Il faut observer le contexte et la répétition','Ce n’est jamais grave'],answer:1,points:100,hints:['Le harcèlement ne se définit pas par un seul mot-clé.','Le contexte, la répétition et le rapport de force sont importants.'],fact:'Une situation doit être comprise dans son contexte : répétition, isolement et rapport de force sont des repères importants.'},
      {id:'ms2',chapter:'chronologie',type:'order',title:'Remets les faits dans l’ordre',prompt:'Classe les événements de l’histoire fictive.',items:['Des captures circulent dans un groupe','Une blague vise régulièrement la même personne','La personne commence à éviter le groupe','Un témoin en parle à un adulte'],answer:['Une blague vise régulièrement la même personne','Des captures circulent dans un groupe','La personne commence à éviter le groupe','Un témoin en parle à un adulte'],points:140,hints:['Commence par ce qui déclenche la répétition.','Le retrait de la personne arrive après la diffusion répétée.'],fact:'Une chronologie aide à distinguer un incident ponctuel d’une situation qui s’installe.'},
      {id:'ms3',chapter:'temoins',type:'multi',title:'Que peut faire un témoin ?',prompt:'Sélectionne les réactions qui peuvent réellement aider.',options:[{id:'adulte',label:'En parler à un adulte de confiance'},{id:'partager',label:'Partager la publication pour montrer que c’est grave'},{id:'soutenir',label:'Soutenir la personne visée'},{id:'signaler',label:'Signaler le contenu ou le compte'},{id:'rire',label:'Rire pour ne pas devenir la prochaine cible'}],answer:['adulte','soutenir','signaler'],points:170,hints:['Partager un contenu humiliant peut amplifier sa diffusion.','Aider = soutenir, signaler et chercher de l’aide.'],fact:'Un témoin peut rompre l’isolement en soutenant la personne et en alertant un adulte ou un service adapté.'},
      {id:'ms4',chapter:'temoins',type:'team_split',title:'Les quatre points de vue',prompt:'Chaque rôle reçoit un fragment du récit. Mettez vos informations en commun pour identifier le mot-clé.',cards:{observateur:'La même cible est visée plusieurs fois.',messager:'Plusieurs personnes assistent aux faits sans intervenir.',archiviste:'La personne visée commence à s’isoler.',decodeur:'Les messages continuent aussi en ligne.',default:'Partage ton fragment avec les autres.'},answer:'REPETITION',points:180,hints:['Quel phénomène revient dans plusieurs fragments ?','Le mot attendu est RÉPÉTITION.'],fact:'La répétition est l’un des repères essentiels pour comprendre une situation de harcèlement.'},
      {id:'ms5',chapter:'agir',type:'choice',title:'Réagir sans aggraver',prompt:'La victime te montre des messages reçus. Quelle première réaction est la plus utile ?',options:['Lui dire de répondre plus fort','L’écouter, conserver les preuves et chercher de l’aide avec elle','Publier immédiatement les captures'],answer:1,points:180,hints:['Évite les actions qui peuvent augmenter l’exposition.','Écouter, préserver les preuves et demander de l’aide sont de bons premiers réflexes.'],fact:'Préserver les preuves peut être utile avant de signaler ou demander de l’aide.'},
      {id:'ms6',chapter:'agir',type:'text',title:'Le mot de sortie',prompt:'Complète : « On ne reste pas seul. On en ______. »',answer:['PARLE','PARLER'],points:220,hints:['Le but est de rompre l’isolement.','Le mot commence par P.'],fact:'En France, le 3018 est le numéro national pour les jeunes victimes ou témoins de violences numériques et de harcèlement.',source:'Ministère de l’Éducation nationale / 3018'}
    ],
    finale:'Vous avez reconstitué la situation et choisi des réactions qui protègent mieux la personne visée. La mission se termine par un débrief avec l’animateur : le jeu ouvre la discussion, il ne remplace pas l’accompagnement d’un adulte.'
  },
  {
    id:'signal-zero',
    category:'fun',
    title:'Signal Zéro',
    subtitle:'Science-fiction • Cyber • Urgence',
    age:'13+', durationMin:45, players:'2–6', indoor:true, outdoor:false,
    colorTag:'Sci-fi',
    description:'Une station orbitale a perdu son système de navigation. L’équipe doit restaurer les modules avant la fin du compte à rebours.',
    intro:'La station ECHO-7 dérive. Quatre modules répondent encore. Vous êtes la dernière équipe capable de rétablir le signal.',
    chapters:[{id:'boot',title:'1. Redémarrage',icon:'Ⅰ'},{id:'reseau',title:'2. Réseau',icon:'Ⅱ'},{id:'noyau',title:'3. Noyau',icon:'Ⅲ'}],
    steps:[
      {id:'sz1',chapter:'boot',type:'text',title:'Code de démarrage',prompt:'Convertis le binaire 0101 en nombre décimal.',answer:['5','05'],points:120,hints:['Additionne les valeurs des positions actives.','0101 = 4 + 1.'],reward:{id:'module-a',label:'Module A',icon:'A'}},
      {id:'sz2',chapter:'reseau',type:'choice',title:'Paquet perdu',prompt:'Le réseau reçoit les séquences 2, 4, 8, 16… Quelle valeur suit ?',options:['18','24','32','64'],answer:2,points:120,hints:['Chaque nombre est multiplié par 2.','16 × 2 = 32.']},
      {id:'sz3',chapter:'reseau',type:'multi',title:'Modules actifs',prompt:'Sélectionne les modules dont la somme vaut 10.',options:[{id:'m2',label:'Module 2'},{id:'m3',label:'Module 3'},{id:'m5',label:'Module 5'},{id:'m8',label:'Module 8'}],answer:['m2','m3','m5'],points:150,hints:['Il existe plusieurs valeurs à combiner.','2 + 3 + 5 = 10.'],reward:{id:'module-b',label:'Module B',icon:'B'}},
      {id:'sz4',chapter:'noyau',type:'team_split',title:'Synchronisation',prompt:'Combinez vos fragments pour obtenir le mot de passe du noyau.',cards:{observateur:'Lettre 1 : E',decodeur:'Lettre 2 : C',archiviste:'Lettre 3 : H',gardien:'Lettre 4 : O',default:'Demande les lettres aux autres joueurs.'},answer:'ECHO',points:220,hints:['Lisez les lettres dans l’ordre des positions.','E + C + H + O.']}
    ],
    finale:'Le signal revient. ECHO-7 corrige sa trajectoire et la station vous identifie comme équipe de récupération prioritaire.'
  }
];
