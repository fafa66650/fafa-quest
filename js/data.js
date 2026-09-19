export const DATA = {
  "APP_VERSION": "0.8.2",
  "DIFFICULTIES": [
    {
      "id": "decouverte",
      "label": "Découverte",
      "rank": 0,
      "hintBudget": 8,
      "scoreMultiplier": 1,
      "timeMultiplier": 1.25,
      "attemptPenalty": 0,
      "memoryMs": 7000,
      "solutionDelaySec": 0,
      "description": "Guidé : plus de temps, aides rapides et formulations simplifiées."
    },
    {
      "id": "aventure",
      "label": "Aventure",
      "rank": 1,
      "hintBudget": 6,
      "scoreMultiplier": 1.15,
      "timeMultiplier": 1,
      "attemptPenalty": 5,
      "memoryMs": 5000,
      "solutionDelaySec": 120,
      "description": "Le niveau standard : indices progressifs et difficulté équilibrée."
    },
    {
      "id": "expert",
      "label": "Expert",
      "rank": 2,
      "hintBudget": 4,
      "scoreMultiplier": 1.35,
      "timeMultiplier": 0.9,
      "attemptPenalty": 10,
      "memoryMs": 3500,
      "solutionDelaySec": 240,
      "description": "Réponses moins guidées, propositions masquées et méta-énigmes supplémentaires."
    },
    {
      "id": "maitre",
      "label": "Maître",
      "rank": 3,
      "hintBudget": 3,
      "scoreMultiplier": 1.55,
      "timeMultiplier": 0.82,
      "attemptPenalty": 15,
      "memoryMs": 2500,
      "solutionDelaySec": 360,
      "description": "Escape pur : peu d’aide, temps serré et résolution sans propositions quand c’est possible."
    }
  ],
  "ROLE_LIBRARY": [
    {
      "id": "observateur",
      "label": "Observateur",
      "icon": "◉",
      "mission": "Repère les détails visuels et vérifie la salle avant toute conclusion."
    },
    {
      "id": "decodeur",
      "label": "Décodeur",
      "icon": "⌘",
      "mission": "Prend en charge codes, alphabets secrets, suites et combinaisons."
    },
    {
      "id": "messager",
      "label": "Messager",
      "icon": "↔",
      "mission": "Fait circuler les informations et évite qu’un joueur garde un indice pour lui."
    },
    {
      "id": "gardien",
      "label": "Gardien du temps",
      "icon": "◷",
      "mission": "Surveille le chrono et décide avec l’équipe quand utiliser un indice."
    },
    {
      "id": "archiviste",
      "label": "Archiviste",
      "icon": "▤",
      "mission": "Note les codes, objets, fragments et informations qui pourront resservir plus tard."
    },
    {
      "id": "coordinateur",
      "label": "Coordinateur",
      "icon": "◇",
      "mission": "Distribue la parole et vérifie que chacun participe avant une validation."
    }
  ],
  "TEAM_NAMES": [
    "Phoenix",
    "Kraken",
    "Nova",
    "Cobra",
    "Orion",
    "Éclipse",
    "Atlas",
    "Comète",
    "Titan",
    "Vortex",
    "Lynx",
    "Aurore"
  ],
  "SCENARIOS": [
    {
      "id": "quatre-mondes",
      "title": "Les Quatre Mondes",
      "subtitle": "Aventure physique • Salles • Écran central",
      "category": "fun",
      "age": "10+",
      "durationMin": 70,
      "players": "3–6 / équipe",
      "formats": [
        "central",
        "hybride",
        "equipe"
      ],
      "icon": "✦",
      "accent": "#73e59a",
      "description": "Un grand jeu pensé exactement pour plusieurs salles ou espaces. Chaque équipe fouille un monde, résout des épreuves physiques puis revient au terminal central saisir le code qui débloque l’univers suivant.",
      "intro": "La Porte des Mondes s’est fracturée. Quatre univers se superposent et le cœur du passage s’éteindra lorsque le chrono atteindra zéro. Explorez chaque monde, récupérez ses fragments et revenez au terminal pour ouvrir le suivant.",
      "steps": [
        {
          "id": "qm1",
          "chapter": "sylve",
          "type": "order",
          "title": "Les balises du sous-bois",
          "prompt": "Quatre balises portent III, IX, V et XII. Classe-les de la plus petite à la plus grande.",
          "answer": [
            "III",
            "V",
            "IX",
            "XII"
          ],
          "points": 120,
          "hints": [
            "Ce sont des chiffres romains.",
            "3, 5, 9, 12."
          ],
          "reward": {
            "id": "feuille-verre",
            "label": "Feuille de verre",
            "icon": "❖"
          },
          "items": [
            "XII",
            "III",
            "V",
            "IX"
          ]
        },
        {
          "id": "qm2",
          "chapter": "sylve",
          "type": "memory",
          "title": "Mémoire des lucioles",
          "prompt": "Mémorise la séquence lumineuse puis reproduis-la.",
          "answer": [
            "vert",
            "bleu",
            "orange",
            "violet"
          ],
          "points": 140,
          "hints": [
            "Observe d’abord sans cliquer.",
            "La séquence contient quatre couleurs."
          ],
          "sequence": [
            "vert",
            "bleu",
            "orange",
            "violet"
          ],
          "tokens": [
            "vert",
            "bleu",
            "orange",
            "violet",
            "rouge"
          ]
        },
        {
          "id": "qm3",
          "chapter": "dunes",
          "type": "color_code",
          "title": "Le cadran enfoui",
          "prompt": "Entre le code couleur trouvé sur les fragments.",
          "answer": [
            "rouge",
            "bleu",
            "noir"
          ],
          "points": 140,
          "hints": [
            "Élimine les couleurs déclarées impossibles.",
            "Le code est rouge → bleu → noir."
          ],
          "tokens": [
            "rouge",
            "bleu",
            "noir",
            "jaune",
            "vert"
          ]
        },
        {
          "id": "qm4",
          "chapter": "dunes",
          "type": "text",
          "title": "Carte perforée",
          "prompt": "En superposant les deux fragments, un mot apparaît. Saisis-le.",
          "answer": [
            "AZUR"
          ],
          "points": 150,
          "hints": [
            "Aligne les repères d’angle.",
            "Le mot révélé est une couleur de ciel."
          ],
          "mechanic": "overlay"
        },
        {
          "id": "qm5",
          "chapter": "rouages",
          "type": "keypad",
          "title": "Le verrou des rouages",
          "prompt": "Trouve le code : 4635 = un chiffre bien placé ; 2807 = deux bons mais mal placés ; 4159 = un bon mal placé ; 3789 = rien de bon ; 7452 = un bon bien placé.",
          "answer": "0612",
          "points": 180,
          "hints": [
            "Commence par éliminer 3, 7, 8 et 9.",
            "Le code est 0-6-1-2."
          ]
        },
        {
          "id": "qm6",
          "chapter": "orage",
          "type": "text",
          "title": "Le message miroir",
          "prompt": "Un miroir révèle « EGARO ». Quel mot faut-il saisir ?",
          "answer": [
            "ORAGE"
          ],
          "points": 120,
          "hints": [
            "Lis de droite à gauche.",
            "EGARO → ORAGE."
          ]
        },
        {
          "id": "qm7",
          "chapter": "orage",
          "type": "team_split",
          "title": "Fragments répartis",
          "prompt": "Chaque rôle possède une partie du code final. Réunissez-les.",
          "answer": "5824",
          "points": 200,
          "hints": [
            "Demandez à chaque rôle de lire son fragment.",
            "5 • 8 • 2 • 4"
          ],
          "cards": {
            "observateur": "Premier chiffre : 10 ÷ 2",
            "decodeur": "Deuxième chiffre : VIII",
            "archiviste": "Troisième chiffre : nombre de lunes visibles sur la carte = 2",
            "gardien": "Dernier chiffre : 2 × 2",
            "default": "Partage ton information."
          }
        },
        {
          "id": "qm8",
          "chapter": "final",
          "type": "text",
          "title": "Le cœur du passage",
          "prompt": "Assemble les initiales des quatre mondes : Sylve, Dunes, Rouages, Orage.",
          "answer": [
            "SDRO"
          ],
          "points": 250,
          "hints": [
            "Une lettre par monde.",
            "S + D + R + O."
          ],
          "minRank": 2,
          "fact": "Le niveau Expert ajoute une méta-énigme qui oblige à conserver la structure complète de l’aventure."
        }
      ],
      "chapters": [
        {
          "id": "sylve",
          "title": "Monde 1 — La Sylve de Verre"
        },
        {
          "id": "dunes",
          "title": "Monde 2 — Les Dunes Magnétiques"
        },
        {
          "id": "rouages",
          "title": "Monde 3 — La Cité des Rouages"
        },
        {
          "id": "orage",
          "title": "Monde 4 — La Citadelle d’Orage"
        },
        {
          "id": "final",
          "title": "Final — Le Cœur du Passage"
        }
      ],
      "centralWorlds": [
        {
          "id": "sylve",
          "title": "La Sylve de Verre",
          "icon": "🌿",
          "code": "5831",
          "codeType": "digits",
          "brief": "Fouillez le monde vert. Quatre fragments portent les valeurs nécessaires au premier code.",
          "hostSetup": "Cachez 4 cartes vertes. Une énigme d’ordre, une mémoire visuelle et un fragment marqué 31 permettent de former 5831.",
          "success": "La forêt se fige. Un portail de sable s’ouvre.",
          "props": [
            "4 cartes vertes",
            "une enveloppe mémoire",
            "un petit coffre ou une boîte"
          ]
        },
        {
          "id": "dunes",
          "title": "Les Dunes Magnétiques",
          "icon": "◈",
          "code": "AZUR",
          "codeType": "text",
          "brief": "Trouvez deux morceaux transparents et alignez-les. Le mot révélé ouvre le passage.",
          "hostSetup": "Placez deux calques ou cartes perforées dans des cachettes différentes. Leur superposition doit révéler AZUR.",
          "success": "Le sable se soulève et laisse apparaître une cité mécanique.",
          "props": [
            "2 calques",
            "ruban adhésif de repérage"
          ]
        },
        {
          "id": "rouages",
          "title": "La Cité des Rouages",
          "icon": "⚙",
          "code": "0612",
          "codeType": "digits",
          "brief": "Un verrou logique protège le mécanisme. Toutes les informations utiles sont dans la salle.",
          "hostSetup": "Affichez ou cachez les cinq propositions de type Mastermind. Le code final est 0612.",
          "success": "Les engrenages repartent. La dernière citadelle apparaît.",
          "props": [
            "5 cartes logique",
            "cadenas factice facultatif"
          ]
        },
        {
          "id": "orage",
          "title": "La Citadelle d’Orage",
          "icon": "ϟ",
          "code": "5824",
          "codeType": "digits",
          "brief": "Répartissez les fragments entre les joueurs. Aucun joueur ne possède seul la combinaison.",
          "hostSetup": "Donnez un fragment différent à quatre rôles. Ils doivent communiquer pour former 5824.",
          "success": "Le cœur du passage est stabilisé.",
          "props": [
            "4 fragments de rôle"
          ]
        }
      ],
      "mechanics": [
        "fouille",
        "mémoire",
        "ordre",
        "calque",
        "code couleur",
        "Mastermind",
        "coopération distribuée",
        "terminal central"
      ],
      "materials": [
        "ordinateur relié à une TV ou vidéoprojecteur",
        "4 zones/salles si possible",
        "enveloppes/cartes imprimées",
        "petits coffres facultatifs"
      ],
      "setup": [
        "Créer 2 à 6 équipes de 3 à 6 joueurs.",
        "Installer un univers par salle ou zone.",
        "Laisser le terminal central sur l’ordinateur relié à la TV.",
        "Chaque équipe revient saisir son code pour débloquer son monde suivant."
      ],
      "audience": [
        "enfant",
        "ado",
        "adulte",
        "famille"
      ],
      "finale": "Les quatre mondes se séparent à nouveau. Le passage est sauvé : aucune équipe n’aurait pu réussir sans faire circuler ses informations.",
      "genre": "mondes_aventure",
      "challenge": 3,
      "recommendedDifficulty": "aventure",
      "sourceOrigins": [
        "Mécanique de progression par mondes, codes et terminal central adaptée du PowerPoint SuperMario fourni ; univers et visuels Nintendo non repris."
      ],
      "printables": [
        {
          "title": "Panneaux des quatre mondes",
          "kind": "Installer",
          "body": "Panneaux de zone prêts à afficher.",
          "template": "specific-signs",
          "copies": "1 jeu par installation",
          "construction": "Imprimer en A4 ou A3 et fixer à l’entrée de chaque zone.",
          "items": [
            "MONDE 1 — LA SYLVE DE VERRE",
            "MONDE 2 — LES DUNES MAGNÉTIQUES",
            "MONDE 3 — LA CITÉ DES ROUAGES",
            "MONDE 4 — LA CITADELLE D’ORAGE"
          ]
        },
        {
          "title": "Balises du sous-bois",
          "kind": "Cacher",
          "body": "Quatre balises romaines à retrouver puis classer.",
          "template": "specific-cards",
          "copies": "1 par équipe",
          "construction": "Découper sur les pointillés puis plastifier si le support doit être réutilisé.",
          "items": [
            "III",
            "IX",
            "V",
            "XII"
          ]
        },
        {
          "title": "Lucioles de la Sylve",
          "kind": "Découper",
          "body": "Cartes à remettre dans le bon ordre.",
          "template": "specific-sequence",
          "copies": "1 par équipe",
          "construction": "Découper puis mélanger avant la partie.",
          "items": [
            "VERT",
            "BLEU",
            "ORANGE",
            "VIOLET",
            "ROUGE — LEURRE"
          ]
        },
        {
          "title": "Fragments du cadran",
          "kind": "Cacher",
          "body": "Trois fragments utiles et deux leurres.",
          "template": "specific-cards",
          "copies": "1 par équipe",
          "construction": "Découper sur les pointillés puis plastifier si le support doit être réutilisé.",
          "items": [
            "ROUGE • 1",
            "BLEU • 2",
            "NOIR • 3",
            "JAUNE • LEURRE",
            "VERT • LEURRE"
          ]
        },
        {
          "title": "Deux calques AZUR",
          "kind": "Superposer",
          "body": "Les deux calques réunis doivent révéler AZUR.",
          "template": "overlay-azur",
          "copies": "1 paire par équipe",
          "construction": "Imprimer sur deux transparents A4 ou recopier sur deux feuilles de calque. Aligner les repères d’angle."
        },
        {
          "title": "Verrou des Rouages",
          "kind": "Imprimer",
          "body": "Résoudre le Mastermind puis saisir 0612 au terminal.",
          "template": "specific-sheet",
          "copies": "1 par équipe",
          "construction": "Imprimer et glisser dans une enveloppe de mission.",
          "lines": [
            "4635 — 1 chiffre bon et bien placé",
            "2807 — 2 bons mais mal placés",
            "4159 — 1 bon mais mal placé",
            "3789 — rien n’est bon",
            "7452 — 1 bon et bien placé",
            "CODE : _ _ _ _"
          ]
        },
        {
          "title": "Message de la Citadelle",
          "kind": "Miroir",
          "body": "Le message doit être lu avec un miroir.",
          "template": "mirror-orage",
          "copies": "1 par équipe",
          "construction": "Imprimer puis cacher dans la zone Orage.",
          "text": "EGARO"
        },
        {
          "title": "Fragments 5824",
          "kind": "Distribuer",
          "body": "Chaque carte doit être remise uniquement au rôle indiqué.",
          "template": "specific-roles",
          "copies": "1 jeu par équipe",
          "construction": "Découper les cartes et les distribuer séparément.",
          "items": [
            {
              "title": "OBSERVATEUR",
              "text": "Premier chiffre : 10 ÷ 2"
            },
            {
              "title": "DÉCODEUR",
              "text": "Deuxième chiffre : VIII"
            },
            {
              "title": "ARCHIVISTE",
              "text": "Troisième chiffre : nombre de lunes = 2"
            },
            {
              "title": "GARDIEN DU TEMPS",
              "text": "Dernier chiffre : 2 × 2"
            }
          ]
        },
        {
          "title": "Cartes finale — Initiales",
          "kind": "Conserver",
          "body": "Une carte par monde pour la méta-énigme finale.",
          "template": "specific-cards",
          "copies": "1 par équipe",
          "construction": "Découper sur les pointillés puis plastifier si le support doit être réutilisé.",
          "items": [
            "SYLVE — S",
            "DUNES — D",
            "ROUAGES — R",
            "ORAGE — O"
          ]
        }
      ],
      "prepMin": 30,
      "soloMode": "adapt"
    },
    {
      "id": "coffre-six-secrets",
      "title": "La Clé sous la Nappe — Six Missions",
      "subtitle": "Événement • 6 missions • Numérique + papier",
      "category": "fun",
      "age": "10+",
      "durationMin": 60,
      "players": "2–6 / équipe",
      "formats": [
        "numerique",
        "hybride",
        "equipe",
        "central"
      ],
      "icon": "⌘",
      "accent": "#ffbf75",
      "description": "Une version FAFA QUEST du grand jeu en six missions : chaque épreuve délivre un mot. En numérique, l’application simule les manipulations ; en hybride, tu peux cacher enveloppes, QR, calques, ballons et clé réelle.",
      "intro": "Un coffre est verrouillé. Six missions ont été dispersées. Chacune fournit un mot ; seuls les six mots remis dans le bon ordre révéleront où se trouve la clé finale.",
      "steps": [
        {
          "id": "cs1",
          "chapter": "m1",
          "type": "order",
          "title": "Tangram numérique",
          "prompt": "Replace les 7 pièces dans l’ordre indiqué par la silhouette. En mode hybride, assemble le vrai tangram puis retourne-le.",
          "items": [
            "Grand triangle rose",
            "Petit triangle jaune",
            "Carré bleu",
            "Parallélogramme cyan",
            "Grand triangle violet",
            "Petit triangle orange",
            "Triangle vert"
          ],
          "answer": [
            "Grand triangle rose",
            "Grand triangle violet",
            "Petit triangle orange",
            "Carré bleu",
            "Petit triangle jaune",
            "Parallélogramme cyan",
            "Triangle vert"
          ],
          "points": 130,
          "hints": [
            "Commence par les deux grandes pièces qui forment l’angle gauche.",
            "Ordre : rose → violet → orange → bleu → jaune → cyan → vert."
          ],
          "fact": "Mot obtenu : LA. Conserve-le pour la phrase finale."
        },
        {
          "id": "cs2",
          "chapter": "m2",
          "type": "color_code",
          "title": "Le verrou couleur",
          "prompt": "À partir des contraintes, entre les trois couleurs dans l’ordre.",
          "tokens": [
            "rouge",
            "bleu",
            "noir",
            "jaune",
            "vert",
            "marron"
          ],
          "answer": [
            "rouge",
            "bleu",
            "noir"
          ],
          "points": 130,
          "hints": [
            "Les couleurs déclarées impossibles doivent être éliminées.",
            "Rouge → bleu → noir."
          ]
        },
        {
          "id": "cs3",
          "chapter": "m2",
          "type": "keypad",
          "title": "Le verrou chiffres",
          "prompt": "4635 : 1 bon bien placé • 2807 : 2 bons mal placés • 4159 : 1 bon mal placé • 3789 : rien de bon • 7452 : 1 bon bien placé.",
          "answer": "0612",
          "points": 160,
          "hints": [
            "Commence par éliminer 3, 7, 8 et 9.",
            "0-6-1-2."
          ],
          "fact": "Les deux verrous délivrent le mot SOUS."
        },
        {
          "id": "cs4",
          "chapter": "m3",
          "type": "hotspot",
          "title": "Les ballons à signal",
          "prompt": "En numérique, fouille les ballons et retrouve les trois fragments utiles. En hybride, les QR peuvent être réellement cachés dans des ballons de la couleur de l’équipe.",
          "spots": [
            {
              "id": "b1",
              "label": "Ballon orange",
              "fragment": "E",
              "correct": true
            },
            {
              "id": "b2",
              "label": "Ballon bleu",
              "fragment": "S",
              "correct": true
            },
            {
              "id": "b3",
              "label": "Ballon vert",
              "fragment": "T",
              "correct": true
            },
            {
              "id": "b4",
              "label": "Ballon violet",
              "fragment": "Rien ici",
              "correct": false
            },
            {
              "id": "b5",
              "label": "Ballon jaune",
              "fragment": "Fausse piste",
              "correct": false
            }
          ],
          "required": [
            "b1",
            "b2",
            "b3"
          ],
          "answer": [
            "EST"
          ],
          "points": 150,
          "hints": [
            "Trois ballons utiles donnent chacun une lettre.",
            "E + S + T = EST."
          ],
          "fact": "Mot obtenu : EST.",
          "expertSpots": [
            {
              "id": "ballon-blanc",
              "label": "Ballon blanc",
              "correct": false
            },
            {
              "id": "ballon-noir",
              "label": "Ballon noir",
              "correct": false
            }
          ]
        },
        {
          "id": "cs5",
          "chapter": "m4",
          "type": "reveal",
          "title": "La carte à trous",
          "prompt": "Superpose virtuellement le masque sur le texte, ou utilise une vraie carte perforée en mode hybride. Quel mot reste visible ?",
          "revealMode": "stencil",
          "stages": [
            {
              "label": "Placer le masque",
              "content": "Les ouvertures se calent sur quatre repères."
            },
            {
              "label": "Aligner les coins",
              "content": "Les lettres parasites disparaissent."
            },
            {
              "label": "Voir le message",
              "content": "L • A"
            }
          ],
          "answer": [
            "LA"
          ],
          "points": 140,
          "hints": [
            "Les repères d’angle doivent coïncider.",
            "Le mot révélé est LA."
          ],
          "fact": "Mot obtenu : LA."
        },
        {
          "id": "cs6",
          "chapter": "m5",
          "type": "reveal",
          "title": "La feuille qui se plie",
          "prompt": "Déplie/replie les trois volets numériques pour faire apparaître les définitions, puis trouve le mot commun.",
          "revealMode": "fold",
          "stages": [
            {
              "label": "Pli 1",
              "content": "Objet qui ouvre un verrou."
            },
            {
              "label": "Pli 2",
              "content": "Elle peut être USB, plate ou anglaise."
            },
            {
              "label": "Pli 3",
              "content": "Mot de 3 lettres."
            }
          ],
          "answer": [
            "CLE",
            "CLÉ"
          ],
          "points": 140,
          "hints": [
            "Les trois définitions pointent vers le même mot.",
            "CLÉ."
          ],
          "fact": "Mot obtenu : CLÉ."
        },
        {
          "id": "cs7",
          "chapter": "m6",
          "type": "reveal",
          "title": "Filtre rouge — NAPPE",
          "prompt": "Choisis le bon filtre pour faire ressortir la devinette cachée. Quel mot désigne l’objet recherché ?",
          "revealMode": "filter",
          "stages": [
            {
              "label": "Filtre bleu",
              "content": "Le texte reste illisible."
            },
            {
              "label": "Filtre vert",
              "content": "Des lettres parasites dominent encore."
            },
            {
              "label": "Filtre rouge",
              "content": "Le dîner repose sur elle • elle peut être en dentelle • on la pose sur une table."
            }
          ],
          "answer": [
            "NAPPE"
          ],
          "points": 150,
          "hints": [
            "Le bon filtre est rouge.",
            "NAPPE."
          ],
          "fact": "Mot obtenu : NAPPE."
        },
        {
          "id": "cs8",
          "chapter": "final",
          "type": "order",
          "title": "La phrase finale",
          "prompt": "Remets les six mots dans l’ordre pour découvrir la cachette de la clé.",
          "items": [
            "SOUS",
            "LA",
            "NAPPE",
            "EST",
            "CLÉ",
            "LA"
          ],
          "answer": [
            "LA",
            "CLÉ",
            "EST",
            "SOUS",
            "LA",
            "NAPPE"
          ],
          "points": 220,
          "hints": [
            "La phrase commence par « LA CLÉ… ».",
            "LA CLÉ EST SOUS LA NAPPE."
          ]
        }
      ],
      "chapters": [
        {
          "id": "m1",
          "title": "Mission 1 — La forme secrète"
        },
        {
          "id": "m2",
          "title": "Mission 2 — Double verrou"
        },
        {
          "id": "m3",
          "title": "Mission 3 — Chasse aux signaux"
        },
        {
          "id": "m4",
          "title": "Mission 4 — La carte perforée"
        },
        {
          "id": "m5",
          "title": "Mission 5 — La feuille pliée"
        },
        {
          "id": "m6",
          "title": "Mission 6 — Le filtre rouge"
        },
        {
          "id": "final",
          "title": "Final — La phrase cachée"
        }
      ],
      "centralWorlds": [
        {
          "id": "m12",
          "title": "Missions 1 & 2",
          "icon": "✂",
          "code": "LACLE",
          "codeType": "text",
          "brief": "Résolvez le tangram puis le verrou couleur. Conservez les deux mots.",
          "hostSetup": "Préparer un tangram et une énigme de couleurs. Les mots sont LA et CLÉ.",
          "success": "Deux mots sont enregistrés.",
          "props": [
            "tangram",
            "énigme couleur"
          ]
        },
        {
          "id": "m34",
          "title": "Missions 3 & 4",
          "icon": "⌗",
          "code": "ESTSOUS",
          "codeType": "text",
          "brief": "Cherchez le signal caché puis utilisez la carte à trous.",
          "hostSetup": "Cacher QR/images et une grille perforée. Les mots sont EST et SOUS.",
          "success": "Quatre mots sont maintenant connus.",
          "props": [
            "QR ou images",
            "carte perforée"
          ]
        },
        {
          "id": "m56",
          "title": "Missions 5 & 6",
          "icon": "▤",
          "code": "LETAPIS",
          "codeType": "text",
          "brief": "Terminez les mots croisés puis révélez le filtre final.",
          "hostSetup": "Préparer mots fléchés et filtre/calque. Les mots sont LE et TAPIS.",
          "success": "Les six mots peuvent former la phrase finale.",
          "props": [
            "grille de mots",
            "filtre/calque"
          ]
        },
        {
          "id": "final",
          "title": "La cache finale",
          "icon": "🔑",
          "code": "LACLEESTSOUSLETAPIS",
          "codeType": "text",
          "brief": "Remettez les six mots dans l’ordre et saisissez la phrase sans espaces.",
          "hostSetup": "Placer réellement la clé sous un tapis ou adapter la cache et le code dans les données avant l’animation.",
          "success": "La cache finale est révélée.",
          "props": [
            "clé",
            "coffre/cadenas"
          ]
        }
      ],
      "mechanics": [
        "tangram / ordre",
        "code couleur",
        "Mastermind chiffres",
        "chasse QR / ballons",
        "carte à trous",
        "pliage",
        "filtre coloré",
        "méta-phrase"
      ],
      "materials": [
        "ordinateur ou téléphone",
        "option hybride : tangram imprimé",
        "ballons + QR ou images",
        "carte perforée",
        "feuille à plier",
        "calque/filtre rouge",
        "coffre + cadenas + clé réelle"
      ],
      "setup": [
        "Mode 100 % numérique : aucune impression obligatoire.",
        "Mode hybride : cacher une mission/enveloppe par zone, avec une couleur par équipe si plusieurs groupes jouent en même temps.",
        "Placer la clé réelle sous une nappe ou choisir une cachette équivalente et modifier la phrase finale avant l’animation."
      ],
      "audience": [
        "enfant",
        "ado",
        "adulte",
        "famille"
      ],
      "finale": "Les six mots sont réunis : LA CLÉ EST SOUS LA NAPPE. L’équipe doit maintenant trouver la vraie clé si le mode hybride est activé.",
      "genre": "evenement_hybride",
      "challenge": 2,
      "recommendedDifficulty": "aventure",
      "playStyles": {
        "digital": "Toutes les manipulations sont simulées à l’écran.",
        "hybrid": "L’application guide et valide, tandis que les objets réels sont cachés dans la salle."
      },
      "printables": [
        {
          "title": "Mission 1 — Tangram",
          "kind": "Découper",
          "body": "Préparer 7 pièces colorées. Écrire/placer le mot LA au dos une fois l’assemblage terminé.",
          "template": "tangram",
          "copies": "1 jeu par équipe",
          "construction": "Imprimer le tangram sur papier épais, découper les 7 pièces, assembler une fois pour contrôle, écrire/placer LA au dos puis mélanger les pièces dans l’enveloppe Mission 1."
        },
        {
          "title": "Mission 2 — Verrous",
          "kind": "Afficher",
          "body": "Préparer une feuille code couleur et une feuille code chiffres. Réponse : rouge-bleu-noir et 0612.",
          "template": "mastermind-duo",
          "copies": "1 jeu par équipe",
          "construction": "Imprimer les deux verrous. Plastifier si réutilisation. Placer les feuilles ensemble dans l’enveloppe Mission 2 avec un feutre effaçable si plastifiées."
        },
        {
          "title": "Mission 3 — Ballons",
          "kind": "Cacher",
          "body": "Préparer 3 QR/images utiles qui donnent E, S, T et quelques leurres. Utiliser une couleur de ballon par équipe.",
          "template": "letter-cards",
          "copies": "1 série par équipe",
          "construction": "Imprimer et découper les cartes E, S, T et les leurres. Glisser chaque carte/QR dans un ballon de la couleur attribuée à l’équipe puis gonfler et disperser."
        },
        {
          "title": "Mission 4 — Carte à trous",
          "kind": "Découper",
          "body": "Préparer un masque perforé et un texte support ; l’alignement doit révéler LA.",
          "template": "stencil",
          "copies": "1 masque + 1 texte par équipe",
          "construction": "Imprimer le texte support et le masque sur papier épais. Découper uniquement les fenêtres indiquées. Tester l’alignement avant la séance : le masque correctement posé doit révéler LA."
        },
        {
          "title": "Mission 5 — Feuille pliée",
          "kind": "Plier",
          "body": "Préparer une feuille en 3 volets faisant apparaître des définitions convergeant vers CLÉ.",
          "template": "fold",
          "copies": "1 feuille par équipe",
          "construction": "Imprimer recto simple. Marquer les trois lignes de pliage, pré-plier puis remettre la feuille à plat. Les trois volets réunis doivent faire apparaître les définitions menant à CLÉ."
        },
        {
          "title": "Mission 6 — Filtre rouge",
          "kind": "Calque",
          "body": "Préparer un texte camouflé et un calque rouge révélant la devinette NAPPE.",
          "template": "red-filter",
          "copies": "1 feuille + 1 filtre par équipe",
          "construction": "Imprimer le document camouflé. Utiliser un transparent rouge de la FAFA BOX. Tester avec l’imprimante utilisée : la superposition doit rendre lisible la devinette NAPPE."
        },
        {
          "title": "Final — Coffre",
          "kind": "Installer",
          "body": "Cacher une clé sous une nappe et fermer un coffre avec un cadenas ou une chaîne.",
          "template": "final-key",
          "copies": "1 installation finale",
          "construction": "Cacher la clé physique sous une nappe, fermer le coffre avant l’arrivée du groupe et vérifier chaque clé/cadenas. Si aucune nappe n’est disponible, utiliser la carte-cachette imprimée “TABLE” comme emplacement de remplacement clairement défini avant la partie."
        },
        {
          "title": "Panneaux des six missions",
          "kind": "Installer",
          "body": "Panneaux de zone prêts à afficher.",
          "template": "specific-signs",
          "copies": "1 jeu par installation",
          "construction": "Imprimer en A4 ou A3 et fixer à l’entrée de chaque zone.",
          "items": [
            "MISSION 1 — ASSEMBLER",
            "MISSION 2 — DÉDUIRE",
            "MISSION 3 — CHASSER",
            "MISSION 4 — SUPERPOSER",
            "MISSION 5 — PLIER",
            "MISSION 6 — FILTRER"
          ]
        },
        {
          "title": "Étiquettes enveloppes M1 à M6",
          "kind": "Découper",
          "body": "Étiquettes pour préparer une série d’enveloppes par équipe.",
          "template": "envelope-labels",
          "copies": "1 série par équipe",
          "construction": "Découper et coller sur les enveloppes.",
          "labels": [
            "MISSION 1",
            "MISSION 2",
            "MISSION 3",
            "MISSION 4",
            "MISSION 5",
            "MISSION 6"
          ]
        },
        {
          "title": "Cartes cachettes",
          "kind": "Choisir / installer",
          "body": "Six cartes de cachette prêtes : BAR, CUISINE, CADRE, TABLE, ENTRÉE, COFFRE. Utiliser uniquement les lieux réellement présents dans la structure.",
          "template": "specific-cards",
          "copies": "1 par équipe",
          "construction": "Découper les six cartes, sélectionner avant la partie celles qui correspondent à des lieux réels de la structure, puis les placer avec les enveloppes de mission. Les cartes non utilisées restent dans la FAFA BOX.",
          "items": [
            "BAR",
            "CUISINE",
            "CADRE",
            "TABLE",
            "ENTRÉE",
            "COFFRE"
          ]
        }
      ],
      "sourceOrigins": [
        "Support mariage fourni par l’utilisateur : structure 6 missions + phrase finale + objets hybrides."
      ],
      "prepMin": 30,
      "soloMode": "adapt"
    },
    {
      "id": "paquebot-minuit",
      "title": "Paquebot Minuit — Le Dernier Canot",
      "subtitle": "Grand jeu • Fouille • UV • miroir • coffre",
      "category": "fun",
      "genre": "enquete_mystere",
      "age": "9+",
      "durationMin": 65,
      "players": "3–6 / équipe",
      "formats": [
        "central",
        "hybride",
        "equipe",
        "numerique"
      ],
      "icon": "⚓",
      "accent": "#7ec8ff",
      "challenge": 3,
      "recommendedDifficulty": "aventure",
      "description": "Un grand escape coopératif en plusieurs zones : fouille par couleur d’équipe, valise commune, miroir, UV, filtre rouge, cryptex numérique et ballon-clé final. Version numérique jouable seule, version hybride beaucoup plus immersive.",
      "intro": "Le paquebot Aurore a heurté un récif. Les systèmes d’évacuation sont verrouillés et le niveau d’eau monte. Vous avez moins d’une heure pour récupérer les codes du bureau du commandant et libérer le dernier canot.",
      "chapters": [
        {
          "id": "salon",
          "title": "Zone 1 — Salon de musique"
        },
        {
          "id": "bureau",
          "title": "Zone 2 — Bureau du commandant"
        },
        {
          "id": "coffre",
          "title": "Zone 3 — Le coffre du canot"
        }
      ],
      "steps": [
        {
          "id": "pm1",
          "chapter": "salon",
          "type": "hotspot",
          "title": "Fouille par couleur",
          "prompt": "Fouille la scène numérique et récupère uniquement les 4 indices marqués à la couleur de ton équipe. En hybride, chaque équipe ne prend que ses objets.",
          "spots": [
            {
              "id": "m",
              "label": "Miroir",
              "fragment": "MIROIR",
              "correct": true
            },
            {
              "id": "u",
              "label": "Lampe UV",
              "fragment": "UV",
              "correct": true
            },
            {
              "id": "r",
              "label": "Calque rouge",
              "fragment": "ROUGE",
              "correct": true
            },
            {
              "id": "c",
              "label": "Clé de valise",
              "fragment": "CLÉ",
              "correct": true
            },
            {
              "id": "x",
              "label": "Carte postale",
              "fragment": "leurre",
              "correct": false
            }
          ],
          "required": [
            "m",
            "u",
            "r",
            "c"
          ],
          "answer": [
            "MURC"
          ],
          "points": 120,
          "hints": [
            "Quatre objets utiles sont communs à la suite du jeu.",
            "MIROIR + UV + ROUGE + CLÉ."
          ],
          "expertSpots": [
            {
              "id": "boussole-decor",
              "label": "Boussole décorative",
              "correct": false
            },
            {
              "id": "menu-paquebot",
              "label": "Menu du paquebot",
              "correct": false
            }
          ]
        },
        {
          "id": "pm2",
          "chapter": "salon",
          "type": "sound",
          "title": "Le piano du salon",
          "prompt": "Écoute les quatre notes et choisis la séquence la plus aiguë vers la plus grave.",
          "tones": [
            659,
            523,
            440,
            330
          ],
          "options": [
            "A",
            "B",
            "C"
          ],
          "answer": "A",
          "points": 120,
          "hints": [
            "Compare seulement la hauteur des sons.",
            "La séquence A."
          ]
        },
        {
          "id": "pm3",
          "chapter": "bureau",
          "type": "reveal",
          "title": "Le message au miroir",
          "prompt": "Retourne virtuellement le message, ou utilise le miroir réel en mode hybride. Quel mot apparaît ?",
          "revealMode": "mirror",
          "stages": [
            {
              "label": "Retourner",
              "content": "TUOBANAC"
            },
            {
              "label": "Lire dans le miroir",
              "content": "CANABOUT"
            }
          ],
          "answer": [
            "CANOT"
          ],
          "points": 120,
          "hints": [
            "Le message est écrit à l’envers.",
            "Le mot utile est CANOT."
          ]
        },
        {
          "id": "pm4",
          "chapter": "bureau",
          "type": "reveal",
          "title": "Le dossier ultraviolet",
          "prompt": "Active la lampe UV numérique. En hybride, utilise la lampe sur le document préparé. Quel nombre est révélé ?",
          "revealMode": "uv",
          "stages": [
            {
              "label": "Lumière normale",
              "content": "Document vierge."
            },
            {
              "label": "UV",
              "content": "8 5 4"
            }
          ],
          "answer": [
            "854"
          ],
          "points": 130,
          "hints": [
            "La lumière normale ne suffit pas.",
            "854."
          ]
        },
        {
          "id": "pm5",
          "chapter": "bureau",
          "type": "reveal",
          "title": "Filtre rouge — Code 1234",
          "prompt": "Le filtre rouge fait disparaître le bruit visuel. Quel code reste ?",
          "revealMode": "filter",
          "stages": [
            {
              "label": "Sans filtre",
              "content": "X8R1Q2Z3P4"
            },
            {
              "label": "Filtre rouge",
              "content": "1 2 3 4"
            }
          ],
          "answer": [
            "1234"
          ],
          "points": 130,
          "hints": [
            "Utilise le filtre rouge.",
            "1234."
          ]
        },
        {
          "id": "pm6",
          "chapter": "coffre",
          "type": "lock_parts",
          "title": "Le cryptex à deux serrures",
          "prompt": "Entre les deux codes retrouvés dans le bureau.",
          "fields": [
            "Cadenas rouge",
            "Cadenas gris"
          ],
          "answer": [
            "1234",
            "854"
          ],
          "points": 160,
          "hints": [
            "Un code vient du filtre, l’autre de l’UV.",
            "1234 et 854."
          ]
        },
        {
          "id": "pm7",
          "chapter": "coffre",
          "type": "hotspot",
          "title": "Les ballons-clés",
          "prompt": "Trouve le ballon portant la couleur de ton équipe pour récupérer la clé du canot.",
          "spots": [
            {
              "id": "rouge",
              "label": "Ballon rouge",
              "fragment": "CLÉ",
              "correct": true
            },
            {
              "id": "bleu",
              "label": "Ballon bleu",
              "fragment": "CLÉ",
              "correct": true
            },
            {
              "id": "vert",
              "label": "Ballon vert",
              "fragment": "CLÉ",
              "correct": true
            },
            {
              "id": "jaune",
              "label": "Ballon jaune",
              "fragment": "CLÉ",
              "correct": true
            }
          ],
          "required": [
            "rouge"
          ],
          "answer": [
            "CLE",
            "CLÉ"
          ],
          "points": 150,
          "hints": [
            "En groupe, chaque équipe doit prendre son propre ballon.",
            "La validation est CLÉ."
          ],
          "expertSpots": [
            {
              "id": "ballon-blanc",
              "label": "Ballon blanc",
              "correct": false
            },
            {
              "id": "ballon-orange",
              "label": "Ballon orange",
              "correct": false
            }
          ]
        }
      ],
      "centralWorlds": [
        {
          "id": "salon",
          "title": "Salon de musique",
          "icon": "♫",
          "code": "MURC",
          "codeType": "text",
          "brief": "Fouillez les indices de votre couleur et récupérez les outils.",
          "hostSetup": "Cachez miroir, UV, calque rouge et clé/indice, avec code couleur par équipe.",
          "success": "Le bureau du commandant est accessible.",
          "props": [
            "miroir",
            "UV",
            "calque rouge",
            "clé/indice"
          ]
        },
        {
          "id": "bureau",
          "title": "Bureau du commandant",
          "icon": "⌁",
          "code": "1234854",
          "codeType": "digits",
          "brief": "Miroir, UV et filtre doivent révéler les deux codes.",
          "hostSetup": "Préparez un message miroir, un document UV et un document filtre rouge.",
          "success": "Le coffre du canot est accessible.",
          "props": [
            "message miroir",
            "document UV",
            "filtre rouge"
          ]
        },
        {
          "id": "coffre",
          "title": "Coffre du canot",
          "icon": "▣",
          "code": "CANOT",
          "codeType": "text",
          "brief": "Ouvrez les deux verrous et trouvez la clé finale.",
          "hostSetup": "Placez un coffre à deux cadenas et une clé dans un ballon par équipe.",
          "success": "Le dernier canot est libéré.",
          "props": [
            "coffre",
            "2 cadenas",
            "ballons-clés"
          ]
        }
      ],
      "mechanics": [
        "fouille par couleur",
        "son",
        "miroir",
        "UV",
        "filtre rouge",
        "double cadenas",
        "ballon-clé",
        "rotation de zones"
      ],
      "materials": [
        "TV ou ordinateur central facultatif",
        "miroir",
        "lampe UV",
        "calque rouge",
        "coffre + 2 cadenas",
        "ballons de couleurs"
      ],
      "setup": [
        "Attribuer une couleur à chaque équipe.",
        "Préparer une valise/boîte commune avec les outils réutilisables.",
        "Prévoir assez d’énigmes en parallèle pour éviter que des joueurs restent spectateurs."
      ],
      "audience": [
        "enfant",
        "ado",
        "adulte",
        "famille"
      ],
      "finale": "Le coffre s’ouvre, les clés sont récupérées et le dernier canot peut être mis à l’eau.",
      "printables": [
        {
          "title": "Message miroir",
          "kind": "Cacher",
          "body": "Imprimer un message à lire avec un miroir.",
          "template": "mirror",
          "copies": "1 par équipe",
          "construction": "Imprimer le message inversé sur papier épais et le cacher dans la zone prévue. Vérifier avec le miroir de la FAFA BOX que le mot est lisible sans ambiguïté."
        },
        {
          "title": "Document UV",
          "kind": "Préparer",
          "body": "Créer un faux dossier avec le code 854 visible uniquement sous UV.",
          "template": "uv",
          "copies": "1 par équipe",
          "construction": "Imprimer le faux dossier puis écrire 854 au stylo UV dans la zone prévue. Tester la révélation avec la lampe UV avant la séance."
        },
        {
          "title": "Filtre rouge",
          "kind": "Préparer",
          "body": "Créer un document bruité révélant 1234 sous calque rouge.",
          "template": "red-filter-code",
          "copies": "1 feuille par équipe",
          "construction": "Imprimer le document bruité et prévoir un filtre rouge transparent. Tester la superposition : 1234 doit apparaître nettement."
        },
        {
          "title": "Ballons-clés",
          "kind": "Cacher",
          "body": "Mettre une clé ou un jeton de validation dans un ballon par équipe.",
          "template": "balloon-key",
          "copies": "1 ballon par équipe + 1 de secours",
          "construction": "Glisser une clé ou un jeton de validation dans le ballon avant gonflage. Identifier discrètement la couleur de chaque équipe et conserver un ballon de secours hors zone."
        },
        {
          "title": "Panneaux du Paquebot",
          "kind": "Installer",
          "body": "Panneaux de zone prêts à afficher.",
          "template": "specific-signs",
          "copies": "1 jeu par installation",
          "construction": "Imprimer en A4 ou A3 et fixer à l’entrée de chaque zone.",
          "items": [
            "PONT A — CABINES",
            "PONT B — SALON",
            "PONT C — CANOTS",
            "SALLE DES MACHINES"
          ]
        },
        {
          "title": "Étiquettes dossiers du bord",
          "kind": "Découper",
          "body": "Dossiers à cacher dans les zones du navire.",
          "template": "envelope-labels",
          "copies": "1 série par équipe",
          "construction": "Découper et coller.",
          "labels": [
            "DOSSIER MIROIR",
            "DOSSIER UV",
            "DOSSIER FILTRE",
            "JETON CANOT"
          ]
        }
      ],
      "sourceOrigins": [
        "Inspiré des mécaniques du fichier « Un escape game à l’école – Tablettes & Pirouettes » fourni : équipes couleur, valise commune, miroir/UV/calque, cryptex, coffre et clés en ballons."
      ],
      "prepMin": 30,
      "soloMode": "adapt"
    },
    {
      "id": "chronoquest-epoques",
      "title": "ChronoQuest — Les Trois Époques",
      "subtitle": "Famille • 3 salles • QR • codes",
      "category": "fun",
      "genre": "famille",
      "age": "9+",
      "durationMin": 45,
      "players": "1–4",
      "formats": [
        "numerique",
        "hybride",
        "equipe"
      ],
      "icon": "⌛",
      "accent": "#f0c66a",
      "challenge": 2,
      "recommendedDifficulty": "decouverte",
      "description": "Un parcours familial en trois univers successifs : préhistoire, cité médiévale et frontière de l’Ouest. Chaque salle possède ses propres objets cachés et son verrou numérique.",
      "intro": "Une horloge expérimentale a mélangé trois époques. Pour rentrer, vous devez récupérer un code dans chaque période avant que le portail ne se referme.",
      "chapters": [
        {
          "id": "prehistoire",
          "title": "Salle 1 — Préhistoire"
        },
        {
          "id": "medieval",
          "title": "Salle 2 — Cité médiévale"
        },
        {
          "id": "frontiere",
          "title": "Salle 3 — Frontière de l’Ouest"
        }
      ],
      "steps": [
        {
          "id": "ce1",
          "chapter": "prehistoire",
          "type": "order",
          "title": "Frise des âges",
          "prompt": "Classe les quatre périodes du plus ancien au plus récent.",
          "items": [
            "Âge du bronze",
            "Jurassique",
            "Antiquité",
            "Crétacé"
          ],
          "answer": [
            "Jurassique",
            "Crétacé",
            "Âge du bronze",
            "Antiquité"
          ],
          "points": 100,
          "hints": [
            "Les dinosaures viennent avant les civilisations humaines.",
            "Jurassique → Crétacé → Âge du bronze → Antiquité."
          ]
        },
        {
          "id": "ce2",
          "chapter": "prehistoire",
          "type": "match",
          "title": "Cartes créatures",
          "prompt": "Associe chaque silhouette à son nom.",
          "pairs": [
            [
              "Long cou",
              "Diplodocus"
            ],
            [
              "Grand prédateur",
              "Tyrannosaure"
            ],
            [
              "Voile dorsale",
              "Spinosaure"
            ]
          ],
          "answer": "ok",
          "points": 110,
          "hints": [
            "Observe la silhouette la plus distinctive.",
            "Diplodocus / Tyrannosaure / Spinosaure."
          ]
        },
        {
          "id": "ce3",
          "chapter": "medieval",
          "type": "order",
          "title": "Route du village au château",
          "prompt": "Remets le trajet dans l’ordre.",
          "items": [
            "Château",
            "Village",
            "Montagne sacrée",
            "Cabane",
            "Lac aux secrets",
            "Caverne perdue"
          ],
          "answer": [
            "Village",
            "Caverne perdue",
            "Montagne sacrée",
            "Lac aux secrets",
            "Cabane",
            "Château"
          ],
          "points": 130,
          "hints": [
            "Le trajet commence au village et finit au château.",
            "Village → Caverne → Montagne → Lac → Cabane → Château."
          ]
        },
        {
          "id": "ce4",
          "chapter": "medieval",
          "type": "hotspot",
          "title": "Le blason caché",
          "prompt": "Fouille le plan pour retrouver les quatre symboles du blason.",
          "spots": [
            {
              "id": "lion",
              "label": "Lion",
              "fragment": "L",
              "correct": true
            },
            {
              "id": "tour",
              "label": "Tour",
              "fragment": "T",
              "correct": true
            },
            {
              "id": "epee",
              "label": "Épée",
              "fragment": "E",
              "correct": true
            },
            {
              "id": "couronne",
              "label": "Couronne",
              "fragment": "C",
              "correct": true
            },
            {
              "id": "poisson",
              "label": "Poisson",
              "fragment": "leurre",
              "correct": false
            }
          ],
          "required": [
            "lion",
            "tour",
            "epee",
            "couronne"
          ],
          "answer": [
            "LTEC"
          ],
          "points": 120,
          "hints": [
            "Quatre symboles appartiennent au blason.",
            "Lion, tour, épée, couronne."
          ],
          "expertSpots": [
            {
              "id": "ancre",
              "label": "Ancre",
              "correct": false
            },
            {
              "id": "etoile",
              "label": "Étoile",
              "correct": false
            }
          ]
        },
        {
          "id": "ce5",
          "chapter": "frontiere",
          "type": "cipher",
          "title": "Télégramme codé",
          "prompt": "Chaque nombre indique la position d’une lettre dans l’alphabet : 3-15-21-18-18-9-5-18. Quel mot ?",
          "answer": [
            "COURRIER"
          ],
          "points": 130,
          "hints": [
            "A=1, B=2…",
            "COURRIER."
          ],
          "cipherMode": "a1z26"
        },
        {
          "id": "ce6",
          "chapter": "frontiere",
          "type": "order",
          "title": "Les tipis de la frontière",
          "prompt": "Classe les cinq cartes selon les symboles donnés par la carte-indice.",
          "items": [
            "5",
            "8",
            "9",
            "4",
            "7"
          ],
          "answer": [
            "5",
            "8",
            "9",
            "4",
            "7"
          ],
          "points": 100,
          "hints": [
            "La carte-indice donne déjà l’ordre des motifs.",
            "5-8-9-4-7."
          ]
        },
        {
          "id": "ce7",
          "chapter": "frontiere",
          "type": "lock_parts",
          "title": "Les trois horloges",
          "prompt": "Entre les heures relevées dans les trois salles.",
          "fields": [
            "Horloge préhistoire",
            "Horloge médiévale",
            "Horloge frontière"
          ],
          "answer": [
            "10",
            "20",
            "30"
          ],
          "points": 160,
          "hints": [
            "Chaque salle cache une horloge/heure.",
            "10 / 20 / 30."
          ]
        }
      ],
      "mechanics": [
        "frise",
        "objets cachés",
        "association",
        "plan/route",
        "chiffrement alphabet",
        "ordre de symboles",
        "métadonnée entre salles"
      ],
      "materials": [
        "facultatif : QR imprimés",
        "3 panneaux de salle",
        "objets/cartes à cacher"
      ],
      "setup": [
        "En hybride, affecter une pièce/zone par époque.",
        "Cacher des cartes/objets et un repère d’horloge dans chaque zone."
      ],
      "audience": [
        "enfant",
        "famille",
        "ado"
      ],
      "finale": "Les trois périodes se resynchronisent et le portail temporel ramène l’équipe au présent.",
      "printables": [
        {
          "title": "Salle Préhistoire",
          "kind": "Cartes",
          "body": "Frise + cartes créatures à cacher.",
          "template": "timeline",
          "copies": "1 jeu par équipe",
          "construction": "Imprimer la frise et les cartes créatures. Découper les cartes, les cacher dans la zone Préhistoire et afficher la frise à l’entrée."
        },
        {
          "title": "Salle Médiévale",
          "kind": "Plan",
          "body": "Plan village/château + symboles du blason.",
          "template": "era-map",
          "copies": "1 jeu par équipe",
          "construction": "Imprimer le plan et les symboles. Afficher le plan sur la porte/zone Médiévale et cacher les cartes nécessaires au trajet dans la salle."
        },
        {
          "title": "Salle Frontière",
          "kind": "Cartes",
          "body": "Télégramme codé + cinq cartes tipis/symboles.",
          "template": "symbol-cards",
          "copies": "1 jeu par équipe",
          "construction": "Imprimer le télégramme et les cinq cartes symboles. Découper les cartes, les mélanger et les cacher dans la zone Frontière."
        },
        {
          "title": "Panneaux des trois époques",
          "kind": "Installer",
          "body": "Panneaux de zone prêts à afficher.",
          "template": "specific-signs",
          "copies": "1 jeu par installation",
          "construction": "Imprimer en A4 ou A3 et fixer à l’entrée de chaque zone.",
          "items": [
            "ZONE 1 — PRÉHISTOIRE",
            "ZONE 2 — MOYEN ÂGE",
            "ZONE 3 — FRONTIÈRE"
          ]
        },
        {
          "title": "Cartes créatures",
          "kind": "Cacher",
          "body": "Cartes d’identification pour la fouille de la zone Préhistoire.",
          "template": "specific-cards",
          "copies": "1 par équipe",
          "construction": "Découper sur les pointillés puis plastifier si le support doit être réutilisé.",
          "items": [
            "DIPLODOCUS — 7",
            "TYRANNOSAURE — 5",
            "SPINOSAURE — 8",
            "TRICÉRATOPS — LEURRE"
          ]
        },
        {
          "title": "Télégramme de la Frontière",
          "kind": "Imprimer",
          "body": "Déchiffrer le mot de passe avant l’épreuve des symboles.",
          "template": "specific-sheet",
          "copies": "1 par équipe",
          "construction": "Imprimer et glisser dans une enveloppe de mission.",
          "lines": [
            "3-15-21-18-18-9-5-18",
            "Indice : A=1, B=2, C=3…",
            "MOT DE PASSE : __________"
          ]
        }
      ],
      "sourceOrigins": [
        "Adaptation originale des mécaniques du document EscapeGame_9ansetplus fourni : progression par 3 pièces, frise, dinosaures, plan médiéval, message codé et symboles cachés."
      ],
      "prepMin": 20,
      "soloMode": "yes"
    },
    {
      "id": "temple-quatre-sceaux",
      "title": "Le Temple des Quatre Sceaux",
      "subtitle": "Fantasy • Artefacts • Coopération",
      "category": "fun",
      "age": "11+",
      "durationMin": 55,
      "players": "3–6",
      "formats": [
        "numerique",
        "hybride",
        "equipe"
      ],
      "icon": "◇",
      "accent": "#c9a7ff",
      "description": "Une aventure fantasy où les joueurs accumulent des artefacts et combinent leurs rôles. Idéal sur un téléphone ou une tablette par équipe.",
      "intro": "Le temple ne s’ouvre qu’aux groupes capables de réunir quatre sceaux. La force ne sert à rien : observation, déduction et communication sont vos seules armes.",
      "steps": [
        {
          "id": "tq1",
          "chapter": "seuil",
          "type": "choice",
          "title": "La porte aux symboles",
          "prompt": "Quel symbole ne possède aucun angle ?",
          "answer": 1,
          "points": 100,
          "hints": [
            "Cherche la forme ronde.",
            "Le cercle."
          ],
          "options": [
            "△ Triangle",
            "○ Cercle",
            "□ Carré"
          ],
          "variants": {
            "decouverte": {
              "type": "choice",
              "answer": 1
            },
            "aventure": {
              "type": "choice",
              "answer": 1
            },
            "expert": {
              "type": "text",
              "prompt": "Nomme la forme qui n’a aucun angle.",
              "answer": [
                "CERCLE"
              ]
            },
            "maitre": {
              "type": "text",
              "prompt": "« Ni sommet, ni côté. » Nomme-moi.",
              "answer": [
                "CERCLE"
              ]
            }
          }
        },
        {
          "id": "tq2",
          "chapter": "seuil",
          "type": "order",
          "title": "Les dalles romaines",
          "prompt": "Replace VIII, III, XI, V du plus petit au plus grand.",
          "answer": [
            "III",
            "V",
            "VIII",
            "XI"
          ],
          "points": 120,
          "hints": [
            "III=3.",
            "3,5,8,11."
          ],
          "items": [
            "VIII",
            "III",
            "XI",
            "V"
          ],
          "reward": {
            "id": "fragment-lune",
            "label": "Fragment de lune",
            "icon": "◔"
          }
        },
        {
          "id": "tq3",
          "chapter": "archives",
          "type": "team_split",
          "title": "Le message partagé",
          "prompt": "Rassemblez les quatre chiffres.",
          "answer": "3445",
          "points": 180,
          "hints": [
            "Chaque carte donne un chiffre.",
            "3-4-4-5."
          ],
          "cards": {
            "observateur": "Triangle = ? côtés",
            "decodeur": "2 × 2",
            "archiviste": "Nombre de lettres de LUNE",
            "gardien": "10 ÷ 2",
            "default": "Partage ton fragment."
          },
          "reward": {
            "id": "cle-ambre",
            "label": "Clé d’ambre",
            "icon": "◆"
          }
        },
        {
          "id": "tq4",
          "chapter": "archives",
          "type": "multi",
          "title": "L’inventaire du gardien",
          "prompt": "Quels objets avez-vous déjà débloqués ?",
          "answer": [
            "fragment-lune",
            "cle-ambre"
          ],
          "points": 100,
          "hints": [
            "Regarde l’inventaire.",
            "Deux objets seulement."
          ],
          "options": [
            {
              "id": "fragment-lune",
              "label": "Fragment de lune"
            },
            {
              "id": "cle-ambre",
              "label": "Clé d’ambre"
            },
            {
              "id": "couronne",
              "label": "Couronne solaire"
            }
          ]
        },
        {
          "id": "tq5",
          "chapter": "sanctuaire",
          "type": "text",
          "title": "L’inscription inversée",
          "prompt": "Le miroir révèle « ERBMO ». Quel mot lis-tu ?",
          "answer": [
            "OMBRE"
          ],
          "points": 130,
          "hints": [
            "Lis à l’envers.",
            "OMBRE."
          ],
          "reward": {
            "id": "sceau-ombre",
            "label": "Sceau de l’ombre",
            "icon": "✦"
          }
        },
        {
          "id": "tq6",
          "chapter": "sanctuaire",
          "type": "sound",
          "title": "Les cloches du sanctuaire",
          "prompt": "Écoute les trois sons. Lequel est le plus aigu ?",
          "answer": "3",
          "points": 140,
          "hints": [
            "La hauteur augmente avec la fréquence.",
            "Le troisième son est le plus aigu."
          ],
          "tones": [
            330,
            440,
            660
          ],
          "options": [
            "1",
            "2",
            "3"
          ]
        },
        {
          "id": "tq7",
          "chapter": "final",
          "type": "text",
          "title": "Le Sceau Maître",
          "prompt": "Initiales de LUNE + AMBRE + OMBRE ?",
          "answer": [
            "LAO"
          ],
          "points": 250,
          "hints": [
            "Une lettre par mot.",
            "L-A-O."
          ],
          "minRank": 1
        }
      ],
      "chapters": [
        {
          "id": "seuil",
          "title": "Le Seuil"
        },
        {
          "id": "archives",
          "title": "Les Archives"
        },
        {
          "id": "sanctuaire",
          "title": "Le Sanctuaire"
        },
        {
          "id": "final",
          "title": "Le Sceau Maître"
        }
      ],
      "mechanics": [
        "observation",
        "ordre",
        "inventaire",
        "rôles",
        "miroir",
        "sons",
        "méta-code"
      ],
      "materials": [
        "1 téléphone/tablette par équipe",
        "miroir facultatif pour version physique"
      ],
      "setup": [
        "Peut se jouer 100 % numérique ou avec des cartes physiques."
      ],
      "audience": [
        "ado",
        "adulte",
        "famille"
      ],
      "finale": "Les sceaux s’alignent. Le temple reconnaît votre équipe parce que chacun a apporté une compétence différente.",
      "genre": "mondes_aventure",
      "challenge": 2,
      "recommendedDifficulty": "aventure",
      "printables": [
        {
          "title": "Panneaux du Temple",
          "kind": "Installer",
          "body": "Panneaux de zone prêts à afficher.",
          "template": "specific-signs",
          "copies": "1 jeu par installation",
          "construction": "Imprimer en A4 ou A3 et fixer à l’entrée de chaque zone.",
          "items": [
            "PORTE DES SYMBOLES",
            "DALLES ROMAINES",
            "SALLE DU GARDIEN",
            "SANCTUAIRE DES CLOCHES"
          ]
        },
        {
          "title": "Symboles de la porte",
          "kind": "Observer",
          "body": "Identifier le symbole sans angle.",
          "template": "specific-cards",
          "copies": "1 par équipe",
          "construction": "Découper sur les pointillés puis plastifier si le support doit être réutilisé.",
          "items": [
            "△ TRIANGLE",
            "○ CERCLE",
            "□ CARRÉ",
            "◇ LOSANGE"
          ]
        },
        {
          "title": "Dalles romaines",
          "kind": "Découper",
          "body": "Cartes à remettre dans le bon ordre.",
          "template": "specific-sequence",
          "copies": "1 par équipe",
          "construction": "Découper puis mélanger avant la partie.",
          "items": [
            "VIII",
            "III",
            "XI",
            "V"
          ]
        },
        {
          "title": "Message partagé — 3445",
          "kind": "Distribuer",
          "body": "Chaque carte doit être remise uniquement au rôle indiqué.",
          "template": "specific-roles",
          "copies": "1 jeu par équipe",
          "construction": "Découper les cartes et les distribuer séparément.",
          "items": [
            {
              "title": "OBSERVATEUR",
              "text": "Triangle = ? côtés"
            },
            {
              "title": "DÉCODEUR",
              "text": "2 × 2"
            },
            {
              "title": "ARCHIVISTE",
              "text": "Nombre de lettres de LUNE"
            },
            {
              "title": "GARDIEN DU TEMPS",
              "text": "10 ÷ 2"
            }
          ]
        },
        {
          "title": "Inventaire du Gardien",
          "kind": "Fouiller",
          "body": "Deux objets utiles et trois leurres.",
          "template": "specific-cards",
          "copies": "1 par équipe",
          "construction": "Découper sur les pointillés puis plastifier si le support doit être réutilisé.",
          "items": [
            "FRAGMENT LUNE",
            "CLÉ AMBRE",
            "JETON OBSIDIEN — LEURRE",
            "PLUME — LEURRE",
            "ROUE — LEURRE"
          ]
        },
        {
          "title": "Inscription inversée",
          "kind": "Miroir",
          "body": "Message ERBMO à lire au miroir.",
          "template": "mirror-custom",
          "copies": "1 par équipe",
          "construction": "Imprimer et cacher près du Sceau.",
          "text": "ERBMO"
        },
        {
          "title": "Station sonore du Sanctuaire",
          "kind": "Imprimer",
          "body": "Écouter les sons dans l’application puis noter le numéro le plus aigu.",
          "template": "specific-sheet",
          "copies": "1 par équipe",
          "construction": "Imprimer et glisser dans une enveloppe de mission.",
          "lines": [
            "SON 1 □",
            "SON 2 □",
            "SON 3 □",
            "RÉPONSE : ____"
          ]
        },
        {
          "title": "Sceau Maître",
          "kind": "Final",
          "body": "Conserver les trois cartes-réponses pour le final.",
          "template": "specific-cards",
          "copies": "1 par équipe",
          "construction": "Découper sur les pointillés puis plastifier si le support doit être réutilisé.",
          "items": [
            "LUNE — L",
            "AMBRE — A",
            "OMBRE — O"
          ]
        }
      ],
      "prepMin": 20,
      "soloMode": "adapt"
    },
    {
      "id": "chambre-221",
      "title": "Chambre 221",
      "subtitle": "Enquête • Chronologie • Détails",
      "category": "fun",
      "age": "12+",
      "durationMin": 60,
      "players": "3–6",
      "formats": [
        "numerique",
        "hybride",
        "equipe"
      ],
      "icon": "⌕",
      "accent": "#e5a66e",
      "description": "Une enquête policière légère et fictive : plusieurs pièces du dossier semblent se contredire. Il faut établir une chronologie, comparer des témoignages et repérer les détails utiles.",
      "intro": "À 21 h 40, la Chambre 221 a été retrouvée vide. Une mallette a disparu. Personne n’est blessé : votre mission est uniquement de reconstituer le trajet de la mallette avant l’arrivée de la sécurité.",
      "steps": [
        {
          "id": "ch1",
          "chapter": "dossier",
          "type": "order",
          "title": "Chronologie des badges",
          "prompt": "Remets les événements dans l’ordre.",
          "answer": [
            "20:55 Hall",
            "21:08 Ascenseur",
            "21:19 Couloir",
            "21:31 Chambre"
          ],
          "points": 130,
          "hints": [
            "Classe par heure.",
            "20:55, 21:08, 21:19, 21:31."
          ],
          "items": [
            "21:31 Chambre",
            "20:55 Hall",
            "21:19 Couloir",
            "21:08 Ascenseur"
          ]
        },
        {
          "id": "ch2",
          "chapter": "dossier",
          "type": "choice",
          "title": "Témoignages",
          "prompt": "Un témoin dit « j’ai vu la valise rouge », alors que les caméras montrent une mallette noire. Quelle conclusion est la plus prudente ?",
          "answer": 2,
          "points": 120,
          "hints": [
            "Ne transforme pas une contradiction en culpabilité.",
            "Le témoignage peut être imprécis."
          ],
          "options": [
            "Le témoin ment forcément",
            "La caméra est forcément fausse",
            "Le témoignage peut être imprécis ; il faut recouper",
            "On ignore les deux"
          ]
        },
        {
          "id": "ch3",
          "chapter": "chambre",
          "type": "memory",
          "title": "Inventaire de la chambre",
          "prompt": "Mémorise les objets puis retrouve la séquence demandée.",
          "answer": [
            "clé",
            "verre",
            "livre",
            "lampe"
          ],
          "points": 130,
          "hints": [
            "Prends quelques secondes pour observer.",
            "Clé → verre → livre → lampe."
          ],
          "sequence": [
            "clé",
            "verre",
            "livre",
            "lampe"
          ],
          "tokens": [
            "clé",
            "verre",
            "livre",
            "lampe",
            "cadre",
            "chaussure"
          ]
        },
        {
          "id": "ch4",
          "chapter": "archives",
          "type": "text",
          "title": "Plans superposés",
          "prompt": "Deux plans transparents révèlent le numéro de casier. Saisis 314.",
          "answer": [
            "314"
          ],
          "points": 140,
          "hints": [
            "Aligne les croix de repère.",
            "314."
          ],
          "mechanic": "overlay"
        },
        {
          "id": "ch5",
          "chapter": "archives",
          "type": "match",
          "title": "Qui possède quoi ?",
          "prompt": "Associe chaque personne à l’objet confirmé par une source.",
          "answer": "ok",
          "points": 150,
          "hints": [
            "Une seule association par personne.",
            "Nina→badge ; Sami→clé USB ; Alex→parapluie."
          ],
          "pairs": [
            [
              "Nina",
              "Badge visiteur"
            ],
            [
              "Sami",
              "Clé USB"
            ],
            [
              "Alex",
              "Parapluie"
            ]
          ]
        },
        {
          "id": "ch6",
          "chapter": "final",
          "type": "text",
          "title": "Le trajet",
          "prompt": "Les initiales Hall, Ascenseur, Couloir, Chambre forment…",
          "answer": [
            "HACC"
          ],
          "points": 180,
          "hints": [
            "Une initiale par lieu.",
            "H-A-C-C."
          ],
          "minRank": 2
        }
      ],
      "chapters": [
        {
          "id": "dossier",
          "title": "Le dossier"
        },
        {
          "id": "chambre",
          "title": "La chambre"
        },
        {
          "id": "archives",
          "title": "Les archives"
        },
        {
          "id": "final",
          "title": "Conclusion"
        }
      ],
      "mechanics": [
        "chronologie",
        "recoupement",
        "mémoire",
        "superposition",
        "association",
        "méta"
      ],
      "materials": [
        "facultatif : enveloppes preuves",
        "objets factices"
      ],
      "setup": [
        "Peut être transformé en véritable fouille en cachant les preuves."
      ],
      "audience": [
        "ado",
        "adulte"
      ],
      "finale": "L’équipe remet la main sur la mallette sans accuser au hasard : chaque conclusion a été recoupée.",
      "genre": "enquete_mystere",
      "challenge": 3,
      "recommendedDifficulty": "aventure",
      "printables": [
        {
          "title": "Zones de l’enquête",
          "kind": "Installer",
          "body": "Panneaux de zone prêts à afficher.",
          "template": "specific-signs",
          "copies": "1 jeu par installation",
          "construction": "Imprimer en A4 ou A3 et fixer à l’entrée de chaque zone.",
          "items": [
            "HALL",
            "ASCENSEUR",
            "COULOIR",
            "CHAMBRE 221"
          ]
        },
        {
          "title": "Badges horaires",
          "kind": "Découper",
          "body": "Cartes à remettre dans le bon ordre.",
          "template": "specific-sequence",
          "copies": "1 par équipe",
          "construction": "Découper puis mélanger avant la partie.",
          "items": [
            "20:55 — HALL",
            "21:08 — ASCENSEUR",
            "21:19 — COULOIR",
            "21:31 — CHAMBRE"
          ]
        },
        {
          "title": "Dossier témoin / caméra",
          "kind": "Comparer",
          "body": "Les deux pièces ne racontent pas exactement la même chose.",
          "template": "specific-cards",
          "copies": "1 par équipe",
          "construction": "Découper sur les pointillés puis plastifier si le support doit être réutilisé.",
          "items": [
            "TÉMOIN : « J’ai vu une valise rouge. »",
            "CAMÉRA : mallette noire visible à 21:17",
            "NOTE : ne conclure qu’avec une source confirmée"
          ]
        },
        {
          "title": "Inventaire flash de la chambre",
          "kind": "Découper",
          "body": "Cartes à remettre dans le bon ordre.",
          "template": "specific-sequence",
          "copies": "1 par équipe",
          "construction": "Découper puis mélanger avant la partie.",
          "items": [
            "CLÉ",
            "VERRE",
            "LIVRE",
            "LAMPE",
            "CADRE — LEURRE",
            "CHAUSSURE — LEURRE"
          ]
        },
        {
          "title": "Plans superposés — casier 314",
          "kind": "Superposer",
          "body": "Deux plans à aligner pour révéler 314.",
          "template": "overlay-number",
          "copies": "1 paire par équipe",
          "construction": "Imprimer les deux grilles sur calque ou transparent et aligner les coins.",
          "number": "314"
        },
        {
          "title": "Preuves personnes / objets",
          "kind": "Associer",
          "body": "Cartes à regrouper par paire.",
          "template": "specific-cards",
          "copies": "1 par équipe",
          "construction": "Découper sur les pointillés puis plastifier si le support doit être réutilisé.",
          "items": [
            "NORA ↔ CLÉ",
            "MALIK ↔ LIVRE",
            "SACHA ↔ VERRE",
            "INES ↔ LAMPE"
          ]
        }
      ],
      "prepMin": 20,
      "soloMode": "yes"
    },
    {
      "id": "cabinet-illusions",
      "title": "Le Cabinet des Illusions",
      "subtitle": "Miroirs • UV • Son • Scytale",
      "category": "fun",
      "age": "12+",
      "durationMin": 60,
      "players": "3–6",
      "formats": [
        "hybride",
        "equipe"
      ],
      "icon": "◐",
      "accent": "#a986ff",
      "description": "Un escape hybride pour exploiter la pièce réelle : messages au miroir, lampe UV, scytale, mémoire et son. Aucun feu ni manipulation dangereuse n’est nécessaire.",
      "intro": "Le Cabinet ne montre jamais directement la vérité. Chaque objet ment d’une manière différente : un miroir inverse, une lumière révèle, un cylindre aligne et un son cache un rythme.",
      "chapters": [
        {
          "id": "miroir",
          "title": "Miroir"
        },
        {
          "id": "uv",
          "title": "Lumière UV"
        },
        {
          "id": "scytale",
          "title": "Scytale"
        },
        {
          "id": "son",
          "title": "Son"
        },
        {
          "id": "final",
          "title": "La sortie"
        }
      ],
      "steps": [
        {
          "id": "ci1",
          "title": "Message miroir",
          "type": "text",
          "prompt": "Le papier affiche « ETROP ». Quel mot lis-tu dans un miroir ?",
          "answer": [
            "PORTE"
          ],
          "points": 110,
          "hints": [
            "Lis de droite à gauche.",
            "PORTE."
          ],
          "chapter": "miroir"
        },
        {
          "id": "ci2",
          "title": "Trace UV",
          "type": "physical",
          "prompt": "Utilisez une lampe UV sur les supports autorisés et saisissez le mot révélé.",
          "answer": [
            "LUNE"
          ],
          "points": 130,
          "hints": [
            "Inspectez les surfaces préparées par l’animateur uniquement.",
            "Mot de cette version : LUNE."
          ],
          "chapter": "uv",
          "physicalLabel": "Lampe UV / encre fluorescente",
          "reward": {
            "id": "mot-lune",
            "label": "LUNE",
            "icon": "☾"
          }
        },
        {
          "id": "ci3",
          "title": "Scytale",
          "type": "text",
          "prompt": "Enroulez la bande sur le cylindre adapté. Quel mot apparaît ?",
          "answer": [
            "AXE"
          ],
          "points": 140,
          "hints": [
            "Le bon diamètre aligne les lettres.",
            "AXE."
          ],
          "chapter": "scytale",
          "reward": {
            "id": "mot-axe",
            "label": "AXE",
            "icon": "│"
          }
        },
        {
          "id": "ci4",
          "title": "Objets flash",
          "type": "memory",
          "prompt": "Mémorisez la suite d’objets.",
          "answer": [
            "clé",
            "plume",
            "verre",
            "roue"
          ],
          "points": 130,
          "hints": [
            "Regardez la position autant que le nom.",
            "Clé, plume, verre, roue."
          ],
          "chapter": "scytale",
          "sequence": [
            "clé",
            "plume",
            "verre",
            "roue"
          ],
          "tokens": [
            "clé",
            "plume",
            "verre",
            "roue",
            "livre",
            "boussole"
          ]
        },
        {
          "id": "ci5",
          "title": "Mélodie du cabinet",
          "type": "sound",
          "prompt": "Écoute les quatre sons. Quel numéro correspond au son le plus grave ?",
          "answer": "1",
          "points": 120,
          "hints": [
            "Plus grave = fréquence plus basse.",
            "Le premier."
          ],
          "chapter": "son",
          "tones": [
            220,
            330,
            440,
            660
          ],
          "options": [
            "1",
            "2",
            "3",
            "4"
          ]
        },
        {
          "id": "ci6",
          "title": "La serrure optique",
          "type": "text",
          "prompt": "Assemble les initiales de PORTE, LUNE et AXE.",
          "answer": [
            "PLA"
          ],
          "points": 180,
          "hints": [
            "Une initiale par mot.",
            "P-L-A."
          ],
          "chapter": "final"
        },
        {
          "id": "ci7",
          "title": "Dernière illusion",
          "type": "text",
          "prompt": "Ajoute la première lettre de ROUE au code précédent.",
          "answer": [
            "PLAR"
          ],
          "points": 120,
          "hints": [
            "Le mot mémoire fournit la dernière lettre.",
            "PLA + R."
          ],
          "chapter": "final",
          "minRank": 2
        }
      ],
      "mechanics": [
        "miroir",
        "UV",
        "scytale",
        "mémoire",
        "son",
        "méta-code"
      ],
      "materials": [
        "petit miroir",
        "lampe UV et marqueur UV",
        "bande de papier + cylindre",
        "quelques objets"
      ],
      "setup": [
        "Ne pas utiliser de flamme ni de chauffe pour révéler des messages.",
        "Préparer uniquement des surfaces UV identifiées.",
        "Le son est généré directement par l’application."
      ],
      "audience": [
        "ado",
        "adulte",
        "famille"
      ],
      "finale": "Le Cabinet s’ouvre parce que l’équipe a accepté de changer de sens : regarder, éclairer, enrouler, écouter, mémoriser.",
      "genre": "enquete_mystere",
      "challenge": 3,
      "recommendedDifficulty": "aventure",
      "printables": [
        {
          "title": "Carte miroir — PORTE",
          "kind": "Miroir",
          "body": "Lire ETROP dans un miroir.",
          "template": "mirror-custom",
          "copies": "1 par équipe",
          "construction": "Imprimer puis cacher.",
          "text": "ETROP"
        },
        {
          "title": "Dossier UV — LUNE",
          "kind": "UV",
          "body": "Zone prévue pour un message invisible.",
          "template": "uv-custom",
          "copies": "1 par équipe",
          "construction": "Après impression, écrire LUNE au stylo UV dans la zone indiquée. Tester avec la lampe.",
          "text": "LUNE"
        },
        {
          "title": "Scytale — AXE",
          "kind": "Construire",
          "body": "Bande à enrouler autour d’un cylindre de 30 mm.",
          "template": "scytale",
          "copies": "1 par équipe",
          "construction": "Découper la bande. Enrouler sur un tube de 30 mm de diamètre pour lire AXE.",
          "text": "AXE"
        },
        {
          "title": "Objets flash",
          "kind": "Découper",
          "body": "Cartes à remettre dans le bon ordre.",
          "template": "specific-sequence",
          "copies": "1 par équipe",
          "construction": "Découper puis mélanger avant la partie.",
          "items": [
            "CLÉ",
            "PLUME",
            "VERRE",
            "ROUE",
            "LIVRE — LEURRE",
            "BOUSSOLE — LEURRE"
          ]
        },
        {
          "title": "Station sonore — fréquence",
          "kind": "Imprimer",
          "body": "Écouter les quatre sons dans l’application. Identifier le plus grave.",
          "template": "specific-sheet",
          "copies": "1 par équipe",
          "construction": "Imprimer et glisser dans une enveloppe de mission.",
          "lines": [
            "SON 1 □",
            "SON 2 □",
            "SON 3 □",
            "SON 4 □",
            "RÉPONSE : ____"
          ]
        },
        {
          "title": "Fragments de serrure optique",
          "kind": "Assembler",
          "body": "Initiales de PORTE, LUNE et AXE.",
          "template": "specific-cards",
          "copies": "1 par équipe",
          "construction": "Découper sur les pointillés puis plastifier si le support doit être réutilisé.",
          "items": [
            "PORTE — P",
            "LUNE — L",
            "AXE — A",
            "ROUE — R"
          ]
        }
      ],
      "prepMin": 20,
      "soloMode": "yes"
    },
    {
      "id": "signal-zero",
      "title": "Signal Zéro",
      "subtitle": "Science-fiction • Réseau • Urgence",
      "category": "fun",
      "age": "13+",
      "durationMin": 45,
      "players": "2–6",
      "formats": [
        "numerique",
        "equipe"
      ],
      "icon": "⌁",
      "accent": "#66d6ff",
      "description": "Une mission science-fiction courte, très numérique, faite de logique, binaire, réseau et synchronisation d’équipe.",
      "intro": "La station ECHO-7 dérive. Quatre modules répondent encore. Rétablissez le signal avant la perte définitive de navigation.",
      "steps": [
        {
          "id": "sz1",
          "chapter": "boot",
          "type": "text",
          "title": "Démarrage binaire",
          "prompt": "Convertis 0101 en décimal.",
          "answer": [
            "5",
            "05"
          ],
          "points": 110,
          "hints": [
            "4 + 1.",
            "5."
          ],
          "variants": {
            "decouverte": {
              "type": "choice",
              "options": [
                "4",
                "5",
                "6"
              ],
              "answer": 1
            },
            "aventure": {},
            "expert": {
              "prompt": "Convertis 101101₂ en décimal.",
              "answer": [
                "45"
              ]
            },
            "maitre": {
              "prompt": "Convertis 111011₂ en décimal.",
              "answer": [
                "59"
              ]
            }
          }
        },
        {
          "id": "sz2",
          "chapter": "reseau",
          "type": "choice",
          "title": "Paquet perdu",
          "prompt": "2, 4, 8, 16… ?",
          "answer": 2,
          "points": 110,
          "hints": [
            "Chaque terme double.",
            "32."
          ],
          "options": [
            "18",
            "24",
            "32",
            "64"
          ]
        },
        {
          "id": "sz3",
          "chapter": "reseau",
          "type": "multi",
          "title": "Modules actifs",
          "prompt": "Sélectionne les modules dont la somme vaut 10.",
          "answer": [
            "m2",
            "m3",
            "m5"
          ],
          "points": 140,
          "hints": [
            "Trois modules suffisent.",
            "2+3+5."
          ],
          "options": [
            {
              "id": "m2",
              "label": "Module 2"
            },
            {
              "id": "m3",
              "label": "Module 3"
            },
            {
              "id": "m5",
              "label": "Module 5"
            },
            {
              "id": "m8",
              "label": "Module 8"
            }
          ],
          "reward": {
            "id": "module-b",
            "label": "Module réseau",
            "icon": "B"
          }
        },
        {
          "id": "sz4",
          "chapter": "reseau",
          "type": "order",
          "title": "Route du drone",
          "prompt": "Le drone doit effectuer : avancer, pivoter gauche, avancer, avancer, pivoter droite. Remets les commandes dans cet ordre.",
          "answer": [
            "AVANCER",
            "GAUCHE",
            "AVANCER 2",
            "DROITE"
          ],
          "points": 140,
          "hints": [
            "Regroupe les deux avancées consécutives.",
            "AVANCER → GAUCHE → AVANCER 2 → DROITE."
          ],
          "items": [
            "DROITE",
            "AVANCER 2",
            "GAUCHE",
            "AVANCER"
          ]
        },
        {
          "id": "sz5",
          "chapter": "noyau",
          "type": "team_split",
          "title": "Synchronisation",
          "prompt": "Combinez vos fragments pour le mot du noyau.",
          "answer": "ECHO",
          "points": 200,
          "hints": [
            "4 lettres.",
            "E-C-H-O."
          ],
          "cards": {
            "observateur": "E",
            "decodeur": "C",
            "archiviste": "H",
            "gardien": "O",
            "default": "Partage ta lettre."
          }
        },
        {
          "id": "sz6",
          "chapter": "noyau",
          "type": "keypad",
          "title": "Checksum final",
          "prompt": "Le noyau donne 12, 27, 45. Additionne les chiffres de chaque nombre puis concatène les résultats.",
          "answer": "397",
          "points": 180,
          "hints": [
            "12→3 ; 27→9 ; 45→9, mais vérifie le protocole : la dernière valeur est différence 5-4.",
            "3, 9, 1 donne 391."
          ],
          "minRank": 2,
          "variants": {
            "expert": {
              "answer": "391",
              "prompt": "Protocole : pour 12 et 27 additionne les chiffres ; pour 45 fais la différence. Concatène."
            },
            "maitre": {
              "answer": "391",
              "prompt": "Checksum mixte [Σ, Σ, Δ] sur 12 • 27 • 45."
            }
          }
        }
      ],
      "chapters": [
        {
          "id": "boot",
          "title": "Redémarrage"
        },
        {
          "id": "reseau",
          "title": "Réseau"
        },
        {
          "id": "noyau",
          "title": "Noyau"
        }
      ],
      "mechanics": [
        "binaire",
        "suite",
        "sélection",
        "programmation",
        "rôles",
        "checksum"
      ],
      "materials": [
        "téléphone/tablette"
      ],
      "setup": [
        "Aucune installation physique nécessaire."
      ],
      "audience": [
        "ado",
        "adulte"
      ],
      "finale": "ECHO-7 corrige sa trajectoire. Le signal revient, paquet après paquet.",
      "genre": "cyber_tech",
      "challenge": 3,
      "recommendedDifficulty": "aventure",
      "prepMin": 5,
      "soloMode": "adapt"
    },
    {
      "id": "blackout-reseau",
      "title": "Blackout Réseau",
      "subtitle": "Cyber • QR • Pixel art • Câbles",
      "category": "fun",
      "age": "11+",
      "durationMin": 55,
      "players": "3–6",
      "formats": [
        "central",
        "hybride",
        "equipe"
      ],
      "icon": "⌬",
      "accent": "#45e0ff",
      "description": "Une panne volontaire a verrouillé le réseau de la structure. Les équipes doivent retrouver plusieurs nombres dans des épreuves très différentes puis reconstruire le code de remise en ligne.",
      "intro": "Tous les écrans affichent ERREUR 503. Quelqu’un a dispersé les fragments du code réseau dans la structure. QR, mur de mots, instructions de déplacement et pixel art sont vos seules pistes.",
      "chapters": [
        {
          "id": "qr",
          "title": "Balises QR"
        },
        {
          "id": "mur",
          "title": "Mur de mots"
        },
        {
          "id": "route",
          "title": "Route codée"
        },
        {
          "id": "pixel",
          "title": "Pixel art"
        },
        {
          "id": "final",
          "title": "Réseau"
        }
      ],
      "steps": [
        {
          "id": "br1",
          "title": "Les trois QR",
          "type": "choice",
          "prompt": "Trois QR ont été trouvés. Deux affichent « erreur », un seul donne un nombre. Dans cette version, lequel faut-il conserver ?",
          "answer": 1,
          "points": 110,
          "hints": [
            "Le bon QR est le seul qui fournit une valeur exploitable.",
            "Conserve le QR n°2."
          ],
          "chapter": "qr",
          "options": [
            "QR 1 — erreur",
            "QR 2 — 27",
            "QR 3 — erreur"
          ],
          "reward": {
            "id": "fragment-27",
            "label": "Fragment 27",
            "icon": "27"
          }
        },
        {
          "id": "br2",
          "title": "Mur de mots",
          "type": "match",
          "prompt": "Associe les termes qui vont ensemble pour révéler les liaisons.",
          "answer": "ok",
          "points": 140,
          "hints": [
            "Pense aux familles numériques.",
            "Jeux vidéo→PEGI ; mot de passe→cadenas ; moteur de recherche→navigation."
          ],
          "chapter": "mur",
          "pairs": [
            [
              "Jeux vidéo",
              "PEGI"
            ],
            [
              "Mot de passe",
              "Cadenas"
            ],
            [
              "Moteur de recherche",
              "Navigation"
            ]
          ]
        },
        {
          "id": "br3",
          "title": "Route programmée",
          "type": "order",
          "prompt": "Le bot doit : avancer 2, tourner gauche, avancer 3, reculer 1. Remets les commandes.",
          "answer": [
            "AVANCER 2",
            "GAUCHE",
            "AVANCER 3",
            "RECULER 1"
          ],
          "points": 130,
          "hints": [
            "Une rotation ne fait pas avancer.",
            "AVANCER 2 → GAUCHE → AVANCER 3 → RECULER 1."
          ],
          "chapter": "route",
          "items": [
            "RECULER 1",
            "AVANCER 3",
            "GAUCHE",
            "AVANCER 2"
          ],
          "reward": {
            "id": "fragment-171",
            "label": "Fragment 171",
            "icon": "171"
          }
        },
        {
          "id": "br4",
          "title": "Pixel art",
          "type": "keypad",
          "prompt": "Les coordonnées colorées dessinent un chiffre. Saisis le chiffre de validation de cette version.",
          "answer": "2",
          "points": 120,
          "hints": [
            "Regarde la forme globale, pas chaque case.",
            "Le chiffre est 2."
          ],
          "chapter": "pixel",
          "reward": {
            "id": "fragment-2",
            "label": "Fragment 2",
            "icon": "2"
          }
        },
        {
          "id": "br5",
          "title": "Câbles binaires",
          "type": "multi",
          "prompt": "Quels fragments sont actuellement dans votre inventaire ?",
          "answer": [
            "fragment-27",
            "fragment-171",
            "fragment-2"
          ],
          "points": 100,
          "hints": [
            "Regarde l’inventaire commun.",
            "27, 171 et 2."
          ],
          "chapter": "final",
          "options": [
            {
              "id": "fragment-27",
              "label": "27"
            },
            {
              "id": "fragment-171",
              "label": "171"
            },
            {
              "id": "fragment-2",
              "label": "2"
            },
            {
              "id": "fragment-99",
              "label": "99"
            }
          ]
        },
        {
          "id": "br6",
          "title": "Code de remise en ligne",
          "type": "text",
          "prompt": "Range les fragments par valeur croissante et colle-les sans espace.",
          "answer": [
            "227171"
          ],
          "points": 190,
          "hints": [
            "2 < 27 < 171.",
            "2 + 27 + 171 → 227171."
          ],
          "chapter": "final"
        }
      ],
      "centralWorlds": [
        {
          "id": "qr",
          "title": "Balises QR",
          "icon": "▦",
          "code": "27",
          "codeType": "digits",
          "brief": "Trouvez le seul QR qui donne une valeur utile.",
          "hostSetup": "Cacher 3 QR/cartes : 2 erreurs et une valeur 27.",
          "success": "Premier fragment récupéré.",
          "props": [
            "3 QR ou cartes"
          ]
        },
        {
          "id": "mur",
          "title": "Mur de mots",
          "icon": "↔",
          "code": "12",
          "codeType": "digits",
          "brief": "Reliez les bonnes familles de mots. La forme ou le nombre obtenu donne le code.",
          "hostSetup": "Préparer un mur de mots avec liaisons ; le code animateur est 12.",
          "success": "Le second module s’ouvre.",
          "props": [
            "cartes mots",
            "ficelle ou feutre"
          ]
        },
        {
          "id": "route",
          "title": "Route codée",
          "icon": "⌁",
          "code": "171",
          "codeType": "digits",
          "brief": "Suivez les instructions de déplacement sans confondre tourner et avancer.",
          "hostSetup": "Préparer une grille de déplacement qui mène à 171.",
          "success": "Le routeur répond.",
          "props": [
            "grille déplacement"
          ]
        },
        {
          "id": "pixel",
          "title": "Pixel art",
          "icon": "▦",
          "code": "2",
          "codeType": "digits",
          "brief": "Coloriez les coordonnées pour faire apparaître le dernier chiffre.",
          "hostSetup": "Préparer une grille de pixel art qui révèle 2.",
          "success": "Le réseau peut être restauré.",
          "props": [
            "grille pixel art"
          ]
        }
      ],
      "mechanics": [
        "QR",
        "mur de mots",
        "programmation papier",
        "pixel art",
        "inventaire",
        "méta-code"
      ],
      "materials": [
        "QR ou cartes équivalentes",
        "cartes mots",
        "ficelles",
        "grille pixel art"
      ],
      "setup": [
        "Cacher les éléments dans des zones différentes.",
        "En mode central, les équipes saisissent un code après chaque module."
      ],
      "audience": [
        "enfant",
        "ado",
        "adulte",
        "famille"
      ],
      "finale": "Le réseau redémarre. L’équipe a assemblé des fragments issus de quatre mécaniques différentes plutôt que de répéter le même type d’énigme.",
      "genre": "cyber_tech",
      "challenge": 3,
      "recommendedDifficulty": "aventure",
      "sourceOrigins": [
        "Adaptation des mécaniques de l’escape numérique fourni : QR, mur de mots, programmation papier, pixel art, fichiers/USB et méta-code."
      ],
      "printables": [
        {
          "title": "Trois QR du réseau",
          "kind": "Cacher",
          "body": "QR autonomes : ils contiennent du texte et fonctionnent sans serveur externe.",
          "template": "qr-cards",
          "copies": "1 jeu par équipe",
          "construction": "Découper les cartes. Tester les QR avec un téléphone avant l’animation.",
          "items": [
            {
              "title": "QR A",
              "text": "ERREUR — PAQUET CORROMPU"
            },
            {
              "title": "QR B",
              "text": "FRAGMENT VALIDE : 27"
            },
            {
              "title": "QR C",
              "text": "ERREUR — ACCÈS REFUSÉ"
            }
          ]
        },
        {
          "title": "Mur de mots",
          "kind": "Relier",
          "body": "Créer les bonnes paires avec de la ficelle.",
          "template": "specific-cards",
          "copies": "1 par équipe",
          "construction": "Découper sur les pointillés puis plastifier si le support doit être réutilisé.",
          "items": [
            "JEUX VIDÉO",
            "PEGI",
            "MOT DE PASSE",
            "CADENAS",
            "RÉSEAUX SOCIAUX",
            "AMITIÉ VIRTUELLE",
            "QR CODE",
            "LECTEUR",
            "MOTEUR DE RECHERCHE",
            "REQUÊTE"
          ]
        },
        {
          "title": "Commandes du bot",
          "kind": "Découper",
          "body": "Cartes à remettre dans le bon ordre.",
          "template": "specific-sequence",
          "copies": "1 par équipe",
          "construction": "Découper puis mélanger avant la partie.",
          "items": [
            "AVANCER 2",
            "GAUCHE",
            "AVANCER 3",
            "RECULER 1"
          ]
        },
        {
          "title": "Pixel art — chiffre 2",
          "kind": "Colorier",
          "body": "Colorier les cases marquées pour révéler le chiffre 2.",
          "template": "pixel-two",
          "copies": "1 par équipe",
          "construction": "Imprimer et fournir un feutre effaçable si la feuille est plastifiée."
        },
        {
          "title": "Fragments numériques",
          "kind": "Conserver",
          "body": "Fragments à retrouver puis trier.",
          "template": "specific-cards",
          "copies": "1 par équipe",
          "construction": "Découper sur les pointillés puis plastifier si le support doit être réutilisé.",
          "items": [
            "27",
            "171",
            "2"
          ]
        },
        {
          "title": "Code de remise en ligne",
          "kind": "Imprimer",
          "body": "Fiche finale pour ordonner les trois fragments numériques et noter le code de remise en ligne.",
          "template": "specific-sheet",
          "copies": "1 par équipe",
          "construction": "Imprimer et glisser dans une enveloppe de mission.",
          "lines": [
            "FRAGMENTS : ___ / ___ / ___",
            "CODE FINAL : __________",
            "Consigne : range les fragments par valeur croissante puis colle-les sans espace."
          ]
        }
      ],
      "prepMin": 30,
      "soloMode": "adapt"
    },
    {
      "id": "crypto-404",
      "title": "Crypto 404",
      "subtitle": "Cryptographie • Robot • Alphabets secrets",
      "category": "fun",
      "age": "13+",
      "durationMin": 55,
      "players": "2–6",
      "formats": [
        "numerique",
        "hybride",
        "equipe"
      ],
      "icon": "⌘",
      "accent": "#ff73c6",
      "description": "Un scénario de cryptographie qui change réellement de langage à chaque étape : robot, Pigpen, braille, Morse, César et grille symétrique.",
      "intro": "Un archiviste a fragmenté la clé de sécurité dans plusieurs systèmes de chiffrement. Une seule équipe capable de changer de méthode à chaque étape pourra reconstruire la phrase finale.",
      "steps": [
        {
          "id": "cr1",
          "chapter": "robot",
          "type": "text",
          "title": "Le robot décodeur",
          "prompt": "Le robot tourne à gauche sur ●, à droite sur × et avance sur case vide. Le parcours d’exemple mène à la lettre-clé. Saisis : CODE.",
          "answer": [
            "CODE"
          ],
          "points": 120,
          "hints": [
            "Suivez les règles une case à la fois.",
            "Le mot de validation de cette version est CODE."
          ]
        },
        {
          "id": "cr2",
          "chapter": "alphabets",
          "type": "text",
          "title": "Pigpen",
          "prompt": "Avec l’alphabet Pigpen fourni par l’interface, décode : ⌗-style. Mot attendu dans cette version : CLE.",
          "answer": [
            "CLE",
            "CLÉ"
          ],
          "points": 130,
          "hints": [
            "Compare les formes de grille.",
            "C-L-E."
          ],
          "cipher": "pigpen"
        },
        {
          "id": "cr3",
          "chapter": "alphabets",
          "type": "text",
          "title": "Morse",
          "prompt": "Décode : ... --- ...",
          "answer": [
            "SOS"
          ],
          "points": 120,
          "hints": [
            "Trois lettres.",
            "S O S."
          ],
          "cipher": "morse"
        },
        {
          "id": "cr4",
          "chapter": "alphabets",
          "type": "choice",
          "title": "Braille logique",
          "prompt": "Dans un code braille simplifié, une cellule est composée de combien de positions de points ? ",
          "answer": 1,
          "points": 100,
          "hints": [
            "Pense à la cellule braille standard.",
            "6 positions."
          ],
          "options": [
            "4",
            "6",
            "8",
            "10"
          ]
        },
        {
          "id": "cr5",
          "chapter": "carre",
          "type": "text",
          "title": "Carré symétrique",
          "prompt": "Dans une grille 3×3 A B C / D E F / G H I, quelle lettre est symétrique de A par rapport à E ?",
          "answer": [
            "I"
          ],
          "points": 130,
          "hints": [
            "Traverse le centre.",
            "A ↔ I."
          ]
        },
        {
          "id": "cr6",
          "chapter": "cesar",
          "type": "text",
          "title": "Décalage César",
          "prompt": "Décale chaque lettre de KHOOR de 3 rangs vers la gauche.",
          "answer": [
            "HELLO"
          ],
          "points": 160,
          "hints": [
            "K→H.",
            "KHOOR = HELLO."
          ]
        },
        {
          "id": "cr7",
          "chapter": "final",
          "type": "text",
          "title": "Meta-clé",
          "prompt": "Assemble les réponses principales : CLE + SOS + I + HELLO. Prends le nombre de lettres de chaque bloc.",
          "answer": [
            "3535"
          ],
          "points": 220,
          "hints": [
            "3 / 3 / 1 / 5, mais le protocole double les blocs impairs en fin de chaîne.",
            "Pour le niveau Maître : utilisez 3-3-1-5 tel quel."
          ],
          "minRank": 3,
          "variants": {
            "maitre": {
              "answer": [
                "3315"
              ],
              "prompt": "Assemble le nombre de lettres de CLE, SOS, I, HELLO."
            }
          }
        }
      ],
      "chapters": [
        {
          "id": "robot",
          "title": "Robot"
        },
        {
          "id": "alphabets",
          "title": "Alphabets secrets"
        },
        {
          "id": "carre",
          "title": "Grille symétrique"
        },
        {
          "id": "cesar",
          "title": "César"
        },
        {
          "id": "final",
          "title": "Meta-clé"
        }
      ],
      "centralWorlds": [
        {
          "id": "robot",
          "title": "Salle du Robot",
          "icon": "▦",
          "code": "CODE",
          "codeType": "text",
          "brief": "Suivez le robot sur la grille physique pour trouver le mot.",
          "hostSetup": "Préparer une grille avec ronds/croix. Adapter le trajet pour produire CODE.",
          "success": "Le premier module accepte le mot.",
          "props": [
            "grille robot"
          ]
        },
        {
          "id": "alphabets",
          "title": "Galerie des Alphabets",
          "icon": "⌘",
          "code": "CLESOS",
          "codeType": "text",
          "brief": "Deux messages utilisent deux alphabets différents.",
          "hostSetup": "Cacher un message Pigpen et un Morse ; placer les alphabets d’aide ailleurs.",
          "success": "La galerie s’ouvre.",
          "props": [
            "Pigpen",
            "Morse",
            "fiches alphabet"
          ]
        },
        {
          "id": "cesar",
          "title": "Coffre César",
          "icon": "↻",
          "code": "HELLO",
          "codeType": "text",
          "brief": "Le dernier rouleau utilise un décalage constant.",
          "hostSetup": "Fournir le texte KHOOR avec un indice -3.",
          "success": "La clé cryptographique est restaurée.",
          "props": [
            "rouleau César"
          ]
        }
      ],
      "mechanics": [
        "robot",
        "Pigpen",
        "Morse",
        "Braille",
        "grille symétrique",
        "César"
      ],
      "materials": [
        "fiches alphabets facultatives",
        "grilles imprimées"
      ],
      "setup": [
        "Idéal avec indices physiques répartis entre les joueurs."
      ],
      "audience": [
        "ado",
        "adulte"
      ],
      "finale": "La clé est reconstruite. Vous avez changé de système de pensée à chaque étape au lieu d’appliquer toujours la même recette.",
      "genre": "codes_logique",
      "challenge": 4,
      "recommendedDifficulty": "aventure",
      "sourceOrigins": [
        "Mécaniques de cryptographie inspirées des fiches Crypto fournies : grille de trajet, substitution et César."
      ],
      "printables": [
        {
          "title": "Grille robot décodeur",
          "kind": "Décoder",
          "body": "Robot : ● tourne à gauche, × tourne à droite, case vide avance.",
          "template": "robot-grid",
          "copies": "1 par équipe",
          "construction": "Imprimer la grille et donner un pion ou une pièce comme robot."
        },
        {
          "title": "Alphabet Pigpen",
          "kind": "Référence",
          "body": "Alphabet complet de décodage.",
          "template": "pigpen",
          "copies": "1 par équipe",
          "construction": "Imprimer et plastifier."
        },
        {
          "title": "Alphabet Morse",
          "kind": "Référence",
          "body": "Alphabet A–Z et chiffres 0–9.",
          "template": "morse",
          "copies": "1 par équipe",
          "construction": "Imprimer et plastifier."
        },
        {
          "title": "Cellule Braille",
          "kind": "Référence",
          "body": "Repère des 6 positions d’une cellule braille.",
          "template": "braille",
          "copies": "1 par équipe",
          "construction": "Imprimer et plastifier."
        },
        {
          "title": "Carré symétrique",
          "kind": "Imprimer",
          "body": "Trouver la lettre symétrique de A par rapport à E.",
          "template": "specific-grid",
          "copies": "1 par équipe",
          "construction": "Imprimer en taille réelle. Plastifier si réutilisation.",
          "rows": [
            [
              "A",
              "B",
              "C"
            ],
            [
              "D",
              "E",
              "F"
            ],
            [
              "G",
              "H",
              "I"
            ]
          ]
        },
        {
          "title": "Roue de César",
          "kind": "Construire",
          "body": "Deux disques à découper pour tester les décalages.",
          "template": "caesar-wheel",
          "copies": "1 par équipe",
          "construction": "Découper les deux disques et les assembler avec une attache parisienne."
        },
        {
          "title": "Meta-clé 3535",
          "kind": "Imprimer",
          "body": "Fiche finale pour reporter les longueurs des mots décodés et former la méta-clé 3535.",
          "template": "specific-sheet",
          "copies": "1 par équipe",
          "construction": "Imprimer et glisser dans une enveloppe de mission.",
          "lines": [
            "CLE = __",
            "SOS = __",
            "I = __",
            "HELLO = __",
            "CODE : _ _ _ _",
            "Consigne : compte les lettres de CLE / SOS / I / HELLO dans cet ordre."
          ]
        }
      ],
      "prepMin": 30,
      "soloMode": "yes"
    },
    {
      "id": "cristal-lab",
      "title": "Cristal Lab — Le Cœur de la Station",
      "subtitle": "Science-fiction • Laboratoire • Inventaire",
      "category": "education",
      "genre": "science_culture",
      "age": "14+",
      "durationMin": 55,
      "players": "2–5",
      "formats": [
        "numerique",
        "equipe"
      ],
      "icon": "⬡",
      "accent": "#8fd8ff",
      "challenge": 4,
      "recommendedDifficulty": "expert",
      "description": "Un escape scientifique non linéaire : explorer des zones virtuelles, utiliser un inventaire, associer des observations et des mesures, puis recomposer le code du coffre central.",
      "intro": "La station Cristal Lab est en quarantaine. Le noyau d’alimentation est verrouillé dans un coffre. Les données sont dispersées entre laboratoire, archive et salle de mesure.",
      "chapters": [
        {
          "id": "lab",
          "title": "Laboratoire"
        },
        {
          "id": "archive",
          "title": "Archives"
        },
        {
          "id": "mesure",
          "title": "Salle de mesure"
        },
        {
          "id": "coffre",
          "title": "Coffre central"
        }
      ],
      "steps": [
        {
          "id": "cl1",
          "chapter": "lab",
          "type": "hotspot",
          "title": "Fouille du laboratoire",
          "prompt": "Explore les éléments et récupère loupe, clé et échantillon.",
          "spots": [
            {
              "id": "loupe",
              "label": "Loupe",
              "fragment": "LOUPE",
              "correct": true
            },
            {
              "id": "cle",
              "label": "Tiroir",
              "fragment": "CLÉ",
              "correct": true
            },
            {
              "id": "roc",
              "label": "Échantillon",
              "fragment": "CRISTAL",
              "correct": true
            },
            {
              "id": "mug",
              "label": "Tasse",
              "fragment": "leurre",
              "correct": false
            }
          ],
          "required": [
            "loupe",
            "cle",
            "roc"
          ],
          "answer": [
            "LCR"
          ],
          "points": 120,
          "hints": [
            "Trois objets seront utiles plus tard.",
            "Loupe, clé, cristal."
          ],
          "expertSpots": [
            {
              "id": "chrono",
              "label": "Chronomètre",
              "correct": false
            },
            {
              "id": "etiquette",
              "label": "Étiquette vierge",
              "correct": false
            }
          ]
        },
        {
          "id": "cl2",
          "chapter": "archive",
          "type": "match",
          "title": "Réseaux cristallins",
          "prompt": "Associe chaque structure à sa description simplifiée.",
          "pairs": [
            [
              "Simple",
              "Sommets uniquement"
            ],
            [
              "Centrée",
              "Sommets + centre"
            ],
            [
              "Faces centrées",
              "Sommets + centres de faces"
            ]
          ],
          "answer": "ok",
          "points": 150,
          "hints": [
            "Observe la position des points supplémentaires.",
            "Simple / centrée / faces centrées."
          ]
        },
        {
          "id": "cl3",
          "chapter": "archive",
          "type": "lock_parts",
          "title": "Cadenas scientifique",
          "prompt": "Entre les trois valeurs obtenues dans l’archive.",
          "fields": [
            "Valeur A",
            "Valeur B",
            "Valeur C"
          ],
          "answer": [
            "1",
            "2",
            "4"
          ],
          "points": 140,
          "hints": [
            "Chaque modèle donne un nombre de repères différent.",
            "1 / 2 / 4."
          ]
        },
        {
          "id": "cl4",
          "chapter": "mesure",
          "type": "choice",
          "title": "Mesurer le volume",
          "prompt": "Quel procédé permet d’obtenir le volume d’un solide irrégulier dans une éprouvette ?",
          "options": [
            "Observer le changement de niveau d’eau",
            "Mesurer uniquement sa hauteur",
            "Compter ses faces"
          ],
          "answer": 0,
          "points": 120,
          "hints": [
            "Compare le niveau avant et après immersion.",
            "Le déplacement d’eau."
          ]
        },
        {
          "id": "cl5",
          "chapter": "mesure",
          "type": "keypad",
          "title": "Masse volumique",
          "prompt": "Un échantillon de 48 g occupe 16 mL. Entre 48 ÷ 16.",
          "answer": "3",
          "points": 140,
          "hints": [
            "Masse ÷ volume.",
            "3."
          ]
        },
        {
          "id": "cl6",
          "chapter": "coffre",
          "type": "order",
          "title": "Assembler le code",
          "prompt": "Assemble les fragments : archive A-B-C puis mesure.",
          "items": [
            "3",
            "4",
            "1",
            "2"
          ],
          "answer": [
            "1",
            "2",
            "4",
            "3"
          ],
          "points": 180,
          "hints": [
            "Les trois valeurs d’archive passent avant la mesure.",
            "1-2-4-3."
          ]
        }
      ],
      "mechanics": [
        "exploration non linéaire simulée",
        "inventaire",
        "association scientifique",
        "cadenas multipartie",
        "mesure",
        "calcul",
        "méta-code"
      ],
      "materials": [
        "aucun en numérique",
        "option hybride : échantillon, éprouvette, balance"
      ],
      "setup": [
        "En hybride, remplacer la simulation de mesure par un vrai petit atelier sécurisé et préparé."
      ],
      "audience": [
        "ado",
        "adulte"
      ],
      "finale": "Le coffre central s’ouvre et le noyau de la station redémarre.",
      "sourceOrigins": [
        "Benchmark du principe de laboratoire virtuel non linéaire, inventaire, fouille et mesures observé dans la ressource S’CAPE « Pierres d’infinité » fournie ; univers, textes et énigmes recréés."
      ],
      "prepMin": 5,
      "soloMode": "yes"
    },
    {
      "id": "operation-azura",
      "title": "Opération Azura",
      "subtitle": "Planète • Écologie • Collecte",
      "category": "education",
      "age": "8+",
      "durationMin": 60,
      "players": "2–5",
      "formats": [
        "central",
        "hybride",
        "equipe"
      ],
      "icon": "◍",
      "accent": "#66e0d0",
      "description": "Un escape familial et éducatif où les joueurs restaurent une planète en récupérant des cristaux et des tuiles. Les énigmes portent sur observation, logique, eau, pollution et biodiversité.",
      "intro": "Azura se dérègle. Quatre zones ont perdu leur énergie : l’usine, la forêt, l’étang et l’observatoire. Restaurez chaque zone et reconstituez la carte de la planète.",
      "steps": [
        {
          "id": "az1",
          "chapter": "usine",
          "type": "choice",
          "title": "Le fil de l’usine",
          "prompt": "Les fils 1-2 partagent des rayures, 2-3 des couleurs, 3-4 des pois, 4-5 aucun point commun. Quel fil isole la chaîne ?",
          "answer": 3,
          "points": 120,
          "hints": [
            "Cherche la rupture de motif.",
            "Entre 4 et 5 : le fil 5."
          ],
          "options": [
            "2",
            "3",
            "4",
            "5",
            "6"
          ],
          "reward": {
            "id": "cristal-1",
            "label": "Cristal Usine",
            "icon": "◆"
          }
        },
        {
          "id": "az2",
          "chapter": "eau",
          "type": "order",
          "title": "Tri de l’eau",
          "prompt": "Classe : eau de pluie → filtration → stockage → utilisation.",
          "answer": [
            "PLUIE",
            "FILTRATION",
            "STOCKAGE",
            "UTILISATION"
          ],
          "points": 120,
          "hints": [
            "Du captage vers l’usage.",
            "Pluie, filtration, stockage, utilisation."
          ],
          "items": [
            "STOCKAGE",
            "UTILISATION",
            "PLUIE",
            "FILTRATION"
          ],
          "reward": {
            "id": "cristal-2",
            "label": "Cristal Eau",
            "icon": "◆"
          }
        },
        {
          "id": "az3",
          "chapter": "foret",
          "type": "multi",
          "title": "La forêt fragmentée",
          "prompt": "Quels gestes protègent réellement une forêt ?",
          "answer": [
            "replanter",
            "limiter-feux",
            "sentiers"
          ],
          "points": 120,
          "hints": [
            "Évite les réponses qui détruisent l’habitat.",
            "Replanter, prévenir les feux, rester sur les sentiers."
          ],
          "options": [
            {
              "id": "replanter",
              "label": "Replanter des essences adaptées"
            },
            {
              "id": "limiter-feux",
              "label": "Prévenir les départs de feu"
            },
            {
              "id": "sentiers",
              "label": "Respecter les sentiers"
            },
            {
              "id": "dechets",
              "label": "Laisser les déchets biodégradables sur place"
            }
          ],
          "reward": {
            "id": "cristal-3",
            "label": "Cristal Forêt",
            "icon": "◆"
          }
        },
        {
          "id": "az4",
          "chapter": "observatoire",
          "type": "choice",
          "title": "Constellation",
          "prompt": "Une constellation relie 5 étoiles. Combien de segments faut-il pour une chaîne simple reliant toutes les étoiles ?",
          "answer": 3,
          "points": 100,
          "hints": [
            "Pour n points en chaîne : n−1 segments.",
            "4 segments."
          ],
          "options": [
            "3",
            "4",
            "5",
            "6"
          ],
          "reward": {
            "id": "cristal-4",
            "label": "Cristal Ciel",
            "icon": "◆"
          }
        },
        {
          "id": "az5",
          "chapter": "archives",
          "type": "match",
          "title": "Cartes thématiques",
          "prompt": "Associe chaque situation à son thème.",
          "answer": "ok",
          "points": 150,
          "hints": [
            "Lis chaque description.",
            "Glacier→climat ; fumée→pollution ; souches→déforestation ; gourde→eau."
          ],
          "pairs": [
            [
              "Glacier qui fond",
              "Réchauffement climatique"
            ],
            [
              "Fumées toxiques",
              "Pollution"
            ],
            [
              "Forêt coupée",
              "Déforestation"
            ],
            [
              "Gourde et robinet",
              "Préservation de l’eau"
            ]
          ]
        },
        {
          "id": "az6",
          "chapter": "final",
          "type": "physical",
          "title": "Reconstruction",
          "prompt": "Assemblez les tuiles de la planète. Quand la carte est complète, validez. Une fois la manipulation réalisée, demandez le mot de validation à l’animateur.",
          "answer": [
            "MISSION"
          ],
          "points": 140,
          "hints": [
            "Commence par les bords.",
            "Le maître du jeu peut valider la reconstruction."
          ],
          "physicalLabel": "Puzzle de carte",
          "hostValidation": true
        },
        {
          "id": "az7",
          "chapter": "final",
          "type": "text",
          "title": "Question finale",
          "prompt": "Les quatre zones donnent U-E-F-O. Remets ces lettres pour former le mot qui permet de repartir.",
          "answer": [
            "FEUO"
          ],
          "points": 100,
          "hints": [
            "Cette étape Expert est volontairement une fausse piste : observez les initiales des cristaux plutôt que les zones.",
            "Utilisez les cristaux : U, E, F, C → CE?"
          ],
          "minRank": 3,
          "variants": {
            "maitre": {
              "prompt": "Les cristaux portent les symboles A-Z-U-R. Assemble-les.",
              "answer": [
                "AZUR"
              ]
            }
          }
        }
      ],
      "chapters": [
        {
          "id": "usine",
          "title": "Usine"
        },
        {
          "id": "eau",
          "title": "Étang"
        },
        {
          "id": "foret",
          "title": "Forêt"
        },
        {
          "id": "observatoire",
          "title": "Observatoire"
        },
        {
          "id": "archives",
          "title": "Archives"
        },
        {
          "id": "final",
          "title": "Final"
        }
      ],
      "centralWorlds": [
        {
          "id": "usine",
          "title": "Usine",
          "icon": "⚡",
          "code": "5",
          "codeType": "digits",
          "brief": "Repérez le fil qui rompt la logique des motifs.",
          "hostSetup": "Préparer 7 fils/cartes avec motifs ; le fil isolé est 5.",
          "success": "L’usine s’arrête.",
          "props": [
            "cartes fils"
          ]
        },
        {
          "id": "eau",
          "title": "Étang",
          "icon": "≈",
          "code": "EAU",
          "codeType": "text",
          "brief": "Reconstituez le cycle simplifié de l’eau.",
          "hostSetup": "Quatre cartes à ordonner.",
          "success": "Le réservoir se stabilise.",
          "props": [
            "4 cartes eau"
          ]
        },
        {
          "id": "foret",
          "title": "Forêt",
          "icon": "♧",
          "code": "FORET",
          "codeType": "text",
          "brief": "Récupérez les bonnes cartes d’action et écartez les fausses solutions.",
          "hostSetup": "Préparer 4 cartes actions.",
          "success": "La forêt reprend vie.",
          "props": [
            "cartes actions"
          ]
        },
        {
          "id": "ciel",
          "title": "Observatoire",
          "icon": "✧",
          "code": "AZUR",
          "codeType": "text",
          "brief": "Les quatre cristaux portent chacun une lettre.",
          "hostSetup": "Donner A, Z, U, R en récompense des zones.",
          "success": "La planète Azura est restaurée.",
          "props": [
            "4 cristaux lettres"
          ]
        }
      ],
      "mechanics": [
        "observation",
        "ordre",
        "sélection",
        "constellation",
        "association",
        "puzzle physique"
      ],
      "materials": [
        "cartes thématiques",
        "tuiles de planète",
        "cristaux papier"
      ],
      "setup": [
        "Très adapté à 8–12 ans ou aux familles.",
        "Peut se jouer avec plusieurs équipes en parallèle."
      ],
      "audience": [
        "enfant",
        "famille",
        "ado"
      ],
      "finale": "Azura respire à nouveau. Les joueurs repartent avec une planète reconstruite et des repères simples sans avoir subi un cours magistral.",
      "genre": "planete",
      "challenge": 2,
      "recommendedDifficulty": "aventure",
      "sourceOrigins": [
        "Adaptation originale de mécaniques environnementales et de collecte/reconstruction présentes dans les supports Valoria fournis."
      ],
      "printables": [
        {
          "title": "Fils de l’usine",
          "kind": "Comparer",
          "body": "Trouver le fil qui casse la logique de chaîne.",
          "template": "specific-cards",
          "copies": "1 par équipe",
          "construction": "Découper sur les pointillés puis plastifier si le support doit être réutilisé.",
          "items": [
            "FIL 1 — RAYURES",
            "FIL 2 — RAYURES + BLEU",
            "FIL 3 — BLEU + POIS",
            "FIL 4 — POIS",
            "FIL 5 — AUCUN POINT COMMUN"
          ]
        },
        {
          "title": "Cycle de l’eau",
          "kind": "Découper",
          "body": "Cartes à remettre dans le bon ordre.",
          "template": "specific-sequence",
          "copies": "1 par équipe",
          "construction": "Découper puis mélanger avant la partie.",
          "items": [
            "PLUIE",
            "FILTRATION",
            "STOCKAGE",
            "UTILISATION"
          ]
        },
        {
          "title": "Actions forêt",
          "kind": "Choisir",
          "body": "Sélectionner les gestes protecteurs.",
          "template": "specific-cards",
          "copies": "1 par équipe",
          "construction": "Découper sur les pointillés puis plastifier si le support doit être réutilisé.",
          "items": [
            "REPLANTER",
            "LIMITER LES FEUX",
            "RESTER SUR LES SENTIERS",
            "JETER LES DÉCHETS — MAUVAIS",
            "COUPER AU HASARD — MAUVAIS"
          ]
        },
        {
          "title": "Constellation de 5 étoiles",
          "kind": "Relier",
          "body": "Relier 5 étoiles en chaîne simple et compter les segments.",
          "template": "constellation-five",
          "copies": "1 par équipe",
          "construction": "Imprimer. Les joueurs relient les étoiles au feutre."
        },
        {
          "title": "Cartes thématiques",
          "kind": "Associer",
          "body": "Associer situation et thème.",
          "template": "specific-cards",
          "copies": "1 par équipe",
          "construction": "Découper sur les pointillés puis plastifier si le support doit être réutilisé.",
          "items": [
            "FUMÉES ↔ POLLUTION",
            "ARBRES COUPÉS ↔ DÉFORESTATION",
            "ROBINET ↔ PRÉSERVATION DE L’EAU",
            "GLACE QUI FOND ↔ RÉCHAUFFEMENT"
          ]
        },
        {
          "title": "Planète Azura — puzzle",
          "kind": "Assembler",
          "body": "Six pièces à découper forment la planète.",
          "template": "planet-puzzle",
          "copies": "1 puzzle par équipe",
          "construction": "Découper les six pièces, mélanger puis placer dans une enveloppe."
        },
        {
          "title": "Cristaux finaux",
          "kind": "Conserver",
          "body": "Fragments finaux à remettre dans l’ordre.",
          "template": "specific-cards",
          "copies": "1 par équipe",
          "construction": "Découper sur les pointillés puis plastifier si le support doit être réutilisé.",
          "items": [
            "U",
            "E",
            "F",
            "O"
          ]
        }
      ],
      "prepMin": 30,
      "soloMode": "adapt"
    },
    {
      "id": "cle-professeur",
      "title": "La Clé du Professeur",
      "subtitle": "Fouille • Maths • Messages codés",
      "category": "education",
      "age": "9+",
      "durationMin": 50,
      "players": "3–6",
      "formats": [
        "hybride",
        "equipe"
      ],
      "icon": "🔐",
      "accent": "#ffd45f",
      "description": "Un escape scolaire modernisé : la salle doit être fouillée, les indices sont répartis et les codes ouvrent progressivement des boîtes. Les énigmes changent de registre à chaque étape.",
      "intro": "La clé de sortie est enfermée dans une pochette protégée par plusieurs cadenas. Les indices sont déjà dans la pièce, mais ils ne servent pas forcément tout de suite.",
      "steps": [
        {
          "id": "cp1",
          "chapter": "boite1",
          "type": "keypad",
          "title": "La dictée piégée",
          "prompt": "Repère les mots fautifs, trouve le nombre caché puis applique l’opération donnée. Code de cette version : 465.",
          "answer": "465",
          "points": 130,
          "hints": [
            "Les fautes forment une instruction.",
            "Code 465."
          ]
        },
        {
          "id": "cp2",
          "chapter": "boite2",
          "type": "team_split",
          "title": "Trois alphabets",
          "prompt": "Pigpen, braille et Morse donnent trois propriétés d’un même nombre. Quel nombre satisfait : impair, entre 300 et 400, divisible par 9 et 3 mais pas par 5 ni 10 ?",
          "answer": "351",
          "points": 190,
          "hints": [
            "Teste les multiples de 9 entre 300 et 400.",
            "351."
          ],
          "cards": {
            "observateur": "Je suis impair.",
            "decodeur": "Je suis compris entre 300 et 400.",
            "archiviste": "Je suis divisible par 3 et par 9.",
            "gardien": "Je ne suis divisible ni par 5 ni par 10.",
            "default": "Croisez vos propriétés."
          }
        },
        {
          "id": "cp3",
          "chapter": "boite3",
          "type": "keypad",
          "title": "Remue-méninges images",
          "prompt": "Fleur=4, citron=3, pieuvre=7. Concatène dans cet ordre.",
          "answer": "437",
          "points": 140,
          "hints": [
            "Chaque dessin possède une valeur.",
            "4-3-7."
          ]
        },
        {
          "id": "cp4",
          "chapter": "boite4",
          "type": "keypad",
          "title": "Pyramides additives",
          "prompt": "Complète les pyramides puis additionne leurs quatre sommets et ajoute 12. Code de validation de cette version : 265.",
          "answer": "265",
          "points": 170,
          "hints": [
            "Chaque case = somme des deux cases dessous.",
            "Le code final est 265."
          ]
        },
        {
          "id": "cp5",
          "chapter": "final",
          "type": "physical",
          "title": "La clé physique",
          "prompt": "Ouvrez la dernière pochette et présentez la clé au maître du jeu. Une fois la manipulation réalisée, demandez le mot de validation à l’animateur.",
          "answer": [
            "MISSION"
          ],
          "points": 100,
          "hints": [
            "La dernière étape n’est pas numérique.",
            "Cherchez la petite clé."
          ],
          "physicalLabel": "Clé réelle",
          "hostValidation": true
        }
      ],
      "chapters": [
        {
          "id": "boite1",
          "title": "Boîte 1"
        },
        {
          "id": "boite2",
          "title": "Boîte 2"
        },
        {
          "id": "boite3",
          "title": "Boîte 3"
        },
        {
          "id": "boite4",
          "title": "Boîte 4"
        },
        {
          "id": "final",
          "title": "Sortie"
        }
      ],
      "mechanics": [
        "fouille",
        "orthographe",
        "maths",
        "Pigpen",
        "braille",
        "Morse",
        "équations images",
        "pyramides"
      ],
      "materials": [
        "4 cadenas ou boîtes facultatifs",
        "enveloppes",
        "alphabets de décodage"
      ],
      "setup": [
        "Répartir les indices dans la salle avant le début.",
        "Ne pas laisser toutes les énigmes au même endroit pour favoriser la coopération."
      ],
      "audience": [
        "enfant",
        "ado",
        "famille"
      ],
      "finale": "La dernière pochette s’ouvre : la clé est là. L’équipe a dû fouiller, calculer, décoder et surtout répartir le travail.",
      "genre": "science_culture",
      "challenge": 2,
      "recommendedDifficulty": "aventure",
      "sourceOrigins": [
        "Adaptation des mécaniques du dossier « Trouver la clé » fourni : fouille, dictée codée, Pigpen/Braille/Morse, valeurs d’images et pyramides."
      ],
      "printables": [
        {
          "title": "Dictée piégée — code 465",
          "kind": "Chercher",
          "body": "Cinq mots sont fautifs. Les petits nombres placés sous ces mots forment 2233 ; appliquer ensuite (2233 + 92) ÷ 5.",
          "template": "faulty-words",
          "copies": "1 par équipe",
          "construction": "Imprimer. Ne pas entourer les fautes avant la partie."
        },
        {
          "title": "Trois alphabets — Pigpen / Braille / Morse",
          "kind": "Référence",
          "body": "Une feuille unique pour décoder les trois propriétés du nombre.",
          "template": "triple-alphabet",
          "copies": "1 par équipe",
          "construction": "Imprimer et cacher les trois bandes séparément si tu veux augmenter la fouille."
        },
        {
          "title": "Remue-méninges images",
          "kind": "Calculer",
          "body": "Valeurs à utiliser dans l’ordre demandé.",
          "template": "specific-cards",
          "copies": "1 par équipe",
          "construction": "Découper sur les pointillés puis plastifier si le support doit être réutilisé.",
          "items": [
            "FLEUR = 4",
            "CITRON = 3",
            "PIEUVRE = 7",
            "CREVETTE = 3",
            "TORTUE = 8"
          ]
        },
        {
          "title": "Pyramides additives",
          "kind": "Calculer",
          "body": "Compléter les quatre pyramides puis suivre la consigne finale.",
          "template": "additive-pyramids",
          "copies": "1 par équipe",
          "construction": "Imprimer et fournir un crayon."
        },
        {
          "title": "Carte dernière clé",
          "kind": "Cacher",
          "body": "Carte de validation à placer dans la dernière boîte.",
          "template": "final-physical-key",
          "copies": "1 par équipe",
          "construction": "Placer la carte avec une vraie clé ou dans la dernière enveloppe."
        }
      ],
      "prepMin": 20,
      "soloMode": "adapt"
    },
    {
      "id": "mission-pulse",
      "title": "Mission PULSE — Le Relais des Épreuves",
      "subtitle": "Défis physiques • Maths • Sciences • QR/stations",
      "category": "education",
      "genre": "defis_physiques",
      "age": "11+",
      "durationMin": 55,
      "players": "4–8",
      "formats": [
        "central",
        "hybride",
        "equipe"
      ],
      "icon": "↯",
      "accent": "#ff9d54",
      "challenge": 3,
      "recommendedDifficulty": "aventure",
      "description": "Un grand jeu interdisciplinaire en stations : une équipe se déplace, scanne ou ouvre une mission, réalise un défi moteur/logique/scientifique puis ramène ses codes au terminal.",
      "intro": "Le système PULSE est divisé en quatre modules. Aucune équipe ne peut les réactiver uniquement avec un écran : il faut bouger, observer, calculer et communiquer.",
      "chapters": [
        {
          "id": "mouvement",
          "title": "Module mouvement"
        },
        {
          "id": "maths",
          "title": "Module logique"
        },
        {
          "id": "science",
          "title": "Module science"
        },
        {
          "id": "final",
          "title": "Relais final"
        }
      ],
      "steps": [
        {
          "id": "mp1",
          "chapter": "mouvement",
          "type": "physical",
          "title": "Relais précision",
          "prompt": "Réalisez le circuit PULSE : 10 squats contrôlés, un slalom aller-retour entre 4 plots, transportez 3 objets un par un jusqu’à la zone cible, puis touchez la ligne d’arrivée. Saisissez ensuite le mot de validation.",
          "answer": [
            "PULSE"
          ],
          "physicalLabel": "Circuit PULSE — 10 squats + slalom 4 plots + transport de 3 objets",
          "hostValidation": true,
          "points": 120,
          "hints": [
            "Répartissez-vous : un joueur compte les squats, un sécurise le slalom et un organise les objets.",
            "Le mot de validation final est PULSE."
          ]
        },
        {
          "id": "mp2",
          "chapter": "maths",
          "type": "keypad",
          "title": "Distance codée",
          "prompt": "4 tours de 75 m représentent combien de mètres ?",
          "answer": "300",
          "points": 110,
          "hints": [
            "Multipliez 4 par 75.",
            "300."
          ]
        },
        {
          "id": "mp3",
          "chapter": "maths",
          "type": "order",
          "title": "Temps relais",
          "prompt": "Classez 42 s, 1 min 05, 58 s, 47 s du plus rapide au plus lent.",
          "items": [
            "58 s",
            "42 s",
            "1 min 05",
            "47 s"
          ],
          "answer": [
            "42 s",
            "47 s",
            "58 s",
            "1 min 05"
          ],
          "points": 120,
          "hints": [
            "Convertissez 1 min 05 en 65 s.",
            "42 → 47 → 58 → 65 s."
          ]
        },
        {
          "id": "mp4",
          "chapter": "science",
          "type": "choice",
          "title": "Récupération",
          "prompt": "Après un effort, quel comportement est le plus adapté ?",
          "options": [
            "Ralentir progressivement, s’hydrater et signaler un malaise",
            "S’arrêter brutalement puis repartir au maximum",
            "Ignorer toute douleur pour finir le score"
          ],
          "answer": 0,
          "points": 100,
          "hints": [
            "La sécurité passe avant le score.",
            "Ralentir, s’hydrater, signaler un malaise."
          ]
        },
        {
          "id": "mp5",
          "chapter": "science",
          "type": "team_split",
          "title": "Fragments PULSE",
          "prompt": "Assemblez les quatre chiffres.",
          "cards": {
            "observateur": "Nombre de lettres de AIR = 3",
            "decodeur": "8÷2 = 4",
            "archiviste": "Nombre de jambes humaines = 2",
            "gardien": "10-5 = 5",
            "default": "Partage ton chiffre."
          },
          "answer": "3425",
          "points": 160,
          "hints": [
            "Chaque rôle a un chiffre.",
            "3-4-2-5."
          ]
        },
        {
          "id": "mp6",
          "chapter": "final",
          "type": "text",
          "title": "Code final — PULSE",
          "prompt": "Quel mot de validation avez-vous reçu au premier module ?",
          "answer": [
            "PULSE"
          ],
          "points": 100,
          "hints": [
            "C’est le nom du système.",
            "PULSE."
          ]
        }
      ],
      "centralWorlds": [
        {
          "id": "mouvement",
          "title": "Zone Mouvement",
          "icon": "↯",
          "code": "PULSE",
          "codeType": "text",
          "brief": "Effectuez 10 squats contrôlés, un slalom aller-retour entre 4 plots, transportez 3 objets un par un, puis franchissez la ligne d’arrivée.",
          "hostSetup": "Placez 4 plots en slalom, 3 objets légers au point de départ et une ligne d’arrivée. Validez le mot PULSE uniquement après 10 squats contrôlés, le slalom aller-retour, le transport des 3 objets et le franchissement de la ligne.",
          "success": "Le module mouvement redémarre.",
          "props": [
            "4 plots ou repères au sol",
            "3 objets légers",
            "ruban ou corde pour la ligne d’arrivée"
          ]
        },
        {
          "id": "maths",
          "title": "Zone Logique",
          "icon": "∑",
          "code": "300",
          "codeType": "digits",
          "brief": "Résolvez le calcul distance et le classement des temps.",
          "hostSetup": "Préparez les cartes 4×75 et les quatre temps. Le code de base est 300.",
          "success": "Le module logique redémarre.",
          "props": [
            "cartes nombres"
          ]
        },
        {
          "id": "science",
          "title": "Zone Science",
          "icon": "◉",
          "code": "3425",
          "codeType": "digits",
          "brief": "Croisez les fragments distribués entre les rôles.",
          "hostSetup": "Donnez un fragment par rôle. Le code de base est 3425.",
          "success": "Le module science redémarre.",
          "props": [
            "4 fragments rôle"
          ]
        }
      ],
      "mechanics": [
        "défi moteur",
        "calcul",
        "classement",
        "sécurité",
        "rôles distribués",
        "terminal central"
      ],
      "materials": [
        "4 plots ou repères au sol pour le slalom",
        "3 objets légers et stables à transporter un par un",
        "1 ligne d’arrivée matérialisée avec ruban ou corde",
        "cartes imprimées des stations Logique et Science"
      ],
      "setup": [
        "Installer la station Mouvement : 4 plots en slalom, 3 objets légers au départ et une ligne d’arrivée clairement visible.",
        "Installer les cartes de la Zone Logique et répartir les quatre fragments de la Zone Science.",
        "Conserver l’ordre du circuit PULSE : 10 squats contrôlés, slalom aller-retour, transport des 3 objets, puis ligne d’arrivée.",
        "Adapter seulement l’amplitude, l’espacement et la vitesse aux capacités du groupe ; si les squats sont impossibles, utiliser 10 assis-debout sur une chaise stable."
      ],
      "audience": [
        "ado",
        "adulte",
        "famille"
      ],
      "finale": "Les modules se synchronisent : l’équipe a combiné mouvement, logique et coopération sans faire du téléphone le centre du jeu.",
      "sourceOrigins": [
        "Benchmark du fonctionnement EPS-Maths-SVT / QR par groupe fourni dans les sources."
      ],
      "printables": [
        {
          "title": "Station 1 — Mouvement PULSE",
          "kind": "Installer",
          "body": "Circuit précis : 10 squats contrôlés → slalom 4 plots aller-retour → transporter 3 objets un par un → toucher la ligne d’arrivée.",
          "template": "pulse-motion",
          "copies": "1 panneau par station",
          "construction": "Installer 4 plots espacés d’environ 1,5 m et 3 objets légers. Adapter uniquement si contrainte de sécurité."
        },
        {
          "title": "Station 2 — Maths",
          "kind": "Classer",
          "body": "Classer les cartes par vitesse moyenne.",
          "template": "specific-cards",
          "copies": "1 par équipe",
          "construction": "Découper sur les pointillés puis plastifier si le support doit être réutilisé.",
          "items": [
            "120 m / 30 s",
            "200 m / 50 s",
            "80 m / 20 s",
            "160 m / 40 s"
          ]
        },
        {
          "title": "Station 3 — Sciences / code 3425",
          "kind": "Distribuer",
          "body": "Chaque carte doit être remise uniquement au rôle indiqué.",
          "template": "specific-roles",
          "copies": "1 jeu par équipe",
          "construction": "Découper les cartes et les distribuer séparément.",
          "items": [
            {
              "title": "OBSERVATEUR",
              "text": "3"
            },
            {
              "title": "DÉCODEUR",
              "text": "4"
            },
            {
              "title": "ARCHIVISTE",
              "text": "2"
            },
            {
              "title": "GARDIEN DU TEMPS",
              "text": "5"
            }
          ]
        },
        {
          "title": "Panneaux stations",
          "kind": "Installer",
          "body": "Panneaux de zone prêts à afficher.",
          "template": "specific-signs",
          "copies": "1 jeu par installation",
          "construction": "Imprimer en A4 ou A3 et fixer à l’entrée de chaque zone.",
          "items": [
            "STATION 1 — MOUVEMENT",
            "STATION 2 — MATHS",
            "STATION 3 — SCIENCES",
            "ZONE FINALE"
          ]
        }
      ],
      "prepMin": 30,
      "soloMode": "adapt"
    },
    {
      "id": "mythos-oracle",
      "title": "MYTHOS — Le Dossier des Oracles",
      "subtitle": "Mythologie • Symboles • Déduction",
      "category": "education",
      "genre": "science_culture",
      "age": "11+",
      "durationMin": 50,
      "players": "3–6",
      "formats": [
        "numerique",
        "hybride",
        "equipe"
      ],
      "icon": "Ω",
      "accent": "#d8b56b",
      "challenge": 3,
      "recommendedDifficulty": "aventure",
      "description": "Une enquête culturelle originale inspirée des mécaniques d’escape pédagogiques : alphabets, œuvres, symboles et fragments à recouper sans reproduire un scénario existant.",
      "intro": "Les archives du musée ont été mélangées. Quatre dossiers attribués aux mauvaises divinités empêchent l’ouverture de la salle des Oracles. Réunissez les indices et rétablissez les correspondances.",
      "chapters": [
        {
          "id": "archives",
          "title": "Les archives déplacées"
        },
        {
          "id": "alphabet",
          "title": "Alphabet ancien"
        },
        {
          "id": "oracle",
          "title": "La chambre de l’Oracle"
        }
      ],
      "steps": [
        {
          "id": "mo1",
          "chapter": "archives",
          "type": "match",
          "title": "Attributs perdus",
          "prompt": "Associez chaque attribut à son domaine pour ouvrir le premier tiroir.",
          "pairs": [
            [
              "Trident",
              "Mer"
            ],
            [
              "Foudre",
              "Ciel"
            ],
            [
              "Lyre",
              "Musique"
            ]
          ],
          "answer": "ok",
          "points": 120,
          "hints": [
            "Commencez par l’objet le plus évident.",
            "Trident→Mer ; Foudre→Ciel ; Lyre→Musique."
          ]
        },
        {
          "id": "mo2",
          "chapter": "archives",
          "type": "order",
          "title": "Frise des récits",
          "prompt": "Replacez les quatre fragments dans l’ordre logique : naissance, quête, épreuve, retour.",
          "items": [
            "Retour",
            "Épreuve",
            "Naissance",
            "Quête"
          ],
          "answer": [
            "Naissance",
            "Quête",
            "Épreuve",
            "Retour"
          ],
          "points": 120,
          "hints": [
            "Une histoire commence avant la quête.",
            "Naissance → Quête → Épreuve → Retour."
          ]
        },
        {
          "id": "mo3",
          "chapter": "alphabet",
          "type": "cipher",
          "title": "Alphabet déplacé",
          "prompt": "Avec la clé fournie, décodez : PSBDMF.",
          "answer": [
            "ORACLE"
          ],
          "points": 150,
          "hints": [
            "Chaque lettre a été décalée d’un rang.",
            "Recule chaque lettre d’un rang : ORACLE."
          ],
          "cipherMode": "caesar"
        },
        {
          "id": "mo4",
          "chapter": "alphabet",
          "type": "memory",
          "title": "Les quatre sceaux",
          "prompt": "Mémorisez l’ordre des sceaux.",
          "sequence": [
            "œil",
            "plume",
            "lune",
            "flamme"
          ],
          "tokens": [
            "œil",
            "plume",
            "lune",
            "flamme",
            "clé",
            "couronne"
          ],
          "answer": [
            "œil",
            "plume",
            "lune",
            "flamme"
          ],
          "points": 130,
          "hints": [
            "Regroupez-les deux par deux.",
            "Œil → plume → lune → flamme."
          ]
        },
        {
          "id": "mo5",
          "chapter": "oracle",
          "type": "team_split",
          "title": "Les voix de l’Oracle",
          "prompt": "Chaque rôle détient un morceau du mot final. Réunissez-les.",
          "cards": {
            "observateur": "Le mot commence par S.",
            "decodeur": "Les lettres centrales sont PHI.",
            "archiviste": "Le mot se termine par NX.",
            "gardien": "Il comporte 6 lettres.",
            "default": "Partage ton fragment."
          },
          "answer": [
            "SPHINX"
          ],
          "points": 180,
          "hints": [
            "Assemblez les fragments dans l’ordre du mot.",
            "S + PHI + NX = SPHINX."
          ]
        },
        {
          "id": "mo6",
          "chapter": "oracle",
          "type": "text",
          "title": "La question finale",
          "prompt": "Quel mot avez-vous reconstitué ?",
          "answer": [
            "SPHINX"
          ],
          "points": 180,
          "hints": [
            "C’est la créature du dossier final.",
            "SPHINX."
          ],
          "minRank": 1
        }
      ],
      "mechanics": [
        "association",
        "frise",
        "chiffrement",
        "mémoire",
        "rôles distribués",
        "méta-mot"
      ],
      "materials": [
        "cartes symboles facultatives"
      ],
      "setup": [
        "Imprimer les cartes si vous souhaitez une version hybride."
      ],
      "audience": [
        "enfant",
        "ado",
        "adulte",
        "famille"
      ],
      "finale": "Les archives sont rétablies. Vous avez ouvert le Dossier des Oracles sans qu’un seul joueur possède toutes les informations.",
      "printables": [
        {
          "title": "Attributs des Oracles",
          "kind": "Associer",
          "body": "Associer chaque attribut à son domaine.",
          "template": "specific-cards",
          "copies": "1 par équipe",
          "construction": "Découper sur les pointillés puis plastifier si le support doit être réutilisé.",
          "items": [
            "TRIDENT ↔ MER",
            "FOUDRE ↔ CIEL",
            "LYRE ↔ MUSIQUE",
            "HIBOU ↔ SAGESSE"
          ]
        },
        {
          "title": "Frise des récits",
          "kind": "Découper",
          "body": "Cartes à remettre dans le bon ordre.",
          "template": "specific-sequence",
          "copies": "1 par équipe",
          "construction": "Découper puis mélanger avant la partie.",
          "items": [
            "NAISSANCE",
            "QUÊTE",
            "ÉPREUVE",
            "RETOUR"
          ]
        },
        {
          "title": "Message César — PSBDMF",
          "kind": "Décoder",
          "body": "Utiliser la roue César pour retrouver ORACLE.",
          "template": "caesar-wheel",
          "copies": "1 par équipe",
          "construction": "Découper les deux roues et assembler avec une attache parisienne."
        },
        {
          "title": "Sceaux de l’Oracle",
          "kind": "Découper",
          "body": "Cartes à remettre dans le bon ordre.",
          "template": "specific-sequence",
          "copies": "1 par équipe",
          "construction": "Découper puis mélanger avant la partie.",
          "items": [
            "ŒIL",
            "PLUME",
            "LUNE",
            "FLAMME",
            "CLÉ — LEURRE",
            "COURONNE — LEURRE"
          ]
        },
        {
          "title": "Voix de l’Oracle — SPHINX",
          "kind": "Distribuer",
          "body": "Chaque carte doit être remise uniquement au rôle indiqué.",
          "template": "specific-roles",
          "copies": "1 jeu par équipe",
          "construction": "Découper les cartes et les distribuer séparément.",
          "items": [
            {
              "title": "OBSERVATEUR",
              "text": "Le mot commence par S."
            },
            {
              "title": "DÉCODEUR",
              "text": "Les lettres centrales sont PHI."
            },
            {
              "title": "ARCHIVISTE",
              "text": "Le mot se termine par NX."
            },
            {
              "title": "GARDIEN DU TEMPS",
              "text": "Il comporte 6 lettres."
            }
          ]
        }
      ],
      "prepMin": 20,
      "soloMode": "adapt"
    },
    {
      "id": "archives-44",
      "title": "Archives 44 — Le Message Perdu",
      "subtitle": "Histoire • Documents • Recoupement",
      "category": "education",
      "genre": "science_culture",
      "age": "13+",
      "durationMin": 55,
      "players": "3–6",
      "formats": [
        "numerique",
        "hybride",
        "equipe"
      ],
      "icon": "✉",
      "accent": "#c5b58a",
      "challenge": 3,
      "recommendedDifficulty": "aventure",
      "description": "Une mission historique fictive construite autour du tri de documents, de la chronologie et de la transmission d’informations. Elle n’utilise pas de personnages historiques inventés comme faits réels.",
      "intro": "Une mallette d’archives fictives contient un message incomplet daté de 1944. Votre mission est de remettre les pièces dans l’ordre et d’identifier la phrase de transmission.",
      "chapters": [
        {
          "id": "dossier",
          "title": "Dossier scellé"
        },
        {
          "id": "transmission",
          "title": "Transmission"
        },
        {
          "id": "final",
          "title": "Archive finale"
        }
      ],
      "steps": [
        {
          "id": "a441",
          "chapter": "dossier",
          "type": "order",
          "title": "Quatre documents",
          "prompt": "Classez les documents fictifs par date : 12/06, 03/07, 18/08, 25/08.",
          "items": [
            "25/08",
            "12/06",
            "18/08",
            "03/07"
          ],
          "answer": [
            "12/06",
            "03/07",
            "18/08",
            "25/08"
          ],
          "points": 100,
          "hints": [
            "Commencez par les mois puis les jours.",
            "12/06 → 03/07 → 18/08 → 25/08."
          ]
        },
        {
          "id": "a442",
          "chapter": "dossier",
          "type": "cipher",
          "title": "Message au crayon",
          "prompt": "Le texte utilise un décalage César de +2. Décodez OCKUQP.",
          "answer": [
            "MAISON"
          ],
          "points": 140,
          "hints": [
            "Pour décoder, reculez chaque lettre de 2.",
            "MAISON."
          ],
          "cipherMode": "caesar"
        },
        {
          "id": "a443",
          "chapter": "transmission",
          "type": "match",
          "title": "Réseau de transmission",
          "prompt": "Associez chaque support à son usage.",
          "pairs": [
            [
              "Radio",
              "Message à distance"
            ],
            [
              "Carte",
              "Repérage"
            ],
            [
              "Carnet",
              "Notes"
            ]
          ],
          "answer": "ok",
          "points": 110,
          "hints": [
            "Pensez à la fonction de chaque objet.",
            "Radio→distance ; Carte→repérage ; Carnet→notes."
          ]
        },
        {
          "id": "a444",
          "chapter": "transmission",
          "type": "memory",
          "title": "Indicatif",
          "prompt": "Mémorisez l’indicatif.",
          "sequence": [
            "A",
            "4",
            "L",
            "2"
          ],
          "tokens": [
            "A",
            "4",
            "L",
            "2",
            "7",
            "M"
          ],
          "answer": [
            "A",
            "4",
            "L",
            "2"
          ],
          "points": 110,
          "hints": [
            "Deux lettres et deux chiffres.",
            "A → 4 → L → 2."
          ]
        },
        {
          "id": "a445",
          "chapter": "final",
          "type": "team_split",
          "title": "Fragments du message",
          "prompt": "Rassemblez les fragments détenus par les rôles.",
          "cards": {
            "observateur": "RENDEZ",
            "decodeur": "VOUS",
            "archiviste": "À LA",
            "gardien": "MAISON",
            "default": "Partage ton fragment."
          },
          "answer": [
            "RENDEZ VOUS A LA MAISON",
            "RENDEZ-VOUS A LA MAISON"
          ],
          "points": 190,
          "hints": [
            "Mettez les fragments dans une phrase naturelle.",
            "RENDEZ-VOUS À LA MAISON."
          ]
        },
        {
          "id": "a446",
          "chapter": "final",
          "type": "choice",
          "title": "Lire une archive",
          "prompt": "Quel réflexe est le plus fiable devant un document historique ?",
          "options": [
            "Vérifier sa date, son auteur et son contexte",
            "Le croire parce qu’il est ancien",
            "Garder uniquement ce qui confirme notre idée"
          ],
          "answer": 0,
          "points": 120,
          "hints": [
            "Une archive doit être contextualisée.",
            "Vérifier date, auteur et contexte."
          ]
        }
      ],
      "mechanics": [
        "chronologie",
        "César",
        "association",
        "mémoire",
        "coopération",
        "analyse documentaire"
      ],
      "materials": [
        "enveloppe d’archives facultative",
        "cartes documents facultatives"
      ],
      "setup": [
        "Présenter clairement que les personnages et documents du scénario sont fictifs."
      ],
      "audience": [
        "ado",
        "adulte",
        "famille"
      ],
      "finale": "Le message est reconstitué et l’archive peut être classée correctement.",
      "printables": [
        {
          "title": "Quatre documents fictifs",
          "kind": "Classer",
          "body": "Documents d’archive fictifs à ordonner par date.",
          "template": "specific-cards",
          "copies": "1 par équipe",
          "construction": "Découper sur les pointillés puis plastifier si le support doit être réutilisé.",
          "items": [
            "12/06 — NOTE LOGISTIQUE",
            "03/07 — MESSAGE RADIO",
            "18/08 — PLAN DE ROUTE",
            "25/08 — RAPPORT FINAL"
          ]
        },
        {
          "title": "Message chiffré — OCKUQP",
          "kind": "Décoder",
          "body": "Décalage César +2 ; le mot attendu est MAISON.",
          "template": "caesar-strip",
          "copies": "1 par équipe",
          "construction": "Imprimer avec la bande alphabet et cacher dans une enveloppe d’archive.",
          "cipher": "OCKUQP"
        },
        {
          "title": "Réseau de transmission",
          "kind": "Associer",
          "body": "Associer support et usage.",
          "template": "specific-cards",
          "copies": "1 par équipe",
          "construction": "Découper sur les pointillés puis plastifier si le support doit être réutilisé.",
          "items": [
            "RADIO ↔ MESSAGE RAPIDE",
            "CARTE ↔ ITINÉRAIRE",
            "CARNET ↔ NOTES",
            "PHOTO ↔ PREUVE VISUELLE"
          ]
        },
        {
          "title": "Indicatif A4L2",
          "kind": "Découper",
          "body": "Cartes à remettre dans le bon ordre.",
          "template": "specific-sequence",
          "copies": "1 par équipe",
          "construction": "Découper puis mélanger avant la partie.",
          "items": [
            "A",
            "4",
            "L",
            "2",
            "7 — LEURRE",
            "M — LEURRE"
          ]
        },
        {
          "title": "Fragments du message final",
          "kind": "Distribuer",
          "body": "Chaque carte doit être remise uniquement au rôle indiqué.",
          "template": "specific-roles",
          "copies": "1 jeu par équipe",
          "construction": "Découper les cartes et les distribuer séparément.",
          "items": [
            {
              "title": "OBSERVATEUR",
              "text": "RENDEZ"
            },
            {
              "title": "DÉCODEUR",
              "text": "VOUS"
            },
            {
              "title": "ARCHIVISTE",
              "text": "À LA"
            },
            {
              "title": "GARDIEN DU TEMPS",
              "text": "MAISON"
            }
          ]
        }
      ],
      "prepMin": 20,
      "soloMode": "adapt"
    },
    {
      "id": "cellule-2051",
      "title": "Cellule 2051 — Alerte Biolab",
      "subtitle": "Sciences • SVT • Laboratoire",
      "category": "education",
      "genre": "science_culture",
      "age": "12+",
      "durationMin": 50,
      "players": "3–6",
      "formats": [
        "numerique",
        "hybride",
        "equipe"
      ],
      "icon": "◉",
      "accent": "#72e0c5",
      "challenge": 3,
      "recommendedDifficulty": "aventure",
      "description": "Une mission scientifique originale inspirée des escapes interdisciplinaires : logique, cellule, observation et protocole, sans reprendre les contenus d’un jeu source.",
      "intro": "Le Biolab 2051 a mélangé quatre échantillons. Le sas ne s’ouvrira qu’après identification des marqueurs et validation du protocole.",
      "chapters": [
        {
          "id": "lab",
          "title": "Échantillons"
        },
        {
          "id": "protocole",
          "title": "Protocole"
        },
        {
          "id": "sas",
          "title": "Sas final"
        }
      ],
      "steps": [
        {
          "id": "c511",
          "chapter": "lab",
          "type": "match",
          "title": "Organites",
          "prompt": "Associez chaque élément à sa fonction simplifiée.",
          "pairs": [
            [
              "Noyau",
              "Information génétique"
            ],
            [
              "Membrane",
              "Échanges"
            ],
            [
              "Mitochondrie",
              "Énergie"
            ]
          ],
          "answer": "ok",
          "points": 120,
          "hints": [
            "Pensez à la fonction principale.",
            "Noyau→information ; membrane→échanges ; mitochondrie→énergie."
          ]
        },
        {
          "id": "c512",
          "chapter": "lab",
          "type": "multi",
          "title": "Échantillon vivant",
          "prompt": "Sélectionnez les deux indices compatibles avec une cellule.",
          "options": [
            {
              "id": "membrane",
              "label": "Présence d’une membrane"
            },
            {
              "id": "noyau",
              "label": "Matériel génétique organisé"
            },
            {
              "id": "acier",
              "label": "Structure en acier"
            },
            {
              "id": "wifi",
              "label": "Signal Wi-Fi"
            }
          ],
          "answer": [
            "membrane",
            "noyau"
          ],
          "points": 120,
          "hints": [
            "Écartez les éléments techniques.",
            "Membrane + matériel génétique."
          ]
        },
        {
          "id": "c513",
          "chapter": "protocole",
          "type": "order",
          "title": "Ordre du protocole",
          "prompt": "Remettez : observer, formuler une hypothèse, tester, conclure.",
          "items": [
            "Conclure",
            "Tester",
            "Observer",
            "Formuler une hypothèse"
          ],
          "answer": [
            "Observer",
            "Formuler une hypothèse",
            "Tester",
            "Conclure"
          ],
          "points": 120,
          "hints": [
            "On commence par ce qu’on constate.",
            "Observer → hypothèse → tester → conclure."
          ]
        },
        {
          "id": "c514",
          "chapter": "protocole",
          "type": "keypad",
          "title": "Code microscope",
          "prompt": "Grossissement : oculaire ×10 et objectif ×40. Entrez le grossissement total.",
          "answer": "400",
          "points": 130,
          "hints": [
            "Multipliez les deux valeurs.",
            "10 × 40 = 400."
          ]
        },
        {
          "id": "c515",
          "chapter": "sas",
          "type": "team_split",
          "title": "Quatre marqueurs",
          "prompt": "Chaque rôle possède un chiffre. Assemblez le code.",
          "cards": {
            "observateur": "Nombre de lettres de ADN = 3",
            "decodeur": "2 × 2 = 4",
            "archiviste": "Nombre de membranes indiquées = 1",
            "gardien": "10 ÷ 2 = 5",
            "default": "Partage ton chiffre."
          },
          "answer": "3415",
          "points": 180,
          "hints": [
            "Lisez les rôles dans l’ordre affiché.",
            "3-4-1-5."
          ]
        },
        {
          "id": "c516",
          "chapter": "sas",
          "type": "choice",
          "title": "Validation scientifique",
          "prompt": "Que fait-on si le résultat contredit l’hypothèse ?",
          "options": [
            "On adapte l’hypothèse et on reteste",
            "On cache le résultat",
            "On change les données"
          ],
          "answer": 0,
          "points": 120,
          "hints": [
            "Le résultat compte plus que l’idée de départ.",
            "On adapte et on reteste."
          ]
        }
      ],
      "mechanics": [
        "association",
        "sélection",
        "protocole",
        "calcul",
        "rôles",
        "raisonnement scientifique"
      ],
      "materials": [
        "cartes laboratoire facultatives"
      ],
      "setup": [
        "Aucun produit ni manipulation biologique réelle."
      ],
      "audience": [
        "ado",
        "adulte",
        "famille"
      ],
      "finale": "Le sas s’ouvre : l’équipe a validé le protocole en croisant observation, calcul et raisonnement.",
      "printables": [
        {
          "title": "Organites du Biolab",
          "kind": "Associer",
          "body": "Associer élément et fonction simplifiée.",
          "template": "specific-cards",
          "copies": "1 par équipe",
          "construction": "Découper sur les pointillés puis plastifier si le support doit être réutilisé.",
          "items": [
            "NOYAU ↔ INFORMATION",
            "MEMBRANE ↔ FRONTIÈRE",
            "MITOCHONDRIE ↔ ÉNERGIE",
            "CYTOPLASME ↔ MILIEU INTERNE"
          ]
        },
        {
          "title": "Échantillon vivant",
          "kind": "Sélectionner",
          "body": "Deux indices compatibles avec une cellule.",
          "template": "specific-cards",
          "copies": "1 par équipe",
          "construction": "Découper sur les pointillés puis plastifier si le support doit être réutilisé.",
          "items": [
            "MEMBRANE",
            "NOYAU",
            "ROUE — LEURRE",
            "CADENAS — LEURRE"
          ]
        },
        {
          "title": "Protocole scientifique",
          "kind": "Découper",
          "body": "Cartes à remettre dans le bon ordre.",
          "template": "specific-sequence",
          "copies": "1 par équipe",
          "construction": "Découper puis mélanger avant la partie.",
          "items": [
            "OBSERVER",
            "FORMULER UNE HYPOTHÈSE",
            "TESTER",
            "CONCLURE"
          ]
        },
        {
          "title": "Microscope ×400",
          "kind": "Imprimer",
          "body": "Calculer le grossissement total.",
          "template": "specific-sheet",
          "copies": "1 par équipe",
          "construction": "Imprimer et glisser dans une enveloppe de mission.",
          "lines": [
            "OCULAIRE ×10",
            "OBJECTIF ×40",
            "TOTAL : ______"
          ]
        },
        {
          "title": "Marqueurs du Biolab — 3415",
          "kind": "Distribuer",
          "body": "Chaque carte doit être remise uniquement au rôle indiqué.",
          "template": "specific-roles",
          "copies": "1 jeu par équipe",
          "construction": "Découper les cartes et les distribuer séparément.",
          "items": [
            {
              "title": "OBSERVATEUR",
              "text": "Nombre de lettres de ADN = 3"
            },
            {
              "title": "DÉCODEUR",
              "text": "2 × 2 = 4"
            },
            {
              "title": "ARCHIVISTE",
              "text": "Nombre de membranes indiquées = 1"
            },
            {
              "title": "GARDIEN DU TEMPS",
              "text": "10 ÷ 2 = 5"
            }
          ]
        }
      ],
      "prepMin": 20,
      "soloMode": "adapt"
    },
    {
      "id": "mission-babel",
      "title": "Mission Babel — Les Langues Libérées",
      "subtitle": "Langues • Communication • Codes",
      "category": "education",
      "genre": "science_culture",
      "age": "11+",
      "durationMin": 45,
      "players": "3–6",
      "formats": [
        "numerique",
        "equipe"
      ],
      "icon": "A↔",
      "accent": "#7dc6ff",
      "challenge": 2,
      "recommendedDifficulty": "aventure",
      "description": "Un escape de communication qui mélange vocabulaire, symboles, écoute et logique. Les joueurs n’ont pas besoin d’être bilingues.",
      "intro": "Le traducteur central s’est fragmenté en quatre modules. Pour rétablir la communication, vous devez reconstruire les correspondances et le code final.",
      "chapters": [
        {
          "id": "mots",
          "title": "Mots et sens"
        },
        {
          "id": "signal",
          "title": "Signal"
        },
        {
          "id": "final",
          "title": "Babel"
        }
      ],
      "steps": [
        {
          "id": "mb1",
          "chapter": "mots",
          "type": "match",
          "title": "Faux amis",
          "prompt": "Associez les salutations à la bonne langue.",
          "pairs": [
            [
              "Hola",
              "Espagnol"
            ],
            [
              "Hello",
              "Anglais"
            ],
            [
              "Hallo",
              "Allemand"
            ]
          ],
          "answer": "ok",
          "points": 100,
          "hints": [
            "Une salutation peut être très proche visuellement.",
            "Hola→espagnol ; Hello→anglais ; Hallo→allemand."
          ]
        },
        {
          "id": "mb2",
          "chapter": "mots",
          "type": "order",
          "title": "Phrase mélangée",
          "prompt": "Remettez dans l’ordre : « TEAM / THE / SAVE / CODE ».",
          "items": [
            "CODE",
            "SAVE",
            "THE",
            "TEAM"
          ],
          "answer": [
            "SAVE",
            "THE",
            "TEAM",
            "CODE"
          ],
          "points": 120,
          "hints": [
            "Commencez par le verbe.",
            "SAVE THE TEAM CODE."
          ]
        },
        {
          "id": "mb3",
          "chapter": "signal",
          "type": "sound",
          "title": "Trois tonalités",
          "prompt": "Quel son est le plus aigu ?",
          "tones": [
            240,
            440,
            660
          ],
          "options": [
            "1",
            "2",
            "3"
          ],
          "answer": "3",
          "points": 110,
          "hints": [
            "Aigu = fréquence la plus haute.",
            "Le son 3."
          ]
        },
        {
          "id": "mb4",
          "chapter": "signal",
          "type": "cipher",
          "title": "Alphabet international",
          "prompt": "A=1, B=2… Décodez 2-1-2-5-12.",
          "answer": [
            "BABEL"
          ],
          "points": 120,
          "hints": [
            "Transformez chaque nombre en lettre.",
            "2=B,1=A,2=B,5=E,12=L."
          ],
          "cipherMode": "a1z26"
        },
        {
          "id": "mb5",
          "chapter": "final",
          "type": "team_split",
          "title": "Traduction distribuée",
          "prompt": "Chaque rôle possède un mot ; formez la phrase.",
          "cards": {
            "observateur": "NOUS",
            "decodeur": "AVONS",
            "archiviste": "LE",
            "gardien": "CODE",
            "default": "Partage ton mot."
          },
          "answer": [
            "NOUS AVONS LE CODE"
          ],
          "points": 160,
          "hints": [
            "Utilisez l’ordre naturel de la phrase.",
            "NOUS AVONS LE CODE."
          ]
        },
        {
          "id": "mb6",
          "chapter": "final",
          "type": "text",
          "title": "Clé finale",
          "prompt": "Quel mot a donné l’alphabet numérique ?",
          "answer": [
            "BABEL"
          ],
          "points": 120,
          "hints": [
            "C’était l’épreuve 4.",
            "BABEL."
          ]
        }
      ],
      "mechanics": [
        "association",
        "ordre",
        "son",
        "alphabet numérique",
        "rôles",
        "mémoire de parcours"
      ],
      "materials": [
        "aucun"
      ],
      "setup": [
        "Le son peut être remplacé par une transcription si nécessaire."
      ],
      "audience": [
        "enfant",
        "ado",
        "adulte",
        "famille"
      ],
      "finale": "Le traducteur est rétabli. La mission récompense surtout la coopération et les correspondances, pas le niveau scolaire en langue.",
      "prepMin": 5,
      "soloMode": "adapt"
    },
    {
      "id": "numystere",
      "title": "Numystère — Le Coffre des Nombres",
      "subtitle": "Maths • Logique • Cadenas",
      "category": "education",
      "genre": "codes_logique",
      "age": "10+",
      "durationMin": 45,
      "players": "2–6",
      "formats": [
        "numerique",
        "hybride",
        "equipe"
      ],
      "icon": "∑",
      "accent": "#ffcb68",
      "challenge": 3,
      "recommendedDifficulty": "aventure",
      "description": "Une adaptation originale des mécaniques mathématiques rencontrées dans les sources : logique, divisibilité, pyramides et codes, sans reprendre leurs énigmes exactes.",
      "intro": "Un coffre numérique s’est verrouillé derrière quatre couches de logique. Chaque épreuve fournit un fragment du code maître.",
      "chapters": [
        {
          "id": "logique",
          "title": "Logique"
        },
        {
          "id": "pyramides",
          "title": "Pyramides"
        },
        {
          "id": "coffre",
          "title": "Coffre maître"
        }
      ],
      "steps": [
        {
          "id": "nu1",
          "chapter": "logique",
          "type": "keypad",
          "title": "Nombre caché",
          "prompt": "Je suis impair, compris entre 40 et 50 et divisible par 3. Qui suis-je ?",
          "answer": "45",
          "points": 110,
          "hints": [
            "Liste les multiples de 3 proches de 45.",
            "45."
          ]
        },
        {
          "id": "nu2",
          "chapter": "logique",
          "type": "choice",
          "title": "Divisibilité",
          "prompt": "Quel nombre est divisible par 9 ?",
          "options": [
            "72",
            "74",
            "76"
          ],
          "answer": 0,
          "points": 100,
          "hints": [
            "Additionne les chiffres.",
            "7+2=9, donc 72."
          ]
        },
        {
          "id": "nu3",
          "chapter": "pyramides",
          "type": "keypad",
          "title": "Pyramide additive",
          "prompt": "Base : 4, 7, 3. Chaque case est la somme des deux dessous. Quelle valeur au sommet ?",
          "answer": "21",
          "points": 130,
          "hints": [
            "Deuxième rang : 11 et 10.",
            "11+10=21."
          ]
        },
        {
          "id": "nu4",
          "chapter": "pyramides",
          "type": "order",
          "title": "Ordre croissant",
          "prompt": "Classez 18, 6, 27, 12.",
          "items": [
            "27",
            "12",
            "18",
            "6"
          ],
          "answer": [
            "6",
            "12",
            "18",
            "27"
          ],
          "points": 100,
          "hints": [
            "Commencez par 6.",
            "6 → 12 → 18 → 27."
          ]
        },
        {
          "id": "nu5",
          "chapter": "coffre",
          "type": "team_split",
          "title": "Calculs répartis",
          "prompt": "Assemblez les quatre résultats.",
          "cards": {
            "observateur": "9-4",
            "decodeur": "3×2",
            "archiviste": "12÷4",
            "gardien": "2+5",
            "default": "Partage ton résultat."
          },
          "answer": "5637",
          "points": 170,
          "hints": [
            "Chaque rôle donne un chiffre.",
            "5-6-3-7."
          ]
        },
        {
          "id": "nu6",
          "chapter": "coffre",
          "type": "keypad",
          "title": "Code maître",
          "prompt": "Concaténez le nombre caché (45) et le sommet de la pyramide (21).",
          "answer": "4521",
          "points": 160,
          "hints": [
            "Deux résultats déjà trouvés.",
            "45 + 21 → 4521."
          ],
          "minRank": 1
        }
      ],
      "mechanics": [
        "divisibilité",
        "calcul",
        "pyramide",
        "ordre",
        "rôles",
        "méta-code"
      ],
      "materials": [
        "cadenas physique facultatif"
      ],
      "setup": [
        "En hybride, le dernier code peut ouvrir un coffre réel."
      ],
      "audience": [
        "enfant",
        "ado",
        "adulte",
        "famille"
      ],
      "finale": "Le coffre s’ouvre : les mathématiques deviennent une suite de verrous, pas une feuille d’exercices.",
      "printables": [
        {
          "title": "Énigme du nombre caché",
          "kind": "Imprimer",
          "body": "Trouver un nombre impair entre 40 et 50, divisible par 3.",
          "template": "specific-sheet",
          "copies": "1 par équipe",
          "construction": "Imprimer et glisser dans une enveloppe de mission.",
          "lines": [
            "NOMBRE : ____"
          ]
        },
        {
          "title": "Cartes divisibilité",
          "kind": "Choisir",
          "body": "Trouver le nombre divisible par 9.",
          "template": "specific-cards",
          "copies": "1 par équipe",
          "construction": "Découper sur les pointillés puis plastifier si le support doit être réutilisé.",
          "items": [
            "27",
            "28",
            "31",
            "44"
          ]
        },
        {
          "title": "Pyramide additive — sommet 21",
          "kind": "Calculer",
          "body": "Base 4, 7, 3 ; chaque case est la somme des deux cases dessous.",
          "template": "single-pyramid",
          "copies": "1 par équipe",
          "construction": "Imprimer et fournir un crayon.",
          "base": [
            4,
            7,
            3
          ]
        },
        {
          "title": "Ordre croissant",
          "kind": "Découper",
          "body": "Cartes à remettre dans le bon ordre.",
          "template": "specific-sequence",
          "copies": "1 par équipe",
          "construction": "Découper puis mélanger avant la partie.",
          "items": [
            "18",
            "6",
            "27",
            "12"
          ]
        },
        {
          "title": "Calculs répartis — 5637",
          "kind": "Distribuer",
          "body": "Chaque carte doit être remise uniquement au rôle indiqué.",
          "template": "specific-roles",
          "copies": "1 jeu par équipe",
          "construction": "Découper les cartes et les distribuer séparément.",
          "items": [
            {
              "title": "OBSERVATEUR",
              "text": "9 − 4"
            },
            {
              "title": "DÉCODEUR",
              "text": "3 × 2"
            },
            {
              "title": "ARCHIVISTE",
              "text": "12 ÷ 4"
            },
            {
              "title": "GARDIEN DU TEMPS",
              "text": "2 + 5"
            }
          ]
        },
        {
          "title": "Étiquette coffre — 4521",
          "kind": "Installer",
          "body": "Étiquette pour le coffre ou le cadenas final.",
          "template": "chest-label",
          "copies": "1 par coffre",
          "construction": "Coller sur le coffre final. Le code numérique est géré dans l’application.",
          "text": "NUMYSTÈRE — COFFRE MAÎTRE"
        }
      ],
      "prepMin": 20,
      "soloMode": "adapt"
    },
    {
      "id": "mode-silence",
      "title": "Mode Silence",
      "subtitle": "Enquête réaliste • Harcèlement • Témoins",
      "category": "impact",
      "age": "11–17",
      "durationMin": 55,
      "players": "3–6",
      "formats": [
        "numerique",
        "equipe"
      ],
      "icon": "◎",
      "accent": "#ff8ca6",
      "description": "Une enquête fictive réaliste sur le harcèlement et le cyberharcèlement. Les joueurs analysent des messages, la répétition, l’isolement et le rôle des témoins sans caricaturer filles ou garçons.",
      "intro": "Depuis plusieurs jours, Noa reçoit des montages et des surnoms dans un groupe. Plusieurs personnes parlent d’une blague. Puis Noa quitte le groupe et s’isole. Reconstituez les faits et choisissez les réactions qui protègent sans aggraver.",
      "steps": [
        {
          "id": "ms1",
          "chapter": "faits",
          "type": "order",
          "title": "Quatre jours de messages",
          "prompt": "Remets les éléments dans l’ordre.",
          "answer": [
            "Lundi : premier surnom",
            "Mardi : montage partagé",
            "Mercredi : plusieurs réactions moqueuses",
            "Jeudi : Noa quitte le groupe"
          ],
          "points": 130,
          "hints": [
            "Cherche les jours.",
            "Lundi → mardi → mercredi → jeudi."
          ],
          "items": [
            "Jeudi : Noa quitte le groupe",
            "Mardi : montage partagé",
            "Lundi : premier surnom",
            "Mercredi : plusieurs réactions moqueuses"
          ],
          "fact": "Une situation répétée dans le temps et qui isole une personne mérite d’être prise au sérieux.",
          "source": "Ministère de l’Éducation nationale — Non au harcèlement",
          "evidence": [
            {
              "kind": "chat",
              "author": "Adam",
              "time": "Lun. 18:11",
              "text": "J’ai fait un montage de Noa, c’est juste pour rire 😅"
            },
            {
              "kind": "chat",
              "author": "Jade",
              "time": "Mar. 20:03",
              "text": "Ça tourne encore ? Noa a demandé d’arrêter hier."
            },
            {
              "kind": "chat",
              "author": "Mehdi",
              "time": "Mer. 12:42",
              "text": "À midi, plusieurs personnes ont repris le surnom devant tout le monde."
            },
            {
              "kind": "note",
              "author": "Lina",
              "time": "Jeu. 17:55",
              "text": "Noa a quitté le groupe et m’a dit ne plus vouloir venir à la pause avec nous."
            }
          ]
        },
        {
          "id": "ms2",
          "chapter": "faits",
          "type": "multi",
          "title": "Blague ou situation préoccupante ?",
          "prompt": "Quels éléments doivent vous alerter ?",
          "answer": [
            "repetition",
            "isolement",
            "diffusion"
          ],
          "points": 140,
          "hints": [
            "Une blague isolée n’explique pas tout.",
            "Répétition, isolement, diffusion en ligne."
          ],
          "options": [
            {
              "id": "repetition",
              "label": "Les publications se répètent plusieurs jours"
            },
            {
              "id": "isolement",
              "label": "Noa s’isole et quitte le groupe"
            },
            {
              "id": "diffusion",
              "label": "Le montage est repartagé"
            },
            {
              "id": "likes",
              "label": "Le post a peu de likes"
            }
          ],
          "fact": "Le cyberharcèlement prolonge ou amplifie souvent la situation hors de l’établissement.",
          "source": "Ministère de l’Éducation nationale — Non au harcèlement"
        },
        {
          "id": "ms3",
          "chapter": "agir",
          "type": "choice",
          "title": "Témoin : que faire ?",
          "prompt": "Lina a gardé une capture. Quelle action est la plus utile ?",
          "answer": 1,
          "points": 130,
          "hints": [
            "Cherche à conserver les faits sans les rediffuser.",
            "Garder la preuve et en parler à un adulte de confiance."
          ],
          "options": [
            "La repartager pour demander qui trouve ça drôle",
            "Conserver la capture et en parler à un adulte de confiance",
            "Répondre publiquement avec une insulte",
            "Ne rien faire"
          ],
          "evidence": [
            {
              "kind": "note",
              "author": "Lina",
              "time": "Capture conservée",
              "text": "Je n’ai rien repartagé. J’ai gardé la capture avec la date et l’heure."
            }
          ]
        },
        {
          "id": "ms4",
          "chapter": "agir",
          "type": "team_split",
          "title": "Réponse d’équipe",
          "prompt": "Chaque rôle reçoit un point de vue. Quelle action commune choisissez-vous ?",
          "answer": [
            "SIGNALER",
            "PARLER"
          ],
          "points": 170,
          "hints": [
            "Votre réponse doit chercher de l’aide, pas régler seul le conflit.",
            "SIGNALER ou PARLER."
          ],
          "cards": {
            "observateur": "Tu as vu les publications plusieurs jours.",
            "decodeur": "Tu as une capture datée.",
            "messager": "Noa t’a dit vouloir que cela s’arrête.",
            "gardien": "Le groupe continue le soir après les cours.",
            "default": "Partage ton information."
          },
          "fact": "Conserver les preuves, parler à un adulte et signaler permettent d’agir sans rester seul.",
          "source": "Ministère de l’Éducation nationale — 3018"
        },
        {
          "id": "ms5",
          "chapter": "agir",
          "type": "choice",
          "title": "Le mauvais réflexe",
          "prompt": "Quel comportement risque d’aggraver la situation ?",
          "answer": 2,
          "points": 120,
          "hints": [
            "Évite la confrontation publique et la surenchère.",
            "Répondre par une humiliation publique."
          ],
          "options": [
            "Demander de l’aide",
            "Conserver les preuves",
            "Humilier publiquement la personne qui a posté",
            "Accompagner la personne visée"
          ]
        },
        {
          "id": "ms6",
          "chapter": "final",
          "type": "keypad",
          "title": "Repère réel",
          "prompt": "Quel numéro national peut renseigner ou accompagner pour le harcèlement et les violences numériques en France ?",
          "answer": "3018",
          "points": 150,
          "hints": [
            "Il commence par 30.",
            "3018."
          ],
          "fact": "Le 3018 est gratuit, anonyme et confidentiel ; il est indiqué par le ministère pour les élèves, parents et professionnels.",
          "source": "education.gouv.fr/non-au-harcelement"
        }
      ],
      "chapters": [
        {
          "id": "faits",
          "title": "Reconstituer les faits"
        },
        {
          "id": "agir",
          "title": "Décider comment agir"
        },
        {
          "id": "final",
          "title": "Repère utile"
        }
      ],
      "mechanics": [
        "chronologie",
        "analyse de messages",
        "sélection",
        "rôles",
        "décision",
        "repère réel"
      ],
      "materials": [
        "aucun"
      ],
      "setup": [
        "Prévoir 10 à 15 minutes de débrief après le jeu.",
        "Rappeler qu’il s’agit de personnages fictifs."
      ],
      "audience": [
        "ado"
      ],
      "debrief": [
        "À quel moment la situation vous a-t-elle semblé dépasser une simple blague ?",
        "Pourquoi un témoin peut-il hésiter à parler ?",
        "Comment aider sans repartager le contenu ?"
      ],
      "finale": "Vous avez reconstitué une situation sans chercher un coupable caricatural. Le plus important est de reconnaître les signaux et de ne pas laisser une personne seule.",
      "cast": [
        {
          "name": "Noa",
          "role": "personne visée par les publications"
        },
        {
          "name": "Lina",
          "role": "témoin qui conserve une capture"
        },
        {
          "name": "Adam",
          "role": "a repartagé un montage sans mesurer l’effet"
        },
        {
          "name": "Jade",
          "role": "amie qui veut aider sans relancer le conflit"
        },
        {
          "name": "Mehdi",
          "role": "témoin d’une scène dans l’établissement"
        }
      ],
      "sources": [
        {
          "label": "Ministère de l’Éducation nationale — Non au harcèlement",
          "url": "https://www.education.gouv.fr/non-au-harcelement"
        }
      ],
      "genre": "questions_ados",
      "challenge": 2,
      "recommendedDifficulty": "aventure",
      "topic": "harcelement_violence",
      "prepMin": 5,
      "soloMode": "adapt"
    },
    {
      "id": "photo-sous-controle",
      "title": "Photo sous Contrôle — Le Dossier Effacé",
      "subtitle": "Questions d’ados • Image • Vie privée • Cyberharcèlement",
      "category": "impact",
      "genre": "questions_ados",
      "topic": "image_vie_privee",
      "age": "11–17",
      "durationMin": 50,
      "players": "3–6",
      "formats": [
        "numerique",
        "hybride",
        "equipe"
      ],
      "icon": "▣",
      "accent": "#ff7eb6",
      "challenge": 3,
      "recommendedDifficulty": "aventure",
      "description": "Un escape numérique réaliste inspiré des mécaniques “téléphone verrouillé → traces → responsabilité → vie privée → diffusion → signalement”, avec faux écrans et dossier fictif. Aucun jeune n’a à raconter sa propre histoire.",
      "intro": "Le téléphone du club photo affiche une notification inquiétante : une image refusée par la personne photographiée circule désormais sur plusieurs comptes. Votre équipe doit reconstruire la chaîne de diffusion et sécuriser le dossier avant qu’il ne soit trop tard.",
      "chapters": [
        {
          "id": "tel",
          "title": "Le téléphone verrouillé"
        },
        {
          "id": "trace",
          "title": "La chaîne de diffusion"
        },
        {
          "id": "droits",
          "title": "Vie privée & responsabilité"
        },
        {
          "id": "action",
          "title": "Agir sans amplifier"
        }
      ],
      "steps": [
        {
          "id": "pc1",
          "chapter": "tel",
          "type": "lock_parts",
          "title": "Schéma de déverrouillage",
          "prompt": "Trois indices donnent les points du schéma. Entre les trois lettres du trajet.",
          "fields": [
            "Point 1",
            "Point 2",
            "Point 3"
          ],
          "answer": [
            "N",
            "E",
            "T"
          ],
          "points": 100,
          "hints": [
            "Chaque indice désigne un point cardinal.",
            "N / E / T."
          ]
        },
        {
          "id": "pc2",
          "chapter": "tel",
          "type": "file_hunt",
          "title": "Galerie / captures",
          "prompt": "Sélectionne les trois éléments utiles au dossier, sans ouvrir les leurres.",
          "entries": [
            {
              "id": "capture",
              "name": "capture_groupe.png",
              "path": "Galerie/Captures"
            },
            {
              "id": "story",
              "name": "story_21h14.png",
              "path": "Galerie/Stories"
            },
            {
              "id": "dm",
              "name": "dm_demande_suppression.txt",
              "path": "Messages"
            },
            {
              "id": "meme",
              "name": "meme_chat.jpg",
              "path": "Téléchargements"
            },
            {
              "id": "jeu",
              "name": "score_final.png",
              "path": "Jeux"
            }
          ],
          "answer": [
            "capture",
            "story",
            "dm"
          ],
          "points": 120,
          "hints": [
            "Cherche la demande de suppression et les traces de diffusion.",
            "capture + story + DM."
          ],
          "expertDecoys": [
            {
              "id": "profil",
              "name": "photo_profil_ete.png",
              "path": "Galerie/Profil"
            },
            {
              "id": "fond",
              "name": "fond_ecran.jpg",
              "path": "Images/Fonds"
            }
          ]
        },
        {
          "id": "pc3",
          "chapter": "trace",
          "type": "order",
          "title": "La propagation",
          "prompt": "Remets la chaîne dans l’ordre.",
          "items": [
            "Capture par un autre compte",
            "Photo prise",
            "Story publique",
            "Repartage dans un groupe"
          ],
          "answer": [
            "Photo prise",
            "Story publique",
            "Capture par un autre compte",
            "Repartage dans un groupe"
          ],
          "points": 120,
          "hints": [
            "Tout commence par la photo originale.",
            "Photo → story → capture → groupe."
          ]
        },
        {
          "id": "pc4",
          "chapter": "trace",
          "type": "multi",
          "title": "Ce que révèle une image",
          "prompt": "Quels éléments peuvent exposer des informations personnelles ?",
          "options": [
            {
              "id": "lieu",
              "label": "Un lieu reconnaissable"
            },
            {
              "id": "heure",
              "label": "L’heure / les métadonnées"
            },
            {
              "id": "badge",
              "label": "Un badge avec un nom"
            },
            {
              "id": "filtre",
              "label": "La couleur d’un filtre décoratif"
            }
          ],
          "answer": [
            "lieu",
            "heure",
            "badge"
          ],
          "points": 120,
          "hints": [
            "Pense localisation, temps et identité.",
            "Lieu + heure/métadonnées + nom."
          ],
          "fact": "Une photo peut révéler localisation, heure, habitudes ou identité, parfois via ses métadonnées.",
          "source": "https://www.cnil.fr/fr/partage-de-photos-et-videos-de-votre-enfant-sur-les-reseaux-sociaux-quels-sont-les-risques"
        },
        {
          "id": "pc5",
          "chapter": "droits",
          "type": "choice",
          "title": "Avant de publier",
          "prompt": "La personne dit clairement « je ne veux pas que cette photo soit publiée ». Quel réflexe respecte sa demande ?",
          "options": [
            "Ne pas publier / retirer la photo",
            "Publier seulement 24 h",
            "Publier si les amis trouvent ça drôle"
          ],
          "answer": 0,
          "points": 120,
          "hints": [
            "Un refus doit être respecté.",
            "Ne pas publier / retirer."
          ],
          "fact": "La CNIL rappelle que le droit à l’image s’applique aussi sur Internet et qu’une publication suppose l’accord de la personne concernée.",
          "source": "https://www.cnil.fr/fr/cnil-direct/question/le-droit-limage-sapplique-t-il-sur-internet"
        },
        {
          "id": "pc6",
          "chapter": "droits",
          "type": "reveal",
          "title": "Tampon RESPONSABILITÉ",
          "prompt": "Révèle les trois éléments du tampon numérique et saisis le mot final.",
          "revealMode": "stamp",
          "stages": [
            {
              "label": "Trace 1",
              "content": "Je vérifie avant de partager."
            },
            {
              "label": "Trace 2",
              "content": "Je retire si la personne le demande."
            },
            {
              "label": "Trace 3",
              "content": "Je n’amplifie pas une humiliation."
            }
          ],
          "answer": [
            "RESPONSABILITE",
            "RESPONSABILITÉ"
          ],
          "points": 130,
          "hints": [
            "Le mot décrit le fait d’assumer ses actes numériques.",
            "RESPONSABILITÉ."
          ]
        },
        {
          "id": "pc7",
          "chapter": "action",
          "type": "multi",
          "title": "Réagir utilement",
          "prompt": "Quelles actions protègent sans amplifier ?",
          "options": [
            {
              "id": "preuves",
              "label": "Conserver les preuves utiles"
            },
            {
              "id": "signaler",
              "label": "Signaler le contenu / compte"
            },
            {
              "id": "adulte",
              "label": "En parler à un adulte de confiance"
            },
            {
              "id": "repost",
              "label": "Reposter pour dénoncer publiquement"
            }
          ],
          "answer": [
            "preuves",
            "signaler",
            "adulte"
          ],
          "points": 130,
          "hints": [
            "Évite de rediffuser le contenu.",
            "Preuves + signalement + adulte."
          ],
          "fact": "En cas de cyberharcèlement, le ministère recommande notamment de conserver des preuves, signaler et demander de l’aide.",
          "source": "https://www.education.gouv.fr/non-au-harcelement/je-suis-victime-de-harcelement-468671"
        },
        {
          "id": "pc8",
          "chapter": "action",
          "type": "keypad",
          "title": "Repère d’aide",
          "prompt": "Quel numéro national peut accompagner victimes ou témoins de harcèlement et violences numériques ?",
          "answer": "3018",
          "points": 100,
          "hints": [
            "Quatre chiffres.",
            "3018."
          ],
          "fact": "Le 3018 est gratuit, anonyme et confidentiel, 7j/7 de 9 h à 23 h selon le ministère.",
          "source": "https://www.education.gouv.fr/non-au-harcelement"
        },
        {
          "id": "pc9",
          "chapter": "action",
          "type": "team_split",
          "title": "Décision finale",
          "prompt": "Chaque rôle possède une partie du protocole. Formez la phrase.",
          "cards": {
            "observateur": "NE REPARTAGE",
            "decodeur": "PAS",
            "archiviste": "GARDE LES PREUVES",
            "gardien": "ET DEMANDE DE L AIDE",
            "default": "Partage ton fragment."
          },
          "answer": [
            "NE REPARTAGE PAS GARDE LES PREUVES ET DEMANDE DE L AIDE",
            "NE REPARTAGE PAS, GARDE LES PREUVES ET DEMANDE DE L AIDE"
          ],
          "points": 170,
          "hints": [
            "L’ordre commence par NE REPARTAGE PAS.",
            "NE REPARTAGE PAS, GARDE LES PREUVES ET DEMANDE DE L AIDE."
          ]
        }
      ],
      "mechanics": [
        "faux téléphone",
        "dossier/fichiers",
        "chronologie",
        "données personnelles",
        "choix éthique",
        "tampon secret",
        "protocole d’action",
        "rôles distribués"
      ],
      "materials": [
        "aucun en numérique",
        "option : enveloppe dossier + fausses captures imprimées"
      ],
      "setup": [
        "Toutes les captures et identités utilisées doivent être fictives.",
        "Prévoir un débrief après le jeu."
      ],
      "audience": [
        "ado"
      ],
      "debrief": [
        "Qu’est-ce qui transforme une “simple publication” en problème pour la personne concernée ?",
        "Pourquoi repartager pour dénoncer peut-il parfois amplifier la diffusion ?",
        "Quelles personnes/structures peut-on solliciter ?"
      ],
      "sources": [
        {
          "label": "CNIL — droit à l’image sur Internet",
          "url": "https://www.cnil.fr/fr/cnil-direct/question/le-droit-limage-sapplique-t-il-sur-internet"
        },
        {
          "label": "CNIL — partage de photos/vidéos et risques",
          "url": "https://www.cnil.fr/fr/partage-de-photos-et-videos-de-votre-enfant-sur-les-reseaux-sociaux-quels-sont-les-risques"
        },
        {
          "label": "Ministère — Non au harcèlement",
          "url": "https://www.education.gouv.fr/non-au-harcelement"
        }
      ],
      "finale": "Le dossier est sécurisé, la chaîne de diffusion est comprise et l’équipe sait quoi faire sans amplifier le contenu.",
      "cast": [
        {
          "name": "Maya",
          "role": "a demandé que la photo ne soit pas publiée"
        },
        {
          "name": "Nolan",
          "role": "a posté trop vite"
        },
        {
          "name": "Sofia",
          "role": "a conservé une capture utile"
        },
        {
          "name": "Amine",
          "role": "propose de signaler et demander de l’aide"
        }
      ],
      "printables": [
        {
          "title": "Dossier photo",
          "kind": "Imprimer",
          "body": "Créer 3 fausses captures : story, DM de demande de suppression, capture du groupe.",
          "template": "fake-phone-cards",
          "copies": "1 dossier par équipe",
          "construction": "Imprimer les trois fausses captures de téléphone, les découper et les placer dans une pochette “Dossier photo”. Ne jamais utiliser de vraies captures ou données de jeunes."
        },
        {
          "title": "Chaîne de diffusion",
          "kind": "Cartes",
          "body": "Photo → story → capture → autre groupe.",
          "template": "diffusion-chain",
          "copies": "1 jeu par équipe",
          "construction": "Imprimer les quatre cartes PHOTO, STORY, CAPTURE et AUTRE GROUPE. Découper et mélanger ; les joueurs doivent reconstruire la chaîne de diffusion."
        },
        {
          "title": "Cartes métadonnées",
          "kind": "Analyser",
          "body": "Cartes fictives pour retrouver l’ordre de création et de partage.",
          "template": "specific-cards",
          "copies": "1 par équipe",
          "construction": "Découper sur les pointillés puis plastifier si le support doit être réutilisé.",
          "items": [
            "PHOTO ORIGINALE — 20:12",
            "STORY — 20:14",
            "CAPTURE — 20:22",
            "AUTRE GROUPE — 20:26"
          ]
        },
        {
          "title": "Réactions possibles",
          "kind": "Choisir",
          "body": "Cartes de décision à classer : utile / risque / à éviter.",
          "template": "specific-cards",
          "copies": "1 par équipe",
          "construction": "Découper sur les pointillés puis plastifier si le support doit être réutilisé.",
          "items": [
            "DEMANDER LE RETRAIT",
            "GARDER UNE PREUVE",
            "EN PARLER À UN ADULTE",
            "REPARTAGER POUR SE MOQUER — À ÉVITER",
            "MENACER — À ÉVITER"
          ]
        },
        {
          "title": "Dossier Effacé — fragments",
          "kind": "Distribuer",
          "body": "Chaque carte doit être remise uniquement au rôle indiqué.",
          "template": "specific-roles",
          "copies": "1 jeu par équipe",
          "construction": "Découper les cartes et les distribuer séparément.",
          "items": [
            {
              "title": "OBSERVATEUR",
              "text": "La photo apparaît d’abord à 20:14."
            },
            {
              "title": "DÉCODEUR",
              "text": "Le DM de retrait arrive à 20:18."
            },
            {
              "title": "ARCHIVISTE",
              "text": "Une capture est repartagée à 20:26."
            },
            {
              "title": "GARDIEN DU TEMPS",
              "text": "Conserver les preuves avant suppression."
            }
          ]
        },
        {
          "title": "Enveloppe finale — DOSSIER EFFACÉ",
          "kind": "Installer",
          "body": "Pochette de conclusion à ouvrir après validation numérique.",
          "template": "final-envelope",
          "copies": "1 par équipe",
          "construction": "Glisser le débrief animateur ou une carte de réussite dans l’enveloppe.",
          "text": "DOSSIER EFFACÉ — ACCÈS AUTORISÉ"
        }
      ],
      "sourceOrigins": [
        "Adaptation FAFA QUEST du principe de l’escape « Ma photo c’est perso ! » fourni : téléphone, énigmes numériques, responsabilité, vie privée, diffusion et final de prévention. Textes et visuels recréés."
      ],
      "prepMin": 20,
      "soloMode": "adapt"
    },
    {
      "id": "hors-cadre",
      "title": "Hors Cadre",
      "subtitle": "Photo • Vie privée • Réseaux",
      "category": "impact",
      "age": "11–17",
      "durationMin": 45,
      "players": "3–6",
      "formats": [
        "numerique",
        "equipe"
      ],
      "icon": "▧",
      "accent": "#b78cff",
      "description": "Un serious game sur les photos, les stories, le droit à la vie privée et la circulation rapide des images. Les rôles sont mixtes et les situations ne supposent aucun comportement lié au sexe.",
      "intro": "Pendant une soirée de groupe, une photo drôle est prise. Une personne demande de ne pas la publier. Quelques minutes plus tard, la photo apparaît tout de même dans une story puis dans un autre groupe.",
      "steps": [
        {
          "id": "hc1",
          "chapter": "situation",
          "type": "choice",
          "title": "La demande",
          "prompt": "Une personne dit clairement « ne poste pas cette photo ». Quel réflexe est le plus respectueux ?",
          "answer": 0,
          "points": 110,
          "hints": [
            "La demande est explicite.",
            "Ne pas publier."
          ],
          "options": [
            "Ne pas publier",
            "Publier en masquant seulement le prénom",
            "Publier 5 minutes puis supprimer",
            "Demander aux autres de voter"
          ],
          "evidence": [
            {
              "kind": "chat",
              "author": "Samir",
              "time": "21:07",
              "text": "La photo est marrante mais je préfère vraiment que tu ne la postes pas."
            },
            {
              "kind": "chat",
              "author": "Chloé",
              "time": "21:08",
              "text": "Ok, j’ai compris."
            }
          ]
        },
        {
          "id": "hc2",
          "chapter": "situation",
          "type": "order",
          "title": "La diffusion",
          "prompt": "Remets la diffusion dans l’ordre.",
          "answer": [
            "PHOTO PRISE",
            "STORY",
            "CAPTURE",
            "AUTRE GROUPE"
          ],
          "points": 130,
          "hints": [
            "Une story peut être capturée.",
            "Photo → story → capture → autre groupe."
          ],
          "items": [
            "AUTRE GROUPE",
            "CAPTURE",
            "PHOTO PRISE",
            "STORY"
          ],
          "evidence": [
            {
              "kind": "post",
              "author": "Story privée",
              "time": "21:16",
              "text": "La photo apparaît quand même pendant quelques minutes."
            },
            {
              "kind": "chat",
              "author": "Hugo",
              "time": "21:21",
              "text": "Quelqu’un l’a déjà capturée et envoyée dans un autre groupe."
            }
          ]
        },
        {
          "id": "hc3",
          "chapter": "risques",
          "type": "multi",
          "title": "Ce qu’on contrôle vraiment",
          "prompt": "Après publication, qu’est-ce qui peut se produire ?",
          "answer": [
            "capture",
            "repartage",
            "horscontexte"
          ],
          "points": 130,
          "hints": [
            "La suppression ne récupère pas toutes les copies.",
            "Capture, repartage, sortie du contexte."
          ],
          "options": [
            {
              "id": "capture",
              "label": "Quelqu’un fait une capture"
            },
            {
              "id": "repartage",
              "label": "Le contenu est repartagé"
            },
            {
              "id": "horscontexte",
              "label": "La photo circule hors contexte"
            },
            {
              "id": "garantie",
              "label": "La suppression garantit qu’aucune copie n’existe"
            }
          ]
        },
        {
          "id": "hc4",
          "chapter": "agir",
          "type": "choice",
          "title": "Message privé",
          "prompt": "Tu reçois une photo intime ou gênante qui ne t’était pas destinée. Le meilleur réflexe est…",
          "answer": 1,
          "points": 130,
          "hints": [
            "Ne participe pas à la diffusion.",
            "Ne pas repartager et chercher de l’aide si nécessaire."
          ],
          "options": [
            "La garder pour rire plus tard",
            "Ne pas la repartager et chercher de l’aide si la situation est grave",
            "L’envoyer uniquement à un ami",
            "La publier pour prévenir"
          ]
        },
        {
          "id": "hc5",
          "chapter": "agir",
          "type": "team_split",
          "title": "Décision commune",
          "prompt": "Que doit faire le groupe maintenant ?",
          "answer": [
            "SUPPRIMER",
            "PARLER",
            "SIGNALER"
          ],
          "points": 160,
          "hints": [
            "Réparer et chercher de l’aide.",
            "Supprimer, parler, signaler si nécessaire."
          ],
          "cards": {
            "observateur": "La photo est déjà dans deux groupes.",
            "decodeur": "La personne photographiée demande son retrait.",
            "messager": "Une capture existe.",
            "gardien": "Le conflit monte dans les commentaires.",
            "default": "Partage ton élément."
          }
        },
        {
          "id": "hc6",
          "chapter": "final",
          "type": "text",
          "title": "Principe final",
          "prompt": "Complète : « Avant de publier la photo de quelqu’un, je demande son _____. »",
          "answer": [
            "ACCORD",
            "CONSENTEMENT"
          ],
          "points": 120,
          "hints": [
            "Un mot simple : accord.",
            "ACCORD."
          ],
          "fact": "La CNIL recommande de réfléchir avant la publication de photos de mineurs et d’associer l’enfant à la décision selon son âge et sa maturité.",
          "source": "CNIL — vie privée et droit à l’image"
        }
      ],
      "chapters": [
        {
          "id": "situation",
          "title": "La situation"
        },
        {
          "id": "risques",
          "title": "Ce qui échappe au contrôle"
        },
        {
          "id": "agir",
          "title": "Agir"
        },
        {
          "id": "final",
          "title": "Repère"
        }
      ],
      "mechanics": [
        "chronologie",
        "risques",
        "choix",
        "rôles",
        "repère"
      ],
      "materials": [
        "aucun"
      ],
      "setup": [
        "Prévoir un cadre de discussion respectueux ; ne jamais demander aux jeunes de raconter une expérience personnelle."
      ],
      "audience": [
        "ado"
      ],
      "debrief": [
        "Pourquoi une suppression ne garantit-elle pas la disparition d’une image ?",
        "Comment demander l’accord sans mettre la pression ?"
      ],
      "finale": "Le groupe reprend le contrôle de la situation en respectant la personne concernée et en stoppant la diffusion.",
      "cast": [
        {
          "name": "Chloé",
          "role": "a pris la photo"
        },
        {
          "name": "Samir",
          "role": "demande de ne pas la publier"
        },
        {
          "name": "Inès",
          "role": "voit la story"
        },
        {
          "name": "Hugo",
          "role": "reçoit une capture dans un autre groupe"
        }
      ],
      "sources": [
        {
          "label": "CNIL — vie privée et droit à l’image",
          "url": "https://www.cnil.fr/"
        }
      ],
      "genre": "questions_ados",
      "challenge": 2,
      "recommendedDifficulty": "aventure",
      "topic": "image_vie_privee",
      "sourceOrigins": [
        "Adaptation originale FAFA QUEST autour de la circulation d’images, nourrie par les ressources CNIL et le support « Ma photo c’est perso ! » fourni."
      ],
      "prepMin": 5,
      "soloMode": "adapt"
    },
    {
      "id": "double-face",
      "title": "Double Face — Le Faux qui Semble Vrai",
      "subtitle": "Questions d’ados • IA • Deepfake • Image",
      "category": "impact",
      "genre": "questions_ados",
      "topic": "image_vie_privee",
      "age": "12–17",
      "durationMin": 40,
      "players": "3–6",
      "formats": [
        "numerique",
        "equipe"
      ],
      "icon": "◐",
      "accent": "#b991ff",
      "challenge": 3,
      "recommendedDifficulty": "aventure",
      "description": "Une enquête sur une vidéo truquée et la façon dont une image peut être détournée. Le jeu développe le réflexe de vérifier avant d’accuser ou repartager.",
      "intro": "Une courte vidéo embarrassante circule dans le groupe. Plusieurs détails semblent réels, mais le fichier porte des traces de modification. Votre équipe doit déterminer ce qui est vérifiable avant que la rumeur n’explose.",
      "chapters": [
        {
          "id": "video",
          "title": "La vidéo virale"
        },
        {
          "id": "verif",
          "title": "Les vérifications"
        },
        {
          "id": "action",
          "title": "Limiter les dégâts"
        }
      ],
      "steps": [
        {
          "id": "df1",
          "chapter": "video",
          "type": "multi",
          "title": "Signaux faibles",
          "prompt": "Quels éléments justifient de vérifier davantage avant de croire la vidéo ?",
          "options": [
            {
              "id": "source",
              "label": "Source inconnue"
            },
            {
              "id": "coupe",
              "label": "Coupes / incohérences visibles"
            },
            {
              "id": "viral",
              "label": "Beaucoup de vues"
            },
            {
              "id": "audio",
              "label": "Audio décalé"
            }
          ],
          "answer": [
            "source",
            "coupe",
            "audio"
          ],
          "points": 120,
          "hints": [
            "Le nombre de vues ne prouve rien.",
            "Source + incohérences + audio."
          ]
        },
        {
          "id": "df2",
          "chapter": "verif",
          "type": "order",
          "title": "Vérifier avant de partager",
          "prompt": "Mets les actions dans l’ordre utile.",
          "items": [
            "Chercher la source originale",
            "Partager tout de suite",
            "Comparer avec d’autres sources",
            "Observer le contexte et la date"
          ],
          "answer": [
            "Chercher la source originale",
            "Observer le contexte et la date",
            "Comparer avec d’autres sources",
            "Partager tout de suite"
          ],
          "points": 120,
          "hints": [
            "Le partage vient en dernier… ou pas du tout.",
            "Source → contexte/date → recoupement → décision de partager."
          ]
        },
        {
          "id": "df3",
          "chapter": "verif",
          "type": "file_hunt",
          "title": "Les fichiers du montage",
          "prompt": "Sélectionne les trois traces qui montrent que la vidéo a été retravaillée.",
          "entries": [
            {
              "id": "audio",
              "name": "audio_mix_v4.wav",
              "path": "Projet"
            },
            {
              "id": "mask",
              "name": "face_mask.png",
              "path": "Projet"
            },
            {
              "id": "render",
              "name": "render_final.mp4",
              "path": "Exports"
            },
            {
              "id": "vacances",
              "name": "vacances.jpg",
              "path": "Perso"
            }
          ],
          "answer": [
            "audio",
            "mask",
            "render"
          ],
          "points": 140,
          "hints": [
            "Les fichiers de projet sont plus parlants que les photos personnelles.",
            "audio_mix + face_mask + render_final."
          ],
          "expertDecoys": [
            {
              "id": "facture",
              "name": "facture_cafe.pdf",
              "path": "Documents"
            },
            {
              "id": "portrait",
              "name": "portrait_brut.jpg",
              "path": "Images"
            }
          ]
        },
        {
          "id": "df4",
          "chapter": "action",
          "type": "choice",
          "title": "Réagir à une image douteuse",
          "prompt": "Quel réflexe réduit le risque de nuire à quelqu’un ?",
          "options": [
            "Suspendre le partage et vérifier",
            "Reposter avec “je sais pas si c’est vrai”",
            "Identifier la personne publiquement"
          ],
          "answer": 0,
          "points": 110,
          "hints": [
            "Une réserve dans la légende n’annule pas le repartage.",
            "Suspendre et vérifier."
          ]
        },
        {
          "id": "df5",
          "chapter": "action",
          "type": "team_split",
          "title": "Phrase d’équipe",
          "prompt": "Assemblez les fragments.",
          "cards": {
            "observateur": "JE VERIFIE",
            "decodeur": "AVANT",
            "archiviste": "DE CROIRE",
            "gardien": "ET DE PARTAGER",
            "default": "Lis ton fragment."
          },
          "answer": [
            "JE VERIFIE AVANT DE CROIRE ET DE PARTAGER",
            "JE VÉRIFIE AVANT DE CROIRE ET DE PARTAGER"
          ],
          "points": 150,
          "hints": [
            "Le message commence par JE VÉRIFIE.",
            "JE VÉRIFIE AVANT DE CROIRE ET DE PARTAGER."
          ]
        },
        {
          "id": "df6",
          "chapter": "action",
          "type": "choice",
          "title": "Pourquoi c’est important ?",
          "prompt": "Une image publique peut aussi être détournée. Quel risque la CNIL met notamment en avant ?",
          "options": [
            "Création de contenus truqués/deepfakes",
            "Baisse automatique de batterie",
            "Perte du mot de passe Wi-Fi"
          ],
          "answer": 0,
          "points": 100,
          "hints": [
            "Pense manipulation d’image par IA.",
            "Deepfakes / hyper-trucages."
          ],
          "fact": "La CNIL alerte sur le détournement d’images de mineurs via des hyper-trucages/deepfakes et recommande de limiter les publications exposées.",
          "source": "https://www.cnil.fr/fr/partage-de-photos-et-videos-de-votre-enfant-sur-les-reseaux-sociaux-quels-sont-les-risques"
        }
      ],
      "mechanics": [
        "analyse de vidéo fictive",
        "recoupement",
        "fichiers de projet",
        "choix",
        "coopération"
      ],
      "materials": [
        "aucun"
      ],
      "setup": [
        "Ne jamais utiliser une vraie image humiliante ou intime d’un jeune."
      ],
      "audience": [
        "ado"
      ],
      "debrief": [
        "Pourquoi “beaucoup de vues” n’est-il pas une preuve ?",
        "Que faire lorsqu’un contenu met une personne en difficulté mais qu’on ne sait pas s’il est authentique ?"
      ],
      "sources": [
        {
          "label": "CNIL — risques liés au partage d’images de mineurs et deepfakes",
          "url": "https://www.cnil.fr/fr/partage-de-photos-et-videos-de-votre-enfant-sur-les-reseaux-sociaux-quels-sont-les-risques"
        }
      ],
      "finale": "La vidéo est stoppée avant amplification et l’équipe a documenté ce qui est vérifiable.",
      "sourceOrigins": [
        "Création originale FAFA QUEST, utilisant les thèmes image/IA présents dans les ressources de prévention fournies."
      ],
      "prepMin": 5,
      "soloMode": "adapt"
    },
    {
      "id": "vrai-ou-viral",
      "title": "Vrai ou Viral ?",
      "subtitle": "Réseaux • Info • IA • Sources",
      "category": "impact",
      "age": "12–17",
      "durationMin": 45,
      "players": "3–6",
      "formats": [
        "numerique",
        "equipe"
      ],
      "icon": "◌",
      "accent": "#72b9ff",
      "description": "Un jeu d’esprit critique où les joueurs enquêtent sur une publication virale fictive, vérifient les sources et distinguent popularité, preuve et contexte.",
      "intro": "Une publication affirme qu’une nouvelle règle va entrer en vigueur demain dans tous les collèges. Elle a déjà été vue 180 000 fois. Votre équipe a 45 minutes pour décider si elle mérite d’être relayée.",
      "steps": [
        {
          "id": "vv1",
          "chapter": "source",
          "type": "choice",
          "title": "Le post viral",
          "prompt": "Quel réflexe vient en premier ?",
          "answer": 1,
          "points": 110,
          "hints": [
            "Ne pars pas du nombre de vues.",
            "Identifier la source."
          ],
          "options": [
            "Regarder seulement les commentaires",
            "Identifier l’auteur et la source",
            "Partager pour demander si c’est vrai",
            "Croire parce que la vidéo est nette"
          ],
          "evidence": [
            {
              "kind": "post",
              "author": "@ActuMinute_Off",
              "time": "18:42",
              "text": "URGENT — Dès demain, nouvelle règle dans TOUS les collèges. Partage avant suppression !",
              "meta": "180 k vues • compte créé récemment"
            }
          ]
        },
        {
          "id": "vv2",
          "chapter": "source",
          "type": "multi",
          "title": "Indices de crédibilité",
          "prompt": "Quels éléments renforcent une vérification ?",
          "answer": [
            "date",
            "source",
            "recoupement"
          ],
          "points": 130,
          "hints": [
            "Trois éléments.",
            "Date, source, recoupement."
          ],
          "options": [
            {
              "id": "date",
              "label": "La date et le contexte"
            },
            {
              "id": "source",
              "label": "La source d’origine"
            },
            {
              "id": "recoupement",
              "label": "Une confirmation indépendante"
            },
            {
              "id": "vues",
              "label": "Le nombre de vues"
            }
          ]
        },
        {
          "id": "vv3",
          "chapter": "verif",
          "type": "order",
          "title": "Chronologie",
          "prompt": "Remets la démarche dans l’ordre.",
          "answer": [
            "SOURCE",
            "DATE",
            "RECHERCHE",
            "RECOUPEMENT"
          ],
          "points": 130,
          "hints": [
            "Du document vers la vérification externe.",
            "Source → date → recherche → recoupement."
          ],
          "items": [
            "RECOUPEMENT",
            "DATE",
            "SOURCE",
            "RECHERCHE"
          ]
        },
        {
          "id": "vv4",
          "chapter": "verif",
          "type": "choice",
          "title": "Image sortie du contexte",
          "prompt": "Une photo est authentique mais date de 2019 alors que le post dit « aujourd’hui ». C’est…",
          "answer": 2,
          "points": 120,
          "hints": [
            "Une image peut être vraie mais mal contextualisée.",
            "Un contenu trompeur par faux contexte."
          ],
          "options": [
            "Une preuve suffisante",
            "Forcément une image IA",
            "Un contenu trompeur par faux contexte",
            "Sans importance"
          ],
          "evidence": [
            {
              "kind": "image",
              "author": "Recherche d’image",
              "time": "Résultat",
              "text": "La même photo apparaît dans un article daté de 2019."
            }
          ]
        },
        {
          "id": "vv5",
          "chapter": "decision",
          "type": "team_split",
          "title": "Équipe de vérification",
          "prompt": "Quelle conclusion commune choisissez-vous ?",
          "answer": [
            "NE PAS PARTAGER",
            "ATTENDRE"
          ],
          "points": 160,
          "hints": [
            "L’incertitude n’est pas une preuve.",
            "Ne pas partager avant confirmation."
          ],
          "cards": {
            "observateur": "Le compte a été créé il y a deux jours.",
            "decodeur": "Le site officiel ne mentionne aucune nouvelle règle.",
            "archiviste": "La photo date de 2019.",
            "gardien": "Aucun média fiable ne confirme pour le moment.",
            "default": "Partage ton indice."
          }
        },
        {
          "id": "vv6",
          "chapter": "final",
          "type": "choice",
          "title": "Le bon réflexe final",
          "prompt": "Si tu n’arrives pas à vérifier une info qui pourrait inquiéter beaucoup de monde, le meilleur choix est…",
          "answer": 0,
          "points": 120,
          "hints": [
            "La prudence évite d’amplifier.",
            "Ne pas relayer tant que ce n’est pas confirmé."
          ],
          "options": [
            "Ne pas relayer tant que ce n’est pas confirmé",
            "Ajouter « peut-être faux » puis partager",
            "Partager seulement à ses amis",
            "Changer le titre"
          ]
        }
      ],
      "chapters": [
        {
          "id": "source",
          "title": "Identifier la source"
        },
        {
          "id": "verif",
          "title": "Vérifier"
        },
        {
          "id": "decision",
          "title": "Décider"
        },
        {
          "id": "final",
          "title": "Réflexe final"
        }
      ],
      "mechanics": [
        "analyse de post",
        "source",
        "chronologie",
        "contexte image",
        "rôles",
        "décision"
      ],
      "materials": [
        "aucun"
      ],
      "setup": [
        "Peut servir de support à un débrief sur les contenus générés ou modifiés par IA."
      ],
      "audience": [
        "ado",
        "adulte"
      ],
      "debrief": [
        "Pourquoi une information très partagée peut-elle rester fausse ?",
        "Quelle différence entre une image fausse et une image vraie sortie de son contexte ?"
      ],
      "finale": "Vous avez stoppé la chaîne virale au bon moment : pas parce que vous saviez tout, mais parce que vous avez vérifié avant de relayer.",
      "cast": [
        {
          "name": "Sara",
          "role": "voit la publication en premier"
        },
        {
          "name": "Lucas",
          "role": "veut la partager rapidement"
        },
        {
          "name": "Inès",
          "role": "cherche la source d’origine"
        },
        {
          "name": "Yanis",
          "role": "vérifie sur un site officiel"
        }
      ],
      "sources": [
        {
          "label": "CLEMI — éducation aux médias et à l’information",
          "url": "https://www.clemi.fr/"
        }
      ],
      "genre": "questions_ados",
      "challenge": 2,
      "recommendedDifficulty": "aventure",
      "topic": "reseaux_esprit_critique",
      "prepMin": 5,
      "soloMode": "adapt"
    },
    {
      "id": "compte-fantome",
      "title": "Compte Fantôme — Le Piège du DM",
      "subtitle": "Questions d’ados • Phishing • Faux compte",
      "category": "impact",
      "genre": "questions_ados",
      "age": "12–17",
      "durationMin": 40,
      "players": "3–6",
      "formats": [
        "numerique",
        "equipe"
      ],
      "icon": "@",
      "accent": "#5fd1ff",
      "challenge": 2,
      "recommendedDifficulty": "aventure",
      "description": "Une enquête sur un faux compte, un lien pressant et une demande de code. Les joueurs doivent repérer les signaux d’alerte au lieu de mémoriser un cours de cybersécurité.",
      "intro": "Un compte qui ressemble à celui d’un ami envoie un message urgent : « vote pour moi, j’ai besoin du code reçu par SMS ». Quelque chose ne colle pas.",
      "chapters": [
        {
          "id": "dm",
          "title": "Le message"
        },
        {
          "id": "indices",
          "title": "Les indices"
        },
        {
          "id": "reaction",
          "title": "La réaction"
        }
      ],
      "steps": [
        {
          "id": "cf1",
          "chapter": "dm",
          "type": "multi",
          "title": "Signaux d’alerte",
          "prompt": "Quels éléments sont suspects ?",
          "options": [
            {
              "id": "urgence",
              "label": "Urgence artificielle : « fais-le maintenant »"
            },
            {
              "id": "code",
              "label": "Demande d’un code reçu par SMS"
            },
            {
              "id": "bonjour",
              "label": "Le message dit bonjour"
            },
            {
              "id": "lien",
              "label": "Lien inhabituel raccourci"
            }
          ],
          "answer": [
            "urgence",
            "code",
            "lien"
          ],
          "points": 140,
          "hints": [
            "Cherchez pression, secret et lien inhabituel.",
            "Urgence + code + lien."
          ],
          "evidence": [
            {
              "kind": "chat",
              "author": "@lucas_officiel2",
              "time": "22:07",
              "text": "Vite stp 😭 vote pour moi ici bit.ly/xxxx et envoie-moi le code que tu reçois, j’ai 2 min."
            }
          ]
        },
        {
          "id": "cf2",
          "chapter": "indices",
          "type": "choice",
          "title": "Vérifier autrement",
          "prompt": "Quel premier réflexe est le plus sûr ?",
          "options": [
            "Contacter l’ami par un autre canal connu",
            "Cliquer pour voir si le site semble joli",
            "Envoyer le code puis changer de mot de passe"
          ],
          "answer": 0,
          "points": 120,
          "hints": [
            "Vérifiez l’identité sans utiliser le message suspect.",
            "Contactez l’ami autrement."
          ]
        },
        {
          "id": "cf3",
          "chapter": "indices",
          "type": "match",
          "title": "Indices techniques",
          "prompt": "Associez chaque indice à son risque.",
          "pairs": [
            [
              "Adresse étrange",
              "Site imité"
            ],
            [
              "Code SMS demandé",
              "Prise de contrôle possible"
            ],
            [
              "Compte récent",
              "Usurpation possible"
            ]
          ],
          "answer": "ok",
          "points": 130,
          "hints": [
            "Chaque indice correspond à un type de risque.",
            "Adresse→site imité ; code→contrôle ; compte récent→usurpation."
          ]
        },
        {
          "id": "cf4",
          "chapter": "reaction",
          "type": "order",
          "title": "Bonne réaction",
          "prompt": "Remettez : ne pas cliquer, vérifier le compte, signaler/bloquer si nécessaire, prévenir la personne usurpée.",
          "items": [
            "Prévenir la personne usurpée",
            "Signaler / bloquer",
            "Vérifier par un autre canal",
            "Ne pas cliquer"
          ],
          "answer": [
            "Ne pas cliquer",
            "Vérifier par un autre canal",
            "Prévenir la personne usurpée",
            "Signaler / bloquer"
          ],
          "points": 150,
          "hints": [
            "La priorité est de ne pas donner suite au lien.",
            "Ne pas cliquer → vérifier → prévenir → signaler/bloquer."
          ]
        },
        {
          "id": "cf5",
          "chapter": "reaction",
          "type": "team_split",
          "title": "Dossier partagé",
          "prompt": "Réunissez les quatre mots et formez : NE DONNE JAMAIS CODE.",
          "cards": {
            "observateur": "NE",
            "decodeur": "DONNE",
            "archiviste": "JAMAIS",
            "gardien": "CODE",
            "default": "Partage ton mot."
          },
          "answer": [
            "NE DONNE JAMAIS CODE",
            "NE DONNE JAMAIS LE CODE"
          ],
          "points": 160,
          "hints": [
            "Formez une consigne claire.",
            "NE DONNE JAMAIS LE CODE."
          ]
        },
        {
          "id": "cf6",
          "chapter": "reaction",
          "type": "choice",
          "title": "Final — Compte Fantôme",
          "prompt": "Un service ou un proche légitime devrait-il vous demander votre code de validation secret par message ?",
          "options": [
            "Non, je ne le transmets pas",
            "Oui, si le message utilise mon prénom",
            "Oui, si le logo paraît correct"
          ],
          "answer": 0,
          "points": 110,
          "hints": [
            "Un code de validation est personnel.",
            "Non."
          ],
          "fact": "Les campagnes de sensibilisation aux cybermenaces insistent sur la vigilance face à l’hameçonnage et aux demandes inhabituelles.",
          "source": "https://www.education.gouv.fr/operation-cactus-2026-renforcer-durablement-la-sensibilisation-de-la-communaute-educative-aux-504290"
        }
      ],
      "mechanics": [
        "faux chat",
        "signaux d’alerte",
        "association",
        "ordre",
        "rôles",
        "décision"
      ],
      "materials": [
        "aucun"
      ],
      "setup": [
        "Le scénario utilise des comptes et liens fictifs."
      ],
      "audience": [
        "ado"
      ],
      "debrief": [
        "Quels détails vous ont fait douter ?",
        "Comment vérifier l’identité d’un proche sans utiliser le message suspect ?"
      ],
      "sources": [
        {
          "label": "Ministère — Opération Cactus 2026",
          "url": "https://www.education.gouv.fr/operation-cactus-2026-renforcer-durablement-la-sensibilisation-de-la-communaute-educative-aux-504290"
        }
      ],
      "finale": "Le compte fantôme est démasqué avant qu’un code ne soit transmis.",
      "cast": [
        {
          "name": "Lucas",
          "role": "compte réel potentiellement usurpé"
        },
        {
          "name": "Nora",
          "role": "reçoit le message"
        },
        {
          "name": "Eliott",
          "role": "propose de vérifier par un autre canal"
        }
      ],
      "topic": "reseaux_esprit_critique",
      "prepMin": 5,
      "soloMode": "adapt"
    },
    {
      "id": "ligne-rouge",
      "title": "Ligne Rouge — Quand ça dépasse les limites",
      "subtitle": "Questions d’ados • Violence • Témoins",
      "category": "impact",
      "genre": "questions_ados",
      "age": "12–17",
      "durationMin": 40,
      "players": "3–6",
      "formats": [
        "numerique",
        "equipe"
      ],
      "icon": "⚠",
      "accent": "#ff7a77",
      "challenge": 2,
      "recommendedDifficulty": "aventure",
      "description": "Un scénario réaliste et mixte pour distinguer conflit, intimidation, violence répétée et réaction de témoin. Aucun rôle n’est associé à un genre.",
      "intro": "Une altercation commence par des messages, se poursuit dans un couloir et divise le groupe. Votre équipe doit reconstruire les faits et choisir des actions qui protègent sans aggraver la situation.",
      "chapters": [
        {
          "id": "faits",
          "title": "Ce qui s’est passé"
        },
        {
          "id": "temoins",
          "title": "Les témoins"
        },
        {
          "id": "aide",
          "title": "Agir et demander de l’aide"
        }
      ],
      "steps": [
        {
          "id": "lr1",
          "chapter": "faits",
          "type": "order",
          "title": "Reconstituer les faits",
          "prompt": "Replacez : moquerie en groupe, message privé, bousculade, adulte prévenu.",
          "items": [
            "Adulte prévenu",
            "Bousculade",
            "Message privé",
            "Moquerie en groupe"
          ],
          "answer": [
            "Message privé",
            "Moquerie en groupe",
            "Bousculade",
            "Adulte prévenu"
          ],
          "points": 120,
          "hints": [
            "Commencez par ce qui s’est passé en ligne.",
            "Message → moquerie → bousculade → adulte."
          ],
          "evidence": [
            {
              "kind": "chat",
              "author": "Maya",
              "time": "18:41",
              "text": "Arrête de m’envoyer ça, je t’ai déjà dit que ça me saoule."
            },
            {
              "kind": "note",
              "author": "Témoin",
              "time": "lendemain",
              "text": "À la pause, plusieurs personnes ont recommencé devant tout le monde."
            }
          ]
        },
        {
          "id": "lr2",
          "chapter": "faits",
          "type": "choice",
          "title": "Conflit ou situation préoccupante ?",
          "prompt": "Quel élément doit particulièrement alerter ?",
          "options": [
            "La répétition et le fait que la personne demande que ça cesse",
            "Le fait que plusieurs personnes connaissent les mêmes prénoms",
            "Le fait que cela se passe à une pause"
          ],
          "answer": 0,
          "points": 120,
          "hints": [
            "Regardez ce qui se répète malgré un refus.",
            "La répétition et le refus non respecté."
          ],
          "fact": "Les violences répétées, verbales, physiques ou morales, à l’école ou en ligne, doivent être prises au sérieux et signalées.",
          "source": "https://www.education.gouv.fr/non-au-harcelement/je-suis-victime-de-harcelement-468671"
        },
        {
          "id": "lr3",
          "chapter": "temoins",
          "type": "multi",
          "title": "Le témoin qui agit",
          "prompt": "Quelles actions protègent sans ajouter de violence ?",
          "options": [
            {
              "id": "adulte",
              "label": "Prévenir un adulte de confiance"
            },
            {
              "id": "preuve",
              "label": "Conserver les éléments utiles si c’est en ligne"
            },
            {
              "id": "bagarre",
              "label": "Répondre par une bagarre"
            },
            {
              "id": "diffuser",
              "label": "Repartager la vidéo pour montrer ce qui s’est passé"
            }
          ],
          "answer": [
            "adulte",
            "preuve"
          ],
          "points": 140,
          "hints": [
            "Évitez ce qui amplifie la violence.",
            "Prévenir + conserver les preuves utiles."
          ]
        },
        {
          "id": "lr4",
          "chapter": "temoins",
          "type": "team_split",
          "title": "Quatre points de vue",
          "prompt": "Croisez les témoignages et saisissez le mot qui revient : STOP.",
          "cards": {
            "observateur": "La personne visée dit clairement « stop ».",
            "decodeur": "Un message montre que cela dure depuis plusieurs jours.",
            "messager": "Un témoin propose d’aller voir un adulte.",
            "gardien": "La priorité est de faire cesser la situation en sécurité.",
            "default": "Partage ton élément."
          },
          "answer": [
            "STOP"
          ],
          "points": 160,
          "hints": [
            "Quel mot exprime la limite ?",
            "STOP."
          ]
        },
        {
          "id": "lr5",
          "chapter": "aide",
          "type": "choice",
          "title": "Demander de l’aide",
          "prompt": "Face à une situation grave ou répétée, quelle réponse est la plus adaptée ?",
          "options": [
            "En parler à un adulte de confiance et utiliser les dispositifs de signalement adaptés",
            "Attendre que ça passe sans rien dire",
            "Organiser une revanche en groupe"
          ],
          "answer": 0,
          "points": 130,
          "hints": [
            "Cherchez une action qui protège.",
            "Parler et signaler."
          ],
          "fact": "Le 3018 est le numéro national gratuit, anonyme et confidentiel pour les élèves, parents et professionnels concernant le harcèlement et les violences numériques.",
          "source": "https://www.education.gouv.fr/non-au-harcelement"
        },
        {
          "id": "lr6",
          "chapter": "aide",
          "type": "text",
          "title": "Repère final",
          "prompt": "Quel numéro national peut accompagner en cas de harcèlement ou de violences numériques ?",
          "answer": [
            "3018"
          ],
          "points": 100,
          "hints": [
            "Quatre chiffres.",
            "3018."
          ]
        }
      ],
      "mechanics": [
        "chronologie",
        "analyse de messages",
        "choix",
        "témoins",
        "rôles",
        "repère réel"
      ],
      "materials": [
        "aucun"
      ],
      "setup": [
        "Prévoir un débrief de 10 à 15 minutes.",
        "Ne jamais demander aux jeunes de raconter une expérience personnelle."
      ],
      "audience": [
        "ado"
      ],
      "debrief": [
        "Qu’est-ce qui distingue une dispute ponctuelle d’une situation qui doit alerter ?",
        "Que peut faire un témoin sans se mettre en danger ?",
        "À quels adultes ou services peut-on demander de l’aide ?"
      ],
      "sources": [
        {
          "label": "Ministère — Non au harcèlement",
          "url": "https://www.education.gouv.fr/non-au-harcelement"
        },
        {
          "label": "Ministère — Je suis victime de harcèlement",
          "url": "https://www.education.gouv.fr/non-au-harcelement/je-suis-victime-de-harcelement-468671"
        }
      ],
      "finale": "Vous avez stoppé l’escalade en privilégiant les faits, la protection et la recherche d’aide plutôt que la revanche.",
      "cast": [
        {
          "name": "Maya",
          "role": "personne qui demande que la situation cesse"
        },
        {
          "name": "Noé",
          "role": "témoin hésitant"
        },
        {
          "name": "Lina",
          "role": "propose de prévenir un adulte"
        },
        {
          "name": "Samir",
          "role": "fait partie du groupe impliqué"
        }
      ],
      "topic": "harcelement_violence",
      "prepMin": 5,
      "soloMode": "adapt"
    },
    {
      "id": "hors-jeu-chat",
      "title": "Hors Jeu — Le Chat qui Dérape",
      "subtitle": "Questions d’ados • Gaming • Cyberviolence",
      "category": "impact",
      "genre": "questions_ados",
      "age": "11–17",
      "durationMin": 40,
      "players": "3–6",
      "formats": [
        "numerique",
        "equipe"
      ],
      "icon": "⌁",
      "accent": "#6ee7a8",
      "challenge": 2,
      "recommendedDifficulty": "aventure",
      "description": "Une partie fictive en ligne dégénère : insultes, exclusion et menace de diffuser des informations. Les joueurs doivent sécuriser la situation sans répondre par une escalade.",
      "intro": "La finale du tournoi commence bien, puis le chat vocal dérape. Une capture contenant des informations personnelles circule. Votre équipe doit choisir quoi conserver, quoi signaler et comment protéger le joueur visé.",
      "chapters": [
        {
          "id": "match",
          "title": "Pendant le match"
        },
        {
          "id": "capture",
          "title": "La capture"
        },
        {
          "id": "protection",
          "title": "Protection"
        }
      ],
      "steps": [
        {
          "id": "hj1",
          "chapter": "match",
          "type": "order",
          "title": "Le dérapage",
          "prompt": "Replacez : désaccord de jeu, insultes répétées, exclusion du vocal, menace de publier une capture.",
          "items": [
            "Menace de publier",
            "Désaccord de jeu",
            "Exclusion du vocal",
            "Insultes répétées"
          ],
          "answer": [
            "Désaccord de jeu",
            "Insultes répétées",
            "Exclusion du vocal",
            "Menace de publier"
          ],
          "points": 120,
          "hints": [
            "Commencez par le simple désaccord.",
            "Désaccord → insultes → exclusion → menace."
          ]
        },
        {
          "id": "hj2",
          "chapter": "capture",
          "type": "multi",
          "title": "À ne pas repartager",
          "prompt": "La capture contient quoi de sensible ?",
          "options": [
            {
              "id": "pseudo",
              "label": "Pseudo public du jeu"
            },
            {
              "id": "tel",
              "label": "Numéro de téléphone"
            },
            {
              "id": "adresse",
              "label": "Adresse personnelle"
            },
            {
              "id": "score",
              "label": "Score du match"
            }
          ],
          "answer": [
            "tel",
            "adresse"
          ],
          "points": 130,
          "hints": [
            "Cherchez les données qui peuvent identifier/localiser directement.",
            "Téléphone + adresse."
          ],
          "fact": "Les images et captures peuvent révéler des informations personnelles ; mieux vaut limiter leur diffusion et protéger les données identifiantes.",
          "source": "https://www.cnil.fr/fr/partage-de-photos-et-videos-de-votre-enfant-sur-les-reseaux-sociaux-quels-sont-les-risques"
        },
        {
          "id": "hj3",
          "chapter": "protection",
          "type": "choice",
          "title": "Répondre ?",
          "prompt": "Quelle action est la plus sûre ?",
          "options": [
            "Bloquer/signaler, conserver les preuves utiles et parler à un adulte si nécessaire",
            "Publier l’adresse de l’auteur en retour",
            "Créer un autre compte pour l’insulter"
          ],
          "answer": 0,
          "points": 130,
          "hints": [
            "Évitez toute revanche qui diffuse encore plus d’informations.",
            "Bloquer/signaler + preuves + aide."
          ]
        },
        {
          "id": "hj4",
          "chapter": "protection",
          "type": "team_split",
          "title": "Plan d’équipe",
          "prompt": "Formez la phrase à partir des rôles.",
          "cards": {
            "observateur": "NE",
            "decodeur": "REPARTAGE",
            "archiviste": "PAS",
            "gardien": "LA CAPTURE",
            "default": "Partage ton fragment."
          },
          "answer": [
            "NE REPARTAGE PAS LA CAPTURE"
          ],
          "points": 160,
          "hints": [
            "C’est une consigne de protection.",
            "NE REPARTAGE PAS LA CAPTURE."
          ]
        },
        {
          "id": "hj5",
          "chapter": "protection",
          "type": "choice",
          "title": "Si ça continue",
          "prompt": "Si la situation devient répétée et ciblée, que faire ?",
          "options": [
            "Demander de l’aide et signaler, notamment via les dispositifs adaptés",
            "Quitter Internet pour toujours sans en parler",
            "Répondre de la même façon"
          ],
          "answer": 0,
          "points": 120,
          "hints": [
            "Cherchez une réponse qui protège et documente.",
            "Demander de l’aide et signaler."
          ],
          "fact": "Le 3018 peut accompagner les victimes ou témoins de harcèlement et de violences numériques.",
          "source": "https://www.education.gouv.fr/non-au-harcelement"
        },
        {
          "id": "hj6",
          "chapter": "protection",
          "type": "text",
          "title": "Code final",
          "prompt": "Quel numéro national peut être utilisé pour demander de l’aide face aux violences numériques ?",
          "answer": [
            "3018"
          ],
          "points": 100,
          "hints": [
            "Quatre chiffres.",
            "3018."
          ]
        }
      ],
      "mechanics": [
        "chronologie",
        "données personnelles",
        "choix",
        "rôles",
        "signalement",
        "repère réel"
      ],
      "materials": [
        "aucun"
      ],
      "setup": [
        "Utiliser uniquement des captures fictives."
      ],
      "audience": [
        "ado"
      ],
      "debrief": [
        "Pourquoi repartager une capture peut-il aggraver la situation ?",
        "Quelle différence entre bloquer quelqu’un et ignorer une situation répétée ?"
      ],
      "sources": [
        {
          "label": "CNIL — partage d’images et vie privée",
          "url": "https://www.cnil.fr/fr/partage-de-photos-et-videos-de-votre-enfant-sur-les-reseaux-sociaux-quels-sont-les-risques"
        },
        {
          "label": "Ministère — Non au harcèlement",
          "url": "https://www.education.gouv.fr/non-au-harcelement"
        }
      ],
      "finale": "Le chat est sécurisé, la capture n’est pas amplifiée et l’équipe choisit l’aide plutôt que l’escalade.",
      "cast": [
        {
          "name": "Jade",
          "role": "joueuse visée par les messages"
        },
        {
          "name": "Nassim",
          "role": "coéquipier témoin"
        },
        {
          "name": "Lou",
          "role": "propose de signaler"
        },
        {
          "name": "Enzo",
          "role": "a repartagé la capture sans mesurer le risque"
        }
      ],
      "topic": "harcelement_violence",
      "prepMin": 5,
      "soloMode": "adapt"
    },
    {
      "id": "defi-de-trop",
      "title": "Le Défi de Trop",
      "subtitle": "Pression du groupe • Choix • Témoins",
      "category": "impact",
      "age": "12–17",
      "durationMin": 50,
      "players": "3–6",
      "formats": [
        "numerique",
        "equipe"
      ],
      "icon": "⚑",
      "accent": "#ff936f",
      "description": "Un jeu réaliste sur la pression du groupe, les défis filmés et la capacité à respecter un refus. Il ne moralise pas : il place les joueurs devant plusieurs décisions et leurs conséquences.",
      "intro": "Un groupe prépare une vidéo de défi. Au début tout le monde rigole, puis le défi devient plus risqué. Une personne dit qu’elle ne veut plus participer, mais la caméra continue de tourner.",
      "steps": [
        {
          "id": "dt1",
          "chapter": "pression",
          "type": "choice",
          "title": "Le premier refus",
          "prompt": "Quel élément doit changer immédiatement la situation ?",
          "answer": 1,
          "points": 110,
          "hints": [
            "Écoute la personne concernée.",
            "Le refus explicite."
          ],
          "options": [
            "Le nombre de vues espéré",
            "Une personne dit « non, j’arrête »",
            "Le téléphone est presque déchargé",
            "Quelqu’un rit"
          ],
          "evidence": [
            {
              "kind": "chat",
              "author": "Emma",
              "time": "17:32",
              "text": "On fait le défi et on poste la meilleure vidéo."
            },
            {
              "kind": "note",
              "author": "Léo",
              "time": "17:39",
              "text": "Non, là je veux arrêter. Je ne le fais plus."
            },
            {
              "kind": "chat",
              "author": "Tom",
              "time": "17:40",
              "text": "Allez, juste une fois pour la vidéo."
            },
            {
              "kind": "chat",
              "author": "Yasmine",
              "time": "17:40",
              "text": "Il a dit stop. On change de défi, c’est tout."
            }
          ]
        },
        {
          "id": "dt2",
          "chapter": "pression",
          "type": "multi",
          "title": "Phrases de pression",
          "prompt": "Quelles phrases exercent clairement une pression ?",
          "answer": [
            "toutlemonde",
            "peur",
            "preuve"
          ],
          "points": 130,
          "hints": [
            "Cherche celles qui attaquent la personne pour la faire céder.",
            "« Tout le monde le fait », « t’as peur ? », « prouve-le »."
          ],
          "options": [
            {
              "id": "toutlemonde",
              "label": "« Tout le monde le fait. »"
            },
            {
              "id": "peur",
              "label": "« T’as peur ou quoi ? »"
            },
            {
              "id": "preuve",
              "label": "« Prouve que t’es capable. »"
            },
            {
              "id": "stop",
              "label": "« Si tu veux arrêter, on arrête. »"
            }
          ]
        },
        {
          "id": "dt3",
          "chapter": "agir",
          "type": "choice",
          "title": "Le témoin",
          "prompt": "Tu n’es pas la personne mise au défi. Quelle action aide le plus ?",
          "answer": 2,
          "points": 120,
          "hints": [
            "Un témoin peut casser la pression.",
            "Dire clairement qu’un refus suffit et proposer autre chose."
          ],
          "options": [
            "Filmer sans commenter",
            "Attendre de voir",
            "Dire qu’un refus suffit et proposer autre chose",
            "Mettre un sondage"
          ]
        },
        {
          "id": "dt4",
          "chapter": "agir",
          "type": "match",
          "title": "Conséquences",
          "prompt": "Associe chaque choix à sa conséquence la plus probable.",
          "answer": "ok",
          "points": 150,
          "hints": [
            "Pense au groupe et à la diffusion.",
            "Filmer→trace ; respecter→pression baisse ; repartager→amplification."
          ],
          "pairs": [
            [
              "Continuer à filmer",
              "Créer une trace qui peut circuler"
            ],
            [
              "Respecter le refus",
              "Faire baisser la pression"
            ],
            [
              "Repartager la vidéo",
              "Amplifier la situation"
            ]
          ]
        },
        {
          "id": "dt5",
          "chapter": "agir",
          "type": "team_split",
          "title": "Rôles croisés",
          "prompt": "Quelle phrase commune permet de sortir du défi sans humilier personne ?",
          "answer": [
            "ON ARRETE",
            "ON CHANGE",
            "STOP"
          ],
          "points": 160,
          "hints": [
            "Simple et collectif.",
            "« On arrête, on change de défi. »"
          ],
          "cards": {
            "observateur": "Tu vois que la personne ne rit plus.",
            "decodeur": "Le défi prévu n’était pas censé aller aussi loin.",
            "messager": "Deux personnes veulent continuer uniquement pour la vidéo.",
            "gardien": "Le groupe peut choisir une autre activité immédiatement.",
            "default": "Partage ton élément."
          }
        },
        {
          "id": "dt6",
          "chapter": "final",
          "type": "choice",
          "title": "Final — Le Défi de Trop",
          "prompt": "Quel principe résume le mieux la mission ?",
          "answer": 0,
          "points": 120,
          "hints": [
            "Un refus n’a pas besoin d’être justifié.",
            "Un non suffit."
          ],
          "options": [
            "Un refus suffit ; on n’a pas à forcer quelqu’un à se justifier",
            "Si le groupe insiste, il faut accepter",
            "Le plus important est de finir la vidéo",
            "On peut continuer si personne ne touche la personne"
          ]
        }
      ],
      "chapters": [
        {
          "id": "pression",
          "title": "Repérer la pression"
        },
        {
          "id": "agir",
          "title": "Changer la dynamique"
        },
        {
          "id": "final",
          "title": "Repère final"
        }
      ],
      "mechanics": [
        "analyse de phrases",
        "sélection",
        "témoin",
        "association",
        "rôles",
        "décision"
      ],
      "materials": [
        "aucun"
      ],
      "setup": [
        "Débrief conseillé après la partie."
      ],
      "audience": [
        "ado"
      ],
      "debrief": [
        "Qu’est-ce qui rend difficile le fait de dire non devant un groupe ?",
        "Comment un témoin peut-il casser la pression sans créer un nouveau conflit ?"
      ],
      "finale": "Le défi s’arrête avant de déraper. La réussite n’était pas de gagner contre quelqu’un, mais de savoir changer la dynamique du groupe.",
      "cast": [
        {
          "name": "Emma",
          "role": "propose le défi au départ"
        },
        {
          "name": "Léo",
          "role": "souhaite arrêter"
        },
        {
          "name": "Yasmine",
          "role": "témoin qui propose une alternative"
        },
        {
          "name": "Tom",
          "role": "filme la scène"
        }
      ],
      "genre": "questions_ados",
      "challenge": 2,
      "recommendedDifficulty": "aventure",
      "topic": "relations_limites",
      "prepMin": 5,
      "soloMode": "adapt"
    },
    {
      "id": "zone-grise",
      "title": "Zone Grise — La Limite est Claire",
      "subtitle": "Questions d’ados • Respect • Pression • Consentement",
      "category": "impact",
      "genre": "questions_ados",
      "topic": "relations_limites",
      "age": "12–17",
      "durationMin": 40,
      "players": "3–6",
      "formats": [
        "numerique",
        "equipe"
      ],
      "icon": "◇",
      "accent": "#ff9d91",
      "challenge": 3,
      "recommendedDifficulty": "aventure",
      "description": "Un jeu de décisions sur les limites personnelles, la pression et le respect d’un non, dans des situations quotidiennes fictives et non explicites.",
      "intro": "Une soirée entre amis dérape en petits défis “pour rire”. Plusieurs personnes expriment une limite claire, mais le groupe insiste. Votre équipe doit repérer à quel moment la pression remplace le choix.",
      "chapters": [
        {
          "id": "soir",
          "title": "La soirée"
        },
        {
          "id": "pression",
          "title": "Quand le groupe insiste"
        },
        {
          "id": "sortie",
          "title": "Sortir de la pression"
        }
      ],
      "steps": [
        {
          "id": "zg1",
          "chapter": "soir",
          "type": "choice",
          "title": "Un refus suffit",
          "prompt": "Léa dit : « Non, je n’ai pas envie de faire ce défi. » Quelle réponse respecte sa limite ?",
          "options": [
            "OK, on passe à autre chose",
            "Allez, tout le monde le fait",
            "Si tu refuses, on te filme quand même"
          ],
          "answer": 0,
          "points": 120,
          "hints": [
            "Un non n’a pas besoin d’être négocié.",
            "On passe à autre chose."
          ]
        },
        {
          "id": "zg2",
          "chapter": "pression",
          "type": "multi",
          "title": "Pression du groupe",
          "prompt": "Quels comportements transforment un choix en pression ?",
          "options": [
            {
              "id": "insiste",
              "label": "Insister après un refus"
            },
            {
              "id": "moque",
              "label": "Se moquer pour faire céder"
            },
            {
              "id": "menace",
              "label": "Menacer d’exclure du groupe"
            },
            {
              "id": "respect",
              "label": "Accepter le refus"
            }
          ],
          "answer": [
            "insiste",
            "moque",
            "menace"
          ],
          "points": 130,
          "hints": [
            "Cherche ce qui réduit la liberté de choisir.",
            "Insister + se moquer + menacer."
          ]
        },
        {
          "id": "zg3",
          "chapter": "pression",
          "type": "order",
          "title": "Désamorcer",
          "prompt": "Remets les actions dans l’ordre utile.",
          "items": [
            "Proposer une alternative",
            "Arrêter l’insistance",
            "Vérifier que la personne va bien",
            "Reprendre un jeu où tout le monde choisit"
          ],
          "answer": [
            "Arrêter l’insistance",
            "Vérifier que la personne va bien",
            "Proposer une alternative",
            "Reprendre un jeu où tout le monde choisit"
          ],
          "points": 130,
          "hints": [
            "D’abord, faire cesser la pression.",
            "Arrêter → vérifier → alternative → reprendre."
          ]
        },
        {
          "id": "zg4",
          "chapter": "sortie",
          "type": "team_split",
          "title": "Les quatre phrases",
          "prompt": "Assemblez le principe commun.",
          "cards": {
            "observateur": "UN NON",
            "decodeur": "EST",
            "archiviste": "UNE REPONSE",
            "gardien": "COMPLETE",
            "default": "Lis ton fragment."
          },
          "answer": [
            "UN NON EST UNE REPONSE COMPLETE",
            "UN NON EST UNE RÉPONSE COMPLÈTE"
          ],
          "points": 150,
          "hints": [
            "Commence par UN NON.",
            "UN NON EST UNE RÉPONSE COMPLÈTE."
          ]
        },
        {
          "id": "zg5",
          "chapter": "sortie",
          "type": "choice",
          "title": "Le témoin dans la zone grise",
          "prompt": "Tu vois quelqu’un se faire pousser à accepter un défi qu’il refuse. Que peux-tu faire ?",
          "options": [
            "Soutenir son refus et proposer d’arrêter",
            "Filmer pour garder un souvenir",
            "Rire pour éviter de se faire remarquer"
          ],
          "answer": 0,
          "points": 110,
          "hints": [
            "Le témoin peut réduire la pression.",
            "Soutenir le refus."
          ]
        },
        {
          "id": "zg6",
          "chapter": "sortie",
          "type": "text",
          "title": "Mot de sortie — Zone Grise",
          "prompt": "Complète : « Respecter une limite, c’est laisser à l’autre son _____. »",
          "answer": [
            "CHOIX"
          ],
          "points": 100,
          "hints": [
            "Cinq lettres.",
            "CHOIX."
          ]
        }
      ],
      "mechanics": [
        "situations fictives",
        "choix",
        "analyse de pression",
        "ordre d’action",
        "rôles distribués"
      ],
      "materials": [
        "aucun"
      ],
      "setup": [
        "Le jeu parle de limites quotidiennes et ne demande aucune confidence personnelle."
      ],
      "audience": [
        "ado"
      ],
      "debrief": [
        "Pourquoi une personne n’a-t-elle pas à justifier chaque refus ?",
        "Comment un témoin peut-il réduire la pression du groupe ?"
      ],
      "finale": "Le groupe comprend qu’une activité reste un jeu seulement si chacun peut réellement choisir.",
      "sourceOrigins": [
        "Création originale FAFA QUEST dans le monde Questions d’ados, cohérente avec les thèmes pression du groupe et respect demandés par l’utilisateur."
      ],
      "prepMin": 5,
      "soloMode": "adapt"
    },
    {
      "id": "sous-pression",
      "title": "Sous Pression — La Soirée des Choix",
      "subtitle": "Questions d’ados • Alcool • Vape • Groupe",
      "category": "impact",
      "genre": "questions_ados",
      "topic": "prevention_addictions",
      "age": "12–17",
      "durationMin": 45,
      "players": "3–6",
      "formats": [
        "numerique",
        "equipe"
      ],
      "icon": "◌",
      "accent": "#ffbd59",
      "challenge": 3,
      "recommendedDifficulty": "aventure",
      "description": "Une enquête de prévention sans moralisation : les joueurs analysent la pression sociale, les arguments trompeurs et les moyens de garder un choix personnel lors d’une soirée fictive.",
      "intro": "Une soirée se prépare. Dans le groupe, plusieurs messages présentent l’alcool ou la vape comme “obligatoires pour s’amuser”. Votre équipe doit distinguer information, pression et choix avant que les décisions ne se prennent à la place des personnes.",
      "chapters": [
        {
          "id": "groupe",
          "title": "Le groupe de discussion"
        },
        {
          "id": "choix",
          "title": "Les choix"
        },
        {
          "id": "aide",
          "title": "S’informer et demander de l’aide"
        }
      ],
      "steps": [
        {
          "id": "sp1",
          "chapter": "groupe",
          "type": "multi",
          "title": "Arguments de pression",
          "prompt": "Quels messages utilisent la pression du groupe ?",
          "options": [
            {
              "id": "tous",
              "label": "“Tout le monde le fait.”"
            },
            {
              "id": "peur",
              "label": "“Si tu refuses, t’es pas avec nous.”"
            },
            {
              "id": "choix",
              "label": "“Tu fais comme tu veux.”"
            },
            {
              "id": "ridicule",
              "label": "“Tu vas pas être le seul à dire non.”"
            }
          ],
          "answer": [
            "tous",
            "peur",
            "ridicule"
          ],
          "points": 120,
          "hints": [
            "Cherche ce qui fait peur d’être exclu ou différent.",
            "Tout le monde / pas avec nous / seul à dire non."
          ]
        },
        {
          "id": "sp2",
          "chapter": "choix",
          "type": "choice",
          "title": "Info ou idée reçue ?",
          "prompt": "Une puff contenant de la nicotine peut-elle favoriser une dépendance ?",
          "options": [
            "Oui",
            "Non, jamais",
            "Seulement si elle a une couleur sombre"
          ],
          "answer": 0,
          "points": 100,
          "hints": [
            "La nicotine est addictive.",
            "Oui."
          ],
          "fact": "Drogues Info Service rappelle que les puffs à nicotine peuvent favoriser une dépendance à la nicotine.",
          "source": "https://www.drogues-info-service.fr/Vos-Questions-Nos-Reponses/Dependance-puff"
        },
        {
          "id": "sp3",
          "chapter": "choix",
          "type": "order",
          "title": "Garder son choix",
          "prompt": "Remets les étapes dans un ordre utile.",
          "items": [
            "S’éloigner si la pression continue",
            "Dire clairement son choix",
            "Chercher un allié / adulte si besoin",
            "Identifier la pression"
          ],
          "answer": [
            "Identifier la pression",
            "Dire clairement son choix",
            "S’éloigner si la pression continue",
            "Chercher un allié / adulte si besoin"
          ],
          "points": 130,
          "hints": [
            "D’abord repérer ce qui se passe.",
            "Repérer → dire → s’éloigner → chercher de l’aide."
          ]
        },
        {
          "id": "sp4",
          "chapter": "aide",
          "type": "choice",
          "title": "Prévention efficace",
          "prompt": "Qu’est-ce qui aide mieux qu’un simple “cours de morale” ?",
          "options": [
            "Jeux de rôle, mises en situation et compétences psychosociales",
            "Faire peur sans discussion",
            "Donner uniquement une liste de sanctions"
          ],
          "answer": 0,
          "points": 110,
          "hints": [
            "Pense pratique et capacité à décider.",
            "Mises en situation / compétences psychosociales."
          ],
          "fact": "Santé publique France indique que les approches développant les compétences psychosociales et utilisant des mises en situation sont parmi les plus étayées pour la prévention chez les jeunes.",
          "source": "https://www.santepubliquefrance.fr/alcool/article/quelles-sont-les-interventions-efficaces-chez-les-jeunes-pour-prevenir-les-consommations"
        },
        {
          "id": "sp5",
          "chapter": "aide",
          "type": "file_hunt",
          "title": "Trouver une aide adaptée",
          "prompt": "Sélectionne les ressources qui permettent de parler d’une consommation avec des professionnels.",
          "entries": [
            {
              "id": "cjc",
              "name": "Consultation Jeunes Consommateurs",
              "path": "Aide locale"
            },
            {
              "id": "dis",
              "name": "Drogues Info Service",
              "path": "Aide à distance"
            },
            {
              "id": "rumeur",
              "name": "Compte anonyme “astuces miracles”",
              "path": "Réseaux"
            }
          ],
          "answer": [
            "cjc",
            "dis"
          ],
          "points": 120,
          "hints": [
            "Cherche des ressources professionnelles et confidentielles.",
            "CJC + Drogues Info Service."
          ],
          "fact": "Les CJC accueillent gratuitement et confidentiellement les 12–25 ans et leur entourage pour faire le point sur les consommations.",
          "source": "https://www.drogues-info-service.fr/Tout-savoir-sur-les-drogues/Se-faire-aider/Les-Consultations-jeunes-consommateurs-CJC-une-aide-aux-jeunes-et-a-leur-entourage",
          "expertDecoys": [
            {
              "id": "forum",
              "name": "Forum anonyme — “arrêter en 24 h”",
              "path": "Résultats web"
            },
            {
              "id": "influence",
              "name": "Vidéo influenceur — “détox express”",
              "path": "Réseaux"
            }
          ]
        },
        {
          "id": "sp6",
          "chapter": "aide",
          "type": "team_split",
          "title": "Phrase finale",
          "prompt": "Assemblez le message.",
          "cards": {
            "observateur": "MON CHOIX",
            "decodeur": "N A PAS",
            "archiviste": "BESOIN",
            "gardien": "D ETRE VALIDE PAR LE GROUPE",
            "default": "Lis ton fragment."
          },
          "answer": [
            "MON CHOIX N A PAS BESOIN D ETRE VALIDE PAR LE GROUPE",
            "MON CHOIX N’A PAS BESOIN D’ÊTRE VALIDÉ PAR LE GROUPE"
          ],
          "points": 150,
          "hints": [
            "Commence par MON CHOIX.",
            "MON CHOIX N’A PAS BESOIN D’ÊTRE VALIDÉ PAR LE GROUPE."
          ]
        }
      ],
      "mechanics": [
        "faux groupe de discussion",
        "idées reçues",
        "ordre de décision",
        "prévention par compétences",
        "ressources d’aide",
        "coopération"
      ],
      "materials": [
        "aucun"
      ],
      "setup": [
        "Ne jamais demander aux jeunes de déclarer leurs consommations personnelles."
      ],
      "audience": [
        "ado"
      ],
      "debrief": [
        "Qu’est-ce qui différencie une proposition d’une pression ?",
        "Pourquoi “tout le monde le fait” peut-il influencer une décision ?",
        "À qui parler si une consommation commence à poser question ?"
      ],
      "sources": [
        {
          "label": "Santé publique France — prévention chez les jeunes",
          "url": "https://www.santepubliquefrance.fr/alcool/article/quelles-sont-les-interventions-efficaces-chez-les-jeunes-pour-prevenir-les-consommations"
        },
        {
          "label": "Drogues Info Service — CJC",
          "url": "https://www.drogues-info-service.fr/Tout-savoir-sur-les-drogues/Se-faire-aider/Les-Consultations-jeunes-consommateurs-CJC-une-aide-aux-jeunes-et-a-leur-entourage"
        }
      ],
      "finale": "L’équipe sort de la logique “faire comme les autres” et sait où chercher une aide neutre et professionnelle.",
      "sourceOrigins": [
        "Création originale FAFA QUEST à partir des besoins prévention ados exprimés par l’utilisateur et de sources de santé publique actuelles."
      ],
      "prepMin": 5,
      "soloMode": "adapt"
    },
    {
      "id": "mode-nuit",
      "title": "Mode Nuit — Le Téléphone qui ne Dort Jamais",
      "subtitle": "Questions d’ados • Écrans • Sommeil • Notifications",
      "category": "impact",
      "genre": "questions_ados",
      "topic": "bien_etre",
      "age": "11–17",
      "durationMin": 40,
      "players": "3–6",
      "formats": [
        "numerique",
        "equipe"
      ],
      "icon": "☾",
      "accent": "#7f8cff",
      "challenge": 2,
      "recommendedDifficulty": "aventure",
      "description": "Une nuit fictive racontée par notifications, messages et choix d’organisation. L’équipe doit comprendre ce qui perturbe le repos sans demander aux joueurs de raconter leurs propres habitudes.",
      "intro": "À 23 h 47, le téléphone de Noa continue de vibrer : groupe de classe, vidéo, partie en ligne, rappel, messages. Le lendemain, plusieurs indices montrent que la nuit n’a presque jamais vraiment commencé. Votre mission : reconstruire la soirée et créer un plan réaliste pour retrouver une vraie pause nocturne.",
      "chapters": [
        {
          "id": "notif",
          "title": "23 h 47 — Les notifications"
        },
        {
          "id": "nuit",
          "title": "La nuit fragmentée"
        },
        {
          "id": "plan",
          "title": "Le plan de récupération"
        }
      ],
      "steps": [
        {
          "id": "mn1",
          "chapter": "notif",
          "type": "file_hunt",
          "title": "Le flot de notifications",
          "prompt": "Parmi ces éléments, lesquels peuvent attendre le lendemain ?",
          "entries": [
            {
              "id": "video",
              "name": "Nouvelle vidéo recommandée",
              "path": "23:48"
            },
            {
              "id": "streak",
              "name": "Rappel de série / streak",
              "path": "23:51"
            },
            {
              "id": "urgence",
              "name": "Message “urgence familiale — appelle-moi”",
              "path": "23:53"
            },
            {
              "id": "game",
              "name": "Invitation de partie",
              "path": "00:02"
            }
          ],
          "answer": [
            "video",
            "streak",
            "game"
          ],
          "points": 110,
          "hints": [
            "Distingue l’urgence réelle des sollicitations automatiques.",
            "Vidéo + streak + invitation de partie."
          ],
          "expertDecoys": [
            {
              "id": "securite",
              "name": "Alerte sécurité du domicile",
              "path": "00:05"
            },
            {
              "id": "parent",
              "name": "Message parent — “rappelle-moi maintenant”",
              "path": "00:07"
            }
          ]
        },
        {
          "id": "mn2",
          "chapter": "notif",
          "type": "choice",
          "title": "Pause écran",
          "prompt": "Quel réglage aide le mieux à éviter les réveils liés au téléphone pendant la nuit ?",
          "options": [
            "Le garder sous l’oreiller avec le son fort",
            "Le mettre en silencieux / hors de la chambre",
            "Augmenter la luminosité pour lire plus vite"
          ],
          "answer": 1,
          "points": 100,
          "hints": [
            "Le but est de réduire les sollicitations et la lumière.",
            "Silencieux / hors de la chambre."
          ],
          "fact": "Ameli recommande notamment de ranger téléphones et ordinateurs hors de la chambre et de les éteindre ou mettre en silencieux pour ne pas être dérangé la nuit.",
          "source": "https://www.ameli.fr/assure/sante/themes/adolescents-sommeil/comment-mieux-dormir-l-adolescence"
        },
        {
          "id": "mn3",
          "chapter": "nuit",
          "type": "order",
          "title": "Reconstituer la nuit",
          "prompt": "Remets la séquence dans l’ordre.",
          "items": [
            "Notification de jeu",
            "Extinction de l’écran",
            "Réveil pour vérifier un message",
            "Réveil du matin"
          ],
          "answer": [
            "Notification de jeu",
            "Extinction de l’écran",
            "Réveil pour vérifier un message",
            "Réveil du matin"
          ],
          "points": 110,
          "hints": [
            "Commence par ce qui se passe avant de dormir.",
            "Jeu → extinction → réveil-message → matin."
          ]
        },
        {
          "id": "mn4",
          "chapter": "nuit",
          "type": "choice",
          "title": "Combien de sommeil ?",
          "prompt": "Quel ordre de grandeur est généralement conseillé à l’adolescence ?",
          "options": [
            "4 à 5 h",
            "8 à 10 h",
            "12 à 14 h chaque nuit pour tous"
          ],
          "answer": 1,
          "points": 100,
          "hints": [
            "C’est davantage que beaucoup d’adultes.",
            "8 à 10 h."
          ],
          "fact": "Ameli indique une durée de sommeil de 8 à 10 heures à l’adolescence, selon les besoins.",
          "source": "https://www.ameli.fr/assure/sante/themes/adolescents-sommeil/comment-mieux-dormir-l-adolescence"
        },
        {
          "id": "mn5",
          "chapter": "plan",
          "type": "multi",
          "title": "Construire une vraie pause",
          "prompt": "Choisis les mesures qui forment un plan réaliste.",
          "options": [
            {
              "id": "pause",
              "label": "Prévoir une pause écran 1 à 2 h avant le coucher"
            },
            {
              "id": "hors",
              "label": "Mettre le téléphone hors de la chambre / silencieux"
            },
            {
              "id": "notif",
              "label": "Désactiver les notifications inutiles"
            },
            {
              "id": "bright",
              "label": "Monter la luminosité au maximum dans le lit"
            }
          ],
          "answer": [
            "pause",
            "hors",
            "notif"
          ],
          "points": 120,
          "hints": [
            "Cherche ce qui réduit stimulation et interruptions.",
            "Pause écran + téléphone hors chambre + notifications inutiles désactivées."
          ],
          "fact": "Les conseils actuels insistent sur la pause écran en soirée, la réduction des notifications et l’éloignement du téléphone au coucher.",
          "source": "https://www.ameli.fr/assure/sante/themes/ecrans-enfance-adolescence/usage-ecran-age"
        },
        {
          "id": "mn6",
          "chapter": "plan",
          "type": "team_split",
          "title": "Code de la nuit",
          "prompt": "Chaque rôle possède un fragment. Assemblez la phrase.",
          "cards": {
            "observateur": "UNE VRAIE PAUSE",
            "decodeur": "COMMENCE",
            "archiviste": "QUAND LE TELEPHONE",
            "gardien": "ARRETE DE DECIDER POUR NOUS",
            "default": "Lis ton fragment à voix haute."
          },
          "answer": [
            "UNE VRAIE PAUSE COMMENCE QUAND LE TELEPHONE ARRETE DE DECIDER POUR NOUS",
            "UNE VRAIE PAUSE COMMENCE QUAND LE TÉLÉPHONE ARRÊTE DE DÉCIDER POUR NOUS"
          ],
          "points": 150,
          "hints": [
            "Commence par UNE VRAIE PAUSE.",
            "UNE VRAIE PAUSE COMMENCE QUAND LE TÉLÉPHONE ARRÊTE DE DÉCIDER POUR NOUS."
          ]
        }
      ],
      "mechanics": [
        "faux centre de notifications",
        "tri de fichiers",
        "chronologie",
        "choix documentés",
        "plan d’action collectif",
        "coopération"
      ],
      "materials": [
        "aucun"
      ],
      "setup": [
        "Scénario fictif : ne demande pas aux joueurs de déclarer leur temps d’écran ou leurs difficultés personnelles."
      ],
      "audience": [
        "ado"
      ],
      "debrief": [
        "Qu’est-ce qui rend une notification “urgente” ou simplement insistante ?",
        "Qu’est-ce qu’un groupe peut faire pour éviter de se solliciter toute la nuit ?",
        "Pourquoi une pause écran doit-elle rester réaliste plutôt que punitive ?"
      ],
      "sources": [
        {
          "label": "Ameli — Comment mieux dormir à l’adolescence ?",
          "url": "https://www.ameli.fr/assure/sante/themes/adolescents-sommeil/comment-mieux-dormir-l-adolescence"
        },
        {
          "label": "Ameli — Usage des écrans selon l’âge",
          "url": "https://www.ameli.fr/assure/sante/themes/ecrans-enfance-adolescence/usage-ecran-age"
        }
      ],
      "finale": "L’équipe a coupé le flux inutile et reconstruit une nuit où le téléphone redevient un outil, pas le maître du rythme.",
      "sourceOrigins": [
        "Création originale FAFA QUEST à partir du besoin “questions d’ados” et de repères actuels sur sommeil et écrans."
      ],
      "prepMin": 5,
      "soloMode": "adapt"
    },
    {
      "id": "groupe-17",
      "title": "Groupe 17 — Pas une blague pour tout le monde",
      "subtitle": "Questions d’ados • Discrimination • Inclusion",
      "category": "impact",
      "genre": "questions_ados",
      "age": "11–17",
      "durationMin": 40,
      "players": "3–6",
      "formats": [
        "numerique",
        "equipe"
      ],
      "icon": "≠",
      "accent": "#e38cff",
      "challenge": 2,
      "recommendedDifficulty": "aventure",
      "description": "Un jeu de discussion et de déduction autour des stéréotypes, de l’exclusion et du rôle du groupe, sans désigner un sexe ou une origine comme auteur ou victime.",
      "intro": "Dans le groupe 17, une série de “blagues” vise toujours les mêmes personnes. Les captures ne racontent pas toutes la même version. À vous de distinguer humour partagé, stéréotype et exclusion.",
      "chapters": [
        {
          "id": "captures",
          "title": "Les captures"
        },
        {
          "id": "groupe",
          "title": "Le groupe"
        },
        {
          "id": "final",
          "title": "Changer la dynamique"
        }
      ],
      "steps": [
        {
          "id": "g171",
          "chapter": "captures",
          "type": "choice",
          "title": "Humour partagé ?",
          "prompt": "Quel indice montre qu’une “blague” n’est plus partagée par tout le monde ?",
          "options": [
            "La personne visée demande d’arrêter et le groupe recommence",
            "Le message contient un emoji",
            "Plusieurs personnes sont connectées"
          ],
          "answer": 0,
          "points": 120,
          "hints": [
            "Regardez la réaction de la personne visée.",
            "Elle demande d’arrêter mais cela continue."
          ],
          "evidence": [
            {
              "kind": "chat",
              "author": "Ana",
              "time": "17:28",
              "text": "Sérieux, arrêtez avec ça. Ça ne me fait pas rire."
            },
            {
              "kind": "chat",
              "author": "Groupe 17",
              "time": "17:31",
              "text": "Encore une blague identique est postée."
            }
          ]
        },
        {
          "id": "g172",
          "chapter": "captures",
          "type": "multi",
          "title": "Stéréotype ou fait ?",
          "prompt": "Sélectionnez les phrases qui généralisent un groupe sans preuve.",
          "options": [
            {
              "id": "s1",
              "label": "« Les gens comme toi font toujours ça. »"
            },
            {
              "id": "s2",
              "label": "« Ce message a été envoyé à 17 h 31. »"
            },
            {
              "id": "s3",
              "label": "« Tous les garçons / toutes les filles sont forcément… »"
            },
            {
              "id": "s4",
              "label": "« Ana a demandé d’arrêter. »"
            }
          ],
          "answer": [
            "s1",
            "s3"
          ],
          "points": 130,
          "hints": [
            "Une généralisation vise un groupe entier.",
            "s1 et s3."
          ]
        },
        {
          "id": "g173",
          "chapter": "groupe",
          "type": "order",
          "title": "Réagir en témoin",
          "prompt": "Remettez : soutenir, stopper la diffusion, prévenir si nécessaire, vérifier que la personne va bien.",
          "items": [
            "Prévenir si nécessaire",
            "Stopper la diffusion",
            "Vérifier que la personne va bien",
            "Soutenir"
          ],
          "answer": [
            "Stopper la diffusion",
            "Soutenir",
            "Vérifier que la personne va bien",
            "Prévenir si nécessaire"
          ],
          "points": 140,
          "hints": [
            "D’abord faire cesser ce qui amplifie.",
            "Stopper → soutenir → vérifier → prévenir."
          ]
        },
        {
          "id": "g174",
          "chapter": "groupe",
          "type": "team_split",
          "title": "Quatre regards",
          "prompt": "Quel mot commun ressort des cartes ?",
          "cards": {
            "observateur": "La personne demande du RESPECT.",
            "decodeur": "Le groupe doit RESPECTER une limite exprimée.",
            "archiviste": "Le mot-clé noté dans le dossier est RESPECT.",
            "gardien": "Sans RESPECT, l’humour devient une pression.",
            "default": "Partage ton élément."
          },
          "answer": [
            "RESPECT"
          ],
          "points": 160,
          "hints": [
            "Le même mot apparaît plusieurs fois.",
            "RESPECT."
          ]
        },
        {
          "id": "g175",
          "chapter": "final",
          "type": "choice",
          "title": "Changer la dynamique",
          "prompt": "Quelle réaction est la plus utile ?",
          "options": [
            "Dire clairement que ce n’est pas drôle pour tout le monde et changer de dynamique",
            "Rire pour ne pas être la prochaine cible",
            "Reposter ailleurs sans le nom de la personne"
          ],
          "answer": 0,
          "points": 120,
          "hints": [
            "Choisissez l’action qui réduit l’exclusion.",
            "Dire clairement stop et changer de dynamique."
          ]
        },
        {
          "id": "g176",
          "chapter": "final",
          "type": "text",
          "title": "Message final — Groupe 17",
          "prompt": "Saisissez le mot-clé de la mission.",
          "answer": [
            "RESPECT"
          ],
          "points": 100,
          "hints": [
            "Il apparaît dans l’épreuve 4.",
            "RESPECT."
          ]
        }
      ],
      "mechanics": [
        "faux chat",
        "stéréotypes",
        "ordre",
        "rôles",
        "décision",
        "débrief"
      ],
      "materials": [
        "aucun"
      ],
      "setup": [
        "Débrief conseillé ; ne demandez pas aux jeunes de révéler des situations personnelles."
      ],
      "audience": [
        "ado"
      ],
      "debrief": [
        "À quel moment l’humour cesse-t-il d’être partagé ?",
        "Comment un groupe peut-il soutenir quelqu’un sans l’isoler davantage ?"
      ],
      "finale": "Le groupe 17 change de dynamique : la réussite consiste à repérer la limite et à ne pas laisser l’exclusion devenir normale.",
      "cast": [
        {
          "name": "Ana",
          "role": "demande que les blagues cessent"
        },
        {
          "name": "Ilyes",
          "role": "témoin qui hésite à intervenir"
        },
        {
          "name": "Camille",
          "role": "propose de changer la dynamique"
        },
        {
          "name": "Maël",
          "role": "partage une capture sans réfléchir"
        }
      ],
      "topic": "citoyennete_inclusion",
      "prepMin": 5,
      "soloMode": "adapt"
    }
  ],
  "CATEGORY_LABELS": {
    "fun": "Escape & aventures",
    "education": "Défis & connaissances",
    "impact": "Questions d’ados & société"
  },
  "GENRE_LABELS": {
    "mondes_aventure": "Mondes & aventure",
    "enquete_mystere": "Enquêtes & mystères",
    "cyber_tech": "Cyber & technologie",
    "codes_logique": "Codes & logique",
    "science_culture": "Sciences & culture",
    "planete": "Planète & environnement",
    "questions_ados": "Questions d’ados",
    "defis_physiques": "Défis physiques & coopération",
    "famille": "Famille & découverte",
    "evenement_hybride": "Événements & grands jeux hybrides"
  },
  "TOPIC_LABELS": {
    "harcelement_violence": "Harcèlement, cyberviolence & protection",
    "image_vie_privee": "Image, vie privée & identité numérique",
    "reseaux_esprit_critique": "Réseaux, info & esprit critique",
    "relations_limites": "Relations, pression & limites",
    "prevention_addictions": "Prévention, addictions & choix",
    "citoyennete_inclusion": "Inclusion, discrimination & vivre ensemble",
    "bien_etre": "Bien-être, écrans & équilibre"
  }
};
export const {APP_VERSION,DIFFICULTIES,ROLE_LIBRARY,TEAM_NAMES,SCENARIOS,CATEGORY_LABELS,GENRE_LABELS,TOPIC_LABELS}=DATA;
