[
    // Math mode
    {trigger: "/mk", replacement: "$$0,$", options: "tA"},
    {trigger: "/dm", replacement: "$$$0.$$", options: "twA"},
    {trigger: "disp", replacement: "\\displaystyle", options: "mA"},
    {trigger: "beg", replacement: "\\begin{$0}\n$1\n\\end{$0}", options: "mA"},

    // Accumulation Symbols
//    {trigger: "(?<=l)test", replacement: "passed", options: trA},
    {trigger: "(${ACCNI}) ([^=\s]+)=([^=\s]+) (.+)", replacement: (match) => {
        let symbol = match[1];

        const table = {
                    "sum":  "\\sum",
                    "UU": "\\bigcup",
                    "bcu": "\\bigcup",
                    "bca": "\\bigcap",
                    "prd": "\\prod",
                    "cprd": "\\coprod",
                    "XX": "\\bigprod",
                    "O+": "\\bigoplus",
                    "O*": "\\bigotimes",
                    "VV": "\\bigvee",
                    "AND": "\\bigwedge"
                    };

        symbol = table[symbol];

        let bottom_ind = match[3] == "-f" ? '-\\infty' : match[3];
        let top_ind = match[4] == "f" ? '\\infty' : match[4];

        return symbol + '_{' + match[2] + '=' + bottom_ind + '}^{' + top_ind + '}';
    }, options: "rm"},
    {trigger: "(^|[^\\\\])(${ACCNI}) ([^=\s]+) (.*)", replacement: (match) => {
        let symbol = match[2];

        const table = {
                    "sum":  "\\sum",
                    "UU": "\\bigcup",
                    "bcu": "\\bigcup",
                    "bca": "\\bigcap",
                    "prd": "\\prod",
                    "cprd": "\\coprod",
                    "XX": "\\bigprod",
                    "O\+": "\\bigoplus",
                    "O\*": "\\bigotimes",
                    "VV": "\\bigvee",
                    "AND": "\\bigwedge"
                    };

        symbol = table[symbol];

        let index_set = match[4] == '' ? "I" : match[4];

        return match[1] + symbol + '_{' + match[3] + ' \\in ' + index_set + '}';
    }, options: "rm"},
    {trigger: "(${ACCNI})(${REL}) ([^=\s]+) (.*)", replacement: (match) => {
        let symbol = match[1];

        const table = {
                    "sum":  "\\sum",
                    "UU": "\\bigcup",
                    "bcu": "\\bigcup",
                    "bca": "\\bigcap",
                    "prd": "\\prod",
                    "cprd": "\\coprod",
                    "XX": "\\bigprod",
                    "O\+": "\\bigoplus",
                    "O\*": "\\bigotimes",
                    "VV": "\\bigvee",
                    "AND": "\\bigwedge"
                    };

        symbol = table[symbol];

        let index_set = match[4] == '' ? "I" : match[4];

        return symbol + '_{' + match[3] + ' ' + match[2] + ' ' + index_set + '}';
    }, options: "rm"},
    {trigger: "(^|[^\\\\])(${ACCNI})", replacement: (match) => {
        let symbol = match[2];

        const table = {
                    "sum":  "\\sum",
                    "UU": "\\bigcup",
                    "bcu": "\\bigcup",
                    "bca": "\\bigcap",
                    "prd": "\\prod",
                    "cprd": "\\coprod",
                    "XX": "\\bigprod",
                    "O+": "\\bigoplus",
                    "O*": "\\bigotimes",
                    "VV": "\\bigvee",
                    "AND": "\\bigwedge"
                    };

        return match[1] + table[symbol];
    }, options: "rm"},
    {trigger: "(^|[^\\\\])int ([^\s]*) ([^\s]*) (.*)", replacement: (triggerMatches) => {
        let bot_ind = triggerMatches[2];
        let top_ind = triggerMatches[3];

        if (bot_ind == '-f') {
            bot_ind = '-\\infty';
        } else if (bot_ind == 'f') {
            bot_ind = '\\infty';
        }

        if (top_ind == '-f') {
            top_ind = '-\\infty';
        } else if (top_ind == 'f') {
            top_ind = '\\infty';
        }

        if ((bot_ind == '') || (top_ind == '')) {
            bot_ind = '';
            top_ind = '';
        } else {
            bot_ind = '_{' + bot_ind + '}';
            top_ind = '^{' + top_ind + '}';
        }


        let int_var = triggerMatches[4] == '' ? '' : 'd' + triggerMatches[4];

        return triggerMatches[1] + '\\int' + bot_ind + top_ind + ' $0 ' + int_var + '$1';
    }, options: "rm"},
    {trigger: "(^|[^\\\\])(u?)int ([^\s]*)", replacement: (triggerMatches) => {
        let bounds = triggerMatches[2] == '' ? '' : '_{0}^{1}';
        let int_var = triggerMatches[3] == '' ? '' : 'd' + triggerMatches[3];

        return triggerMatches[1] + '\\int' + bounds + ' $0 ' + int_var + '$1'
    }, options: 'rm'},
    {trigger: "intm ([^\s]*) (.*)", replacement: (triggerMatches) => {
        let ind_set = triggerMatches[1] == '' ? '' : '_{' + triggerMatches[1] + '}';
        let measure = triggerMatches[2] == '' ? '' : 'd' + triggerMatches[2];

        return '\\int' + ind_set + ' $0 ' + measure + '$1'
    }, options: 'rm'},
    {trigger: "(^|[^\\\\])(lim|li?ms|li?mi)([+-]?) ([^\s]*) ([^\s]*)", replacement: (triggerMatches) => {
        let lim_kind = triggerMatches[2];
        let pm = triggerMatches[3] == '' ? '' : '^{' + triggerMatches[3] + '}';
        let lim_var = triggerMatches[4] == '' ? 'n' : triggerMatches[4];
        let lim_point = triggerMatches[5];

        switch (lim_kind.substring(lim_kind.length - 1)) {
            case 'm': lim_kind = '\\lim'; break;
            case 's': lim_kind = '\\limsup'; break;
            case 'i': lim_kind = '\\liminf'; break;
        }
        if (lim_point == 'f' || lim_point == '') {
            lim_point = '\\infty';
        } else if (lim_point == '-f') {
            lim_point = '-\\infty';
        }

        return triggerMatches[1] + lim_kind + '_{' + lim_var + '\\to ' + lim_point + pm + '} '
    }, options: "rm"},

    // Binary Operations
    {trigger: "//", replacement: "\\dfrac{$0}{$1}$2", options: "m"},
    {trigger: "/xx", replacement: "\\times ", options: "mA"},
    {trigger: "/oo", replacement: "\\circ ", options: "mA"},
    {trigger: "cdt", replacement: "\\cdot", options: "mA"},
    {trigger: "/ox", replacement: "\\otimes ", options: "mA"},
    {trigger: "/o\\+", replacement: "\\oplus ", options: "mA"},
    {trigger: "/od", replacement: "\\odot ", options: "mA"},
    {trigger: "n[cC]r ([^\s\$]+) ([^\s\$]+)", replacement: "{[[0]] \\choose [[1]]}", options: "rm"},
    {trigger: "laa", replacement: "\\land", options: "m"},
    {trigger: "rt|", replacement: "\\restriction ", options: "m"},

    // Binary Relations
    {trigger: "<->", replacement: "\\leftrightarrow ", options: "mA"},
    {trigger: "->", replacement: "\\to ", options: "mA"},
    {trigger: "/ot", replacement: "\\leftarrow ", options: "mA"},
    {trigger: "!>", replacement: "\\mapsto ", options: "mA"},
    {trigger: "!_>", replacement: "\\longmapsto ", options: "mA"},
    {trigger: "(bij|BIJ)", replacement: "\\leftrightarrow", options: "rm"},
    {trigger: "(inj|INJ)", replacement: "\\hookrightarrow", options: "rm"},
    {trigger: "(surj|SURJ)", replacement: "\\twoheadrightarrow", options: "rm"},
    {trigger: "rr>", replacement: "\\uto", options: "rm"},
    {trigger: "cc", replacement: "\\subseteq", options: "m"},
    {trigger: "ccc", replacement: "\\subset", options: "m"},
    {trigger: "===", replacement: "\\equiv ", options: "mA"},
    {trigger: ">=", replacement: "\\geqslant ", options: "mA"},
    {trigger: "<=", replacement: "\\leqslant ", options: "mA"},
    {trigger: ">>", replacement: "\\gg ", options: "m"},
    {trigger: "<<", replacement: "\\ll ", options: "m"},
    {trigger: "~~", replacement: "\\approx ", options: "mA"},
    {trigger: "~=", replacement: "\\approxeq ", options: "mA"},
    {trigger: "=~", replacement: "\\cong ", options: "mA"},
    {trigger: "~-", replacement: "\\simeq ", options: "mA"},
    {trigger: "prop", replacement: "\\propto ", options: "m"},
    {trigger: "cx", replacement: "\\propto ", options: "m"},
    {trigger: ":=", replacement: "\\coloneqq ", options: "m"},
    {trigger: "eqg", replacement: "\\underset{$0}{\\sim} ", options: "mA"},
    {trigger: "prcc", replacement: "\\preccurlyeq ", options: "mA"},
    {trigger: "|=", replacement: "\\models ", options: "m"},
    {trigger: "|-", replacement: "\\vdash ", options: "m"},
    {trigger: "/pal", replacement: "\\parallel", options: "mA"},
    {trigger: "=>", replacement: "\\implies ", options: "mA"},
    {trigger: "=<", replacement: "\\impliedby ", options: "mA"},

    // Unary Operations
    {trigger: "sr", replacement: "^{2}", options: "mA"},
    {trigger: "cb", replacement: "^{3}", options: "mA"},
    {trigger: "rd", replacement: "^{$0}$1", options: "m"},
    {trigger: "/sq", replacement: "\\sqrt{ $0 }$1", options: "mA"},
    {trigger: "sq (\S+)", replacement: "\\sqrt[[[0]]]{ $0 }$1", options: "mr"},
    {trigger: "coj", replacement: "^{*}", options: "m"},
    {trigger: "inv", replacement: "^{-1}", options: "m"},
    {trigger: "par", replacement: "\\partial", options: "m"},
    {trigger: "par (\S+)", replacement: "\\dfrac{\\partial}{\\partial [[0]] $0} ", options: "rm"},
    {trigger: "der (\S+)", replacement: "\\dfrac{ d }{ d[[0]] } ", options: "rm", description: 'type der x for the first derivative w.r.t. x.'},
    {trigger: "dern (\S+)", replacement: "\\frac{ d^[[0]] }{ d${0:x}^[[0]] } ", options: "rm", description: 'type dern x for the n-th derivative w.r.t. x'},
    {trigger: "dern", replacement: "^{(${0:n})}", options: "m"},
    {trigger: "ddt", replacement: "\\dfrac{d}{dt} ", options: "m"},
    {trigger: "ddx", replacement: "\\dfrac{d}{dx} ", options: "m"},
    {trigger: "ddy", replacement: "\\dfrac{d}{dy} ", options: "m"},
    {trigger: "ovrl", replacement: "\\overline{$0}", options: "mA"},
    {trigger: "undl", replacement: "\\underline{$0}", options: "mA"},
    {trigger: "oovrl", replacement: "\\overline{\\overline{$0}}", options: "mA"},
    {trigger: "wht", replacement: "\\widehat{$0}", options: "mA"},
    {trigger: "tld", replacement: "\\tilde{$0}", options: "mA"},
    {trigger: "wld", replacement: "\\widetilde{$0}", options: "mA"},
    {trigger: "\\[ \\]", replacement: "\\square", options: "m"},
    {trigger: "< >", replacement: "\\Diamond", options: "m"},
    {trigger: "nabl", replacement: "\\nabla ", options: "mA"},
    {trigger: "/del", replacement: "\\nabla", options: "mA"},
    {trigger: "\\|\\^", replacement: "\\uparrow ", options: "mr"},
    {trigger: "\\|[vV]", replacement: "\\downarrow ", options: "mr"},
    {trigger: "brv", replacement: "\\breve", options: "m"},
    {trigger: "lnn", replacement: "\\lnot", options: "m"},
    {trigger: "/s/", replacement: "\\oslash", options: "m"},
    {trigger: "nhd", replacement: "\\mathcal{N}($0)$1", options: "m"},
//    {trigger: "re", replacement: "\\mathrm{Re}", options: "mA"},
//    {trigger: "im", replacement: "\\mathrm{Im}", options: "mA"},

    // Visual operations
    {trigger: "B", replacement: "\\underbrace{ ${VISUAL} }_{ $0 }", options: "mA"},
    {trigger: "U", replacement: "\\underset{ $0 }{ ${VISUAL} }", options: "mA"},
    {trigger: "O", replacement: "\\overset{ $0 }{ ${VISUAL} }", options: "mA"},
    {trigger: "C", replacement: "\\cancel{ ${VISUAL} }", options: "mA"},
    {trigger: "K", replacement: "\\cancelto{ $0 }{ ${VISUAL} }", options: "mA"},
    {trigger: "S", replacement: "\\sqrt{ ${VISUAL} }", options: "mA"},

    // Text
    {trigger: "/t", replacement: "$\\hspace{24pt}$", options: "t"},
    {trigger: 'm(bb|bf|ac|as|rm|ak)', replacement: (match) => {
        let table = {
            "bb": '\\mathbb{$0}',
            "bf": '\\mathbf{$0}',
            "ac": '\\mathcal{$0}',
            "as": '\\mathscr{$0}',
            "rm": '\\mathrm{$0}',
            "ak": '\\mathfrak{$0}'
        };
        return table[match[1]]
    }, options: 'rm'},
    {trigger: 'm(bb|bf|ac|as|rm|ak) (.+)', replacement: (match) => {
        let table = {
            "bb": '\\mathbb{' + match[2] + '}',
            "bf": '\\mathbf{' + match[2] + '}',
            "ac": '\\mathcal{' + match[2] + '}',
            "as": '\\mathscr{' + match[2] + '}',
            "rm": '\\mathrm{' + match[2] + '}',
            "ak": '\\mathfrak{' + match[2] + '}'
        };
        return table[match[1]]
    }, options: 'rm'},
    {trigger: "/tt", replacement: "\\text{$0}", options: "mA"},
    {trigger: "bI", replacement: "\\mathbb{1}", options: "mA"},
    {trigger: "ovrs", replacement: "\\overset{$0}{$1}", options: "m"},
    {trigger: "unds", replacement: "\\underset{$0}{$1} ", options: "m"},
    {trigger: "undb", replacement: "\\underbrace{$0}_{$1} ", options: "m"},
    {trigger: "opna", replacement: "\\operatorname{$0} ", options: "m"},
    {trigger: "opna (.+)", replacement: "\\operatorname{[[0]]} ", options: "rm"},

    // Unit vectors
//    {trigger: ":i", replacement: "\\hat{\\mathbf{i}}", options: "m"},
//    {trigger: ":j", replacement: "\\hat{\\mathbf{j}}", options: "m"},
//    {trigger: ":k", replacement: "\\hat{\\mathbf{k}}", options: "m"},
//    {trigger: ":x", replacement: "\\hat{\\mathbf{x}}", options: "m"},
//    {trigger: ":y", replacement: "\\hat{\\mathbf{y}}", options: "m"},
//    {trigger: ":z", replacement: "\\hat{\\mathbf{z}}", options: "m"},

    // Environments
    {trigger: "pmat", replacement: "\\begin{pmatrix}\n$0\n\\end{pmatrix}", options: "m"},
    {trigger: "bmat", replacement: "\\begin{bmatrix}\n$0\n\\end{bmatrix}", options: "m"},
    {trigger: "Bmat", replacement: "\\begin{Bmatrix}\n$0\n\\end{Bmatrix}", options: "m"},
    {trigger: "vmat", replacement: "\\begin{vmatrix}\n$0\n\\end{vmatrix}", options: "m"},
    {trigger: "Vmat", replacement: "\\begin{Vmatrix}\n$0\n\\end{Vmatrix}", options: "m"},
    {trigger: "cases", replacement: "\\begin{cases}$0 & $1\\\\ $2 & $3\\end{cases}", options: "m"},
    {trigger: "/align", replacement: "$$\n\\begin{align*}\n$0\n\\end{align*}\n$$", options: "tA"},
    {trigger: "array", replacement: "\\begin{array}\n$0\n\\end{array}", options: "m"},
    {trigger: "matrix", replacement: "\\begin{matrix}\n$0\n\\end{matrix}", options: "m"},

    // Brackets
    {trigger: "{", replacement: "{${VISUAL}}", options: "mA"},
    {trigger: "(", replacement: "(${VISUAL})", options: "mA"},
    {trigger: "[", replacement: "[${VISUAL}]", options: "mA"},
    {trigger: "|", replacement: "|${VISUAL}|", options: "mA"},
    {trigger: "(", replacement: "($0)$1", options: "mAw"},
    {trigger: "{", replacement: "{$0}$1", options: "mAw"},
    {trigger: "\\{", replacement: "\\{$0\\}$1", options: "mAw"},
    {trigger: "[", replacement: "[$0]$1", options: "mAw"},
    {trigger: "|", replacement: "|$0|$1", options: "mAw"},
    {trigger: "\\|", replacement: "\\|$0\\|$1", options: "mAw"},
    {trigger: "lr(", replacement: "\\left( $0 \\right) $1", options: "mA"},
    {trigger: "lr|", replacement: "\\left| $0 \\right| $1", options: "mA"},
    {trigger: "lrr|", replacement: "\\left\\| $0 \\right\\| $1", options: "mA"},
    {trigger: "lr{", replacement: "\\left\\{ $0 \\right\\} $1", options: "mA"},
    {trigger: "lr[", replacement: "\\left[ $0 \\right] $1", options: "mA"},
    {trigger: "/<>", replacement: "\\tuple{ $0 } $1", options: "mA"},

    // Misc
    {trigger: "fams", replacement: "\\{$0\\}_{$1}", options: "m"},
    {trigger: "([lr]*)fam ([^\s]*) (.*)", replacement: (triggerMatches) => {
        let bracket1 = triggerMatches[1] == '' ? '\\{' : '\\left\\{';
        let bracket2 = triggerMatches[1] == '' ? '\\}' : '\\right\\}';
        let ind_var = triggerMatches[2] == '' ? 'i' : triggerMatches[2];
        let ind_set = triggerMatches[3] == '' ? 'I' : triggerMatches[3];

        return bracket1 + ' $0 ' + bracket2 + '_{' + ind_var + ' \\in ' + ind_set + '}$1';
    }, options: "mr"},
    {trigger: "([lr]*)fam ([^\s]*)(${REL}) (.*)", replacement: (triggerMatches) => {
        let bracket1 = triggerMatches[1] == 'lr' ? '\\left\\{' : '\\{';
        let bracket2 = triggerMatches[1] == 'lr' ? '\\right\\{' : '\\}';
        let ind_var = triggerMatches[2] == '' ? 'i' : triggerMatches[2];
        let ind_set = triggerMatches[4] == '' ? 'I' : triggerMatches[4];

        return bracket1 + ' $0 ' + bracket2 + '_{' + ind_var + ' ' + triggerMatches[3] + ' ' + ind_set + '}$1';
    }, options: "mr"},
    {trigger: "DKL", replacement: "D_{\\mathrm{KL}}($0\\|)", options: "m"},
    {trigger: "||", replacement: "\\mid ", options: "m"},
    {trigger: "/set", replacement: "\\{$0\\}$1", options: "mA"},
    {trigger: "([vdl])dts", replacement: "\\[[0]]dots", options: "rmA"},
    {trigger: "/ee", replacement: "\\exists ", options: "mA"},
    {trigger: "/aa", replacement: "\\forall ", options: "mA"},
    {trigger: "vno", replacement: "\\varnothing ", options: "mA"},
    {trigger: "inf(ty)*", replacement: "\\infty", options: "rm"},
    {trigger: "([lr]*)seq ([^=\s]+)=([^=\s]+) (.*)", replacement: (triggerMatches) => {
        let bracket1 = triggerMatches[1] == '' ? '\\{' : '\\left\\{';
        let bracket2 = triggerMatches[1] == '' ? '\\}' : '\\right\\{';
        let ind_var = triggerMatches[2];
        let bot_ind = triggerMatches[3] == '-f' ? '-\\infty' : triggerMatches[3];
        let top_ind = /f?/.test(triggerMatches[4]) ? '\\infty' : triggerMatches[4];

        return bracket1 + ' $0 ' + bracket2 + '_{' + ind_var + '=' + bot_ind + '}^{' + top_ind +'}$1';
    }, options: "rm"},

    // Greek letters
    {trigger: "@a", replacement: "\\alpha", options: "mA"},
    {trigger: "@A", replacement: "\\alpha", options: "mA"},
    {trigger: "@b", replacement: "\\beta", options: "mA"},
    {trigger: "@B", replacement: "\\beta", options: "mA"},
    {trigger: "@c", replacement: "\\chi", options: "mA"},
    {trigger: "@C", replacement: "\\chi", options: "mA"},
    {trigger: "@f", replacement: "\\phi", options: "mA"},
    {trigger: ":f", replacement: "\\varphi", options: "mA"},
    {trigger: "@F", replacement: "\\Phi", options: "mA"},
    {trigger: "@g", replacement: "\\gamma", options: "mA"},
    {trigger: "@G", replacement: "\\Gamma", options: "mA"},
    {trigger: "@d", replacement: "\\delta", options: "mA"},
    {trigger: "@D", replacement: "\\Delta", options: "mA"},
    {trigger: "@e", replacement: "\\epsilon", options: "mA"},
    {trigger: "@E", replacement: "\\epsilon", options: "mA"},
    {trigger: ":e", replacement: "\\varepsilon", options: "mA"},
    {trigger: "@z", replacement: "\\zeta", options: "mA"},
    {trigger: "@Z", replacement: "\\zeta", options: "mA"},
    {trigger: "@t", replacement: "\\theta", options: "mA"},
    {trigger: "@T", replacement: "\\Theta", options: "mA"},
    {trigger: "@k", replacement: "\\kappa", options: "mA"},
    {trigger: "@K", replacement: "\\kappa", options: "mA"},
    {trigger: "@l", replacement: "\\lambda", options: "mA"},
    {trigger: "@L", replacement: "\\Lambda", options: "mA"},
    {trigger: "@m", replacement: "\\mu", options: "mA"},
    {trigger: "@M", replacement: "\\mu", options: "mA"},
    {trigger: "@n", replacement: "\\nu", options: "mA"},
    {trigger: "@r", replacement: "\\rho", options: "mA"},
    {trigger: "@R", replacement: "\\rho", options: "mA"},
    {trigger: "@s", replacement: "\\sigma", options: "mA"},
    {trigger: "@S", replacement: "\\Sigma", options: "mA"},
//    {trigger: "ow", replacement: "\\omega", options: "mA"},
    {trigger: "@o", replacement: "\\omega", options: "mA"},
    {trigger: "@O", replacement: "\\Omega", options: "mA"},
    {trigger: "@h", replacement: "\\eta", options: "mA"},
    {trigger: "@i", replacement: "\\iota", options: "mA"},
    {trigger: "@x", replacement: "\\xi", options: "mA"},
    {trigger: "@X", replacement: "\\Xi", options: "mA"},
    {trigger: "@p", replacement: "\\psi", options: "mA"},
    {trigger: "@P", replacement: "\\Psi", options: "mA"},
    {trigger: "@u", replacement: "\\upsilon", options: "mA"},
    {trigger: "@U", replacement: "\\Upsilon", options: "mA"},
//    {trigger: "([^\\\\])(${GREEK}|${SYMBOL})", replacement: "[[0]]\\[[1]]", options: "rmA", description: "Add backslash before greek letters and symbols"},

    // Hebrew Letters
    {trigger: "#[nN]", replacement: "\\aleph", options: "mA"},
    {trigger: "#[bB]", replacement: "\\beth", options: "mA"},

    // Misc. Again
    {trigger: "/usc", replacement: "U.S. Const. ${0:art}. $1, $\\S$2$", options: "t", description: "US Constitution citation"},
    {trigger: "/rdet", replacement: "``````ad-rem\ntitle:R Details\n\n```r\n$0\n```\n``````\n$1", options: "t", description: "R Details admonition"},
]