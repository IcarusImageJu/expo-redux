export const fallback = "fr";

import {fr, en} from '../lang/messages';

export const supportedLocales = {
    fr: {
        name: "Français",
        translationFileLoader: fr,
        momentLocaleLoader: () => import('moment/locale/fr'),
    },
    en: {
        name: "English",
        translationFileLoader: en,
        momentLocaleLoader: () => import('moment/locale/en-gb'),
    },
};

export const defaultNamespace = "common";

export const namespaces = [
    "common",
];