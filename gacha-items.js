const gachaItems = {
    "3": {
        "A": {
            "$\\displaystyle \\lim_{n \\to \\infty}\\dfrac{2n+11}{n^{2}+2n+4}$": "<p>　$\\displaystyle \\lim_{n \\to \\infty}\\dfrac{2n+11}{n^{2}+2n+4}$</p><p>$\\displaystyle =\\lim_{n \\to \\infty}\\dfrac{2+\\dfrac{11}{n}}{n+2+\\dfrac{4}{n}}$</p><p>$=\\boldsymbol{0}$</p>",
    // 普通，サイトの例題
    "$\\displaystyle \\lim_{n \\to \\infty}\\dfrac{(n+3)(4n+1)}{n^{2}-5n+1}$": "<p>　$\\displaystyle \\lim_{n \\to \\infty}\\dfrac{(n+3)(4n+1)}{n^{2}-5n+1}$</p><p>$=\\displaystyle \\lim_{n \\to \\infty}\\dfrac{\\left(1+\\dfrac{3}{n}\\right)\\left(4+\\dfrac{1}{n}\\right)}{1-\\dfrac{5}{n}+\\dfrac{1}{n^{2}}}$</p><p>$=\\boldsymbol{4}$</p>",
    // 普通，サイトの例題
    "$\\displaystyle \\lim_{n \\to \\infty}\\dfrac{_{2n+2}{\\rm C}_{n+1}}{_{2n}{\\rm C}_{n}}$": "<p>　$\\displaystyle \\lim_{n \\to \\infty}\\dfrac{_{2n+2}{\\rm C}_{n+1}}{_{2n}{\\rm C}_{n}}$</p><p>$\\displaystyle =\\lim_{n \\to \\infty}\\dfrac{(2n+2)!}{(n+1)!(n+1!)}\\cdot \\dfrac{n!n!}{2n!}$</p><p>$\\displaystyle =\\lim_{n \\to \\infty}\\dfrac{(2n+2)(2n+1)}{(n+1)^{2}}$</p><p>$\\displaystyle =\\lim_{n \\to \\infty}\\dfrac{2\\left(2+\\dfrac{1}{n}\\right)}{1+\\dfrac{1}{n}}$</p>",
    // 普通，2023関西大
    "$\\displaystyle \\lim_{n \\to \\infty}(\\sqrt{n^{2}+5n-3}-\\sqrt{n^{2}+1})$": "<p>　$\\displaystyle \\lim_{n \\to \\infty}(\\sqrt{n^{2}+5n-3}-\\sqrt{n^{2}+1})$</p><p>$\\displaystyle =\\lim_{n \\to \\infty}(\\sqrt{n^{2}+5n-3}-\\sqrt{n^{2}+1})\\cdot\\dfrac{\\sqrt{n^{2}+5n-3}+\\sqrt{n^{2}+1}}{\\sqrt{n^{2}+5n-3}+\\sqrt{n^{2}+1}}$</p><p>$\\displaystyle =\\lim_{n \\to \\infty}\\dfrac{(n^{2}+5n-3)-(n^{2}+1)}{\\sqrt{n^{2}+5n-3}+\\sqrt{n^{2}+1}}$</p><p>$\\displaystyle =\\lim_{n \\to \\infty}\\dfrac{5n-4}{\\sqrt{n^{2}+5n-3}+\\sqrt{n^{2}+1}}$</p><p>$\\displaystyle =\\lim_{n \\to \\infty}\\dfrac{5-\\dfrac{4}{n}}{\\sqrt{1+\\dfrac{5}{n}-\\dfrac{3}{n^2}}+\\sqrt{1+\\dfrac{1}{n^2}}}$</p><p>$=\\dfrac{5}{1+1}=\\boldsymbol{\\dfrac{5}{2}}$</p>",
    // 普通，サイトの例題
    "$\\displaystyle \\lim_{n \\to \\infty}\\dfrac{1+2+\\cdots+n}{n^2}$": "<p>　$\\displaystyle \\lim_{n \\to \\infty}\\dfrac{1+2+\\cdots+n}{n^2}$</p><p>$\\displaystyle =\\lim_{n \\to \\infty}\\dfrac{\\dfrac{1}{2}n(n+1)}{n^2}$</p><p>$\\displaystyle =\\lim_{n \\to \\infty}\\dfrac{1}{2}\\left(1+\\dfrac{1}{n}\\right)$</p><p>$=\\boldsymbol{\\dfrac{1}{2}}$</p>",
    //普通の極限，ごよ１
    "$\\displaystyle \\lim_{n \\to \\infty}\\left(\\dfrac{3n^{2}+n+1}{n+1}-3n\\right)$": "<p>　$\\displaystyle \\lim_{n \\to \\infty}\\left(\\dfrac{3n^{2}+n+1}{n+1}-3n\\right)$</p><p>$\\displaystyle =\\lim_{n \\to \\infty}\\dfrac{-2n+1}{n+1}$</p><p>$\\displaystyle =\\lim_{n \\to \\infty}\\dfrac{-2+\\dfrac{1}{n}}{1+\\dfrac{1}{n}}$</p><p>$=\\boldsymbol{-2}$</p>",
    //普通，ごよ２
    "$\\displaystyle \\lim_{n \\to \\infty}\\dfrac{1}{\\sqrt{n^{2}+n}-n}$": "<p>　$\\displaystyle \\lim_{n \\to \\infty}\\dfrac{1}{\\sqrt{n^{2}+n}-n}$</p><p>$\\displaystyle =\\lim_{n \\to \\infty}\\dfrac{1}{\\sqrt{n^{2}+n}-n}\\cdot \\dfrac{\\sqrt{n^{2}+n}+n}{\\sqrt{n^{2}+n}+n}$</p><p>$\\displaystyle =\\lim_{n \\to \\infty}\\dfrac{\\sqrt{n^{2}+n}+n}{n}$</p><p>$\\displaystyle =\\lim_{n \\to \\infty}\\sqrt{1+\\dfrac{1}{n}}+1$</p><p>$=\\boldsymbol{2}$</p>",
    //有理化，ごよ３
    "$\\displaystyle \\lim_{n \\to \\infty}\\dfrac{\\sqrt{n+1}-\\sqrt{n-3}}{\\sqrt{n+2}-\\sqrt{n-2}}$": "<p>　$\\displaystyle \\lim_{n \\to \\infty}\\dfrac{\\sqrt{n+1}-\\sqrt{n-3}}{\\sqrt{n+2}-\\sqrt{n-2}}$</p><p>$\\displaystyle =\\lim_{n \\to \\infty}\\dfrac{\\sqrt{n+1}-\\sqrt{n-3}}{\\sqrt{n+2}-\\sqrt{n-2}}\\cdot\\dfrac{\\sqrt{n+2}+\\sqrt{n-2}}{\\sqrt{n+2}+\\sqrt{n-2}}\\cdot\\dfrac{\\sqrt{n+1}+\\sqrt{n-3}}{\\sqrt{n+1}+\\sqrt{n-3}}$</p><p>$\\displaystyle =\\lim_{n \\to \\infty}\\dfrac{4}{4}\\cdot\\dfrac{\\sqrt{n+2}+\\sqrt{n-2}}{\\sqrt{n+1}+\\sqrt{n-3}}$</p><p>$\\displaystyle =\\lim_{n \\to \\infty}\\dfrac{\\sqrt{1+\\dfrac{2}{n}}+\\sqrt{1-\\dfrac{2}{n}}}{\\sqrt{1+\\dfrac{1}{n}}+\\sqrt{1-\\dfrac{3}{n}}}$</p><p>$=\\boldsymbol{1}$</p>",
    //有理化，Z会M3JA2
    "$\\displaystyle \\lim_{n \\to \\infty} \\log_3 \\dfrac{\\sqrt[n]{7}}{5^n}$": "<p>　$\\displaystyle \\lim_{n \\to \\infty} \\log_3 \\dfrac{\\sqrt[n]{7}}{5^n}$</p><p>$\\displaystyle =\\lim_{n \\to \\infty} \\left(\\log_3 \\sqrt[n]{7} -\\log_3{5^n}\\right)$</p><p>$\\displaystyle =\\lim_{n \\to \\infty} \\left(\\dfrac{1}{n}\\log_3 7 -n\\log_3 5\\right)$</p><p>$=\\boldsymbol{-\\infty}$</p>",
    //対数，ごよ４
    "$\\displaystyle \\lim_{n \\to \\infty}\\dfrac{(n+1)+(n+2)+\\cdots+2n}{1+2+\\cdots+n}$": "<p>　$\\displaystyle \\lim_{n \\to \\infty}\\dfrac{(n+1)+(n+2)+\\cdots+2n}{1+2+\\cdots+n}$</p><p>$\\displaystyle =\\lim_{n \\to \\infty}\\dfrac{(n+1+2n)n\\cdot \\dfrac{1}{2}}{\\sum\\limits_{k=1}^{n}k}$</p><p>$\\displaystyle =\\lim_{n \\to \\infty}\\dfrac{3n+1}{n+1}$</p><p>$\\displaystyle =\\lim_{n \\to \\infty}\\dfrac{3+\\dfrac{1}{n}}{1+\\dfrac{1}{n}}$</p><p>$=\\boldsymbol{3}$</p>",
    //和，ごよ５，アプリ版専用
    "$\\displaystyle \\lim_{n \\to \\infty}\\dfrac{\\sin n}{n}$": "<p>Since $-1\\leqq \\sin n \\leqq 1$</p><p style=\"text-align: center\">$-\\dfrac{1}{n}\\leqq \\dfrac{\\sin n}{n} \\leqq \\dfrac{1}{n}$</p><p>$\\displaystyle \\lim_{n \\to \\infty}\\left(-\\dfrac{1}{n}\\right)=\\lim_{n \\to \\infty}\\dfrac{1}{n}=0$ より</p><p style=\"text-align: center\">$\\displaystyle \\lim_{n \\to \\infty}\\dfrac{\\sin n}{n}=\\boldsymbol{0}$</p>",
    // はさみうち，サイトの例題
    "$\\displaystyle \\lim_{n \\to \\infty}\\left(\\dfrac{1}{n^{2}+1}+\\dfrac{1}{n^{2}+2}+\\cdots+\\dfrac{1}{n^{2}+n}\\right)$ ": "<p>$\\displaystyle A_n=\\dfrac{1}{n^{2}+1}+\\dfrac{1}{n^{2}+2}+\\cdots+\\dfrac{1}{n^{2}+n}$ とおく．</p><p>$\\displaystyle 0 &lt; \\dfrac{1}{n^{2}+k} &lt; \\dfrac{1}{n^2}$ $(k=1,2,\\cdots,n)$ だから</p><p>$\\displaystyle 0 &lt; A_n &lt; \\dfrac{1}{n^2}+\\dfrac{1}{n^2}+\\cdots+\\dfrac{1}{n^2}=\\dfrac{1}{n^2}\\cdot n=\\dfrac{1}{n}$</p><p>$\\displaystyle \\lim_{n \\to \\infty}\\dfrac{1}{n}=0$ より $\\displaystyle \\lim_{n \\to \\infty}A_n=\\boldsymbol{0}$</p>",
    //はさみうち，ごよ６
    "$\\displaystyle \\lim_{n \\to \\infty}\\dfrac{2(-3)^{n}+7\\cdot5^{n+1}}{5\\cdot3^{n+1}-2\\cdot 5^{n}}$": "<p>　$\\displaystyle \\lim_{n \\to \\infty}\\dfrac{2(-3)^{n}+7\\cdot5^{n+1}}{5\\cdot3^{n+1}-2\\cdot 5^{n}}$</p><p>$\\displaystyle =\\lim_{n \\to \\infty}\\dfrac{2\\left(-\\dfrac{3}{5}\\right)^{n}+35}{15\\left(\\dfrac{3}{5}\\right)^{n}-2}$</p><p>$=\\boldsymbol{-\\dfrac{35}{2}}$</p>",
    // 無限等比数列，サイトの例題
    "$\\displaystyle \\lim_{n \\to \\infty}\\{5^{n}-(-4)^n\\}$": "<p>　$\\displaystyle \\lim_{n \\to \\infty}\\{5^{n}-(-4)^n\\}$</p><p>$\\displaystyle =\\lim_{n \\to \\infty}5^{n} \\left\\{1- \\left( -\\dfrac{4}{5} \\right)^n \\right\\}$</p><p>$=\\boldsymbol{\\infty}$</p>",
    //等比，ごよ７
    "$\\displaystyle \\lim_{n \\to \\infty}\\dfrac{x^{n}+x+1}{x^{2n}+1}$　$( \\ x \\ is a real number \\ )$": "<p>Set $\\displaystyle f(x)=\\dfrac{x^{n}+x+1}{x^{2n}+1}$</p>(ⅰ) When $|x|&lt;1$</p><p>　$\\displaystyle \\lim_{n \\to \\infty}f(x)$</p><p>$\\displaystyle =\\dfrac{0+x+1}{0+1}=x+1$</p><br><p>(ⅱ) $|x|&gt;1$ のとき</p><p>　$\\displaystyle \\lim_{n \\to \\infty}f(x)$</p><p>$\\displaystyle =\\lim_{n \\to \\infty}\\dfrac{\\dfrac{1}{x^{n}}+\\dfrac{x+1}{x^{2n}}}{1+\\dfrac{1}{x^{2n}}}=0$</p><br><p>(ⅲ) $x=1$ のとき</p><p>　$\\displaystyle \\lim_{n \\to \\infty}f(x)=\\dfrac{3}{2}$</p><br><p>(ⅳ) $x=-1$ のとき</p><p>分子の $x^{n}$ が振動するので定義されない．</p><p>以上より</p><p style=\"text-align: center\">$\\displaystyle \\lim_{n \\to \\infty}f(x)=\\begin{cases} \\boldsymbol{x+1 \\ \\ \\ (-1&lt; x &lt; 1)} \\\\ \\boldsymbol{0 \\ \\ \\ (x&lt;-1，1&lt;x)} \\\\ \\boldsymbol{\\dfrac{3}{2} \\ \\ \\ (x=1)}\\end{cases}$</p>",
    // 無限等比数列，サイトの例題
    "$\\displaystyle \\lim_{n \\to \\infty}\\dfrac{x^{2n+1}-1}{x^{2n}+1}$　$( \\ x \\ is a real number \\ )$": "<p>Set $\\displaystyle f(x)=\\dfrac{x^{2n+1}-1}{x^{2n}+1}$.</p><p>(i) When $ |x| < 1$</p><p>　$\\displaystyle \\lim_{n \\to \\infty}f(x)=\\dfrac{0-1}{0+1}=-1$</p><p>(ii) $ |x| > 1$ のとき</p><p>　$\\displaystyle \\lim_{n \\to \\infty}f(x)=\\lim_{n \\to \\infty}\\dfrac{x-\\dfrac{1}{x^{2n}}}{1+\\dfrac{1}{x^{2n}}}=x$</p><p>(iii) $ x=1 $ のとき</p><p>　$\\displaystyle \\lim_{n \\to \\infty}f(x)=\\dfrac{1-1}{1+1}=0$</p><p>(iv) $ x=-1 $ のとき</p><p>　$\\displaystyle \\lim_{n \\to \\infty}f(x)=\\dfrac{-1-1}{1+1}=-1$</p><p>以上より</p><p style=\"text-align: center\">$\\displaystyle \\lim_{n \\to \\infty}f(x)=\\begin{cases} \\boldsymbol{-1 \\ \\ \\ (-1 \\leqq x < 1)} \\\\ \\boldsymbol{x \\ \\ \\ (x &lt; -1，1&lt;x)} \\\\ \\boldsymbol{0 \\ \\ \\ (x=1)}\\end{cases}$</p>",
    //等比場合分け，ごよ８
    "$\\displaystyle \\lim_{n \\to \\infty}\\sum_{k=1}^{n}\\dfrac{1}{(2k+1)(2k+3)}$": "<p>　$\\displaystyle \\lim_{n \\to \\infty}\\sum_{k=1}^{n}\\dfrac{1}{(2k+1)(2k+3)}$</p><p>$\\displaystyle =\\lim_{n \\to \\infty}\\sum_{k=1}^{n}\\dfrac{1}{2}\\left(\\dfrac{1}{2k+1}-\\dfrac{1}{2k+3}\\right)$</p><p>$\\displaystyle =\\lim_{n \\to \\infty}\\dfrac{1}{2}\\sum_{k=1}^{n}\\left(\\dfrac{1}{2k+1}-\\dfrac{1}{2k+3}\\right)$</p><p>$\\displaystyle =\\lim_{n \\to \\infty}\\dfrac{1}{2}\\left\\{\\left(\\dfrac{1}{3}-\\dfrac{1}{5}\\right)+\\left(\\dfrac{1}{5}-\\dfrac{1}{7}\\right)+\\cdots+\\left(\\dfrac{1}{2n+1}-\\dfrac{1}{2n+3}\\right)\\right\\}$</p><p>$\\displaystyle =\\lim_{n \\to \\infty}\\dfrac{1}{2}\\left(\\dfrac{1}{3}-\\dfrac{1}{2n+3}\\right)$</p><p>$=\\boldsymbol{\\dfrac{1}{6}}$</p>",
    // 無限級数，サイトの例題
    "$\\displaystyle \\lim_{n \\to \\infty}\\sum_{k=1}^{n}\\left(\\dfrac{1}{3^{k-1}}-\\dfrac{1}{4^{k}}\\right)$": "<p>　$\\displaystyle \\lim_{n \\to \\infty}\\sum_{k=1}^{n}\\left(\\dfrac{1}{3^{k-1}}-\\dfrac{1}{4^{k}}\\right)$</p><p>$=\\dfrac{1}{1-\\dfrac{1}{3}}-\\dfrac{\\dfrac{1}{4}}{1-\\dfrac{1}{4}}$</p><p>$\\displaystyle =\\dfrac{3}{2}-\\dfrac{1}{3}=\\boldsymbol{\\dfrac{7}{6}}$</p>",
    // 無限級数，サイトの例題
    "$\\displaystyle \\lim_{n \\to \\infty}\\sum_{k=1}^{n}\\left\\{2\\left(-\\dfrac{2}{3}\\right)^{k-1}+3\\left(\\dfrac{1}{4}\\right)^{k-1}\\right\\}$": "<p>　$\\displaystyle \\lim_{n \\to \\infty}\\sum_{k=1}^{n}\\left\\{2\\left(-\\dfrac{2}{3}\\right)^{k-1}+3\\left(\\dfrac{1}{4}\\right)^{k-1}\\right\\}$</p><p>$\\displaystyle =\\dfrac{2}{1- \\left(-\\dfrac{2}{3}\\right) }+\\dfrac{3}{1-\\dfrac{1}{4}}$</p><p>$\\displaystyle =\\dfrac{6}{5}+4$</p><p>$\\displaystyle =\\boldsymbol{\\dfrac{26}{5}}$</p>",
    //等比級数，ごよ９
    "$\\displaystyle \\lim_{x \\to 2}\\dfrac{x^{2}-5x+6}{x-2}$": "<p>　$\\displaystyle \\lim_{x \\to 2}\\dfrac{(x-2)(x-3)}{x-2}$</p><p>$\\displaystyle =\\lim_{x \\to 2}(x-3)$</p><p>$=\\boldsymbol{-1}$</p>",
    // 関数の極限，サイトの例題
    "$\\displaystyle \\lim_{x \\to 3}\\dfrac{\\sqrt{x+13}-4}{x-3}$": "<p>　$\\displaystyle \\lim_{x \\to 3}\\dfrac{\\sqrt{x+13}-4}{x-3}\\cdot\\dfrac{\\sqrt{x+13}+4}{\\sqrt{x+13}+4}$</p><p>$\\displaystyle =\\lim_{x \\to 3}\\dfrac{x-3}{(x-3)(\\sqrt{x+13}+4)}$</p><p>$\\displaystyle =\\lim_{x \\to 3}\\dfrac{1}{\\sqrt{x+13}+4}$</p><p>$\\displaystyle =\\boldsymbol{\\dfrac{1}{8}}$</p>",
    // 関数の極限，サイトの例題
    "$\\displaystyle \\lim_{x \\to -\\infty}(\\sqrt{x^{2}+5x}+x)$": "<p>　$\\displaystyle \\lim_{x \\to -\\infty}(\\sqrt{x^{2}+5x}+x)$</p><p>$\\displaystyle =\\lim_{x \\to -\\infty}(\\sqrt{x^{2}+5x}+x)\\cdot \\dfrac{\\sqrt{x^{2}+5x}-x}{\\sqrt{x^{2}+5x}-x}$</p><p>$\\displaystyle =\\lim_{x \\to -\\infty}\\dfrac{5x}{\\sqrt{x^{2}+5x}-x}$</p><p>$\\displaystyle =\\lim_{x \\to -\\infty}\\dfrac{5x}{\\sqrt{x^{2}}\\sqrt{1+\\dfrac{5}{x}}-x}$</p><p>$\\displaystyle =\\lim_{x \\to -\\infty}\\dfrac{5x}{|x|\\sqrt{1+\\dfrac{5}{x}}-x}$</p><p>$\\displaystyle =\\lim_{x \\to -\\infty}\\dfrac{5x}{-x\\sqrt{1+\\dfrac{5}{x}}-x}$</p><p>$\\displaystyle =\\lim_{x \\to -\\infty}\\dfrac{5}{-\\sqrt{1+\\dfrac{5}{x}}-1}$</p><p>$\\displaystyle =\\boldsymbol{-\\dfrac{5}{2}}$</p><p><b style=\"color: black\">別解</b></p><p>　$\\displaystyle \\lim_{x \\to -\\infty}(\\sqrt{x^{2}+5x}+x)$</p><p>$\\displaystyle =\\lim_{t \\to \\infty}(\\sqrt{t^{2}-5t}-t)$　$(t=-x)$</p><p>$\\displaystyle =\\lim_{t \\to \\infty}(\\sqrt{t^{2}-5t}-t)\\cdot \\dfrac{\\sqrt{t^{2}-5t}+t}{\\sqrt{t^{2}-5t}+t}$</p><p>$\\displaystyle =\\lim_{t \\to \\infty}\\dfrac{-5t}{\\sqrt{t^{2}-5t}+t}$</p><p>$\\displaystyle =\\lim_{t \\to \\infty}\\dfrac{-5}{\\sqrt{1-\\dfrac{5}{t}}+1}$</p><p>$\\displaystyle =\\boldsymbol{-\\dfrac{5}{2}}$</p>",
    // -∞有理化，サイトの例題
    "$\\displaystyle \\lim_{x \\to -\\infty} \\dfrac{4^x}{3^{x}+2^{x}}$": "<p>　$\\displaystyle \\lim_{x \\to -\\infty} \\dfrac{4^x}{3^x+2^x}$</p><p>$\\displaystyle =\\lim_{x \\to -\\infty} \\dfrac{2^x}{\\left(\\dfrac{3}{2}\\right)^{x}+1}$</p><p>$\\displaystyle =\\dfrac{0}{0+1}$</p><p>$=\\boldsymbol{0}$</p>",
    //-∞，ごよ１４
    "$\\displaystyle \\lim_{x \\to -\\infty} \\left(3x+1+\\sqrt{9x^2+1}\\right)$": "<p>　$\\displaystyle \\lim_{x \\to -\\infty} \\left(3x+1+\\sqrt{9x^2+1}\\right)$</p><p>$\\displaystyle =\\lim_{x \\to -\\infty} \\dfrac{(3x+1)^2-(9x^2+1)}{3x+1-\\sqrt{9x^2+1}}$</p><p>$\\displaystyle =\\lim_{x \\to -\\infty} \\dfrac{6x}{3x+1+x\\sqrt{9+\\dfrac{1}{x^2}}}$</p><p>$\\displaystyle =\\lim_{x \\to -\\infty} \\dfrac{6}{3+\\dfrac{1}{x}+\\sqrt{9+\\dfrac{1}{x^2}}}$</p><p>$\\displaystyle =\\dfrac{6}{3+\\sqrt{9}}$</p><p>$\\displaystyle =\\boldsymbol{1}$</p><p><b style=\"color: black\">別解</b></p><p>　$\\displaystyle \\lim_{x \\to -\\infty} \\left(3x+1+\\sqrt{9x^2+1}\\right)$</p><p>$\\displaystyle =\\lim_{t \\to \\infty} \\left(-3t+1+\\sqrt{9t^2+1}\\right)　(t=-x)$</p><p>$\\displaystyle =\\lim_{t \\to \\infty} \\dfrac{(-3t+1)^2-(9t^2+1)}{-3t+1-\\sqrt{9t^2+1}}$</p><p>$\\displaystyle =\\lim_{t \\to \\infty} \\dfrac{-6t}{-3t+1-\\sqrt{9t^2+1}}$</p><p>$\\displaystyle =\\lim_{t \\to \\infty} \\dfrac{-6}{-3+\\dfrac{1}{t}-\\sqrt{9+\\dfrac{1}{t^2}}}$</p><p>$\\displaystyle =\\dfrac{-6}{-3-\\sqrt{9}}$</p><p>$\\displaystyle =\\boldsymbol{1}$</p>",
    //-∞有理化，ごよ１５
    "$\\displaystyle \\lim_{x \\to -5+0}\\dfrac{x}{x+5}$": "<p>　$\\displaystyle \\lim_{x \\to -5+0}\\dfrac{x}{x+5}=\\boldsymbol{-\\infty}$</p>",
    // 関数の極限，サイトの例題
    "$\\displaystyle \\lim_{x \\to -2}\\dfrac{x^{3}+3x^{2}-4}{x^{3}+8}$": "<p>　$\\displaystyle \\lim_{x \\to -2}\\dfrac{x^{3}+3x^{2}-4}{x^{3}+8}$</p><p>$\\displaystyle =\\lim_{x \\to -2}\\dfrac{(x+2)^{2}(x-1)}{(x+2)(x^{2}-2x+4)}$</p><p>$\\displaystyle =\\lim_{x \\to -2}\\dfrac{(x+2)(x-1)}{x^{2}-2x+4}$</p><p>$\\displaystyle =\\dfrac{0 \\cdot (-3)}{12}$</p><p>$=\\boldsymbol{0}$</p>",
    //普通関数，ごよ１１
    "$\\displaystyle \\lim_{x \\to 0}\\dfrac{1}{x} \\left(\\dfrac{3}{x+3}-1\\right)$": "<p>　$\\displaystyle \\lim_{x \\to 0}\\dfrac{1}{x} \\left(\\dfrac{3}{x+3}-1\\right)$</p><p>$\\displaystyle =\\lim_{x \\to 0}\\dfrac{1}{x}\\left(\\dfrac{-x}{x+3}\\right)$</p><p>$\\displaystyle =\\lim_{x \\to 0} \\left(-\\dfrac{1}{x+3}\\right)$</p><p>$ =\\boldsymbol{-\\dfrac{1}{3}}$</p>",
    //普通関数，ごよ１２
    "$\\displaystyle \\lim_{x \\to 2}\\dfrac{-2x+4}{\\sqrt{2x}-\\sqrt{x+2}}$": "<p>　$\\displaystyle \\lim_{x \\to 2}\\dfrac{-2x+4}{\\sqrt{2x}-\\sqrt{x+2}}$</p><p>$\\displaystyle =\\lim_{x \\to 2}\\dfrac{-2x+4}{2x-(x+2)} \\cdot \\left(\\sqrt{2x}+\\sqrt{x+2}\\right)$</p><p>$\\displaystyle =\\lim_{x \\to 2}\\dfrac{-2x+4}{x-2} \\cdot \\left(\\sqrt{2x}+\\sqrt{x+2}\\right)$</p><p>$\\displaystyle =(-2) \\cdot \\left(\\sqrt{4}+\\sqrt{4} \\right)$</p><p>$=\\boldsymbol{-8}$</p>",
    //有理化関数，ごよ１３
    "$\\displaystyle \\lim_{x \\to \\infty}\\{\\log_2 (8x^2+2)-2\\log_2 (x+3)\\}$": "<p>　$\\displaystyle \\lim_{x \\to \\infty}\\{\\log_2 (8x^2+2)-2\\log_2 (x+3)\\}$</p><p>$\\displaystyle =\\lim_{x \\to \\infty}\\{\\log_2 (8x^2+2)-\\log_2 (x+3)^2\\}$</p><p>$\\displaystyle =\\lim_{x \\to \\infty} \\log_2 \\dfrac{8x^2+2}{(x+3)^2}$</p><p>$\\displaystyle =\\lim_{x \\to \\infty} \\log_2 \\dfrac{8+\\dfrac{2}{x^2}}{ \\left(1+\\dfrac{3}{x}\\right)^2}$</p><p>$\\displaystyle =\\log_2 8$</p><p>$=\\boldsymbol{3}$</p>",
    //対数，ごよ１６
    "$\\displaystyle \\lim_{x \\to \\infty}\\left(\\dfrac{b}{a}x-\\dfrac{b}{a}\\sqrt{x^{2}-a^{2}}\\right)$　$( \\ a,b \\ are positive real numbers)$": "<p>　$\\displaystyle \\lim_{x \\to \\infty}\\left(\\dfrac{b}{a}x-\\dfrac{b}{a}\\sqrt{x^{2}-a^{2}}\\right)$</p><p>$\\displaystyle =\\lim_{x \\to \\infty}\\dfrac{b}{a}\\left(x-\\sqrt{x^{2}-a^{2}}\\right)$</p><p>$\\displaystyle =\\lim_{x \\to \\infty}\\dfrac{b}{a}\\left(\\dfrac{a^2}{x+\\sqrt{x^{2}-a^{2}}}\\right)$</p><p>$=\\boldsymbol{0}$</p>",
    //双曲線の漸近線，アプリ版専用
    "$\\displaystyle \\lim_{x \\to 0}\\dfrac{1-\\cos x}{x\\sin x}$": "<p>　$\\displaystyle \\lim_{x \\to 0}\\dfrac{1-\\cos x}{x\\sin x} \\cdot \\dfrac{1+\\cos x}{1+\\cos x}$</p><p>$\\displaystyle =\\lim_{x \\to 0}\\dfrac{\\sin^{2} x}{x\\sin x (1+\\cos x)}$</p><p>$\\displaystyle =\\lim_{x \\to 0}\\dfrac{\\sin x}{x}\\cdot \\dfrac{1}{1+\\cos x}$</p><p>$=1\\cdot \\dfrac{1}{2}=\\boldsymbol{\\dfrac{1}{2}}$</p>",
    // 三角関数の極限，サイトの例題
    "$\\displaystyle \\lim_{x \\to 0}\\dfrac{\\sin \\left(\\sin \\dfrac{x}{\\pi}\\right)}{\\pi x}$": "<p>　$\\displaystyle \\lim_{x \\to 0}\\dfrac{\\sin \\left(\\sin \\dfrac{x}{\\pi}\\right)}{\\pi x}$</p><p>$\\displaystyle =\\lim_{x \\to 0}\\dfrac{\\sin \\left(\\sin \\dfrac{x}{\\pi}\\right)}{\\sin \\dfrac{x}{\\pi}}\\cdot \\dfrac{\\sin \\dfrac{x}{\\pi}}{\\dfrac{x}{\\pi}}\\cdot \\dfrac{1}{\\pi^{2}}$</p><p>$=\\boldsymbol{\\dfrac{1}{\\pi^{2}}}$</p>",
    // 三角関数の極限，サイトの例題
    "$\\displaystyle \\lim_{x \\to \\frac{\\pi}{2}} \\dfrac{\\cos x}{2x-\\pi}$": "<p>　$\\displaystyle \\lim_{x \\to \\frac{\\pi}{2}} \\dfrac{\\cos x}{2x-\\pi}$</p><p>$\\displaystyle =\\lim_{t \\to 0} \\dfrac{\\cos \\left(t+\\dfrac{\\pi}{2}\\right)}{2t}　\\left(t=x-\\dfrac{\\pi}{2}\\right)$</p><p>$\\displaystyle =\\lim_{t \\to 0} \\dfrac{-\\sin t}{2t}$</p><p>$\\displaystyle =\\lim_{t \\to 0} \\left(-\\dfrac{1}{2} \\right)\\dfrac{\\sin t}{t}$</p><p>$=\\boldsymbol{-\\dfrac{1}{2}}$</p>",
    //三角関数，ごよ１８
    "$\\displaystyle \\lim_{x \\to 0} \\dfrac{\\tan 3x}{\\sin 5x}$": "<p>　$\\displaystyle \\lim_{x \\to 0} \\dfrac{\\tan 3x}{\\sin 5x}$</p><p>$\\displaystyle =\\lim_{x \\to 0} \\dfrac{\\tan 3x}{3x} \\cdot \\dfrac{5x}{\\sin 5x} \\cdot \\dfrac{3}{5}$</p><p>$\\displaystyle =\\lim_{x \\to 0} \\dfrac{\\sin 3x}{3x} \\cdot \\dfrac{1}{\\cos 3x} \\cdot\\dfrac{5x}{\\sin 5x} \\cdot \\dfrac{3}{5}$</p><p>$\\displaystyle =1 \\cdot 1 \\cdot 1 \\cdot \\dfrac{3}{5}$</p><p>$=\\boldsymbol{\\dfrac{3}{5}}$</p>",
    //三角関数，2023東京都市大，元はごよさんの問題
    "$\\displaystyle \\lim_{x \\to 0} \\dfrac{\\sin 3x-\\sin 7x}{\\sin 2x}$": "<p>　$\\displaystyle \\lim_{x \\to 0}\\dfrac{\\sin 3x-\\sin 7x}{\\sin 2x}$</p><p>$\\displaystyle =\\lim_{x \\to 0}\\left(\\dfrac{\\sin 3x}{\\sin 2x}-\\dfrac{\\sin 7x}{\\sin 2x}\\right)$</p><p>$\\displaystyle =\\lim_{x \\to 0}\\left(\\dfrac{\\sin 3x}{3x}\\cdot\\dfrac{2x}{\\sin 2x}\\cdot\\dfrac{3}{2}-\\dfrac{\\sin 7x}{7x}\\cdot\\dfrac{2x}{\\sin 2x}\\cdot\\dfrac{7}{2}\\right)$</p><p>$=1\\cdot 1\\cdot \\dfrac{3}{2}-1\\cdot 1\\cdot \\dfrac{7}{2}$</p><p>$=\\boldsymbol{-2}$</p>",
    //三角関数，2022東京都市大
    "$\\displaystyle \\lim_{n \\to \\infty}\\left(\\dfrac{1}{n+2}+\\dfrac{1}{n+4}+\\cdots+\\dfrac{1}{3n}\\right)$": "<p>　$\\displaystyle \\lim_{n \\to \\infty}\\left(\\dfrac{1}{n+2}+\\dfrac{1}{n+4}+\\cdots+\\dfrac{1}{n+2n}\\right)$</p><p>$\\displaystyle =\\lim_{n \\to \\infty}\\sum_{k=1}^{n}\\frac{1}{n+2k}$</p><p>$\\displaystyle =\\lim_{n \\to \\infty}\\frac{1}{n}\\sum_{k=1}^{n}\\frac{1}{1+2\\dfrac{k}{n}}$</p><p>$\\displaystyle =\\int_{0}^{1}\\dfrac{1}{1+2x}\\,dx$</p><p>$\\displaystyle =\\left[\\frac{1}{2}\\log(1+2x)\\right]_{0}^{1}$</p><p>$\\displaystyle =\\boldsymbol{\\frac{1}{2}\\log3}$</p>",
    // 区分求積，サイトの例題
    "$\\displaystyle \\lim_{n \\to \\infty}\\dfrac{1}{n}\\left(\\sin^{2}\\dfrac{\\pi}{4n}+\\sin^{2}\\dfrac{2\\pi}{4n}+\\cdots+\\sin^{2}\\dfrac{\\pi}{4}\\right)$": "<p>　$\\displaystyle \\lim_{n \\to \\infty}\\dfrac{1}{n}\\left(\\sin^{2}\\dfrac{\\pi}{4n}+\\sin^{2}\\dfrac{2\\pi}{4n}+\\cdots+\\sin^{2}\\dfrac{\\pi}{4}\\right)$</p><p>$\\displaystyle =\\lim_{n \\to \\infty}\\dfrac{1}{n}\\sum_{k=1}^{n}\\sin^{2}\\dfrac{k\\pi}{4n}$</p><p>$\\displaystyle =\\int_{0}^{1}\\sin^{2}\\dfrac{\\pi x}{4}\\,dx$</p><p>$\\displaystyle =\\int_{0}^{1}\\dfrac{1}{2}\\left(1-\\cos\\dfrac{\\pi x}{2}\\right)\\,dx$</p><p>$\\displaystyle =\\left[\\dfrac{1}{2}x-\\dfrac{1}{\\pi}\\sin\\dfrac{\\pi x}{2}\\right]_{0}^{1}$</p><p>$=\\boldsymbol{\\dfrac{\\pi-2}{2\\pi}}$</p>",
    // 区分求積
    "$\\displaystyle \\lim_{n \\to \\infty} \\sum\\limits_{k=1}^{n} \\sqrt{\\dfrac{n+k}{n^3}}$": "<p>　$\\displaystyle \\lim_{n \\to \\infty} \\sum\\limits_{k=1}^n  \\sqrt{\\dfrac{n+k}{n^3}}$</p><p>$\\displaystyle =\\lim_{n \\to \\infty} \\dfrac{1}{n} \\sum\\limits_{k=1}^n \\sqrt{1+\\dfrac{k}{n}}$</p><p>$\\displaystyle =\\int_{0}^{1} (1+x)^\\frac{1}{2} dx$</p><p>$\\displaystyle =\\left[\\dfrac{2}{3} (1+x)^\\frac{3}{2} \\right]^1_0$</p><p>$=\\boldsymbol{\\dfrac{2}{3}\\left(2\\sqrt{2}-1\\right)}$</p>",
    //区分求積，ごよ１９
    "$\\displaystyle \\lim_{n \\to \\infty}\\left(\\dfrac{1}{n^{2}+1^{2}}+\\dfrac{2}{n^{2}+2^{2}}+\\dfrac{3}{n^{2}+3^{2}}+\\cdots+\\dfrac{1}{2n}\\right)$": "<p>　$\\displaystyle \\lim_{n \\to \\infty}\\left(\\dfrac{1}{n^{2}+1^{2}}+\\dfrac{2}{n^{2}+2^{2}}+\\dfrac{3}{n^{2}+3^{2}}+\\cdots+\\dfrac{1}{2n}\\right)$</p><p>$\\displaystyle =\\lim_{n \\to \\infty}\\sum_{k=1}^{n}\\frac{k}{n^{2}+k^{2}}$</p><p>$\\displaystyle =\\lim_{n \\to \\infty}\\dfrac{1}{n}\\sum_{k=1}^{n}\\frac{\\dfrac{k}{n}}{1+\\left(\\dfrac{k}{n}\\right)^{2}}$</p><p>$\\displaystyle =\\int_{0}^{1}\\dfrac{x}{1+x^{2}}\\,dx$</p><p>$\\displaystyle =\\dfrac{1}{2}\\int_{0}^{1}\\dfrac{2x}{1+x^{2}}\\,dx$</p><p>$\\displaystyle =\\dfrac{1}{2}\\Bigl[\\log(1+x^{2})\\Bigr]_{0}^{1}$</p><p>$\\displaystyle =\\boldsymbol{\\dfrac{1}{2}\\log 2}$</p>",
    //区分求積，アプリ版専用
    "$\\displaystyle \\lim_{x \\to \\infty} \\dfrac{[3x]}{x}$": "<p>$3x-1 &lt; [3x] \\leqq 3x$ が成り立つ．各辺 $x$ で割ると</p><p style=\"text-align: center\">$\\dfrac{3x-1}{x} &lt; \\dfrac{[3x]}{x} \\leqq \\dfrac{3x}{x}$</p><p style=\"text-align: center\">$\\displaystyle 3-\\dfrac{1}{x} &lt; \\dfrac{[3x]}{x} \\leqq 3$</p><p>$\\displaystyle \\lim_{x \\to \\infty} \\left(3-\\dfrac{1}{x} \\right)=3$ だから $\\displaystyle \\lim_{x \\to \\infty} \\dfrac{[3x]}{x}=\\boldsymbol{3}$</p>",
    //ガウス，ごよ１７
    "$\\displaystyle \\lim_{x \\to 1}\\left(2x-[x]\\right)\\left([x]+1\\right)$": "<p>　$\\displaystyle \\lim_{x \\to 1+0}\\left(2x-[x]\\right)\\left([x]+1\\right)$</p><p>$=(2-1)(1+1)$</p><p>$=2$</p><p>　$\\displaystyle \\lim_{x \\to 1-0}\\left(2x-[x]\\right)\\left([x]+1\\right)$</p><p>$=(2-0)(0+1)$</p><p>$=2$</p><p>　$\\displaystyle \\therefore \\ \\lim_{x \\to 1}\\left(2x-[x]\\right)\\left([x]+1\\right)=\\boldsymbol{2}$</p>",
    //ガウス，片側極限
        },
        "B": {
            "$\\displaystyle \\lim_{n \\to \\infty}\\left(1-1+\\dfrac{1}{2}-\\dfrac{1}{2}+\\cdots+\\dfrac{4(-1)^{n-1}}{2n+1+(-1)^{n-1}}\\right)$": "<p>$S_{n}=1-1+\\dfrac{1}{2}-\\dfrac{1}{2}+\\cdots+\\dfrac{4(-1)^{n-1}}{2n+1+(-1)^{n-1}}$ とする．</p><p>$\\displaystyle S_{2n}=(1-1)+\\left(\\dfrac{1}{2}-\\dfrac{1}{2}\\right)+\\cdots+\\left(\\dfrac{1}{n}-\\dfrac{1}{n}\\right)=0$</p><p>$\\displaystyle S_{2n-1}=(1-1)+\\left(\\dfrac{1}{2}-\\dfrac{1}{2}\\right)+\\cdots+\\dfrac{1}{n}=\\dfrac{1}{n}$</p><p>$\\displaystyle \\lim_{n \\to \\infty}S_{2n}=0$，$\\displaystyle \\lim_{n \\to \\infty}S_{2n-1}=\\lim_{n \\to \\infty}\\dfrac{1}{n}=0$</p><p>よって $\\displaystyle \\lim_{n \\to \\infty}S_n=\\boldsymbol{0}$</p>",
    //２通りの部分和，ごよ１０
    "$\\displaystyle \\lim_{n \\to \\infty} \\sum_{k=1}^{n} \\dfrac{1}{2^{k}}\\sin \\dfrac{2k\\pi}{3}$": "<p>$\\displaystyle S_{n}=\\sum_{k=1}^{n} \\dfrac{1}{2^{k}}\\sin \\dfrac{2k\\pi}{3}$ とする</p><p>\\begin{align}S_{3n} &= \\dfrac{1}{2}\\sin \\dfrac{2\\pi}{3}+\\dfrac{1}{2^{2}}\\sin \\dfrac{4\\pi}{3}+\\dfrac{1}{2^{3}}\\sin 2\\pi 　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　\\\\[6pt]& \\quad + \\dfrac{1}{2^{4}}\\sin \\dfrac{8\\pi}{3}+\\dfrac{1}{2^{5}}\\sin \\dfrac{10\\pi}{3}+\\dfrac{1}{2^{6}}\\sin 4\\pi+\\cdots\\\\[6pt]& \\quad + \\dfrac{1}{2^{3n-2}}\\sin\\left(2n\\pi-\\dfrac{4\\pi}{3}\\right)+\\dfrac{1}{2^{3n-1}}\\sin\\left(2n\\pi-\\dfrac{2\\pi}{3}\\right)+\\dfrac{1}{2^{3n}}\\sin 2n\\pi\\\\[12pt]&= \\dfrac{1}{2}\\cdot\\dfrac{\\sqrt{3}}{2}+\\dfrac{1}{2^{2}}\\cdot\\left(-\\dfrac{\\sqrt{3}}{2}\\right)+\\dfrac{1}{2^{3}}\\cdot0\\\\[6pt]& \\quad + \\dfrac{1}{2^{4}}\\cdot\\dfrac{\\sqrt{3}}{2}+\\dfrac{1}{2^{5}}\\cdot\\left(-\\dfrac{\\sqrt{3}}{2}\\right)+\\dfrac{1}{2^{6}}\\cdot0+\\cdots\\\\[6pt]& \\quad + \\dfrac{1}{2^{3n-2}}\\cdot\\dfrac{\\sqrt{3}}{2}+\\dfrac{1}{2^{3n-1}}\\cdot\\left(-\\dfrac{\\sqrt{3}}{2}\\right)+\\dfrac{1}{2^{3n}}\\cdot0\\\\[12pt]&= \\dfrac{\\sqrt{3}}{2}\\left(\\dfrac{1}{2}+\\dfrac{1}{2^{4}}+\\cdots+\\dfrac{1}{2^{3n-2}}\\right)\\\\[6pt]& \\quad -\\dfrac{\\sqrt{3}}{2}\\left(\\dfrac{1}{2^{2}}+\\dfrac{1}{2^{5}}+\\cdots+\\dfrac{1}{2^{3n-1}}\\right)+0\\\\[12pt]\\end{align}</p><p>\\begin{align}\\lim_{n \\to \\infty} S_{3n} &= \\dfrac{\\sqrt{3}}{2}\\cdot\\dfrac{\\dfrac{1}{2}}{1-\\dfrac{1}{2^{3}}}-\\dfrac{\\sqrt{3}}{2}\\cdot\\dfrac{\\dfrac{1}{2^{2}}}{1-\\dfrac{1}{2^{3}}}+0　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　\\\\[6pt] &= \\dfrac{2\\sqrt{3}}{7}-\\dfrac{\\sqrt{3}}{7}=\\dfrac{\\sqrt{3}}{7}\\end{align}</p><p>$S_{3n-1}=S_{3n}-\\dfrac{1}{2^{3n}}\\cdot0$</p><p>$S_{3n-2}=S_{3n}-\\dfrac{1}{2^{3n}}\\cdot0-\\dfrac{1}{2^{3n-1}}\\left(-\\dfrac{\\sqrt{3}}{2}\\right)$</p><p>$\\displaystyle \\lim_{n \\to \\infty} \\dfrac{1}{2^{3n-1}}\\left(-\\dfrac{\\sqrt{3}}{2}\\right)=0$ だから</p><p>$\\displaystyle \\lim_{n \\to \\infty} S_{3n}=\\lim_{n \\to \\infty} S_{3n-1}=\\lim_{n \\to \\infty} S_{3n-2}=\\dfrac{\\sqrt{3}}{7}$ より</p><p>　$\\displaystyle \\lim_{n \\to \\infty} \\sum\\limits_{k=1}^{n} \\dfrac{1}{2^{k}}\\sin \\dfrac{2k\\pi}{3}=\\boldsymbol{\\dfrac{\\sqrt{3}}{7}}$</p>",
    //３通りの部分和，ごよ７
    "$\\displaystyle \\lim_{x\\to 0}\\left(1+3x\\right)^{\\frac{2}{x}}$": "<p>　$\\displaystyle \\lim_{x\\to 0}\\left(1+3x\\right)^{\\frac{2}{x}}$</p><p>$=\\displaystyle \\lim_{t\\to 0}\\left(1+t\\right)^{\\frac{6}{t}}$　$(t=3x)$</p><p>$=\\displaystyle \\lim_{t\\to 0}\\left\\{\\left(1+t\\right)^{\\frac{1}{t}}\\right\\}^{6}$</p><p>$=\\boldsymbol{e^{6}}$</p>",
    // eの定義，サイトの例題
    "$\\displaystyle \\lim_{n\\to \\infty}\\left(\\dfrac{2n-1}{2n}\\right)^{5n}$": "<p>　$\\displaystyle \\lim_{n\\to \\infty}\\left(\\dfrac{2n-1}{2n}\\right)^{5n}$</p><p>$=\\displaystyle \\lim_{t\\to -0}\\left(1+t\\right)^{-\\frac{5}{2t}}$　$\\left(t=-\\dfrac{1}{2n}\\right)$</p><p>$=\\displaystyle \\lim_{t\\to -0}\\left\\{\\left(1+t\\right)^{\\frac{1}{t}}\\right\\}^{-\\frac{5}{2}}$</p><p>$=\\boldsymbol{e^{-\\frac{5}{2}}}$</p>",
    // eの定義，サイトの例題
    "$\\displaystyle \\lim_{x \\to 0} (\\cos^{2} x)^{\\frac{1}{x^{2}}}$": "<p>　$\\displaystyle \\lim_{x \\to 0} (\\cos^{2} x)^{\\frac{1}{x^{2}}}$</p><p>$\\displaystyle =\\lim_{x \\to 0} (1-\\sin^{2} x)^{\\frac{1}{x^{2}}}$</p><p>$\\displaystyle =\\lim_{x \\to 0} (1-\\sin^{2} x)^{\\left(-\\frac{1}{\\sin^{2} x}\\right) \\left(-\\frac{\\sin^{2} x}{x^{2}}\\right)}$</p><p>$x \\to 0$ のとき $\\sin^{2} x \\to 0$ だから</p><p>　$\\displaystyle \\lim_{x \\to 0} (\\cos^{2} x)^{\\frac{1}{x^{2}}}=\\boldsymbol{e^{-1}}$</p>",
    //eの定義，ごよ１６
    "$\\displaystyle \\lim_{x \\to 0} \\dfrac{1}{x}\\log\\{\\log(x+e)\\}$": "<p>$f(x)=\\log\\{\\log(x+e)\\}$ とおくと</p><p>　$\\displaystyle \\lim_{x \\to 0} \\dfrac{1}{x}\\log\\{\\log(x+e)\\}$</p><p>$=\\displaystyle \\lim_{x\\to 0}\\dfrac{f(x)-f(0)}{x-0}$</p><p>$=f'(0)$　$\\left(f'(x)=\\dfrac{1}{(x+e)\\log(x+e)}\\right)$</p><p>$=\\boldsymbol{\\dfrac{1}{e}}$</p>",
    // 微分係数の定義利用
    "$\\displaystyle \\lim_{x \\to 0} \\dfrac{2^{x}-1}{x}$": "<p>$f(x)=2^{x}$ とすると $f'(x)=2^{x}\\log 2$</p><p>　$\\displaystyle \\lim_{x \\to 0} \\dfrac{2^{x}-1}{x}$</p><p>$\\displaystyle =\\lim_{x \\to 0} \\dfrac{f(x)-f(0)}{x-0}$</p><p>$=f'(0)$</p><p>$=\\boldsymbol{\\log 2}$</p>",
    //微分係数，ごよ１５
    "$\\displaystyle \\lim_{x \\to \\infty} (xe^{\\frac{1}{x}}-x-1)$": "<p>　$\\displaystyle \\lim_{x \\to \\infty} (xe^{\\frac{1}{x}}-x-1)$</p><p>$\\displaystyle =\\lim_{t \\to +0} \\left(\\dfrac{e^{t}-1}{t}-1\\right)$　$\\left(t=\\dfrac{1}{x}\\right)$</p><p>$=1-1$</p><p>$=\\boldsymbol{0}$</p>",
    // 微分係数の定義利用，置き換え，xe^{1/x}の漸近線
    "$\\displaystyle \\lim_{x \\to 0}\\dfrac{1}{x}\\int_{0}^{x}e^{t}\\cos t\\,dt$": "<p>　$\\displaystyle \\lim_{x \\to 0}\\dfrac{1}{x}\\int_{0}^{x}e^{t}\\cos t\\,dt$</p><p>$\\displaystyle =\\lim_{x \\to 0}\\dfrac{F(x)-F(0)}{x-0}$ $(f(x)=e^{x}\\cos x)$</p><p>$=f(0)$</p><p>$=\\boldsymbol{1}$</p>",
    // 微分係数の定義利用
    "$\\displaystyle \\lim_{x \\to 0}\\dfrac{\\sin 2x}{\\log_{2}(x+2)-1}$": "<p>　$\\displaystyle \\lim_{x \\to 0}\\dfrac{\\sin 2x}{\\log_{2}(x+2)-1}$</p><p>$\\displaystyle =\\lim_{x \\to 0}\\dfrac{\\sin 2x}{x}\\cdot\\dfrac{x}{\\log_{2}(x+2)-\\log_{2}2}$</p><p>$\\displaystyle =\\lim_{x \\to 0}2\\cdot\\dfrac{\\sin 2x}{2x}\\cdot\\dfrac{1}{\\dfrac{1}{x}\\log_{2}\\left(\\dfrac{x}{2}+1\\right)}$</p><p>$\\displaystyle =\\lim_{x \\to 0}2\\cdot\\dfrac{\\sin 2x}{2x}\\cdot\\dfrac{2}{\\dfrac{2}{x}\\log_{2}\\left(1+\\dfrac{x}{2}\\right)}$</p><p>$\\displaystyle =\\lim_{x \\to 0}2\\cdot\\dfrac{\\sin 2x}{2x}\\cdot\\dfrac{2}{\\log_{2}\\left(1+\\dfrac{x}{2}\\right)^{\\frac{2}{x}}}$</p><p>$=2\\cdot 1\\cdot \\dfrac{2}{\\log_{2}e}$</p><p>$=\\boldsymbol{4\\log2}$</p>",
    // 三角関数の極限，eの定義(微分係数の定義)利用，2023福島県立医大
    "$\\displaystyle \\lim_{h \\to 0} \\dfrac{(x+h)^{n}-x^{n}}{h}$　$( \\ n \\ は自然数 \\ )$": "<p>　$\\displaystyle \\lim_{h \\to 0} \\dfrac{(x+h)^{n}-x^{n}}{h}$</p><p>$\\displaystyle =\\lim_{h \\to 0} \\dfrac{x^{n}+{}_{n}\\mathrm{C}_{1}x^{n-1}h+{}_{n}\\mathrm{C}_{2}x^{n-2}h^{2}+\\cdots+h^{n}-x^{n}}{h}$</p><p>$\\displaystyle =\\lim_{h \\to 0} \\left({}_{n}\\mathrm{C}_{1}x^{n-1}+{}_{n}\\mathrm{C}_{2}x^{n-2}h+\\cdots+h^{n-1}\\right)$</p><p>$={}_{n}\\mathrm{C}_{1}x^{n-1}$</p><p>$=\\boldsymbol{nx^{n-1}}$</p><p><b style=\"color: black\">別解</b></p><p>$f(x)=x^{n}$ とおくと</p><p>　$\\displaystyle \\lim_{h \\to 0} \\dfrac{(x+h)^{n}-x^{n}}{h}$</p><p>$=\\displaystyle \\lim_{h\\to 0}\\dfrac{f(x+h)-f(x)}{h}$</p><p>$=f'(x)$</p><p>$=\\boldsymbol{nx^{n-1}}$</p>",
    //導関数の定義，ごよ１１
    "$\\displaystyle \\lim_{n \\to \\infty}\\left(\\dfrac{1}{n+1}+\\dfrac{1}{n+2}+\\cdots+\\dfrac{1}{4n}\\right)$": "<p>　$\\displaystyle \\lim_{n \\to \\infty}\\left(\\dfrac{1}{n+1}+\\dfrac{1}{n+2}+\\cdots+\\dfrac{1}{4n}\\right)$</p><p>$\\displaystyle =\\lim_{n \\to \\infty}\\sum_{k=1}^{3n}\\frac{1}{n+k}$</p><p>$\\displaystyle =\\lim_{n \\to \\infty}\\frac{1}{n}\\sum_{k=1}^{3n}\\frac{1}{1+\\dfrac{k}{n}}$</p><p>$\\displaystyle =\\int_{0}^{3}\\dfrac{1}{1+x}\\,dx$</p><p>$\\displaystyle =\\Bigl[\\log(1+x)\\Bigr]_{0}^{3}$</p><p>$\\displaystyle =\\boldsymbol{2\\log2}$</p>",
    // 区分求積，サイトの例題
    "$\\displaystyle \\lim_{n \\to \\infty}\\dfrac{\\sqrt[n]{(n+1)(n+2)\\cdots(2n)}}{n}$": "<p>$\\displaystyle A_{n}=\\dfrac{\\sqrt[n]{(n+1)(n+2)\\cdots(2n)}}{n}$ とおくと</p><p>　$\\displaystyle \\lim_{n \\to \\infty}\\log A_{n}$</p><p>$\\displaystyle =\\lim_{n \\to \\infty}\\log \\sqrt[n]{\\left(1+\\dfrac{1}{n}\\right)\\left(1+\\dfrac{2}{n}\\right)\\cdots\\left(1+\\dfrac{n}{n}\\right)}$</p><p>$\\displaystyle =\\lim_{n \\to \\infty}\\dfrac{1}{n}\\log\\left(1+\\dfrac{1}{n}\\right)\\left(1+\\dfrac{2}{n}\\right)\\cdots\\left(1+\\dfrac{n}{n}\\right)$</p><p>$\\displaystyle =\\lim_{n \\to \\infty}\\dfrac{1}{n}\\left\\{\\log \\left(1+\\dfrac{1}{n}\\right)+\\log\\left(1+\\dfrac{2}{n}\\right)+\\cdots+\\log\\left(1+\\dfrac{n}{n}\\right)\\right\\}$</p><p>$\\displaystyle =\\lim_{n \\to \\infty}\\dfrac{1}{n}\\sum_{k=1}^{n}\\log \\left(1+\\dfrac{k}{n}\\right)$</p><p>$\\displaystyle =\\int_{0}^{1}\\log(1+x)\\,dx$</p><p>$\\displaystyle =\\Bigl[(1+x)\\log(1+x)\\Bigr]_{0}^{1}-\\int_{0}^{1}(1+x)\\dfrac{1}{1+x}\\,dx$</p><p>$\\displaystyle =2\\log2-1$</p><p>$\\displaystyle =\\log\\dfrac{4}{e}$</p><p>　$\\displaystyle \\therefore \\lim_{n \\to \\infty}A_{n}=\\boldsymbol{\\dfrac{4}{e}}$</p>",
    // 区分求積log，サイトの練習
    "$\\displaystyle \\lim_{n \\to \\infty}\\left(\\dfrac{_{3n}{\\rm C}_{n}}{_{2n}{\\rm C}_{n}}\\right)^{\\frac{1}{n}}$": "<p>　$\\displaystyle \\lim_{n \\to \\infty}\\log\\left(\\dfrac{_{3n}{\\rm C}_{n}}{_{2n}{\\rm C}_{n}}\\right)^{\\frac{1}{n}}$</p><p>$\\displaystyle =\\lim_{n \\to \\infty}\\dfrac{1}{n}\\log\\left\\{\\dfrac{(3n)!}{n!(2n)!}\\cdot \\dfrac{n!n!}{(2n)!}\\right\\}$</p><p>$\\displaystyle =\\lim_{n \\to \\infty}\\dfrac{1}{n}\\log\\left\\{\\dfrac{(3n)!n!}{(2n)!(2n)!}\\right\\}$</p><p>$\\displaystyle =\\lim_{n \\to \\infty}\\dfrac{1}{n}\\log\\left\\{\\dfrac{(3n)(3n-1)\\cdots(3n-(n-1))}{(2n)(2n-1)\\cdots(2n-(n-1))}\\right\\}$</p><p>$\\displaystyle =\\lim_{n \\to \\infty}\\dfrac{1}{n}\\left(\\log\\dfrac{3n}{2n}+\\log\\dfrac{3n-1}{2n-1}+\\cdots+\\log\\dfrac{3n-(n-1)}{2n-(n-1)}\\right)$</p><p>$\\displaystyle =\\lim_{n \\to \\infty}\\dfrac{1}{n}\\sum_{k=0}^{n-1}\\log\\dfrac{3n-k}{2n-k}$</p><p>$\\displaystyle =\\lim_{n \\to \\infty}\\dfrac{1}{n}\\sum_{k=0}^{n-1}\\log\\dfrac{3-\\dfrac{k}{n}}{2-\\dfrac{k}{n}}$</p><p>$\\displaystyle =\\int_{0}^{1}\\log\\dfrac{3-x}{2-x}\\,dx$</p><p>$\\displaystyle =\\int_{0}^{1}\\log(3-x)\\,dx-\\int_{0}^{1}\\log(2-x)\\,dx$</p><p>$\\displaystyle =\\int_{3}^{2}\\log s (-1)\\,ds-\\int_{2}^{1}\\log t (-1)\\,dt$ $(s=3-x，t=2-x)$</p><p>$\\displaystyle =\\int_{2}^{3}\\log x\\,dx+\\int_{2}^{1}\\log x\\,dx$</p><p>$=f(3)+f(1)-2f(2)$ $(f(x)=x\\log x-x，f'(x)=\\log x)$</p><p>$=3\\log 3-3+0-1-2(2\\log 2-2)$</p><p>$=\\log \\dfrac{27}{16}$</p><p>$\\displaystyle \\therefore \\ \\lim_{n \\to \\infty}\\left(\\dfrac{_{3n}{\\rm C}_{n}}{_{2n}{\\rm C}_{n}}\\right)^{\\frac{1}{n}}=\\boldsymbol{\\dfrac{27}{16}}$</p>",
    // 区分求積log，1988東工大
    "$\\displaystyle \\lim_{n \\to \\infty} \\dfrac{1}{n^{2}}\\left\\{\\sqrt{(2n)^{2}-1^{2}}+\\sqrt{(2n)^{2}-2^{2}}+\\cdots+\\sqrt{(2n)^{2}-(2n-1)^2}\\right\\}$": "<p>　$\\displaystyle \\lim_{n \\to \\infty} \\dfrac{1}{n^{2}}\\left\\{\\sqrt{(2n)^{2}-1^{2}}+\\sqrt{(2n)^{2}-2^{2}}+\\cdots+\\sqrt{(2n)^{2}-(2n-1)^2}\\right\\}$</p><p>$\\displaystyle =\\lim_{n \\to \\infty} \\dfrac{1}{n^{2}}\\sum\\limits_{k=1}^{2n-1}\\sqrt{(2n)^{2}-k^{2}}$</p><p>$\\displaystyle =\\lim_{n \\to \\infty} \\dfrac{1}{n}\\sum\\limits_{k=1}^{2n-1}\\sqrt{\\dfrac{4n^{2}-k^{2}}{n^{2}}}$</p><p>$\\displaystyle =\\lim_{n \\to \\infty} \\dfrac{1}{n}\\sum\\limits_{k=1}^{2n-1}\\sqrt{4-\\left(\\dfrac{k}{n}\\right)^{2}}$</p><p>$\\displaystyle =\\int_{0}^{2}\\sqrt{4-x^{2}}dx$</p><p>$\\displaystyle \\int_{0}^{2}\\sqrt{4-x^{2}}dx$ は、半径2の四分円の面積を表すから</p><p>（与式）$=\\dfrac{\\pi\\cdot2^{2}}{4}=\\boldsymbol{\\pi}$</p>",
    //区分求積，ごよ１４
    "$\\displaystyle \\lim_{n \\to \\infty}\\sum_{k=n+1}^{2n}\\dfrac{n}{k^{2}-2nk+2n^{2}}$": "<p>　$\\displaystyle \\lim_{n \\to \\infty}\\sum_{k=n+1}^{2n}\\dfrac{n}{k^{2}-2nk+2n^{2}}$</p><p>$\\displaystyle =\\lim_{n \\to \\infty}\\dfrac{1}{n}\\sum_{k=n+1}^{2n}\\dfrac{1}{\\left(\\dfrac{k}{n}\\right)^{2}-2\\left(\\dfrac{k}{n}\\right)+2}$</p><p>$\\displaystyle =\\int_{1}^{2}\\dfrac{1}{x^{2}-2x+2}\\,dx$</p><p>$\\displaystyle =\\int_{1}^{2}\\dfrac{1}{(x-1)^{2}+1}\\,dx$</p><p>$\\displaystyle =\\int_{0}^{\\frac{\\pi}{4}}\\dfrac{1}{\\tan^{2}\\theta+1}\\cdot\\dfrac{1}{\\cos^{2}\\theta}\\,dt$　$(\\tan\\theta=x-1)$</p><p>$=\\boldsymbol{\\dfrac{\\pi}{4}}$</p><p><b style=\"color: black\">別解</b></p><p>　$\\displaystyle \\lim_{n \\to \\infty}\\sum_{k=n+1}^{2n}\\dfrac{n}{k^{2}-2nk+2n^{2}}$</p><p>$\\displaystyle =\\lim_{n \\to \\infty}\\sum_{k=n+1}^{2n}\\dfrac{n}{(k-n)^{2}+n^{2}}$</p><p>$\\displaystyle =\\lim_{n \\to \\infty}\\sum_{k=1}^{n}\\dfrac{n}{k^{2}+n^{2}}$</p><p>$\\displaystyle =\\lim_{n \\to \\infty}\\dfrac{1}{n}\\sum_{k=1}^{n}\\dfrac{1}{\\left(\\dfrac{k}{n}\\right)^{2}+1}$</p><p>$\\displaystyle =\\int_{0}^{1}\\dfrac{1}{x^{2}+1}\\,dx$</p><p>$\\displaystyle =\\int_{0}^{\\frac{\\pi}{4}}\\dfrac{1}{\\tan^{2}\\theta+1}\\cdot\\dfrac{1}{\\cos^{2}\\theta}\\,dt$　$(\\tan\\theta=x)$</p><p>$=\\boldsymbol{\\dfrac{\\pi}{4}}$</p>",
    //区分求積1〜2の積分
    "$\\displaystyle \\lim_{n \\to \\infty}\\dfrac{1}{n^{5}}\\sum_{k=1}^{n}k(k+1)(k+2)(k+3)$": "<p>　$\\displaystyle \\sum_{k=1}^{n}k(k+1)(k+2)(k+3)$</p><p>$\\displaystyle =\\dfrac{1}{5}\\sum_{k=1}^{n}\\{k(k+1)(k+2)(k+3)(k+4)-(k-1)k(k+1)(k+2)(k+3)\\}$</p><p>$\\displaystyle =\\dfrac{1}{5}\\left\\{\\sum_{k=1}^{n}k(k+1)(k+2)(k+3)(k+4)-\\sum_{k=1}^{n}(k-1)k(k+1)(k+2)(k+3)\\right\\}$</p><p>$\\displaystyle =\\dfrac{1}{5}\\left\\{\\sum_{k=1}^{n}k(k+1)(k+2)(k+3)(k+4)-\\sum_{k=1}^{n-1}k(k+1)(k+2)(k+3)(k+4)\\right\\}$</p><p>$=\\dfrac{1}{5}n(n+1)(n+2)(n+3)(n+4)$</p><p>これより</p><p>　$\\displaystyle \\lim_{n \\to \\infty}\\dfrac{1}{n^{5}}\\sum_{k=1}^{n}k(k+1)(k+2)(k+3)$</p><p>$\\displaystyle =\\lim_{n \\to \\infty}\\dfrac{1}{5}\\left(1+\\dfrac{1}{n}\\right)\\left(1+\\dfrac{2}{n}\\right)\\left(1+\\dfrac{3}{n}\\right)\\left(1+\\dfrac{4}{n}\\right)$</p><p>$=\\boldsymbol{\\dfrac{1}{5}}$</p><p><b style=\"color: black\">別解</b></p><p>　$\\displaystyle \\lim_{n \\to \\infty}\\dfrac{1}{n^{5}}\\sum_{k=1}^{n}k(k+1)(k+2)(k+3)$</p><p>$\\displaystyle =\\lim_{n \\to \\infty}\\dfrac{1}{n^{5}}\\sum_{k=1}^{n}(k^{4}+6k^{3}+11k^{2}+6k)$</p><p>$\\displaystyle =\\lim_{n \\to \\infty}\\left\\{\\dfrac{1}{n}\\sum_{k=1}^{n}\\left(\\dfrac{k}{n}\\right)^{4}+\\dfrac{3}{2n}\\left(1+\\dfrac{1}{n}\\right)^{2}+\\dfrac{11}{6n^2}\\left(1+\\dfrac{1}{n}\\right)\\left(2+\\dfrac{1}{n}\\right)+\\dfrac{3}{n^3}\\left(1+\\dfrac{1}{n}\\right)\\right\\}$</p><p>$\\displaystyle =\\int_{0}^{1}x^{4}\\,dx$</p><p>$=\\boldsymbol{\\dfrac{1}{5}}$</p>",
    //連続自然数積の和，区分求積
    "$\\displaystyle \\lim_{n \\to \\infty} \\sum_{k=1}^{n}\\dfrac{1}{k^{3}+3k^{2}+2k}$": "<p>　$\\displaystyle \\lim_{n \\to \\infty} \\sum_{k=1}^{n}\\dfrac{1}{k^{3}+3k^{2}+2k}$</p><p>$\\displaystyle =\\lim_{n \\to \\infty} \\sum_{k=1}^{n}\\dfrac{1}{k(k+1)(k+2)}$</p><p>$\\displaystyle =\\lim_{n \\to \\infty} \\sum_{k=1}^{n}\\dfrac{1}{2}\\left\\{\\dfrac{1}{k(k+1)}-\\dfrac{1}{(k+1)(k+2)}\\right\\}$</p><p>$\\displaystyle =\\lim_{n \\to \\infty} \\dfrac{1}{2}\\left\\{\\sum_{k=1}^{n}\\dfrac{1}{k(k+1)}-\\sum_{k=1}^{n}\\dfrac{1}{(k+1)(k+2)}\\right\\}$</p><p>$\\displaystyle =\\lim_{n \\to \\infty} \\dfrac{1}{2}\\left\\{\\sum_{k=1}^{n}\\dfrac{1}{k(k+1)}-\\sum_{k=2}^{n+1}\\dfrac{1}{k(k+1)}\\right\\}$</p><p>$\\displaystyle =\\lim_{n \\to \\infty} \\dfrac{1}{2}\\left\\{\\dfrac{1}{1\\cdot 2}-\\dfrac{1}{(n+1)(n+2)}\\right\\}$</p><p>$\\displaystyle =\\boldsymbol{\\dfrac{1}{4}}$</p>",
    //2023立教大，部分分数分解
    "$\\displaystyle \\lim_{n \\to \\infty} \\sum_{k=1}^{n}\\dfrac{k}{k^{4}+k^{2}+1}$": "<p>　$\\displaystyle \\lim_{n \\to \\infty} \\sum_{k=1}^{n}\\dfrac{k}{k^{4}+k^{2}+1}$</p><p>$\\displaystyle =\\lim_{n \\to \\infty} \\sum_{k=1}^{n}\\dfrac{k}{(k^{2}+1)^{2}-k^{2}}$</p><p>$\\displaystyle =\\lim_{n \\to \\infty} \\sum_{k=1}^{n}\\dfrac{k}{(k^{2}+1-k)(k^{2}+1+k)}$</p><p>$\\displaystyle =\\lim_{n \\to \\infty} \\sum_{k=1}^{n}\\dfrac{1}{2}\\left(\\dfrac{1}{k^{2}+1-k}-\\dfrac{1}{k^{2}+1+k}\\right)$</p><p>$\\displaystyle =\\lim_{n \\to \\infty} \\sum_{k=1}^{n}\\dfrac{1}{2}\\left\\{\\dfrac{1}{(k-1)k+1}-\\dfrac{1}{k(k+1)+1}\\right\\}$</p><p>$\\displaystyle =\\lim_{n \\to \\infty} \\dfrac{1}{2}\\left\\{\\sum_{k=1}^{n}\\dfrac{1}{(k-1)k+1}-\\sum_{k=2}^{n+1}\\dfrac{1}{(k-1)k+1}\\right\\}$</p><p>$\\displaystyle =\\lim_{n \\to \\infty} \\dfrac{1}{2}\\left\\{1-\\dfrac{1}{n(n+1)+1}\\right\\}$</p><p>$=\\boldsymbol{\\dfrac{1}{2}}$</p>",
    //いつかの数検1級，部分分数分解
    "$\\displaystyle \\lim_{n \\to \\infty} \\dfrac{n}{2^{n}}$": "<p>$~0 &lt \\dfrac{n}{2^{n}}$</p><p>　$=\\dfrac{n}{(1+1)^{n}}$</p><p>　$=\\dfrac{n}{\\sum\\limits_{k=0}^{n} {}_{n}\\mathrm{C}_{k}}$</p><p>　$&lt \\dfrac{n}{\\sum\\limits_{k=0}^{2} {}_{n}\\mathrm{C}_{k}}=\\dfrac{1}{\\dfrac{1}{n}+1+\\dfrac{n-1}{2}}$</p><p>$\\displaystyle \\lim_{n \\to \\infty} \\dfrac{1}{\\dfrac{1}{n}+1+\\dfrac{n-1}{2}}=0$ より</p><p>$\\displaystyle \\lim_{n \\to \\infty} \\dfrac{n}{2^{n}}=\\boldsymbol{0}$</p>",
    //関数間の比較，ごよ１
    "$\\displaystyle \\lim_{n \\to \\infty} \\dfrac{1}{\\sqrt[3]{n^{2}}(\\sqrt[3]{n+1}-\\sqrt[3]{n})}$": "<p>　$\\displaystyle \\lim_{n \\to \\infty} \\dfrac{1}{\\sqrt[3]{n^{2}}(\\sqrt[3]{n+1}-\\sqrt[3]{n})}$</p><p>$\\displaystyle =\\lim_{n \\to \\infty} \\dfrac{1}{n^\\frac{2}{3}\\left\\{(n+1)^\\frac{1}{3}-(n)^\\frac{1}{3}\\right\\}} \\cdot \\dfrac{(n+1)^{\\frac{2}{3}}+(n+1)^\\frac{1}{3}n^\\frac{1}{3}+n^\\frac{2}{3}}{(n+1)^{\\frac{2}{3}}+(n+1)^\\frac{1}{3}n^\\frac{1}{3}+n^\\frac{2}{3}}$</p><p>$\\displaystyle =\\lim_{n \\to \\infty} \\left\\{\\left(1+\\dfrac{1}{n}\\right)^{\\frac{2}{3}}+\\left(1+\\dfrac{1}{n}\\right)^\\frac{1}{3}+1\\right\\}$</p><p>$=1+1+1$</p><p>$=\\boldsymbol{3}$</p>",
    //有理化，ごよ２
    "$\\displaystyle \\lim_{x \\to \\infty} \\left(\\sqrt[3]{x^{3}-x^{2}}-x\\right)$": "<p>　$\\displaystyle \\lim_{x \\to \\infty} \\left(\\sqrt[3]{x^{3}-x^{2}}-x\\right)$</p><p>$\\displaystyle =\\lim_{x \\to \\infty} \\dfrac{x^{3}-x^{2}-x^{3}}{\\sqrt[3]{(x^{3}-x^{2})^{2}}+x\\sqrt[3]{x^{3}-x^{2}}+x^{2}}$</p><p>$\\displaystyle =\\lim_{x \\to \\infty} \\dfrac{-1}{\\sqrt[3]{\\left(1-\\dfrac{1}{x}\\right)^{2}}+\\sqrt[3]{1-\\dfrac{1}{x}}+1}$</p><p>$=\\boldsymbol{-\\dfrac{1}{3}}$</p>",
    //有理化，斜め漸近線が自身と交わる
    "$\\displaystyle \\lim_{n \\to \\infty} \\dfrac{\\sin ^{n}\\theta - \\cos ^{n}\\theta}{\\sin ^{n}\\theta + \\cos ^{n}\\theta}　\\left(0 &lt \\theta &lt \\dfrac{\\pi}{2}\\right)$": "<p>$\\dfrac{\\sin ^{n}\\theta - \\cos ^{n}\\theta}{\\sin ^{n}\\theta + \\cos ^{n}\\theta}=\\dfrac{\\left(\\dfrac{\\sin \\theta}{\\cos \\theta}\\right)^{n} - 1}{\\left(\\dfrac{\\sin \\theta}{\\cos \\theta}\\right)^{n} + 1}=\\dfrac{\\tan ^{n}\\theta - 1}{\\tan ^{n}\\theta + 1}=\\dfrac{1-\\dfrac{1}{\\tan ^{n}\\theta}}{1+\\dfrac{1}{\\tan ^{n}\\theta}}$</p><p>(i) $ 0 &lt \\theta &lt \\dfrac{\\pi}{4} $ のとき</p><p>　　$0 &lt \\tan \\theta &lt 1$ だから</p><p>　（与式）$= \\displaystyle \\lim_{n \\to \\infty} \\dfrac{\\tan ^{n}\\theta - 1}{\\tan ^{n}\\theta + 1}=\\dfrac{0-1}{0+1}=-1$</p><p>(ii) $ \\theta=\\dfrac{\\pi}{4} $ のとき</p><p>　　$\\tan \\theta =1$ だから</p><p>　（与式）$= \\displaystyle \\lim_{n \\to \\infty} \\dfrac{\\tan ^{n}\\theta - 1}{\\tan ^{n}\\theta + 1}=\\dfrac{1-1}{1+1}=0$</p><p>(iii) $ \\dfrac{\\pi}{4} &lt \\theta &lt \\dfrac{\\pi}{2} $ のとき</p><p>　　$\\tan \\theta &gt 1$ だから</p><p>　（与式）$= \\displaystyle \\lim_{n \\to \\infty}  =\\dfrac{1-\\dfrac{1}{\\tan ^{n}\\theta}}{1+\\dfrac{1}{\\tan ^{n}\\theta}}=\\dfrac{1-0}{1+0}=1$</p><p>以上より</p><p style=\"text-align: center\">（与式）$=\\begin{cases} \\boldsymbol{-1 \\ \\ \\ \\left(0 &lt \\theta &lt \\dfrac{\\pi}{4}\\right)} \\\\ \\boldsymbol{0 \\ \\ \\ \\left(\\theta = \\dfrac{\\pi}{4}\\right)} \\\\ \\boldsymbol{1 \\ \\ \\ \\left(\\dfrac{\\pi}{4} &lt \\theta &lt \\dfrac{\\pi}{2}\\right)}\\end{cases}$</p>",
    //三角関数と等比場合分け，ごよ３
    "$\\displaystyle \\lim_{n \\to \\infty} \\dfrac{x^{n-1} - 3^{n+1}}{x^{n} + 3^{n-1}}$　$( \\ x &gt 0 \\ )$": "<p>$f(x)=\\dfrac{x^{n-1}-3^{n+1}}{x^{n}+3^{n-1}}$ とする</p><p>(i) $ 0 &lt x &lt 3 $ のとき</p><p>　　$\\displaystyle \\lim_{n \\to \\infty} f(x)$</p><p>　$\\displaystyle =\\lim_{n \\to \\infty} \\dfrac{\\dfrac{1}{3}\\left(\\dfrac{x}{3}\\right)^{n-1}-3}{\\left(\\dfrac{x}{3}\\right)^{n}+\\dfrac{1}{3}}$</p><p>　$\\displaystyle =\\dfrac{\\dfrac{1}{3} \\cdot 0-3}{0+\\dfrac{1}{3}}$</p><p>　$=-9$</p><p>(ii) $ x=3 $ のとき</p><p>　　$\\displaystyle \\lim_{n \\to \\infty} f(x)$</p><p>　$\\displaystyle =\\lim_{n \\to \\infty} \\dfrac{3^{n-1} - 3^{n+1}}{3^{n} + 3^{n-1}}　(x &gt 0)$</p><p>　$\\displaystyle =\\lim_{n \\to \\infty} \\dfrac{-8 \\cdot 3^{n-1}}{4 \\cdot 3^{n-1}}$</p><p>　$=-2$</p><p>(iii) $ 3 &lt x $ のとき</p><p>　　$\\displaystyle \\lim_{n \\to \\infty} f(x)$</p><p>　$\\displaystyle =\\lim_{n \\to \\infty} \\dfrac{1-9\\left(\\dfrac{3}{x}\\right)^{n-1}}{x+\\left(\\dfrac{3}{x}\\right)^{n-1}}$</p><p>　$=\\dfrac{1-9 \\cdot 0}{x+0}$</p><p>　$=\\dfrac{1}{x}$</p><p>以上より</p><p style=\"text-align: center\">$\\displaystyle \\lim_{n \\to \\infty} f(x)=\\begin{cases} \\boldsymbol{-9 \\ \\ \\ (0 &lt x &lt 3)} \\\\ \\boldsymbol{-2 \\ \\ \\ (x=3)} \\\\ \\boldsymbol{\\dfrac{1}{x} \\ \\ \\ (3 &lt x)}\\end{cases}$</p>",
    //等比場合分け，ごよ４
    "$\\displaystyle \\lim_{n \\to \\infty} \\sum\\limits_{k=1}^{n} k\\left(\\dfrac{1}{2}\\right)^{k-1}$　$\\displaystyle  \\left(\\lim_{n \\to \\infty} n\\left(\\dfrac{1}{2}\\right)^{n-1}=0\\right)$": "<p>$\\displaystyle S_{n}=\\sum_{k=1}^{n} k\\left(\\dfrac{1}{2}\\right)^{k-1}=1+2 \\cdot \\dfrac{1}{2}+ \\cdots +n\\left(\\dfrac{1}{2}\\right)^{n-1}$ とおく</p><p>\\begin{alignat}{2}S_{n} &= & ~1+2 \\cdot \\dfrac{1}{2} &+ & ~3\\left(\\dfrac{1}{2}\\right)^{2}+ \\cdots +n\\left(\\dfrac{1}{2}\\right)^{n-1} \\cdots ①　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　\\\\[6pt]\\dfrac{S_{n}}{2} &= & \\dfrac{1}{2} &+ & ~2\\left(\\dfrac{1}{2}\\right)^{2}+ \\cdots +(n-1)\\left(\\dfrac{1}{2}\\right)^{n-1}+n\\left(\\dfrac{1}{2}\\right)^{n} \\cdots ②\\end{alignat}</p><p>①$-$②より</p><p>\\begin{align}\\dfrac{S_{n}}{2}&=1+\\dfrac{1}{2}+\\left(\\dfrac{1}{2}\\right)^{2}+ \\cdots +\\left(\\dfrac{1}{2}\\right)^{n-1}-n\\left(\\dfrac{1}{2}\\right)^{n}　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　\\\\[6pt]&=\\dfrac{1-\\left(\\dfrac{1}{2}\\right)^{n}}{1-\\dfrac{1}{2}}-n\\left(\\dfrac{1}{2}\\right)^{n} \\\\[6pt]&=2-\\left(\\dfrac{1}{2}\\right)^{n-1}-n\\left(\\dfrac{1}{2}\\right)^{n}\\end{align}</p><p>よって　$S_{n}=4-\\left(\\dfrac{1}{2}\\right)^{n-2}-n\\left(\\dfrac{1}{2}\\right)^{n-1}$</p><p>$\\displaystyle \\lim_{n \\to \\infty} \\left(\\dfrac{1}{2}\\right)^{n-2}=0,　\\lim_{n \\to \\infty} n\\left(\\dfrac{1}{2}\\right)^{n-1}=0$ だから</p><p>$\\displaystyle \\lim_{n \\to \\infty} S_{n}=\\boldsymbol{4}$</p>",
    //等差×等比，ごよ５
    "$\\displaystyle \\lim_{n \\to \\infty} \\sum\\limits_{k=0}^{n} \\left(\\dfrac{1}{5^{k}}\\cos k\\pi+\\dfrac{1}{3^{\\frac{k}{2}}}\\right)$": "<p>　$\\displaystyle \\lim_{n \\to \\infty} \\sum\\limits_{k=0}^{n} \\left(\\dfrac{1}{5^{k}}\\cos k\\pi+\\dfrac{1}{3^{\\frac{k}{2}}}\\right)$</p><p>$\\displaystyle =\\lim_{n \\to \\infty} \\sum\\limits_{k=0}^{n} \\left\\{\\dfrac{1}{5^{k}}\\cdot (-1)^{k}+\\left(\\dfrac{1}{\\sqrt{3}}\\right)^{k}\\right\\}$</p><p>$\\displaystyle =\\lim_{n \\to \\infty} \\sum\\limits_{k=0}^{n} \\left\\{\\left(-\\dfrac{1}{5}\\right)^{k}+\\left(\\dfrac{1}{\\sqrt{3}}\\right)^{k}\\right\\}$</p><p>$=\\dfrac{1}{1+\\dfrac{1}{5}}+\\dfrac{1}{1-\\dfrac{1}{\\sqrt{3}}}$</p><p>$=\\boldsymbol{\\dfrac{14+3\\sqrt{3}}{6}}$</p>",
    //等比級数，ごよ６
    "$\\displaystyle \\lim_{x \\to \\infty} \\left(3^{x}+5^{x}\\right)^{\\frac{1}{x}}$": "<p>$\\left(3^{x}+5^{x}\\right)^{\\frac{1}{x}}=\\left\\lbrack 5^{x} \\left\\{\\left(\\dfrac{3}{5}\\right)^{x}+1\\right\\} \\right\\rbrack^{\\frac{1}{x}}=5\\left\\{\\left(\\dfrac{3}{5}\\right)^{x}+1\\right\\}^{\\frac{1}{x}}$</p><p>$x \\to \\infty$ だから，$x &gt 1，0 &lt \\dfrac{1}{x} &lt 1$ と考えてよい</p><p>このとき</p><p>$\\left\\{\\left(\\dfrac{3}{5}\\right)^{x}+1\\right\\}^{0} &lt \\left\\{\\left(\\dfrac{3}{5}\\right)^{x}+1\\right\\}^{\\frac{1}{x}} &lt \\left\\{\\left(\\dfrac{3}{5}\\right)^{x}+1\\right\\}^{1}$</p><p>$1 &lt \\left\\{\\left(\\dfrac{3}{5}\\right)^{x}+1\\right\\}^{\\frac{1}{x}} &lt \\left(\\dfrac{3}{5}\\right)^{x}+1$</p><p>$\\displaystyle \\lim_{x \\to \\infty} \\left\\{\\left(\\dfrac{3}{5}\\right)^{x}+1\\right\\}=1$ だから</p><p>$\\displaystyle \\lim_{x \\to \\infty} \\left\\{\\left(\\dfrac{3}{5}\\right)^{x}+1\\right\\}^{\\frac{1}{x}}=1$</p><p>よって　$\\displaystyle \\lim_{x \\to \\infty} \\left(3^{x}+5^{x}\\right)^{\\frac{1}{x}}=\\lim_{x \\to \\infty} 5\\left\\{\\left(\\dfrac{3}{5}\\right)^{x}+1\\right\\}^{\\frac{1}{x}}=\\boldsymbol{5}$</p>",
    //はさみうち，ごよ８
    "$\\displaystyle \\lim_{x \\to 0} \\dfrac{\\sqrt{\\cos 4x}-\\sqrt{\\cos 2x}}{x^{2}}$": "<p>　$\\displaystyle \\lim_{x \\to 0} \\dfrac{\\sqrt{\\cos 4x}-\\sqrt{\\cos 2x}}{x^{2}}$</p><p>$\\displaystyle =\\lim_{x \\to 0} \\dfrac{\\cos 4x-\\cos 2x}{x^{2}(\\sqrt{\\cos 4x}+\\sqrt{\\cos 2x})}$</p><p>$\\displaystyle =\\lim_{x \\to 0} \\dfrac{-2\\sin 3x \\sin x}{x^{2}(\\sqrt{\\cos 4x}+\\sqrt{\\cos 2x})}$</p><p>$\\displaystyle =\\lim_{x \\to 0} \\dfrac{\\sin 3x}{3x} \\cdot \\dfrac{\\sin x}{x} \\cdot \\dfrac{-6}{\\sqrt{\\cos 4x}+\\sqrt{\\cos 2x}}$</p><p>$=1 \\cdot 1 \\cdot \\dfrac{-6}{2}$</p><p>$=\\boldsymbol{-3}$</p>",
    //三角関数と有理化，ごよ９
    "$\\displaystyle \\lim_{x \\to \\frac{1}{4}} \\dfrac{\\tan \\pi x-1}{4x-1}$": "<p>　$\\displaystyle \\lim_{x \\to \\frac{1}{4}} \\dfrac{\\tan \\pi x-1}{4x-1}$</p><p>$\\displaystyle =\\lim_{t \\to 0} \\dfrac{\\tan \\left(\\pi t+\\dfrac{\\pi}{4}\\right)-1}{4t}$　$\\left(t=x-\\dfrac{1}{4}\\right)$</p><p>$\\displaystyle =\\lim_{t \\to 0} \\dfrac{\\dfrac{\\tan \\pi t+1}{1-\\tan \\pi t}-1}{4t}$</p> <p>$\\displaystyle =\\lim_{t \\to 0} \\dfrac{\\tan \\pi t}{2t(1-\\tan \\pi t)}$</p><p>$\\displaystyle =\\lim_{t \\to 0} \\dfrac{\\sin \\pi t}{2t(\\cos \\pi t-\\sin \\pi t)}$</p><p>$\\displaystyle =\\lim_{t \\to 0} \\dfrac{\\sin \\pi t}{\\pi t} \\cdot \\dfrac{\\pi}{2} \\cdot \\dfrac{1}{\\cos \\pi t-\\sin \\pi t}$</p><p>$=1 \\cdot \\dfrac{\\pi}{2} \\cdot \\dfrac{1}{1-0}$</p><p>$=\\boldsymbol{\\dfrac{\\pi}{2}}$</p>",
    //三角関数，ごよ１２
    "$\\displaystyle \\lim_{x \\to \\infty} x\\sin (\\sqrt{a^{2}x^{2}+b}-ax)$　$( \\ a，b \\ は正の実数 \\ )$": "<p>　$\\displaystyle \\lim_{x \\to \\infty} x\\sin (\\sqrt{a^{2}x^{2}+b}-ax)$</p><p>$\\displaystyle =\\lim_{x \\to \\infty} x\\sin \\dfrac{b}{\\sqrt{a^{2}x^{2}+b}+ax}$</p><p>$\\displaystyle =\\lim_{x \\to \\infty} \\dfrac{\\sin \\dfrac{b}{\\sqrt{a^{2}x^{2}+b}+ax}}{\\dfrac{b}{\\sqrt{a^{2}x^{2}+b}+ax}}\\cdot \\dfrac{bx}{\\sqrt{a^{2}x^{2}+b}+ax}$</p><p>$\\displaystyle =\\lim_{x \\to \\infty} \\dfrac{\\sin \\dfrac{b}{\\sqrt{a^{2}x^{2}+b}+ax}}{\\dfrac{b}{\\sqrt{a^{2}x^{2}+b}+ax}}\\cdot \\dfrac{b}{\\sqrt{a^{2}+\\dfrac{b}{x^{2}}}+a}$</p><p>$\\displaystyle =1\\cdot \\dfrac{b}{a+a}$　$\\left( \\ x \\to \\infty \\ のとき \\ \\dfrac{b}{\\sqrt{a^{2}x^{2}+b}+ax} \\to +0 \\ \\right)$</p><p>$=\\boldsymbol{\\dfrac{b}{2a}}$</p>",
    //三角関数，ごよ１３
    "$\\displaystyle \\lim_{n \\to \\infty}\\dfrac{(1+2+3+\\cdots+n)^{5}}{(1^{4}+2^{4}+3^{4}+\\cdots+n^{4})^{2}}$": "<p>　$\\displaystyle \\lim_{n \\to \\infty}\\dfrac{(1+2+3+\\cdots+n)^{5}}{(1^{4}+2^{4}+3^{4}+\\cdots+n^{4})^{2}}$</p><p>$\\displaystyle =\\lim_{n \\to \\infty}\\dfrac{\\left(\\sum\\limits_{k=1}^{n}k\\right)^{5}}{\\left(\\sum\\limits_{k=1}^{n}k^{4}\\right)^{2}}$</p><p>$\\displaystyle =\\lim_{n \\to \\infty}\\dfrac{\\dfrac{1}{n^{10}}\\left\\{\\dfrac{1}{2}n(n+1)\\right\\}^{5}}{\\dfrac{1}{n^{10}}\\left(\\sum\\limits_{k=1}^{n}k^{4}\\right)^{2}}$</p><p>$\\displaystyle =\\lim_{n \\to \\infty}\\dfrac{\\left\\{\\dfrac{1}{2}\\cdot 1\\cdot\\left(1+\\dfrac{1}{n}\\right)\\right\\}^{5}}{\\left\\{\\dfrac{1}{n}\\sum\\limits_{k=1}^{n}\\left(\\dfrac{k}{n}\\right)^{4}\\right\\}^{2}}$</p><p>$=\\dfrac{\\dfrac{1}{32}}{\\displaystyle \\left(\\int_{0}^{1}x^{4}\\,dx\\right)^{2}}$</p><p>$=\\boldsymbol{\\dfrac{25}{32}}$</p>",
    //区分求積の基本，Σk^4
    "$\\displaystyle \\lim_{n \\to \\infty}\\dfrac{(n+1)^{k}+(n+2)^{k}+\\cdots+(n+2n)^{k}}{1^{k}+2^{k}+\\cdots+(2n)^{k}}$ $( \\ k \\ は実数 \\ )$": "<p>　$\\displaystyle \\lim_{n \\to \\infty}\\dfrac{(n+1)^{k}+(n+2)^{k}+\\cdots+(n+2n)^{k}}{1^{k}+2^{k}+\\cdots+(2n)^{k}}$</p><p>$\\displaystyle =\\lim_{n \\to \\infty}\\dfrac{\\displaystyle \\sum_{i=1}^{2n}(n+i)^{k}}{\\displaystyle \\sum_{i=1}^{2n}i^{k}}$</p><p>$\\displaystyle =\\lim_{n \\to \\infty}\\dfrac{\\displaystyle \\dfrac{1}{n}\\sum_{i=1}^{2n}\\left(1+\\dfrac{i}{n}\\right)^{k}}{\\displaystyle \\dfrac{1}{n}\\sum_{i=1}^{2n}\\left(\\dfrac{i}{n}\\right)^{k}}$</p><p>$=\\dfrac{\\displaystyle \\int_{0}^{2}(1+x)^{k}\\,dx}{\\displaystyle \\int_{0}^{2}x^{k}\\,dx}$</p><p>$=\\dfrac{\\left[\\dfrac{1}{k+1}(1+x)^{k+1}\\right]_{0}^{2}}{\\left[\\dfrac{1}{k+1}x^{k+1}\\right]_{0}^{2}}$</p><p>$=\\dfrac{\\dfrac{1}{k+1}(3^{k+1}-1)}{\\dfrac{2^{k+1}}{k+1}}$</p><p>$=\\boldsymbol{\\dfrac{3^{k+1}-1}{2^{k+1}}}$</p>",
    //区分求積，Z会
    "$\\displaystyle \\lim_{t \\to 0}\\dfrac{1}{t}\\left(\\dfrac{1}{\\left|\\overrightarrow{\\mathstrut a}-t\\overrightarrow{\\mathstrut b}\\right|}-\\dfrac{1}{\\left|\\overrightarrow{\\mathstrut a}+t\\overrightarrow{\\mathstrut b}\\right|}\\right)$　$\\left(\\overrightarrow{\\mathstrut a}=(3,4)，\\overrightarrow{\\mathstrut b}=(1,2)\\right)$": "<p>$f(t)=\\dfrac{1}{t}\\left(\\dfrac{1}{\\left|\\overrightarrow{\\mathstrut a}-t\\overrightarrow{\\mathstrut b}\\right|}-\\dfrac{1}{\\left|\\overrightarrow{\\mathstrut a}+t\\overrightarrow{\\mathstrut b}\\right|}\\right)$ とおく．</p><p>$\\overrightarrow{\\mathstrut a}-t\\overrightarrow{\\mathstrut b}=(3-t,4-2t)$，$\\overrightarrow{\\mathstrut a}+t\\overrightarrow{\\mathstrut b}=(3+t,4+2t)$ より</p><p>　$f(t)$</p><p>$=\\dfrac{1}{t}\\left(\\dfrac{1}{\\sqrt{(3-t)^{2}+(4-2t)^{2}}}-\\dfrac{1}{\\sqrt{(3+t)^{2}+(4+2t)^{2}}}\\right)$</p><p>$=\\dfrac{\\dfrac{1}{\\sqrt{5t^{2}-22t+25}}-\\dfrac{1}{\\sqrt{5t^{2}+22t+25}}}{t}$</p><p>$=\\dfrac{\\sqrt{T+22t}-\\sqrt{T-22t}}{t\\sqrt{T-22t}\\sqrt{T+22t}}$　$(T=5t^{2}+25)$</p><p>$=\\dfrac{44t}{t\\sqrt{T-22t}\\sqrt{T+22t}(\\sqrt{T+22t}+\\sqrt{T-22t})}$</p><p>$=\\dfrac{44}{\\sqrt{5t^{2}+25-22t}\\sqrt{5t^{2}+25+22t}(\\sqrt{5t^{2}+25+22t}+\\sqrt{5t^{2}+25-22t})}$</p><p>　$\\displaystyle \\therefore \\ \\lim_{t \\to 0}f(t)=\\dfrac{44}{5\\cdot5(5+5)}=\\boldsymbol{\\dfrac{22}{125}}$</p><p><b style=\"color: black\">別解</b></p><p>　$f(t)$</p><p>$=\\dfrac{\\dfrac{1}{\\sqrt{5t^{2}-22t+25}}-\\dfrac{1}{\\sqrt{5t^{2}+22t+25}}}{t}$</p><p>$=\\dfrac{g(t)-g(0)-(h(t)-h(0))}{t}$　$\\left(g(t)=\\dfrac{1}{\\sqrt{5t^{2}-22t+25}}，h(t)=\\dfrac{1}{\\sqrt{5t^{2}+22t+25}}\\right)$</p><p>$=\\dfrac{g(t)-g(0)}{t-0}-\\dfrac{h(t)-h(0)}{t-0}$</p><p>　$\\displaystyle \\lim_{t \\to 0}f(t)$</p><p>$=g'(0)-h'(0)$</p><p>$=\\dfrac{11}{125}-\\dfrac{-11}{125}$　$\\left(g'(t)=-\\dfrac{1}{2}(5t^{2}-22t+25)^{-\\frac{3}{2}}(10t-22)，h'(t)=-\\dfrac{1}{2}(5t^{2}+22t+25)^{-\\frac{3}{2}}(10t+22)\\right)$</p><p>$=\\boldsymbol{\\dfrac{22}{125}}$</p>",
    //2017東京医科大
    "$\\displaystyle \\lim_{n \\to \\infty}\\int_{0}^{n}e^{-t}\\cos(tx)\\,dt$": "<p>　$\\displaystyle \\lim_{n \\to \\infty}\\int_{0}^{n}e^{-t}\\cos(tx)\\,dt$</p><p>$\\displaystyle I_{n}=\\int_{0}^{n}e^{-t}\\cos(tx)\\,dt$ とおく．</p><p>　$\\displaystyle I_{n}$</p><p>$\\displaystyle =\\Bigl[-e^{-t}\\cos(tx)\\Bigr]_{0}^{n}-\\int_{0}^{n}(-e^{-t})(-x\\sin(tx))\\,dt$</p><p>$\\displaystyle =-e^{-n}\\cos(nx)+1-x\\int_{0}^{n}e^{-t}\\sin(tx)\\,dt$</p><p>$\\displaystyle =-e^{-n}\\cos(nx)+1-x\\left(\\Bigl[-e^{-t}\\sin(tx)\\Bigr]_{0}^{n}-\\int_{0}^{n}(-e^{-t})x\\cos(tx)\\,dt\\right)$</p><p>$\\displaystyle =-e^{-n}\\cos(nx)+1+xe^{-n}\\sin(nx)-x^{2}I_{n}$</p><p>これより</p><p style=\"text-align: center\">$\\displaystyle (x^{2}+1)I_{n}=-e^{-n}\\cos(nx)+xe^{-n}\\sin(nx)+1$</p><p style=\"text-align: center\">$\\displaystyle \\therefore \\ I_{n}=\\dfrac{1}{x^{2}+1}\\{-e^{-n}\\cos(nx)+xe^{-n}\\sin(nx)+1\\}$</p><p>ここで，$-1\\leqq \\cos(nx)\\leqq 1$，$-1\\leqq \\sin(nx)\\leqq 1$ より</p><p style=\"text-align: center\">$-e^{-n}\\leqq e^{-n}\\cos(nx)\\leqq e^{-n}$，$-e^{-n}\\leqq e^{-n}\\sin(nx)\\leqq e^{-n}$</p><p>ここで，$\\displaystyle \\lim_{n \\to \\infty}(-e^{-n})=\\lim_{n \\to \\infty}e^{-n}=0$ より，$\\displaystyle \\lim_{n \\to \\infty}e^{-n}\\cos(nx)=\\lim_{n \\to \\infty}e^{-n}\\sin(nx)=0$．</p><p style=\"text-align: center\">$\\displaystyle \\therefore \\ \\lim_{n \\to \\infty}I_{n}=\\boldsymbol{\\dfrac{1}{x^{2}+1}}$</p>",
    //2023浜松医科大
    "$\\displaystyle \\lim_{x \\to k-0} ([3x]-3[x])$　$( \\ k \\ は整数 \\ )$": "<p>$x \\to k-0$ を考えるから $k-\\dfrac{1}{3} &lt x &lt k$ としてよい．</p><p>このとき $[x]=k-1$．</p><p>また $3k-1 &lt 3x &lt 3k$ だから $[3x]=3k-1$．</p><p>よって $\\displaystyle \\lim_{x \\to k-0} ([3x]-3[x])=3k-1-3(k-1)=\\boldsymbol{2}$</p>",
    //ガウス，ごよ１０
        },
        "C": {
    "$\\displaystyle \\lim_{n \\to \\infty}\\left(\\dfrac{1}{n+\\dfrac{1}{2}}+\\dfrac{1}{n+\\dfrac{3}{2}}+\\dfrac{1}{n+\\dfrac{5}{2}}+\\cdots+\\dfrac{2}{6n-1}\\right)$":
    // 区分求積(奇数番目の和)，サイトの練習
    "<p>　$\\displaystyle\\lim_{n \\to \\infty}\\left(\\dfrac{1}{n+\\dfrac{1}{2}}+\\dfrac{1}{n+\\dfrac{3}{2}}+\\dfrac{1}{n+\\dfrac{5}{2}}+\\cdots+\\dfrac{1}{3n-\\dfrac{1}{2}}\\right)$</p><p>$\\displaystyle =\\lim_{n \\to \\infty}\\sum_{k=1}^{2n}\\dfrac{1}{n+\\dfrac{2k-1}{2}}$</p><p>$\\displaystyle =\\lim_{n \\to \\infty}\\sum_{k=1}^{2n}\\dfrac{1}{1+\\dfrac{2k-1}{2n}}\\cdot\\dfrac{1}{n}$</p><p>$\\displaystyle =\\int_{0}^{2}\\dfrac{1}{1+x}\\,dx$</p><p>$\\displaystyle =\\boldsymbol{\\log3}$</p><p><b style=\"color: black\">別解</b></p><p>　$\\displaystyle\\lim_{n \\to \\infty}\\left(\\dfrac{1}{n+\\dfrac{1}{2}}+\\dfrac{1}{n+\\dfrac{3}{2}}+\\dfrac{1}{n+\\dfrac{5}{2}}+\\cdots+\\dfrac{1}{3n-\\dfrac{1}{2}}\\right)$</p><p>$\\displaystyle =\\lim_{n \\to \\infty}\\left(\\dfrac{1}{n+\\dfrac{1}{2}}+\\dfrac{1}{n+\\dfrac{3}{2}}+\\dfrac{1}{n+\\dfrac{5}{2}}+\\cdots+\\dfrac{1}{n+\\dfrac{4n-1}{2}}\\right)$</p><p>$\\displaystyle =\\lim_{n \\to \\infty}\\left(\\sum_{k=1}^{4n}\\dfrac{1}{n+\\dfrac{k}{2}}-\\sum_{k=1}^{2n}\\dfrac{1}{n+\\dfrac{2k}{2}}\\right)$</p><p>$\\displaystyle =\\lim_{n \\to \\infty}\\frac{1}{n}\\left(\\sum_{k=1}^{4n}\\dfrac{1}{1+\\dfrac{1}{2}\\dfrac{k}{n}}-\\sum_{k=1}^{2n}\\dfrac{1}{1+\\dfrac{k}{n}}\\right)$</p><p>$\\displaystyle =\\int_{0}^{4}\\dfrac{1}{1+\\dfrac{1}{2}x}\\,dx-\\int_{0}^{2}\\dfrac{1}{1+x}\\,dx$</p><p>$\\displaystyle =\\left[2\\log\\left(1+\\dfrac{1}{2}x\\right)\\right]_{0}^{4}-\\Bigl[\\log\\left(1+x\\right)\\Bigr]_{0}^{2}$</p><p>$\\displaystyle =2\\log3-\\log3$</p><p>$\\displaystyle =\\boldsymbol{\\log3}$</p>",
    

    "$\\displaystyle \\lim_{x \\to \\infty}\\dfrac{x}{e^{x}}$":
    // x/e^{x}の極限
    "<p>$f(x)=e^{x}-1-x-\\dfrac{x^{2}}{2}$ $(x&gt;0)$ とおく．</p><p>$f'(x)=e^{x}-1-x$</p><p>$f''(x)=e^{x}-1&gt;0$ $(x&gt;0)$ </p><p>これより $f'(x)$ は単調増加．$f'(0)=0$ より $f'(x)&gt;0$．</p><p>これより $f(x)$ は単調増加．$f(0)=0$ より $f(x)&gt;0$．</p><p style=\"text-align: center\">$\\therefore \\ e^{x}&gt;1+x+\\dfrac{x^{2}}{2}$ $(x&gt;0)$</p><p>両辺 $x$ で割って逆数とると</p><p style=\"text-align: center\">$0&lt;\\dfrac{x}{e^{x}}&lt;\\dfrac{1}{\\dfrac{1}{x}+1+\\dfrac{x}{2}}$ $(x&gt;0)$</p><p>$\\displaystyle \\lim_{x \\to \\infty}\\dfrac{1}{\\dfrac{1}{x}+1+\\dfrac{x}{2}}=0$ より $\\displaystyle \\lim_{x \\to \\infty}\\dfrac{x}{e^{x}}=\\boldsymbol{0}$</p>",


    "$\\displaystyle \\lim_{n \\to \\infty} \\sum_{k=1}^{n}\\dfrac{1}{k}$":
    // 調和級数，面積評価
    "<p>$0&lt;k\\leqq x \\leqq k+1$ において，$y=\\dfrac{1}{x}$ は単調減少より</p><p style=\"text-align: center\">$\\displaystyle \\dfrac{1}{x}\\leqq \\dfrac{1}{k}$</p><p>$k\\leqq x \\leqq k+1$ において両辺積分すると</p><p style=\"text-align: center\">$\\displaystyle \\int_{k}^{k+1}\\dfrac{1}{x}\\,dx&lt; \\int_{k}^{k+1}\\dfrac{1}{k}\\,dx=\\dfrac{1}{k}$</p><p>$k=1,2,\\cdots,n$ で辺々足していくと</p><p style=\"text-align: center\">$\\displaystyle \\int_{1}^{n+1}\\dfrac{1}{x}\\,dx&lt; \\sum_{k=1}^{n}\\dfrac{1}{k}$</p><p>左辺を計算して</p><p style=\"text-align: center\">$\\displaystyle \\log(n+1)&lt; \\sum_{k=1}^{n}\\dfrac{1}{k}$</p><p>$\\displaystyle \\lim_{n \\to \\infty}\\log(n+1)=\\infty$ より</p><p style=\"text-align: center\">$\\displaystyle \\lim_{n \\to \\infty} \\sum_{k=1}^{n}\\dfrac{1}{k}=\\boldsymbol{\\infty}$</p>",


    "$\\displaystyle \\lim_{n \\to \\infty}\\dfrac{n!}{2^n}$":
    // 階乗と指数関数の比較
    "<p>$n\\geqq 5$ のとき</p><p>　$\\dfrac{n!}{2^{n}}$</p><p>$=\\dfrac{1}{2}\\cdot\\dfrac{2}{2}\\cdot\\dfrac{3}{2}\\cdot\\dfrac{4}{2}\\cdot\\dfrac{5}{2}\\cdots\\dfrac{n}{2}$</p><p>$&gt;1\\cdot\\dfrac{5}{2}\\cdot\\dfrac{6}{2}\\cdots\\dfrac{n}{2}$</p><p>$\\geqq \\dfrac{n}{2}$</p><p>$\\displaystyle \\lim_{n \\to \\infty}\\dfrac{n}{2}=\\infty$ より，$\\displaystyle \\lim_{n \\to \\infty}\\dfrac{n!}{2^{n}}=\\boldsymbol{\\infty}$</p>",
    

    "$\\displaystyle \\lim_{n \\to \\infty}\\dfrac{\\log (n!)}{n\\log n}$":
    // 面積評価
    "<p>$y=\\log x$ は単調増加なので，$k \\leqq x \\leqq k+1 \\ \\Longleftrightarrow \\ x-1 \\leqq k \\leqq x$ において</p><p style=\"text-align: center\">$\\log(x-1) \\leqq \\log k \\leqq \\log x$</p><p>すべての辺で，$k \\leqq x \\leqq k+1$ で積分すると</p><p style=\"text-align: center\">$\\displaystyle \\int_{k}^{k+1}\\log(x-1)\\,dx \\leqq \\int_{k}^{k+1}\\log k\\,dx \\leqq \\int_{k}^{k+1}\\log x\\,dx$</p><p>が成り立つ．$\\displaystyle \\int_{k}^{k+1}\\log k\\,dx=\\log k$ より</p><p style=\"text-align: center\">$\\begin{cases}\\displaystyle \\int_{k}^{k+1}\\log(x-1)\\,dx \\leqq \\log k \\ \\cdots ① \\\\ \\displaystyle \\log k \\leqq \\int_{k}^{k+1}\\log x\\,dx  \\ \\cdots ②\\end{cases}$</p><p>①で $k=2,3,\\cdots,n$ ( $n\\geqq 2$ )で両辺足していくと</p><p style=\"text-align: center\">$\\displaystyle \\int_{2}^{n+1}\\log(x-1)\\,dx \\leqq \\sum_{k=2}^{n}\\log k$</p><p style=\"text-align: center\">$\\displaystyle \\Longleftrightarrow \\ \\int_{1}^{n}\\log t\\,dt \\leqq \\sum_{k=1}^{n}\\log k$　( $t=x-1$ )</p><p style=\"text-align: center\">$\\displaystyle \\therefore \\ n\\log n-n+1 \\leqq \\log (n!) \\ \\cdots$ ③</p><p>②で $k=1,2,\\cdots,n-1$ ( $n\\geqq 2$ )で両辺足していくと</p><p style=\"text-align: center\">$\\displaystyle \\sum_{k=1}^{n-1}\\log k \\leqq \\int_{1}^{n}\\log x\\,dx=n\\log n-n+1$</p><p>両辺 $\\log n$ 足すと</p><p style=\"text-align: center\">$\\displaystyle \\sum_{k=1}^{n}\\log k=\\log(n!) \\leqq n\\log n-n+1+\\log n \\ \\cdots$ ④</p><p>③，④より，$n\\geqq 2$ において</p><p style=\"text-align: center\">$n\\log n-n+1 \\leqq \\log(n!) \\leqq n\\log n-n+1+\\log n$</p><p>両辺 $n\\log n$ で割ると</p><p style=\"text-align: center\">$1-\\dfrac{1}{\\log n}+\\dfrac{1}{n\\log n} \\leqq \\dfrac{\\log (n!)}{n\\log n} \\leqq 1-\\dfrac{1}{\\log n}+\\dfrac{1}{n\\log n}+\\dfrac{1}{n}$</p><p>$\\displaystyle \\lim_{n \\to \\infty}\\left(1-\\dfrac{1}{\\log n}+\\dfrac{1}{n\\log n}\\right)=\\lim_{n \\to \\infty}\\left(1-\\dfrac{1}{\\log n}+\\dfrac{1}{n\\log n}+\\dfrac{1}{n}\\right)=1$ より</p><p style=\"text-align: center\">$\\displaystyle \\lim_{n \\to \\infty}\\dfrac{\\log (n!)}{n\\log n}=\\boldsymbol{1}$</p>",
    

    "$\\displaystyle \\lim_{x \\to \\infty}\\left\\{\\dfrac{2x-2}{2x-1}-\\dfrac{2}{(2x-1)^{2}}\\right\\}^{2x}$":
    // eの極限，2016防衛医大
    "<p>　$\\displaystyle \\lim_{x \\to \\infty}\\left\\{\\dfrac{2x-2}{2x-1}-\\dfrac{2}{(2x-1)^{2}}\\right\\}^{2x}$ </p><p>$\\displaystyle =\\lim_{t \\to \\infty}\\left(\\dfrac{t-1}{t}-\\dfrac{2}{t^{2}}\\right)^{t+1}$　$(t=2x-1)$</p><p>$\\displaystyle =\\lim_{t \\to \\infty}\\left(\\dfrac{t^{2}-t-2}{t^{2}}\\right)^{t+1}$</p><p>$\\displaystyle =\\lim_{t \\to \\infty}\\left(\\dfrac{t-2}{t}\\right)^{t+1}\\left(\\dfrac{t+1}{t}\\right)^{t+1}$</p><p>$\\displaystyle =\\lim_{t \\to \\infty}\\left(1+\\dfrac{-2}{t}\\right)^{t}\\left(1+\\dfrac{-2}{t}\\right)\\left(1+\\dfrac{1}{t}\\right)^{t}\\left(1+\\dfrac{1}{t}\\right)$</p><p>$\\displaystyle =\\lim_{t \\to \\infty}\\left\\{\\left(1+\\dfrac{-2}{t}\\right)^{\\frac{1}{\\frac{-2}{t}}}\\right\\}^{-2}\\left(1+\\dfrac{-2}{t}\\right)\\left(1+\\dfrac{1}{t}\\right)^{t}\\left(1+\\dfrac{1}{t}\\right)$</p><p>$=e^{-2}\\cdot1\\cdot e\\cdot1$</p><p>$=\\boldsymbol{\\dfrac{1}{e}}$</p>",
    

    "$\\displaystyle \\lim_{n \\to \\infty}\\left(1+a^{n}\\right)^{\\frac{1}{n}}$　$( \\ a \\ は正の実数)$":
    // eの極限，2012京都大
    "<p>(ⅰ) $a=1$ のとき</p><p>　$\\displaystyle \\lim_{n \\to \\infty}\\left(1+a^{n}\\right)^{\\frac{1}{n}}=\\lim_{n \\to \\infty}2^{\\frac{1}{n}}=1$</p><p>(ⅱ) $0&lt;a&lt;1$ のとき</p><p>　$\\displaystyle \\lim_{n \\to \\infty}\\left(1+a^{n}\\right)^{\\frac{1}{n}}=\\left\\{\\left(1+a^{n}\\right)^{\\frac{1}{a^n}}\\right\\}^{\\frac{a^n}{n}}=e^{0}=1$</p><p>(ⅲ) $a&gt;1$ のとき</p><p>　$\\displaystyle \\lim_{n \\to \\infty}\\log\\left(1+a^{n}\\right)^{\\frac{1}{n}}$</p><p>$\\displaystyle =\\lim_{n \\to \\infty}\\log \\left\\{a^{n}\\left(\\dfrac{1}{a^{n}}+1\\right)\\right\\}^{\\frac{1}{n}}$</p><p>$\\displaystyle =\\lim_{n \\to \\infty}\\left\\{\\log a+\\dfrac{1}{n}\\log \\left(\\dfrac{1}{a^{n}}+1\\right)\\right\\}$</p><p>$=\\log a$</p><p>　$\\displaystyle \\therefore \\ \\lim_{n \\to \\infty}\\left(1+a^{n}\\right)^{\\frac{1}{n}}=a$</p><p>以上より</p><p>　$\\displaystyle \\lim_{n \\to \\infty}\\left(1+a^{n}\\right)^{\\frac{1}{n}}=\\begin{cases}\\boldsymbol{1　(0&lt;a\\leqq 1)}\\\\ \\boldsymbol{a　(a&gt;1)}\\end{cases}$</p>",
    

    "$\\displaystyle \\lim_{x \\to 0}\\dfrac{\\sin x-\\sin x^{2}}{x-x^{2}}$":
    // 平均値の定理を使った極限
    "<p>$f(x)=\\sin x$ とおく．</p><p>(ⅰ) $0&lt;x &lt; 1$ のとき，平均値の定理より</p><p style=\"text-align: center\">$\\displaystyle \\dfrac{f(x) -f(x^2)}{x-x^{2}}= f'(c_{1})=\\cos c_{1}$，$x^{2}&lt;c_{1} &lt; x$</p><p>を満たす $c_{1}$ が存在．$\\displaystyle \\lim_{x\\to +0}x^{2}=\\lim_{x\\to +0}x=0$ より，$\\displaystyle \\lim_{x\\to +0}c_{1}=0$ なので</p><p style=\"text-align: center\">$\\displaystyle \\lim_{x \\to +0}\\dfrac{\\sin x-\\sin x^{2}}{x-x^{2}}=\\lim_{x \\to +0}\\cos c_{1}=1$</p><p>(ⅱ) $x &lt; 0$ のとき，平均値の定理より</p><p style=\"text-align: center\">$\\displaystyle \\dfrac{f(x^2) -f(x)}{x^{2}-x}= f'(c_{2})=\\cos c_{2}$，$x&lt;c_{2} &lt; x^{2}$</p><p>を満たす $c_{2}$ が存在．$\\displaystyle \\lim_{x\\to -0}x=\\lim_{x\\to -0}x^{2}=0$ より，$\\displaystyle \\lim_{x\\to -0}c_{2}=0$ なので</p><p style=\"text-align: center\">$\\displaystyle \\lim_{x \\to -0}\\dfrac{\\sin x-\\sin x^{2}}{x-x^{2}}=\\lim_{x \\to -0}\\dfrac{\\sin x^{2}-\\sin x}{x^{2}-x}=\\lim_{x \\to -0}\\cos c_{2}=1$</p><p>以上より</p><p style=\"text-align: center\">$\\displaystyle \\lim_{x \\to 0}\\dfrac{\\sin x-\\sin x^{2}}{x-x^{2}}=\\boldsymbol{1}$</p>",
    

    "$\\displaystyle \\lim_{x \\to \\infty}\\left(\\cos^{2}\\sqrt{x+1}+\\sin^{2}\\sqrt{x}\\right)$":
    // 平均値の定理を使った極限，2020一橋後期
    "<p>　$\\displaystyle \\lim_{x \\to \\infty}\\left(\\cos^{2}\\sqrt{x+1}+\\sin^{2}\\sqrt{x}\\right)$</p><p>$\\displaystyle =\\lim_{x \\to \\infty}\\left(\\dfrac{\\cos^{2}\\sqrt{x+1}-\\cos^{2}\\sqrt{x}}{x+1-x}+1\\right)$</p><p>$f(t)=\\cos^{2}\\sqrt{t}$ とおくと</p><p style=\"text-align: center\">$f'(t)=2\\cos\\sqrt{t}(-\\sin\\sqrt{t})\\dfrac{1}{2}t^{-\\frac{1}{2}}=-\\dfrac{\\sin2\\sqrt{t}}{2\\sqrt{t}}$</p><p>平均値の定理より</p><p style=\"text-align: center\">$\\dfrac{f(x+1)-f(x)}{x+1-x}=f'(c)$</p><p>を満たす実数 $c$ が $x&lt;c&lt;x+1$ に存在．これより $\\displaystyle \\lim_{x \\to \\infty}c=\\infty$．さらに</p><p style=\"text-align: center\">$-\\dfrac{1}{2\\sqrt{t}}\\leqq-\\dfrac{\\sin2\\sqrt{t}}{2\\sqrt{t}}\\leqq\\dfrac{1}{2\\sqrt{t}}$</p><p>から $\\displaystyle \\lim_{t \\to \\infty}\\left(-\\dfrac{1}{2\\sqrt{t}}\\right)=\\lim_{t \\to \\infty}\\dfrac{1}{2\\sqrt{t}}=0$ より $\\displaystyle \\lim_{t \\to \\infty}\\left(-\\dfrac{\\sin2\\sqrt{t}}{2\\sqrt{t}}\\right)=0$．よって</p><p>　$\\displaystyle \\lim_{x \\to \\infty}\\left(\\cos^{2}\\sqrt{x+1}+\\sin^{2}\\sqrt{x}\\right)$</p><p>$\\displaystyle =\\lim_{x \\to \\infty}\\left(\\dfrac{f(x+1)-f(x)}{x+1-x}+1\\right)$</p><p>$\\displaystyle =\\lim_{x \\to \\infty}\\left(f'(c)+1\\right)$</p><p>$\\displaystyle =\\lim_{c \\to \\infty}\\left(-\\dfrac{\\sin2\\sqrt{c}}{2\\sqrt{c}}+1\\right)$</p><p>$=\\boldsymbol{1}$</p>",
    

    "$\\displaystyle \\lim_{x \\to \\frac{\\pi}{2}}(\\sin x)^{\\tan^{2}x}$":
    // 2023京大実践
    "<p>　$\\displaystyle \\lim_{x \\to \\frac{\\pi}{2}}(\\sin x)^{\\tan^{2}x}$</p><p>$\\displaystyle =\\displaystyle \\lim_{t \\to 0}\\left\\{\\sin\\left(\\dfrac{\\pi}{2}-t\\right)\\right\\}^{\\tan^{2}\\left(\\frac{\\pi}{2}-t\\right)}$ $\\left(t=\\dfrac{\\pi}{2}-x\\right)$</p><p>$\\displaystyle =\\displaystyle \\lim_{t \\to 0}\\left(\\cos t\\right)^{\\frac{1}{\\tan^{2}t}}$</p><p>$\\displaystyle =\\displaystyle \\lim_{t \\to 0}\\left(\\cos^{2}t\\right)^{\\frac{1}{2\\tan^{2}t}}$</p><p>$\\displaystyle =\\displaystyle \\lim_{t \\to 0}\\left(\\dfrac{1}{1+\\tan^{2}t}\\right)^{\\frac{1}{2\\tan^{2}t}}$</p><p>$\\displaystyle =\\displaystyle \\lim_{t \\to 0}\\left\\{\\left(1+\\tan^{2}t\\right)^{\\frac{1}{\\tan^{2}t}}\\right\\}^{-\\frac{1}{2}}$</p><p>$=\\boldsymbol{e^{-\\frac{1}{2}}}$</p>",
    

    "$\\displaystyle \\lim_{x \\to \\infty}\\dfrac{\\log x}{x}$":
    // 微分による不等式の証明，サイトの練習改題，x/e^{x}の極限関連
    "<p>$f(x)=\\sqrt{x}-\\log x$ $(x&gt; 0)$ とおくと</p><p>$f'(x)=\\dfrac{1}{2\\sqrt{x}}-\\dfrac{1}{x}=\\dfrac{\\sqrt{x}-2}{2x}$</p><p>増減表は</p><table border=\"1px\" cellpadding=\"10px\" style=\"border-collapse: collapse;text-align: center\" align=\"center\"><caption></caption><tr><th>$x$</th><td>$0$</td><td>$\\cdots$</td><td>$4$</td><td>$\\cdots$</td></tr><tr><th>$f'(x)$</th><td>$0$</td><td>$-$</td><td>$0$</td><td>$+$</td></tr><tr><th>$f(x)$</th><td></td><td>↘︎</td><td>$2-2\\log2$</td><td>↗︎</td></tr></table><br><p>これより $f(x)\\geqq 2-2\\log2&gt;0$</p><p style=\"text-align: center\">$\\therefore \\ \\log x&lt;\\sqrt{x}$ $(x&gt;0)$</p><p>両辺を正の $x$ で割ると，$x&gt;1$ において</p><p style=\"text-align: center\">$0&lt;\\dfrac{\\log x}{x}&lt;\\dfrac{1}{\\sqrt{x}}$ $(x&gt;1)$</p><p>が成り立つ．$\\displaystyle \\lim_{x \\to \\infty}\\dfrac{1}{\\sqrt{x}}=0$ より</p><p style=\"text-align: center\">$\\displaystyle \\lim_{x \\to \\infty}\\dfrac{\\log x}{x}=\\boldsymbol{0}$</p><p><b style=\"color: black\">別解</b></p><p>$t=\\log x$ とおくと $\\displaystyle \\lim_{x \\to \\infty}\\dfrac{\\log x}{x}=\\lim_{t \\to \\infty}\\dfrac{t}{e^{t}}=\\lim_{x \\to \\infty}\\dfrac{x}{e^{x}}$ となる．<p>$f(x)=e^{x}-1-x-\\dfrac{x^{2}}{2}$ $(x&gt;0)$ とおく．</p><p>$f'(x)=e^{x}-1-x$</p><p>$f''(x)=e^{x}-1&gt;0$ $(x&gt;0)$ </p><p>これより $f'(x)$ は単調増加．$f'(0)=0$ より $f'(x)&gt;0$．</p><p>これより $f(x)$ は単調増加．$f(0)=0$ より $f(x)&gt;0$．</p><p style=\"text-align: center\">$\\therefore \\ e^{x}&gt;1+x+\\dfrac{x^{2}}{2}$ $(x&gt;0)$</p><p>両辺 $x$ で割って逆数とると</p><p style=\"text-align: center\">$0&lt;\\dfrac{x}{e^{x}}&lt;\\dfrac{1}{\\dfrac{1}{x}+1+\\dfrac{x}{2}}$ $(x&gt;0)$</p><p>$\\displaystyle \\lim_{x \\to \\infty}\\dfrac{1}{\\dfrac{1}{x}+1+\\dfrac{x}{2}}=0$ より $\\displaystyle \\lim_{x \\to \\infty}\\dfrac{x}{e^{x}}=\\lim_{x \\to \\infty}\\dfrac{\\log x}{x}=\\boldsymbol{0}$</p>",
    

    "$\\displaystyle \\lim_{n \\to \\infty}\\int_{0}^{\\pi}x^{2}|\\sin nx|\\,dx$":
    // 1989東工大
    "<p>　$\\displaystyle \\int_{0}^{\\pi}x^{2}|\\sin nx|\\,dx$</p><p>$\\displaystyle =\\int_{0}^{n\\pi}\\dfrac{t^{2}}{n^{2}}|\\sin t|\\dfrac{1}{n}\\,dt$　$(t=nx)$</p><p>$\\displaystyle =\\dfrac{1}{n^{3}}\\sum_{k=1}^{n}\\int_{(k-1)\\pi}^{k\\pi}t^{2}|\\sin t|\\,dt$</p><p>$\\displaystyle =\\dfrac{1}{n^{3}}\\sum_{k=1}^{n}\\int_{(k-1)\\pi}^{k\\pi}t^{2}(-1)^{k-1}\\sin t\\,dt$</p><p>$\\displaystyle =\\dfrac{1}{n^{3}}\\sum_{k=1}^{n}(-1)^{k-1}\\int_{(k-1)\\pi}^{k\\pi}t^{2}\\sin t\\,dt$</p><p>$\\displaystyle =\\dfrac{1}{n^{3}}\\sum_{k=1}^{n}(-1)^{k-1}\\Bigl[-t^{2}\\cos t+2t\\sin t+2\\cos t\\Bigr]_{(k-1)\\pi}^{k\\pi}$</p><p>$\\displaystyle =\\dfrac{1}{n^{3}}\\sum_{k=1}^{n}(-1)^{k-1}\\left\\{-k^{2}\\pi^{2}(-1)^{k}+2(-1)^{k}+(k-1)^{2}\\pi^{2}(-1)^{k-1}-2(-1)^{k-1}\\right\\}$</p><p>$\\displaystyle =\\dfrac{1}{n^{3}}\\sum_{k=1}^{n}(-1)^{k-1}\\left\\{k^{2}\\pi^{2}(-1)^{k-1}-2(-1)^{k-1}+(k-1)^{2}\\pi^{2}(-1)^{k-1}-2(-1)^{k-1}\\right\\}$</p><p>$\\displaystyle =\\dfrac{1}{n^{3}}\\sum_{k=1}^{n}(-1)^{2k-2}\\left\\{(2k^{2}-2k+1)\\pi^{2}-4\\right\\}$</p><p>$\\displaystyle =\\dfrac{1}{n^{3}}\\sum_{k=1}^{n}\\left\\{(2k^{2}-2k+1)\\pi^{2}-4\\right\\}$</p><p>以上より</p><p>　$\\displaystyle \\lim_{n \\to \\infty}\\int_{0}^{\\pi}x^{2}|\\sin nx|\\,dx$</p><p>$\\displaystyle =\\lim_{n \\to \\infty}\\dfrac{1}{n^{3}}\\sum_{k=1}^{n}\\left\\{(2k^{2}-2k+1)\\pi^{2}-4\\right\\}$</p><p>$\\displaystyle =\\lim_{n \\to \\infty}\\left\\{\\dfrac{\\pi^{2}}{3}\\left(1+\\dfrac{1}{n}\\right)\\left(2+\\dfrac{1}{n}\\right)-\\dfrac{\\pi^{2}}{n}\\left(1+\\dfrac{1}{n}\\right)+\\dfrac{\\pi^{2}-4}{n^2}\\right\\}$</p><p>$=\\boldsymbol{\\dfrac{2}{3}\\pi^{2}}$</p>",
    

    "$\\displaystyle \\lim_{n \\to \\infty}\\int_{0}^{\\frac{\\pi}{2}}\\dfrac{\\sin^{2}nx}{1+x}\\,dx$":
    // 1999東工大，プラチカ
    "<p>　$\\displaystyle \\int_{0}^{\\frac{\\pi}{2}}\\dfrac{\\sin^{2}nx}{1+x}\\,dx$</p><p>$\\displaystyle =\\int_{0}^{\\frac{\\pi}{2}}\\dfrac{1-\\cos 2nx}{2(1+x)}\\,dx$</p><p>$\\displaystyle =\\dfrac{1}{2}\\Bigl[\\log(1+x)\\Bigr]_{0}^{\\frac{\\pi}{2}}-\\dfrac{1}{2}\\int_{0}^{\\frac{\\pi}{2}}\\dfrac{\\cos 2nx}{1+x}\\,dx$</p><p>$\\displaystyle =\\dfrac{1}{2}\\log\\left(1+\\dfrac{\\pi}{2}\\right)-\\dfrac{1}{2}\\left\\{\\left[\\dfrac{\\sin 2nx}{2n(1+x)}\\right]_{0}^{\\frac{\\pi}{2}}-\\int_{0}^{\\frac{\\pi}{2}}\\dfrac{-\\sin 2nx}{2n(1+x)^{2}}\\,dx\\right\\}$</p><p>$\\displaystyle =\\dfrac{1}{2}\\log\\left(1+\\dfrac{\\pi}{2}\\right)-\\dfrac{1}{4n}\\int_{0}^{\\frac{\\pi}{2}}\\dfrac{\\sin 2nx}{(1+x)^{2}}\\,dx$</p><p>$0\\leqq x\\leqq \\dfrac{\\pi}{2}$ において $-1&lt; \\dfrac{\\sin 2nx}{(1+x)^{2}}&lt; 1$ より</p><p style=\"text-align: center\">$\\displaystyle -\\dfrac{1}{4n}\\int_{0}^{\\frac{\\pi}{2}}\\,dx&lt; \\dfrac{1}{4n}\\int_{0}^{\\frac{\\pi}{2}}\\dfrac{\\sin 2nx}{(1+x)^{2}}\\,dx&lt; \\dfrac{1}{4n}\\int_{0}^{\\frac{\\pi}{2}}\\,dx$</p><p style=\"text-align: center\">$\\displaystyle \\therefore \\ -\\dfrac{\\pi}{8n}&lt; \\dfrac{1}{4n}\\int_{0}^{\\frac{\\pi}{2}}\\dfrac{\\sin 2nx}{(1+x)^{2}}\\,dx&lt; \\dfrac{\\pi}{8n}$</p><p>$\\displaystyle \\lim_{n \\to \\infty}\\left(-\\dfrac{\\pi}{8n}\\right)=\\lim_{n \\to \\infty}\\dfrac{\\pi}{8n}=0$ より $\\displaystyle \\lim_{n \\to \\infty}\\dfrac{1}{4n}\\int_{0}^{\\frac{\\pi}{2}}\\dfrac{\\sin 2nx}{(1+x)^{2}}\\,dx=0$．</p><p style=\"text-align: center\"></p><p style=\"text-align: center\">$\\therefore \\ \\displaystyle \\lim_{n \\to \\infty}\\int_{0}^{\\frac{\\pi}{2}}\\dfrac{\\sin^{2}nx}{1+x}\\,dx=\\boldsymbol{\\dfrac{1}{2}\\log\\left(1+\\dfrac{\\pi}{2}\\right)}$</p>",
    

    "$\\displaystyle \\lim_{x \\to \\sqrt{\\pi}}\\int_{\\sqrt{\\pi}}^{x}\\dfrac{(x^{2}+\\sqrt{\\pi}t)e^{t^2}}{(x^{3}-\\sqrt{\\pi}x^{2}+\\pi x-\\pi\\sqrt{\\pi})t^{2}\\log t}\\,dt$":
    // 2017日本医科大
    "<p>　$\\displaystyle \\int_{\\sqrt{\\pi}}^{x}\\dfrac{(x^{2}+\\sqrt{\\pi}t)e^{t^2}}{(x^{3}-\\sqrt{\\pi}x^{2}+\\pi x-\\pi\\sqrt{\\pi})t^{2}\\log t}\\,dt$</p><p>$\\displaystyle =\\dfrac{1}{(x^{2}+\\pi)(x-\\sqrt{\\pi})}\\int_{\\sqrt{\\pi}}^{x}\\dfrac{(x^{2}+\\sqrt{\\pi}t)e^{t^2}}{t^{2}\\log t}\\,dt$</p><p>$\\displaystyle =\\dfrac{x^{2}}{x^{2}+\\pi}\\cdot \\dfrac{1}{x-\\sqrt{\\pi}}\\int_{\\sqrt{\\pi}}^{x}f(t)\\,dt+\\dfrac{\\sqrt{\\pi}}{x^{2}+\\pi}\\cdot \\dfrac{1}{x-\\sqrt{\\pi}}\\int_{\\sqrt{\\pi}}^{x}g(t)\\,dt$　$\\left(f(t)=\\dfrac{e^{t^2}}{t^{2}\\log t}，g(t)=\\dfrac{e^{t^2}}{t\\log t}\\right)$</p><p>　$\\displaystyle \\lim_{x \\to \\sqrt{\\pi}}\\int_{\\sqrt{\\pi}}^{x}\\dfrac{(x^{2}+\\sqrt{\\pi}t)e^{t^2}}{(x^{3}-\\sqrt{\\pi}x^{2}+\\pi x-\\pi\\sqrt{\\pi})t^{2}\\log t}\\,dt$</p><p>$\\displaystyle =\\dfrac{\\pi}{\\pi+\\pi}f(\\sqrt{\\pi})+\\dfrac{\\sqrt{\\pi}}{\\pi+\\pi}g(\\sqrt{\\pi})$</p><p>$\\displaystyle =\\dfrac{1}{2}\\cdot\\dfrac{e^{\\pi}}{\\pi\\log \\sqrt{\\pi}}+\\dfrac{\\sqrt{\\pi}}{2\\pi}\\cdot\\dfrac{e^{\\pi}}{\\sqrt{\\pi}\\log \\sqrt{\\pi}}$</p><p>$\\displaystyle =\\boldsymbol{\\dfrac{2e^{\\pi}}{\\pi\\log \\pi}}$</p>",
    

    "$\\displaystyle \\lim_{n \\to \\infty}\\int_{0}^{\\frac{\\pi}{4}}\\tan^{n}x\\,dx$":
    // 
    "<p>$\\displaystyle I_{n}=\\int_{0}^{\\frac{\\pi}{4}} \\tan^{n}x\\,dx$ とおく</p><p>　$I_{n+2}$</p><p>$\\displaystyle =\\int_{0}^{\\frac{\\pi}{4}} \\tan^{n+2}x\\,dx$</p><p>$\\displaystyle =\\int_{0}^{\\frac{\\pi}{4}} \\tan^{n}x\\left(\\dfrac{1}{\\cos^{2}x}-1\\right)\\,dx$</p><p>$\\displaystyle =\\int_{0}^{1} u^{n}\\,du-\\int_{0}^{\\frac{\\pi}{4}} \\tan^{n}x\\,dx$　( $u=\\tan x$ )</p><p>$\\displaystyle =\\dfrac{1}{n+1}-I_{n}$</p><p>$\\Longleftrightarrow \\ I_{n}+I_{n+2}=\\dfrac{1}{n+1}$</p><p>$0 \\leqq x \\leqq \\dfrac{\\pi}{4}$ において，$0 \\leqq \\tan x \\leqq 1$ より，$I_{n}\\geqq 0$．これより $I_{n+2}\\geqq 0$ でもあるので</p><p style=\"text-align: center\">$0\\leqq I_{n}\\leqq I_{n}+I_{n+2}=\\dfrac{1}{n+1}$</p><p>$\\displaystyle \\lim_{n \\to \\infty}\\dfrac{1}{n+1}=0$ より，$\\displaystyle \\lim_{n \\to \\infty}I_{n}=\\boldsymbol{0}$</p>",
    

    "$\\displaystyle \\lim_{n \\to \\infty}\\sum_{k=1}^{2n}(-1)^{k}\\left(\\dfrac{k}{2n}\\right)^{100}$":
    // 
    "<p>　$\\displaystyle \\lim_{n \\to \\infty}\\sum_{k=1}^{2n}(-1)^{k}\\left(\\dfrac{k}{2n}\\right)^{100}$</p><p>$\\displaystyle =\\lim_{n \\to \\infty}\\left\\{\\sum_{m=1}^{n}(-1)^{2m}\\left(\\dfrac{2m}{2n}\\right)^{100}+\\sum_{m=1}^{n}(-1)^{2m-1}\\left(\\dfrac{2m-1}{2n}\\right)^{100}\\right\\}$</p><p>$\\displaystyle =\\lim_{n \\to \\infty}\\sum_{m=1}^{n}\\left\\{\\left(\\dfrac{2m}{2n}\\right)^{100}-\\left(\\dfrac{2m-1}{2n}\\right)^{100}\\right\\}$</p><p>$f(x)=x^{100}$ とおくと，平均値の定理より</p><p style=\"text-align: center\">$\\dfrac{f\\left(\\dfrac{2m}{2n}\\right)-f\\left(\\dfrac{2m-1}{2n}\\right)}{\\dfrac{2m}{2n}-\\dfrac{2m-1}{2n}}=f'(c)$</p><p>つまり</p><p style=\"text-align: center\">$\\left(\\dfrac{2m}{2n}\\right)^{100}-\\left(\\dfrac{2m-1}{2n}\\right)^{100}=\\dfrac{1}{2n}\\cdot100c^{99}$</p><p>を満たす $c$ が $\\dfrac{2m-1}{2n}&lt;c&lt;\\dfrac{2m}{2n}$ に存在．</p><p>　$\\displaystyle \\lim_{n \\to \\infty}\\sum_{k=1}^{2n}(-1)^{k}\\left(\\dfrac{k}{2n}\\right)^{100}$</p><p>$\\displaystyle =\\lim_{n \\to \\infty}\\sum_{m=1}^{n}\\dfrac{1}{2n}\\cdot100c^{99}$</p><p>$\\displaystyle =\\lim_{n \\to \\infty}\\dfrac{50}{n}\\sum_{m=1}^{n}c^{99}$</p><p>ここで</p><p style=\"text-align: center\">$\\displaystyle \\dfrac{50}{n}\\sum_{m=1}^{n}\\left(\\dfrac{2m-1}{2n}\\right)^{99}&lt;\\dfrac{50}{n}\\sum_{m=1}^{n}c^{99}&lt;\\dfrac{50}{n}\\sum_{m=1}^{n}\\left(\\dfrac{2m}{2n}\\right)^{99}$</p><p>より</p><div style=\"text-align: center\"><img src=\"noteimages/limit-gacha1.png\" width=\"75%\"></div><p>　$\\displaystyle \\lim_{n \\to \\infty}\\dfrac{50}{n}\\sum_{m=1}^{n}\\left(\\dfrac{2m-1}{2n}\\right)^{99}$</p><p>$\\displaystyle =50\\int_{0}^{1}x^{99}\\,dx$</p><p>$\\displaystyle =\\dfrac{1}{2}$</p><p>　$\\displaystyle \\lim_{n \\to \\infty}\\dfrac{50}{n}\\sum_{m=1}^{n}\\left(\\dfrac{2m}{2n}\\right)^{99}$</p><p>$\\displaystyle =\\lim_{n \\to \\infty}\\dfrac{50}{n}\\sum_{m=1}^{n}\\left(\\dfrac{m}{n}\\right)^{99}$</p><p>$\\displaystyle =50\\int_{0}^{1}x^{99}\\,dx$</p><p>$\\displaystyle =\\dfrac{1}{2}$</p><p>以上から</p><p>　$\\displaystyle \\lim_{n \\to \\infty}\\sum_{k=1}^{2n}(-1)^{k}\\left(\\dfrac{k}{2n}\\right)^{100}$</p><p>$\\displaystyle =\\lim_{n \\to \\infty}\\dfrac{50}{n}\\sum_{m=1}^{n}c^{99}$</p><p>$=\\boldsymbol{\\dfrac{1}{2}}$</p>",
    

    "$\\displaystyle \\lim_{x\\to \\infty}\\int_{0}^{x}|\\sin t|e^{-t}\\,dt$":
    // 
    "<p>$n\\pi \\leqq x \\leqq (n+1)\\pi$ において，$|\\sin t|e^{-t}&gt;0$ より</p><p style=\"text-align: center\">$\\displaystyle \\int_{0}^{n\\pi}|\\sin t|e^{-t}\\,dt\\leqq \\int_{0}^{x}|\\sin t|e^{-t}\\,dt\\leqq \\int_{0}^{(n+1)\\pi}|\\sin t|e^{-t}\\,dt$</p><p>から，最左辺を求める．</p><p>まず，$\\displaystyle I=\\int_{}^{} \\ e^{-t}\\sin t\\,dx$ とおくと</p><p>　$\\displaystyle I$</p><p>$\\displaystyle =-e^{-t}\\sin t+\\int_{}^{} \\ e^{-t}\\cos t\\,dt$</p><p>$\\displaystyle =-e^{-t}\\sin t-e^{-t}\\cos t-I$</p><p>$\\displaystyle \\therefore \\ I=-\\dfrac{e^{-t}}{2}(\\sin t+\\cos t)+C$ ( $C$ は積分定数)</p><p>　$\\displaystyle \\int_{0}^{n\\pi}|\\sin t|e^{-t}\\,dt$</p><p>$\\displaystyle =\\sum_{k=0}^{n-1}\\int_{k\\pi}^{(k+1)\\pi}|\\sin t|e^{-t}\\,dt$</p><p>$\\displaystyle =\\sum_{k=0}^{n-1}\\int_{0}^{\\pi}|\\sin (u+k\\pi)|e^{-u-k\\pi}\\,du$　$(u=t-k\\pi)$</p><p>$\\displaystyle =\\sum_{k=0}^{n-1}e^{-k\\pi}\\int_{0}^{\\pi}|\\sin u \\cos k\\pi+\\cos u \\sin k\\pi|e^{-u}\\,du$</p><p>$\\displaystyle =\\sum_{k=0}^{n-1}e^{-k\\pi}\\int_{0}^{\\pi}|\\sin u||\\cos k\\pi|e^{-u}\\,du$</p><p>$\\displaystyle =\\sum_{k=0}^{n-1}e^{-k\\pi}\\int_{0}^{\\pi}e^{-u}\\sin u\\,du$</p><p>$\\displaystyle =\\sum_{k=0}^{n-1}e^{-k\\pi}\\left[-\\dfrac{e^{-t}}{2}(\\sin t+\\cos t)\\right]_{0}^{\\pi}$</p><p>$\\displaystyle =\\dfrac{e^{-\\pi}+1}{2}\\sum_{k=0}^{n-1}e^{-k\\pi}$</p><p>以上より，$n\\pi \\leqq x \\leqq (n+1)\\pi$ において</p><p style=\"text-align: center\">$\\displaystyle \\dfrac{e^{-\\pi}+1}{2}\\sum_{k=0}^{n-1}e^{-k\\pi}\\leqq \\int_{0}^{x}|\\sin t|e^{-t}\\,dt\\leqq \\dfrac{e^{-\\pi}+1}{2}\\sum_{k=0}^{n}e^{-k\\pi}$</p><p>ここで $n \\to \\infty$ のとき，$x \\to \\infty$ であり</p><p>$\\displaystyle \\lim_{n\\to \\infty}\\dfrac{e^{-\\pi}+1}{2}\\sum_{k=0}^{n-1}e^{-k\\pi}=\\lim_{n\\to \\infty}\\dfrac{e^{-\\pi}+1}{2}\\sum_{k=0}^{n}e^{-k\\pi}=\\dfrac{e^{-\\pi}+1}{2}\\cdot \\dfrac{1}{1-e^{-\\pi}}$</p><p>より</p><p style=\"text-align: center\">$\\displaystyle \\lim_{x\\to \\infty}\\int_{0}^{x}|\\sin t|e^{-t}\\,dt=\\boldsymbol{\\dfrac{e^{\\pi}+1}{2(e^{\\pi}-1)}}$</p>",
    

    "$\\displaystyle \\lim_{n \\to \\infty}\\int_{1}^{e}x^{m}(\\log x)^{n}\\,dx$　$( \\ m，n \\ は自然数 \\ )$":
    // 
    "<p>$\\displaystyle I(m,n)=\\int_{1}^{e}x^{m}(\\log x)^{n}\\,dx$ とおく．</p><p>　$I(m,n)$</p><p>$\\displaystyle =\\int_{1}^{e}x^{m}(\\log x)^{n}\\,dx$</p><p>$\\displaystyle =\\left[\\dfrac{1}{m+1}x^{m+1}(\\log x)^{n}\\right]_{1}^{e}-\\int_{1}^{e}\\dfrac{1}{m+1}x^{m+1}\\cdot n(\\log x)^{n-1}\\cdot\\dfrac{1}{x}\\,dx$</p><p>$\\displaystyle =\\dfrac{1}{m+1}e^{m+1}-\\dfrac{n}{m+1}I(m,n-1)$</p><p>$\\Longleftrightarrow \\ \\dfrac{n}{m+1}I(m,n-1)=\\dfrac{1}{m+1}e^{m+1}-I(m,n)$</p><p style=\"text-align: center\">$\\therefore \\ \\dfrac{n+1}{m+1}I(m,n)=\\dfrac{1}{m+1}e^{m+1}-I(m,n+1)$</p><p>ここで，$1\\leqq x \\leqq e$ において $x^{m}(\\log x)^{n}\\geqq0$ より $I(m,n)\\geqq 0$ なので</p><p style=\"text-align: center;\">$\\dfrac{n+1}{m+1}I(m,n)\\leqq \\dfrac{1}{m+1}e^{m+1}$</p><p style=\"text-align: center;\">$\\therefore \\ 0\\leqq I(m,n)\\leqq \\dfrac{e^{m+1}}{n+1}$</p><p>$\\displaystyle \\lim_{n \\to \\infty}\\dfrac{e^{m+1}}{n+1}=0$ より</p><p style=\"text-align: center;\">$\\displaystyle \\lim_{n \\to \\infty}I(m,n)=\\boldsymbol{0}$</p>",
    
},
        "D": {
           
    "$\\displaystyle \\lim_{x \\to 0}\\left(\\dfrac{\\sin x}{x}\\right)^{\\frac{1}{x^{2}}}$":
    // 超級1，ごよ
    "<p>TBA</p>",
    

    "$\\displaystyle \\lim_{n \\to \\infty}\\left(\\dfrac{3-\\sqrt[n]{3}}{2}\\right)^{n}$":
    // 超級2，ごよ
    "<p>TBA</p>",
    

    "$\\displaystyle \\lim_{x \\to \\infty}x\\left\\{e-\\left(1+\\dfrac{1}{x}\\right)^{x}\\right\\}$":
    // 超級3，ごよ
    "<p>TBA</p>",
    

    "$\\displaystyle \\lim_{n \\to \\infty}\\sum_{k=1}^{n}\\dfrac{1}{n^{\\frac{3}{2}}}\\left[\\sqrt{2k-1}\\right]$":
    // 超級4，AKR，格子点，奇数和の区分求積
    "<p>TBA</p>",  
}
    },
    "2": {
        "A": {
            "$a_{1}=1$，$a_{n+1}=a_{n}+1$": "<p>　$\\boldsymbol{a_{n}}=1+(n-1)\\cdot1\\boldsymbol{=n}$</p>",
    "$a_{1}=-1$，$a_{n+1}=a_{n}+7$": "<p>　$\\boldsymbol{a_{n}}=-1+(n-1)7\\boldsymbol{=7n-8}$</p>",
    "$a_{1}=1$，$a_{n+1}=a_{n}+\\sqrt{3}$": "<p>　$\\boldsymbol{a_{n}}=1+(n-1)\\sqrt{3}\\boldsymbol{=\\sqrt{3}n-\\sqrt{3}+1}$</p>",
    "$a_{1}=2$，$a_{n+1}=a_{n}-\\dfrac{1}{7}$": "<p>　$\\boldsymbol{a_{n}}=2+(n-1)\\left(-\\dfrac{1}{7}\\right)\\boldsymbol{=-\\dfrac{1}{7}n+\\dfrac{15}{7}}$</p>",
    "$a_{1}=-2$，$a_{n+1}=-a_{n}$": "<p>　$\\boldsymbol{a_{n}}=-2(-1)^{n-1}\\boldsymbol{=2(-1)^{n}}$</p>",
    "$a_{1}=-\\dfrac{1}{4}$，$a_{n+1}=\\dfrac{1}{2}a_{n}$": "<p>　$\\boldsymbol{a_{n}}=-\\dfrac{1}{4}\\left(\\dfrac{1}{2}\\right)^{n-1}\\boldsymbol{=-\\left(\\dfrac{1}{2}\\right)^{n+1}}$</p>",
    "$a_{1}=\\sqrt{6}$，$a_{n+1}=\\sqrt{2}a_{n}$": "<p>　$\\boldsymbol{a_{n}}=\\sqrt{6}\\left(\\sqrt{2}\\right)^{n-1}\\boldsymbol{=\\sqrt{3}\\cdot 2^{\\frac{n}{2}}}$</p>",
    "$a_{1}=1$，$a_{n+1}=a_{n}+3\\cdot 2^{n+2}$": "<p>$n\\geqq 2$ のとき</p><p>　$\\displaystyle a_{n}=1+\\sum_{k=1}^{n-1}3\\cdot 2^{k+2}$</p><p>　　$\\displaystyle =1+\\dfrac{24-3\\cdot2^{n+2}}{1-2}$</p><p>　　$\\displaystyle =1+3\\cdot2^{n+2}-24$</p><p>　　$\\displaystyle =3\\cdot2^{n+2}-23$</p><p>これは $n=1$ のときも成り立つ</p><p>　$\\boldsymbol{a_{n}=3\\cdot2^{n+2}-23}$</p>",
    "$a_{1}=1$，$a_{n+1}=a_{n}+\\left(\\dfrac{1}{3}\\right)^{n-1}$": "<p>$n\\geqq 2$ のとき</p><p>　$\\displaystyle a_{n}=1+\\sum_{k=1}^{n-1}\\left(\\dfrac{1}{3}\\right)^{k-1}$</p><p>　　$\\displaystyle =1+\\dfrac{1-\\left(\\dfrac{1}{3}\\right)^{n-1}}{1-\\dfrac{1}{3}}$</p><p>　　$\\displaystyle =1+\\dfrac{3}{2}-\\dfrac{3}{2}\\left(\\dfrac{1}{3}\\right)^{n-1}$</p><p>　　$\\displaystyle =\\dfrac{5}{2}-\\dfrac{3}{2}\\left(\\dfrac{1}{3}\\right)^{n-1}$</p><p>これは $n=1$ のときも成り立つ</p><p>　$\\boldsymbol{a_{n}=\\dfrac{5}{2}-\\dfrac{3}{2}\\left(\\dfrac{1}{3}\\right)^{n-1}}$</p>",
    "$a_{1}=1$，$a_{n+1}=a_{n}+5^{n}-6n$": "<p>$n\\geqq 2$ のとき</p><p>　$\\displaystyle a_{n}=1+\\sum_{k=1}^{n-1}(5^{k}-6k)$</p><p>　　$\\displaystyle =1+\\dfrac{5-5^{n-1}\\cdot5}{1-5}-6\\cdot\\dfrac{1}{2}(n-1)n$</p><p>　　$\\displaystyle =1+\\dfrac{5^{n}-5}{4}-3(n-1)n$</p><p>　　$\\displaystyle =\\dfrac{1}{4}\\cdot 5^{n}-3n^{2}+3n-\\dfrac{1}{4}$</p><p>これは $n=1$ のときも成り立つ</p><p>　$\\boldsymbol{a_{n}=\\dfrac{1}{4}\\cdot 5^{n}-3n^{2}+3n-\\dfrac{1}{4}}$</p>",
    "$a_{1}=1$，$a_{n+1}=a_{n}+n^{2}+2n+1$": "<p>$n\\geqq 2$ のとき</p><p>　$\\displaystyle a_{n}=1+\\sum_{k=1}^{n-1}(k^{2}+2k+1)$</p><p>　　$\\displaystyle =1+\\sum_{k=1}^{n-1}(k+1)^{2}$</p><p>　　$\\displaystyle =1+\\sum_{k=2}^{n}k^{2}$</p><p>　　$\\displaystyle =\\sum_{k=1}^{n}k^{2}$</p><p>　　$\\displaystyle =\\dfrac{1}{6}n(n+1)(2n+1)$</p><p>これは $n=1$ のときも成り立つ</p><p>　$\\boldsymbol{a_{n}=\\dfrac{1}{6}n(n+1)(2n+1)}$</p>",
    "$a_{1}=1$，$a_{n+1}=a_{n}+\\dfrac{1}{(2n-1)(2n+1)}$": "<p>$n\\geqq 2$ のとき</p><p>　$\\displaystyle a_{n}=1+\\sum_{k=1}^{n-1}\\dfrac{1}{(2k-1)(2k+1)}$</p><p>　　$\\displaystyle =1+\\sum_{k=1}^{n-1}\\dfrac{1}{2}\\left(\\dfrac{1}{2k-1}-\\dfrac{1}{2k+1}\\right)$</p><p>　　$\\displaystyle =1+\\dfrac{1}{2}\\left(\\dfrac{1}{1}-\\dfrac{1}{2n-1}\\right)$</p><p>　　$\\displaystyle =\\dfrac{3}{2}-\\dfrac{1}{2(2n-1)}$</p><p>　　$\\displaystyle =\\dfrac{3n-2}{2n-1}$</p><p>これは $n=1$ のときも成り立つ</p><p>　$\\boldsymbol{a_{n}=\\dfrac{3n-2}{2n-1}}$</p>",
    "$a_{1}=1$，$a_{n+1}=a_{n}+\\dfrac{1}{n(n+2)}$": "<p>$n\\geqq 2$ のとき</p><p>　$\\displaystyle a_{n}=1+\\sum_{k=1}^{n-1}\\dfrac{1}{k(k+2)}$</p><p>　　$\\displaystyle =1+\\sum_{k=1}^{n-1}\\dfrac{1}{2}\\left(\\dfrac{1}{k}-\\dfrac{1}{k+2}\\right)$</p><p>　　$\\displaystyle =1+\\dfrac{1}{2}\\left(1+\\dfrac{1}{2}-\\dfrac{1}{n}-\\dfrac{1}{n+1}\\right)$</p><p>　　$\\displaystyle =\\dfrac{7}{4}-\\dfrac{1}{2n}-\\dfrac{1}{2(n+1)}$</p><p>　　$\\displaystyle =\\dfrac{7n^{2}+3n-2}{4n(n+1)}$</p><p>これは $n=1$ のときも成り立つ</p><p>　$\\boldsymbol{a_{n}=\\dfrac{7n^{2}+3n-2}{4n(n+1)}}$</p>",
    "$a_{1}=1$，$a_{n}=a_{n-1}+2n-1$　$(n=2,3,\\cdots)$": "<p>$a_{n+1}=a_{n}+2(n+1)-1=a_{n}+2n+1$　$(n=1,2,\\cdots)$</p><p>とすると $n\\geqq 2$ のとき</p><p>　$\\displaystyle a_{n}=1+\\sum_{k=1}^{n-1}(2k+1)$</p><p>　　$\\displaystyle =1+2\\cdot \\dfrac{1}{2}(n-1)n+n-1$</p><p>　　$\\displaystyle =n^2$</p><p>これは $n=1$ のときも成り立つ</p><p>　$\\boldsymbol{a_{n}=n^2}$</p>",
    "$a_{1}=1$，$a_{n+1}=9a_{n}+8$": "<p>$a_{n+1}+1=9(a_{n}+1)$ と変形すると</p><p>　$a_{n}+1=(a_{1}+1)9^{n-1}=2\\cdot 9^{n-1}$</p><p>　$\\therefore \\ \\boldsymbol{a_{n}=2\\cdot 9^{n-1}-1}$</p>",
    "$a_{1}=3$，$a_{n+1}=5a_{n}+8$": "<p>$a_{n+1}+2=5(a_{n}+2)$ と変形すると</p><p>　$a_{n}+2=(a_{1}+2)5^{n-1}=5^{n}$</p><p>　$\\therefore \\ \\boldsymbol{a_{n}=5^{n}-2}$</p>",
    "$a_{1}=1$，$a_{n+1}=-a_{n}+1$": "<p>$a_{n+1}-\\dfrac{1}{2}=-\\left(a_{n}-\\dfrac{1}{2}\\right)$ と変形すると</p><p>　$a_{n}-\\dfrac{1}{2}=\\left(a_{1}-\\dfrac{1}{2}\\right)(-1)^{n-1}=\\dfrac{(-1)^{n-1}}{2}$</p><p>　$\\therefore \\ \\boldsymbol{a_{n}=\\dfrac{(-1)^{n-1}+1}{2}}$</p>",
    "$a_{1}=3$，$a_{n+1}=\\dfrac{1}{3}a_{n}+4$": "<p>$a_{n+1}-6=\\dfrac{1}{3}(a_{n}-6)$ と変形すると</p><p>　$a_{n}-6=(a_{1}-6)\\left(\\dfrac{1}{3}\\right)^{n-1}=-\\left(\\dfrac{1}{3}\\right)^{n-2}$</p><p>　$\\therefore \\ \\boldsymbol{a_{n}=-\\left(\\dfrac{1}{3}\\right)^{n-2}+6}$</p>",
    "$a_{1}=1$，$a_{n+1}=\\pi a_{n}-1$": "<p>$a_{n+1}-\\dfrac{1}{\\pi-1}=\\pi\\left(a_{n}-\\dfrac{1}{\\pi-1}\\right)$ と変形すると</p><p>$a_{n}-\\dfrac{1}{\\pi-1}=\\left(a_{1}-\\dfrac{1}{\\pi-1}\\right)\\pi^{n-1}=\\dfrac{\\pi-2}{\\pi-1}\\cdot \\pi^{n-1}$</p><p>　$\\therefore \\ \\boldsymbol{a_{n}=\\dfrac{\\pi^{n}-2\\pi^{n-1}+1}{\\pi-1}}$</p>",
    "$a_{1}=4$，$4a_{n+1}=3a_{n}-1$": "<p>$a_{n+1}=\\dfrac{3}{4}a_{n}-\\dfrac{1}{4}$ とする．</p><p>$a_{n+1}+1=\\dfrac{3}{4}(a_{n}+1)$ と変形すると</p><p>　$a_{n}+1=(a_{1}+1)\\left(\\dfrac{3}{4}\\right)^{n-1}=5\\left(\\dfrac{3}{4}\\right)^{n-1}$</p><p>　$\\therefore \\ \\boldsymbol{a_{n}=5\\left(\\dfrac{3}{4}\\right)^{n-1}-1}$</p>",
        },
        "B": {
            "$a_{1}=2$，$a_{n+1}=5a_{n}+2\\cdot 5^{n}$": "<p>両辺 $5^{n+1}$ で割ると．</p><p>　$\\dfrac{a_{n+1}}{5^{n+1}}=\\dfrac{a_{n}}{5^{n}}+\\dfrac{2}{5}$</p><p>これより</p><p>　$\\dfrac{a_{n}}{5^{n}}=\\dfrac{a_{1}}{5^{1}}+(n-1)\\dfrac{2}{5}=\\dfrac{2}{5}n$</p><p>　$\\therefore \\ \\boldsymbol{a_{n}=2n\\cdot5^{n-1}}$</p>",
    "$a_{1}=4$，$a_{n+1}=6a_{n}-2^{n+2}$": "<p>両辺 $2^{n+1}$ で割ると</p><p>　$\\dfrac{a_{n+1}}{2^{n+1}}=3\\cdot\\dfrac{a_{n}}{2^{n}}-2$</p><p>ここで $b_{n}=\\dfrac{a_{n}}{2^{n}}$ とおくと，$b_{1}=\\dfrac{a_{1}}{2^{1}}=2$．</p><p>　$b_{n+1}=3b_{n}-2$</p><p>$\\Longleftrightarrow \\ b_{n+1}-1=3(b_{n}-1)$</p><p>　$\\therefore \\ b_{n}-1=(b_{1}-1)3^{n-1}=3^{n-1}$</p><p>　$\\therefore \\ b_{n}=3^{n-1}+1$</p><p>　$\\therefore \\ \\boldsymbol{a_{n}}=2^{n}b_{n}\\boldsymbol{=2\\cdot6^{n-1}+2^{n}}$</p>",
    "$a_{1}=1$，$9a_{n+1}=a_{n}+\\dfrac{2}{3^{n}}$": "<p>両辺 $3^{n}$ をかけると．</p><p>　$3\\cdot3^{n+1}a_{n+1}=3^{n}a_{n}+2$</p><p>ここで $b_{n}=3^{n}a_{n}$ とおくと，$b_{1}=3a_{1}=3$．</p><p>　$3b_{n+1}=b_{n}+2$</p><p>$\\Longleftrightarrow \\ b_{n+1}-1=\\dfrac{1}{3}(b_{n}-1)$</p><p>これより</p><p>　$b_{n}-1=(b_{1}-1)\\left(\\dfrac{1}{3}\\right)^{n-1}=2\\left(\\dfrac{1}{3}\\right)^{n-1}$</p><p>　$\\therefore \\ b_{n}=2\\left(\\dfrac{1}{3}\\right)^{n-1}+1$</p><p>　$\\therefore \\ \\boldsymbol{a_{n}}=\\dfrac{b_{n}}{3^{n}}\\boldsymbol{=\\dfrac{2+3^{n-1}}{3^{2n-1}}}$</p>",
    "$a_{1}=1$，$a_{n+1}=-a_{n}+n(-1)^{n}$": "<p>両辺 $(-1)^{n+1}$ で割ると．</p><p>　$\\dfrac{a_{n+1}}{(-1)^{n+1}}=\\dfrac{a_{n}}{(-1)^{n}}-n$</p><p>これより，$n\\geqq 2$ のとき</p><p>　$\\displaystyle \\dfrac{a_{n}}{(-1)^{n}}=\\dfrac{a_{1}}{(-1)^{1}}+\\sum_{k=1}^{n-1}(-k)$</p><p>　　　$\\displaystyle =-1-\\dfrac{1}{2}(n-1)n$</p><p>　　　$\\displaystyle =\\dfrac{-n^{2}+n-2}{2}$</p><p>これは $n=1$ のときも成り立つ．</p><p>　$\\boldsymbol{a_{n}=\\dfrac{(n^{2}-n+2)(-1)^{n-1}}{2}}$</p>",
    "$a_{1}=1$，$a_{n+1}=\\dfrac{3a_{n}}{a_{n}+3}$": "<p>$a_{1}$ および漸化式の形から，$a_{n}\\neq 0$．両辺の逆数をとると</p><p>　$\\dfrac{1}{a_{n+1}}=\\dfrac{a_{n}+3}{3a_{n}}=\\dfrac{1}{a_{n}}+\\dfrac{1}{3}$</p><p>ここで $b_{n}=\\dfrac{1}{a_{n}}$ とおくと</p><p>　$b_{n+1}=b_{n}+\\dfrac{1}{3}$，$b_{1}=\\dfrac{1}{a_{1}}=1$</p><p>となるので</p><p>　$b_{n}=1+(n-1)\\dfrac{1}{3}=\\dfrac{n+2}{3}$</p><p>　$\\therefore \\ \\boldsymbol{a_{n}=\\dfrac{3}{n+2}}$</p>",
    "$a_{1}=\\dfrac{1}{11}$，$a_{n+1}=\\dfrac{a_{n}}{2-a_{n}}$": "<p>$a_{1}$ および漸化式の形から，$a_{n}\\neq 0$．両辺の逆数をとると</p><p>　$\\dfrac{1}{a_{n+1}}=\\dfrac{2-a_{n}}{a_{n}}=2\\cdot\\dfrac{1}{a_{n}}-1$</p><p>ここで $b_{n}=\\dfrac{1}{a_{n}}$ とおくと</p><p>　$b_{n+1}=2b_{n}-1$，$b_{1}=\\dfrac{1}{a_{1}}=11$</p><p>ここでこの式を</p><p>　$b_{n+1}-1=2\\left(b_{n}-1\\right)$</p><p>と変形すると</p><p>　$b_{n}-1=(b_{1}-1) \\cdot 2^{n-1}$</p><p>　$\\therefore \\ b_{n}=5\\cdot2^{n}+1$</p><p>　$\\therefore \\ \\boldsymbol{a_{n}}=\\dfrac{1}{b_{n}}\\boldsymbol{=\\boldsymbol{\\dfrac{1}{5\\cdot2^{n}+1}}}$</p>",
    "$a_{1}=1$，$a_{n+1}=\\dfrac{a_{n}}{2na_{n}+1}$": "<p>$a_{1}$ および漸化式の形から，$a_{n}\\neq 0$．両辺の逆数をとると</p><p>　$\\dfrac{1}{a_{n+1}}=\\dfrac{2na_{n}+1}{a_{n}}=\\dfrac{1}{a_{n}}+2n$</p><p>ここで $b_{n}=\\dfrac{1}{a_{n}}$ とおくと</p><p>　$b_{n+1}=b_{n}+2n$，$b_{1}=\\dfrac{1}{a_{1}}=1$</p><p>$n\\geqq 2$ のとき</p><p>　$\\displaystyle b_{n}=b_{1}+\\sum_{k=1}^{n-1}2k$</p><p>　　$\\displaystyle =1+(n-1)n$</p><p>これは $n=1$ のときも成り立つ</p><p>　$\\boldsymbol{a_{n}}=\\dfrac{1}{b_{n}}\\boldsymbol{=\\boldsymbol{\\dfrac{1}{n^{2}-n+1}}}$</p>",
    "$a_{1}=\\dfrac{1}{2}$，$a_{n+1}=\\dfrac{1}{2}a_{n}+n+1$": "<p>　$a_{n+1}+\\alpha(n+1)+\\beta=\\dfrac{1}{2}(a_{n}+\\alpha n+\\beta)$</p><p>$\\Longleftrightarrow \ a_{n+1}=\\dfrac{1}{2}a_{n}-\\dfrac{1}{2}\\alpha n-\\alpha-\\dfrac{1}{2}\\beta$</p><p>として，これを与式と比較すると</p><p>　$\\begin{cases} -\\dfrac{1}{2}\\alpha=1 \\\\ -\\alpha-\\dfrac{1}{2}\\beta=1 \\end{cases} \ \ \\therefore \\alpha=-2，\\beta=2$</p><p>つまり与式を $a_{n+1}-2(n+1)+2=\\dfrac{1}{2}(a_{n}-2n+2)$ と変形できるので</p><p>$a_{n}-2n+2=(a_{1}-2+2)\\left(\\dfrac{1}{2}\\right)^{n-1}=\\left(\\dfrac{1}{2}\\right)^{n}$</p><p>　$\\therefore \\ \\boldsymbol{a_{n}=\\left(\\dfrac{1}{2}\\right)^{n}+2n-2}$</p>",
    "$a_{1}=1$，$a_{n+1}=-2a_{n}+9n$": "<p>　$a_{n+1}+\\alpha(n+1)+\\beta=-2(a_{n}+\\alpha n+\\beta)$</p><p>$\\Longleftrightarrow \ a_{n+1}=-2a_{n}-3\\alpha n-\\alpha-3\\beta$</p><p>として，これを与式と比較すると</p><p>　$\\begin{cases} -3\\alpha=9 \\\\ -\\alpha-3\\beta=0 \\end{cases} \ \ \\therefore \\alpha=-3，\\beta=1$</p><p>つまり与式を $a_{n+1}-3(n+1)+1=-2(a_{n}-3n+1)$ と変形できるので</p><p>$a_{n}-3n+1=(a_{1}-3+1)(-2)^{n-1}=-(-2)^{n-1}$</p><p>　$\\therefore \\ \\boldsymbol{a_{n}=-(-2)^{n-1}+3n-1}$</p>",
    "$a_{1}=1$，$a_{n+1}=2a_{n}+n^{2}$": "<p>　$a_{n+1}+\\alpha(n+1)^{2}+\\beta(n+1)+\\gamma$</p><p>$=2(a_{n}+\\alpha n^{2}+\\beta n+\\gamma)$</p><p>$\\Longleftrightarrow \ a_{n+1}=2a_{n}+\\alpha n^{2}+(-2\\alpha+\\beta)n-\\alpha-\\beta+\\gamma$</p><p>として，これを与式と比較すると</p><p>　$\\alpha=1，\\beta=2，\\gamma=3$</p><p>つまり与式を</p><p>　$a_{n+1}+(n+1)^{2}+2(n+1)+3$</p><p>$=2(a_{n}+n^{2}+2n+3)$</p><p>と変形できるので</p><p>$a_{n}+n^{2}+2n+3=(a_{1}+1+2+3)2^{n-1}=7\\cdot2^{n-1}$</p><p>　$\\therefore \\ \\boldsymbol{a_{n}=7\\cdot2^{n-1}-n^{2}-2n-3}$</p>",
    "$a_{1}=\\dfrac{11}{2}$，$a_{n+1}=3a_{n}+2n+4^{n}$": "<p>　$a_{n+1}+\\alpha(n+1)+\\beta+\\gamma \\cdot 4^{n+1}$</p><p>$=3(a_{n}+\\alpha n+\\beta +\\gamma\\cdot 4^{n})$</p><p>$\\Longleftrightarrow \ a_{n+1}=3a_{n}+2\\alpha n-\\alpha+2\\beta-\\gamma \\cdot 4^{n}$</p><p>として，これを与式と比較すると</p><p>　$\\alpha=1，\\beta=\\dfrac{1}{2}，\\gamma=-1$</p><p>つまり与式を</p><p>　$a_{n+1}+(n+1)+\\dfrac{1}{2}-4^{n+1}$</p><p>$=3\\left(a_{n}+n+\\dfrac{1}{2}-4^{n}\\right)$</p><p>と変形できるので</p><p>$a_{n}+n+\\dfrac{1}{2}-4^{n}=\\left(a_{1}+1+\\dfrac{1}{2}-4^{1}\\right)3^{n-1}=3^{n}$</p><p>　$\\therefore \\ \\boldsymbol{a_{n}=3^{n}-n-\\dfrac{1}{2}+4^{n}}$</p>",
    "$a_{1}=3$，$a_{2}=5$，$a_{n+2}=8a_{n+1}-7a_{n}$": "<p>特性方程式</p><p>　$\\alpha^{2}=8\\alpha-7$</p><p>を解くと，$\\alpha=1$，$7$ ．</p><p>与式を</p><p>　$\\begin{cases} {a_{n+2}-a_{n+1}=7(a_{n+1}-a_{n})} \\\\ a_{n+2}-7a_{n+1}=a_{n+1}-7a_{n}\\end{cases}$</p><p>と変形すると，$\\{a_{n+1}-a_{n}\\}$ は初項 $a_{2}-a_{1}=2$，公比 $7$，$\\{a_{n+1}-7a_{n}\\}$ は初項 $a_{2}-7a_{1}=-16$，公比 $1$のそれぞれ等比数列なので，一般項は</p><p>　$\\begin{cases} a_{n+1}-a_{n}=2\\cdot7^{n-1} \\\\ a_{n+1}-7a_{n}=-16\\end{cases}$</p><p>辺々引くと</p><p>　$6a_{n}=2\\cdot7^{n-1}+16$</p><p>　$\\therefore \\ \\boldsymbol{a_{n}=\\dfrac{7^{n-1}+8}{3}}$</p>",
    "$a_{1}=0$，$a_{2}=2$，$a_{n+2}-4a_{n+1}+4a_{n}=0$": "<p>特性方程式</p><p>　$\\alpha^{2}-4\\alpha+4=0$</p><p>を解くと，$\\alpha=2$．</p><p>与式を</p><p>　$a_{n+2}-2a_{n+1}=2(a_{n+1}-2a_{n})$</p><p>と変形すると，$\\{a_{n+1}-2a_{n}\\}$ は初項 $a_{2}-2a_{1}=2$，公比 $2$ の等比数列なので，一般項は</p><p>　$a_{n+1}-2a_{n}=2\\cdot2^{n-1}=2^{n}$</p><p>変形すると</p><p>　$a_{n+1}=2a_{n}+2^{n}$</p><p>両辺 $2^{n+1}$ で割ると</p><p>　$\\dfrac{a_{n+1}}{2^{n+1}}=\\dfrac{a_{n}}{2^{n}}+\\dfrac{1}{2}$</p><p>これより</p><p>　$\\dfrac{a_{n}}{2^{n}}=\\dfrac{a_{1}}{2^{1}}+(n-1)\\dfrac{1}{2}=\\dfrac{n-1}{2}$</p><p>　$\\therefore \\ \\boldsymbol{a_{n}=(n-1)2^{n-1}}$</p>",
    "$a_{1}=1$，$a_{2}=1$，$a_{n+2}=a_{n+1}+a_{n}$": "<p>特性方程式</p><p>　$\\alpha^{2}=\\alpha+1$</p><p>$\\Longleftrightarrow \\ \\alpha^{2}-\\alpha-1=0$</p><p>の解を，$\\alpha=\\alpha_{1}$，$\\alpha_{2}$ とおく．</p><p>与式を</p><p>　$\\begin{cases} {a_{n+2}-\\alpha_{1} a_{n+1}=\\alpha_{2} (a_{n+1}-\\alpha_{1} a_{n})} \\\\ a_{n+2}-\\alpha_{2} a_{n+1}=\\alpha_{1} (a_{n+1}-\\alpha_{2} a_{n})\\end{cases}$</p><p>と変形すると，$\\{a_{n+1}-\\alpha_{1}a_{n}\\}$，$\\{a_{n+1}-\\alpha_{2}a_{n}\\}$ の一般項は</p><p>　$\\begin{cases} a_{n+1}-\\alpha_{1}a_{n}=(1-\\alpha_{1})\\alpha_{2}^{n-1} \\\\ a_{n+1}-\\alpha_{2}a_{n}=(1-\\alpha_{2})\\alpha_{1}^{n-1}\\end{cases}$</p><p>辺々引くと</p><p>　$(\\alpha_{2}-\\alpha_{1})a_{n}=\\left\\{(1-\\alpha_{1})\\alpha_{2}^{n-1}-(1-\\alpha_{2})\\alpha_{1}^{n-1}\\right\\}$</p><p>ここで，$\\alpha_{1}=\\dfrac{1-\\sqrt{5}}{2}$，$\\alpha_{2}=\\dfrac{1+\\sqrt{5}}{2}$ として</p><p>　$\\sqrt{5}a_{n}=\\left(\\dfrac{1+\\sqrt{5}}{2}\\right)^{n}-\\left(\\dfrac{1-\\sqrt{5}}{2}\\right)^{n}$</p><p>$\\therefore \\ \\boldsymbol{a_{n}=\\dfrac{1}{\\sqrt{5}}\\left\\{\\left(\\dfrac{1+\\sqrt{5}}{2}\\right)^{n}-\\left(\\dfrac{1-\\sqrt{5}}{2}\\right)^{n}\\right\\}}$</p>",
    "$a_{1}=4$，$b_{1}=1$，$a_{n+1}=a_{n}+3b_{n}$，$b_{n+1}=3a_{n}+b_{n}$": "<p>$a_{n+1}+\\alpha b_{n+1}=\\beta(a_{n}+\\alpha b_{n})$ とおく．左辺に与式を代入すると</p><p>　$a_{n}+3b_{n}+\\alpha(3a_{n}+b_{n})=\\beta(a_{n}+\\alpha b_{n})$</p><p>$\\Longleftrightarrow \\ (1+3\\alpha)a_{n}+(3+\\alpha)b_{n}=\\beta a_{n}+\\beta \\alpha b_{n}$</p><p>両辺係数比較して</p><p>　$\\begin{cases} 1+3\\alpha=\\beta \\\\ 3+\\alpha=\\beta \\alpha\\end{cases}$</p><p>これを解くと</p><p>　$(\\alpha,\\beta)=(-1,-2)，\\left(1,4\\right)$</p><p>より与式を</p><p>　$\\begin{cases}a_{n+1}- b_{n+1}=-2(a_{n}- b_{n}) \\\\ a_{n+1}+b_{n+1}=4\\left(a_{n}+b_{n}\\right)　\\end{cases}$</p><p>と変形できるから，$\\{a_{n}-b_{n}\\}$，$\\left\\{a_{n}+b_{n}\\right\\}$ の一般項は</p><p>　$\\begin{cases}a_{n}- b_{n}=(a_{1}-b_{1}) (-2)^{n-1}=3 (-2)^{n-1}　\\\\ a_{n}+b_{n}=\\left(a_{1}+b_{1}\\right)4^{n-1}=5\\cdot 4^{n-1} \\end{cases}$</p><p>辺々足すと</p><p>　$2a_{n}=3 (-2)^{n-1}+5\\cdot4^{n-1}$</p><p>　$\\therefore \\ \\boldsymbol{a_{n}=\\dfrac{1}{2}\\left\\{3 (-2)^{n-1}+5\\cdot4^{n-1}\\right\\}}$</p><p>辺々引くと</p><p>　$-2b_{n}=3 (-2)^{n-1}+5\\cdot4^{n-1}$</p><p>　$\\therefore \\ \\boldsymbol{b_{n}=\\dfrac{1}{2}\\left\\{5\\cdot4^{n-1}-3 (-2)^{n-1}\\right\\}}$</p>",
    // 異なる2つの実数解のとき，足したり引いたりで出せる
    "$a_{1}=4$，$b_{1}=0$，$a_{n+1}=a_{n}+9b_{n}$，$b_{n+1}=-a_{n}+7b_{n}$": "<p>$a_{n+1}+\\alpha b_{n+1}=\\beta(a_{n}+\\alpha b_{n})$ とおく．左辺に与式を代入すると</p><p>　$a_{n}+9b_{n}+\\alpha(-a_{n}+7b_{n})=\\beta(a_{n}+\\alpha b_{n})$</p><p>$\\Longleftrightarrow \\ (1-\\alpha)a_{n}+(9+7\\alpha)b_{n}=\\beta a_{n}+\\beta \\alpha b_{n}$</p><p>両辺係数比較して</p><p>　$\\begin{cases} 1-\\alpha=\\beta \\\\ 9+7\\alpha=\\beta \\alpha\\end{cases}$</p><p>これを解くと</p><p>　$(\\alpha,\\beta)=(-3,4)$</p><p>より与式を</p><p>　$a_{n+1}-3b_{n+1}=4(a_{n}-3b_{n})$</p><p>と変形できるから，$\\{a_{n}-3b_{n}\\}$ の一般項は</p><p>　$a_{n}-3b_{n}=(a_{1}-3b_{1})4^{n-1}=4^{n}$</p><p>$\\Longleftrightarrow \\ a_{n}-4^{n}=3b_{n}$</p><p>これを与式に戻すと</p><p>　$a_{n+1}=a_{n}+3(a_{n}-4^{n})=4a_{n}-3\\cdot4^{n}$</p><p>両辺 $4^{n+1}$ で割ると</p><p>　$\\dfrac{a_{n+1}}{4^{n+1}}=\\dfrac{a_{n}}{4^{n}}-\\dfrac{3}{4}$</p> <p>$\\left\\{\\dfrac{a_{n}}{4^{n}}\\right\\}$ の一般項は</p><p>　$\\dfrac{a_{n}}{4^{n}}=\\dfrac{a_{1}}{4^{1}}+(n-1)\\left(-\\dfrac{3}{4}\\right)=\\dfrac{-3n+7}{4}$</p><p>　$\\therefore \\ \\boldsymbol{a_{n}=(7-3n)4^{n-1}}$</p><p>$a_{n}-4^{n}=3b_{n}$ に戻すと</p><p>　$3b_{n}=(7-3n)4^{n-1}-4^{n}$</p><p>　$\\therefore \\ \\boldsymbol{b_{n}=(1-n)4^{n-1}}$</p>",
    // 重解のとき
    "$a_{1}=1$，$b_{1}=1$，$a_{n+1}=a_{n}+2b_{n}$，$b_{n+1}=a_{n}+b_{n}$": "<p>$a_{n+1}+\\alpha b_{n+1}=\\beta(a_{n}+\\alpha b_{n})$ とおく．左辺に与式を代入すると</p><p>　$a_{n}+2b_{n}+\\alpha(a_{n}+b_{n})=\\beta(a_{n}+\\alpha b_{n})$</p><p>$\\Longleftrightarrow \\ (1+\\alpha)a_{n}+(2+\\alpha)b_{n}=\\beta a_{n}+\\beta \\alpha b_{n}$</p><p>両辺係数比較して</p><p>　$\\begin{cases} 1+\\alpha=\\beta \\\\ 2+\\alpha=\\beta \\alpha\\end{cases}$</p><p>これを解くと</p><p>　$(\\alpha,\\beta)=(\\sqrt{2},1+\\sqrt{2})，(-\\sqrt{2},1-\\sqrt{2})$</p><p>より与式を</p><p>　$\\begin{cases}a_{n+1}+\\sqrt{2}b_{n+1}=(1+\\sqrt{2})(a_{n}+\\sqrt{2}b_{n}) \\\\ a_{n+1}-\\sqrt{2}b_{n+1}=(1-\\sqrt{2})(a_{n}-\\sqrt{2}b_{n}) \\end{cases}$</p><p>と変形できるから，$\\{a_{n}+\\sqrt{2}b_{n}\\}$，$\\{a_{n}-\\sqrt{2}b_{n}\\}$ の一般項は</p><p>　$\\begin{cases}a_{n}+\\sqrt{2}b_{n}=(a_{1}+\\sqrt{2}b_{1})(1+\\sqrt{2})^{n-1}=(1+\\sqrt{2})^{n}　\\\\ a_{n}-\\sqrt{2}b_{n}=(a_{1}-\\sqrt{2}b_{1})(1-\\sqrt{2})^{n-1}=(1-\\sqrt{2})^{n} \\end{cases}$</p><p>辺々足すと</p><p>　$2a_{n}=(1+\\sqrt{2})^{n}+(1-\\sqrt{2})^{n}$</p><p>　$\\therefore \\ \\boldsymbol{a_{n}=\\dfrac{(1+\\sqrt{2})^{n}+(1-\\sqrt{2})^{n}}{2}}$</p><p>辺々引くと</p><p>　$2\\sqrt{2}b_{n}=(1+\\sqrt{2})^{n}-(1-\\sqrt{2})^{n}$</p><p>　$\\therefore \\ \\boldsymbol{b_{n}=\\dfrac{(1+\\sqrt{2})^{n}-(1-\\sqrt{2})^{n}}{2\\sqrt{2}}}$</p>",
    // 異なる2つの実数解だが解が無理数
    "$S_{n}=\\dfrac{3}{2}a_{n}+3-4n$": "<p>与式の $n$ のナンバリングを上にずらして，与式と辺々引くと</p><p>　　$S_{n+1}=\\dfrac{3}{2}a_{n+1}+3-4(n+1)$</p><p>　$\\underline{-)　S_{n}=\\dfrac{3}{2}a_{n}+3-4n　　　}$</p><p>　　$a_{n+1}=\\dfrac{3}{2}a_{n+1}-\\dfrac{3}{2}a_{n}-4$</p><p>　$\\Longleftrightarrow  \\ a_{n+1}=3a_{n}+8$</p><p>　$\\Longleftrightarrow  \\ a_{n+1}+4=3(a_{n}+4)$</p><p>$a_{1}$ を得るには与式に $n=1$ を代入すれば</p><p>　$S_{1}=a_{1}=\\dfrac{3}{2}a_{1}+3-4$ $\\Longleftrightarrow $ $a_{1}=2$</p><p>となるから，$\\{a_{n}+4\\}$ の一般項は</p><p>　$a_{n}+4=(a_{1}+4)3^{n-1}=6\\cdot3^{n-1}=2\\cdot3^{n}$</p><p>　$\\boldsymbol {\\therefore \\ a_{n}=2\\cdot3^{n}-4}$</p>",
    "$a_{1}=1$，$S_{n+1}=2S_{n}+4$": "<p>与式の $n$ のナンバリングを下にずらして，与式と辺々引くと</p><p>　　$S_{n+1}=2S_{n}+4$</p><p>　$\\underline{-)　S_{n}=2S_{n-1}+4　(n\\geqq 2)}$</p><p>　　$a_{n+1}=2a_{n}$ $(n\\geqq 2)$</p><p>　$\\therefore  \\ a_{n}=a_{2}\\cdot 2^{n-2}$ $(n\\geqq 2)$</p><p>ここで与式に $n=1$ を代入すると</p><p>　$S_{2}=2S_{1}+4$ $\\Longleftrightarrow $ $a_{1}+a_{2}=2a_{1}+4$</p><p>となるから，$a_{2}=5$．</p><p>　$\\therefore \\ \\boldsymbol {a_{n}=}\\begin{cases}\\boldsymbol {5\\cdot2^{n-2} \\ (n\\geqq 2)} \\\\ \\boldsymbol {1 \\ \\ (n=1)}\\end{cases}$</p>",
        },
        "C": {
            
    "$a_{1}=2$，$3na_{n+1}=(n+1)a_{n}$":
    // 上級1，階比型
    "<p>両辺 $3n(n+1)$ で割ると</p><p>　$\\dfrac{a_{n+1}}{n+1}=\\dfrac{1}{3}\\cdot\\dfrac{a_{n}}{n}$</p><p>ここで $b_{n}=\\dfrac{a_{n}}{n}$ とおくと</p><p>　$b_{n+1}=\\dfrac{1}{3}b_{n}$</p><p>となるので</p><p>　$b_{n}=b_{1}\\left(\\dfrac{1}{3}\\right)^{n-1}=\\dfrac{a_{1}}{1}\\left(\\dfrac{1}{3}\\right)^{n-1}=2\\left(\\dfrac{1}{3}\\right)^{n-1}$</p><p>　$\\therefore \\ \\boldsymbol{a_{n}=2n\\left(\\dfrac{1}{3}\\right)^{n-1}}$</p>",
    

    "$a_{1}=2$，$na_{n+1}=(n+2)a_{n}+2$":
    // 上級2，階比型，階差型
    "<p>両辺 $n(n+1)(n+2)$ で割ると</p><p>　$\\dfrac{a_{n+1}}{(n+1)(n+2)}=\\dfrac{a_{n}}{n(n+1)}+\\dfrac{2}{n(n+1)(n+2)}$</p><p>ここで $b_{n}=\\dfrac{a_{n}}{n(n+1)}$ とおくと</p><p>　$b_{n+1}=b_{n}+\\dfrac{2}{n(n+1)(n+2)}$</p><p>となるので</p><p>$n\\geqq 2$ のとき</p><p>$\\displaystyle b_{n}=b_{1}+\\sum_{k=1}^{n-1}\\dfrac{2}{k(k+1)(k+2)}$</p><p>　$\\displaystyle =1+\\sum_{k=1}^{n-1}\\left\\{\\dfrac{1}{k(k+1)}-\\dfrac{1}{(k+1)(k+2)}\\right\\}$</p><p>　$\\displaystyle =1+\\left(\\dfrac{1}{2}-\\dfrac{1}{n(n+1)}\\right)$</p><p>　$\\displaystyle =\\dfrac{3}{2}-\\dfrac{1}{n(n+1)}$</p><p>　$\\displaystyle =\\dfrac{3n(n+1)-2}{2n(n+1)}$</p><p>これは $n=1$ のときも成り立つ．$a_{n}=n(n+1)b_{n}$ より</p><p>　$\\boldsymbol{a_{n}=\\dfrac{3n^{2}+3n-2}{2}}$</p>",
    

    "$a_{1}=2$，$a_{n+1}=32a_{n}^{6}$":
    // 上級3，対数型
    "<p>$a_{1}$ および漸化式の形から $a_{n}&gt;0$．両辺 $2$ を底とする対数をとると</p><p>　$\\log_{2}a_{n+1}=\\log_{2}32a_{n}^{6}=6\\log_{2}a_{n}+5$</p><p>ここで $b_{n}=\\log_{2}a_{n}$ とおくと</p><p>　$b_{n+1}=6b_{n}+5$，$b_{1}=\\log_{2}a_{1}=1$</p><p>となり</p><p>　$b_{n+1}+1=6(b_{n}+1)$</p><p>とすると</p><p>　$b_{n}+1=(b_{1}+1)6^{n-1}=2\\cdot 6^{n-1}$</p><p>　$\\therefore \\ b_{n}=2\\cdot 6^{n-1}-1$</p><p>　$\\therefore \\ \\boldsymbol{a_{n}}=2^{b_{n}}\\boldsymbol{=2^{2\\cdot 6^{n-1}-1}}$</p>",
    

    "$a_{1}=2$，$4a_{n+1}^{5}=a_{n}^{6}$":
    // 上級4，対数型
    "<p>$a_{1}$ および漸化式の形から $a_{n}&gt;0$．両辺 $2$ を底とする対数をとると</p><p>　$2+5\\log_{2}a_{n+1}=6\\log_{2}a_{n}$</p><p>ここで $b_{n}=\\log_{2}a_{n}$ とおくと</p><p>　$2+5b_{n+1}=6b_{n}$，$b_{1}=\\log_{2}a_{1}=1$</p><p>となり</p><p>　$b_{n+1}-2=\\dfrac{6}{5}(b_{n}-2)$</p><p>とすると</p><p>　$b_{n}-2=(b_{1}-2)\\left(\\dfrac{6}{5}\\right)^{n-1}=-\\left(\\dfrac{6}{5}\\right)^{n-1}$</p><p>　$\\therefore \\ b_{n}=2-\\left(\\dfrac{6}{5}\\right)^{n-1}$</p><p>　$\\therefore \\ \\boldsymbol{a_{n}}=2^{b_{n}}\\boldsymbol{=2^{2-\\left(\\frac{6}{5}\\right)^{n-1}}}$</p>",
    

    "$a_{1}=9$，$a_{n+1}=3^{n}a_{n}^{2}$":
    // 上級5，対数型
    "<p>$a_{1}$ および漸化式の形から $a_{n}&gt;0$．両辺 $3$ を底とする対数をとると</p><p>　$\\log_{3}a_{n+1}=\\log_{3}3^{n}a_{n}^{2}=2\\log_{3}a_{n}+n$</p><p>ここで $b_{n}=\\log_{3}a_{n}$ とおくと</p><p>　$b_{n+1}=2b_{n}+n$，$b_{1}=\\log_{3}a_{1}=2$</p><p>となるので</p><p>　$b_{n+1}+\\alpha(n+1)+\\beta=2(b_{n}+\\alpha n+\\beta)$</p><p>$\\Longleftrightarrow \\ b_{n+1}=2b_{n}+\\alpha n-\\alpha+\\beta$</p><p>とすると</p><p>　$\\begin{cases} \\alpha=1 \\\\ -\\alpha+\\beta=0 \\end{cases} \\ \\ \\therefore \\alpha=1，\\beta=1$</p><p>つまり $b_{n+1}+(n+1)+1=2(b_{n}+n+1)$ と変形できるので</p><p>　$b_{n}+n+1=(b_{1}+1+1)2^{n-1}=4\\cdot 2^{n-1}$</p><p>　$\\therefore \\ b_{n}=2^{n+1}-n-1$</p><p>　$\\therefore \\ \\boldsymbol{a_{n}}=3^{b_{n}}\\boldsymbol{=3^{2^{n+1}-n-1}}$</p>",
    

    "$a_{1}=7$，$a_{n+1}=\\dfrac{7a_{n}+3}{a_{n}+5}$":
    // 上級6，1次分数型
    "<p>特性方程式</p><p>　$\\alpha=\\dfrac{7\\alpha+3}{\\alpha+5}$</p><p>を解くと $\\alpha=-1$，$3$ ．</p><p>　$b_{n}=\\dfrac{a_{n}+1}{a_{n}-3}$</p><p>とおく( $a_{n}=3$ とすると $a_{n+1}=3$ となり，$a_{1}=3$ となり矛盾．つまり $a_{n}\\neq 3$)．</p><p>　$b_{n+1}=\\dfrac{a_{n+1}+1}{a_{n+1}-3}$</p><p>　　　$=\\dfrac{\\dfrac{7a_{n}+3}{a_{n}+5}+1}{\\dfrac{7a_{n}+3}{a_{n}+5}-3}$</p><p>　　　$=\\dfrac{7a_{n}+3+(a_{n}+5)}{7a_{n}+3-3(a_{n}+5)}$</p><p>　　　$=\\dfrac{8a_{n}+8}{4a_{n}-12}=2b_{n}$</p><p>　$\\therefore \\ b_{n}=b_{1}\\cdot 2^{n-1}=2\\cdot 2^{n-1}=2^{n}$</p><p>また</p><p>$b_{n}=\\dfrac{a_{n}+1}{a_{n}-3} \\Longleftrightarrow (a_{n}-3)b_{n}=a_{n}+1$</p><p>　$\\hspace{23mm} \\Longleftrightarrow (b_{n}-1)a_{n}=3b_{n}+1$</p><p>　$\\hspace{23mm} \\Longleftrightarrow a_{n}=\\dfrac{3b_{n}+1}{b_{n}-1}$</p><p>　$\\therefore \\ \\boldsymbol{a_{n}=\\dfrac{3\\cdot 2^{n}+1}{2^{n}-1}}$</p>",
    

    "$a_{1}=4$，$a_{n+1}=\\dfrac{4a_{n}-9}{a_{n}-2}$":
    // 上級7，1次分数型
    "<p>特性方程式</p><p>　$\\alpha=\\dfrac{4\\alpha-9}{\\alpha-2}$</p><p>を解くと，$\\alpha=3$．$b_{n}=a_{n}-3$ とおくと</p><p>　$b_{n+1}=a_{n+1}-3$</p><p>　　　$=\\dfrac{4a_{n}-9}{a_{n}-2}-3$</p><p>　　　$=\\dfrac{a_{n}-3}{a_{n}-2}$</p><p>　　　$=\\dfrac{b_{n}}{b_{n}+1}$</p><p>$b_{1}=1$ および漸化式の形から $b_{n}>0$．両辺の逆数とると</p><p>　$\\dfrac{1}{b_{n+1}}=\\dfrac{b_{n}+1}{b_{n}}=\\dfrac{1}{b_{n}}+1$</p><p>ここで $\\left\\{\\dfrac{1}{b_{n}}\\right\\}$ は初項 $\\dfrac{1}{b_{1}}=1$，公差 $1$ の等差数列より</p><p>　$\\dfrac{1}{b_{n}}=n$</p><p>$\\Longleftrightarrow b_{n}=\\dfrac{1}{n}=a_{n}-3$</p><p>$\\Longleftrightarrow a_{n}=\\dfrac{1}{n}+3$</p><p>　$\\therefore \\ \\boldsymbol{a_{n}=\\dfrac{3n+1}{n}}$</p>",
    

    "$a_{1}=1$，$a_{2}=2$，$\\dfrac{a_{n+2}}{a_{n}^{2}}=\\dfrac{1}{a_{n+1}}$":
    // 上級8，対数型，隣接3項間
    "<p>$a_{1}$，$a_{2}$ および漸化式の形から $a_{n}&gt;0$．両辺 $2$ を底とする対数をとると</p><p>　$\\log_{2}a_{n+2}-2\\log_{2}a_{n}=-\\log_{2}a_{n+1}$</p><p>ここで $b_{n}=\\log_{2}a_{n}$ とおくと</p><p>$b_{n+2}-2b_{n}=-b_{n+1} \\ \\Longleftrightarrow \\ b_{n+2}+b_{n+1}-2b_{n}=0$</p><p>となり，これを以下のように変形すると</p><p>　$\\begin{cases} b_{n+2}+2b_{n+1}=b_{n+1}+2b_{n} \\\\ b_{n+2}-b_{n+1}=-2(b_{n+1}-b_{n})\\end{cases}$</p><p>$\\{b_{n+1}+2b_{n}\\}$ ，$\\{b_{n+1}-b_{n}\\}$ の一般項はそれぞれ</p><p>$\\begin{cases} b_{n+1}+2b_{n}=b_{2}+2b_{1}=1 \\\\ b_{n+1}-b_{n}=(b_{2}-b_{1})(-2)^{n-1}=(-2)^{n-1}\\end{cases}$</p><p>辺々引くと</p><p>　$3b_{n}=1-(-2)^{n-1}$</p><p>　$\\therefore \\ b_{n}=\\dfrac{1}{3}\\{1-(-2)^{n-1}\\}$</p><p>　$\\therefore \\ \\boldsymbol{a_{n}=2^{\\frac{1}{3}\\{1-(-2)^{n-1}\\}}}$</p>",
    

    "$a_{1}=1$，$a_{2}=4$，$a_{n+2}=4a_{n+1}-3a_{n}-2$":
    // 上級9，隣接3項間の応用
    "<p>特性方程式</p><p>　$\\alpha^2=4\\alpha-3$</p><p>を解くと，$\\alpha=1$，$3$ ．</p><p>与式を</p><p>　$\\begin{cases}a_{n+2}-a_{n+1}=3(a_{n+1}-a_{n})-2 \\\\ a_{n+2}-3a_{n+1}=a_{n+1}-3a_{n}-2\\end{cases}$</p><p>と変形すると，$a_{n+1}-a_{n}=b_{n}$，$a_{n+1}-3a_{n}=c_{n}$ とおけば</p><p>　$\\begin{cases} b_{n+1}=3b_{n}-2 \\hspace{6mm} b_{1}=a_{2}-a_{1}=3 \\\\ c_{n+1}=c_{n}-2 \\hspace{6mm} c_{1}=a_{2}-3a_{1}=1 \\end{cases}$</p><p>となる．$b_{n+1}-1=3(b_{n}-1)$ とできるので，$\\{b_{n}-1\\}$，$\\{c_{n}\\}$ の一般項は</p><p>　$\\begin{cases} b_{n}-1=(b_{1}-1)3^{n-1}=2\\cdot3^{n-1} \\\\ c_{n}=c_{1}+(n-1)(-2)=-2n+3\\end{cases}$</p><p>つまり</p><p>　$\\begin{cases} b_{n}=a_{n+1}-a_{n}=2\\cdot3^{n-1}+1 \\\\ c_{n}=a_{n+1}-3a_{n}=-2n+3\\end{cases}$</p><p>辺々引くと</p><p>　$2a_{n}=2\\cdot3^{n-1}+2n-2$</p><p>　$\\therefore \\ \\boldsymbol{a_{n}=3^{n-1}+n-1}$</p>",
    

    "$a_{1}=1$，$a_{2}=2$，$a_{n+2}=4a_{n+1}-4a_{n}+6$":
    // 上級10，隣接3項間の応用
    "<p>$a_{n}-k=b_{n}$ $\\Longleftrightarrow \\ a_{n}=b_{n}+k$ とすると</p><p>　$b_{n+2}+k=4(b_{n+1}+k)-4(b_{n}+k)+6$</p><p>$\\Longleftrightarrow \\ b_{n+2}-4b_{n+1}+4b_{n}=6-k$</p><p>ここで，$k=6$ とおくと，$b_{1}=a_{1}-6=-5$，$b_{2}=a_{2}-6=-4$．</p><p>さらに</p><p>　$b_{n+2}-2b_{n+1}=2(b_{n+1}-2b_{n})$</p><p>と変形すると，$\\{b_{n+1}-2b_{n}\\}$ は初項 $b_{2}-2b_{1}=6$，公比 $2$ の等比数列なので，一般項は</p><p>　$b_{n+1}-2b_{n}=6\\cdot2^{n-1}$</p><p>変形すると</p><p>　$b_{n+1}=2b_{n}+3\\cdot 2^{n}$</p><p>両辺 $2^{n+1}$ で割ると</p><p>　$\\dfrac{b_{n+1}}{2^{n+1}}=\\dfrac{b_{n}}{2^{n}}+\\dfrac{3}{2}$</p><p>$\\left\\{\\dfrac{b_{n}}{2^{n}}\\right\\}$ は初項 $\\dfrac{b_{1}}{2^{1}}=-\\dfrac{5}{2}$，公差 $\\dfrac{3}{2}$ の等差数列より</p><p>　$\\dfrac{b_{n}}{2^{n}}=-\\dfrac{5}{2}+(n-1)\\dfrac{3}{2}=\\dfrac{3n-8}{2}$</p><p>$\\therefore \\ b_{n}=\\dfrac{3n-8}{2}\\cdot 2^{n}=(3n-8)2^{n-1}$</p><p>$\\therefore \\ \\boldsymbol{a_{n}}=b_{n}+6\\boldsymbol{=(3n-8)2^{n-1}+6}$</p>",
    

    "$a_{1}=5$，$a_{2}=8$，$a_{n+2}=5a_{n+1}-6a_{n}+4n$":
    // 上級11，隣接3項間の応用
    "<p>$a_{n}=b_{n}+\\alpha n+\\beta$ として，与式に代入すると</p><p>$b_{n+2}+\\alpha(n+2)+\\beta=5(b_{n+1}+\\alpha(n+1)+\\beta)-6(b_{n}+\\alpha n+\\beta)+4n$</p><p>$\\Longleftrightarrow \\ b_{n+2}-5b_{n+1}+6b_{n}+(2\\alpha-4)n-3\\alpha+2\\beta=0$</p><p>ここで，$\\alpha=2$，$\\beta=3$ とおくと，$b_{n}=a_{n}-2n-3$．$\\{b_{n}\\}$ の漸化式は</p><p>　$\\begin{cases} b_{1}=a_{1}-2-3=0 \\\\ b_{2}=a_{2}-4-3=1 \\\\ b_{n+2}-5b_{n+1}+6b_{n}=0\\end{cases}$</p><p>を満たす．これを</p><p>　$\\begin{cases} {b_{n+2}-2b_{n+1}=3(b_{n+1}-2b_{n})} \\\\ b_{n+2}-3b_{n+1}=2(b_{n+1}-3b_{n})\\end{cases}$</p><p>と変形すると，$\\{b_{n+1}-2b_{n}\\}$，$\\{b_{n+1}-3b_{n}\\}$ の一般項はそれぞれ</p><p>　$\\begin{cases} b_{n+1}-2b_{n}=(b_{2}-2b_{1})\\cdot3^{n-1}=3^{n-1} \\\\ b_{n+1}-3b_{n}=(b_{2}-3b_{1})\\cdot2^{n-1}=2^{n-1}\\end{cases}$</p><p>辺々引くと</p><p>　$\\therefore \\ b_{n}=3^{n-1}-2^{n-1}$</p><p>　$\\therefore \\ \\boldsymbol{a_{n}=3^{n-1}-2^{n-1}+2n+3}$</p>",
    

    "$a_{1}=1$，$a_{n+1}=\\dfrac{a_{n}}{na_{n}+2}$":
    // 上級12，逆数型，関数スライド型
    "<p>$a_{1}$ および漸化式の形から，$a_{n}\\neq 0$．両辺の逆数をとると</p><p>　　$\\dfrac{1}{a_{n+1}}=\\dfrac{na_{n}+2}{a_{n}}=2\\cdot\\dfrac{1}{a_{n}}+n$</p><p>ここで $b_{n}=\\dfrac{1}{a_{n}}$ とおくと</p><p>　　$b_{n+1}=2b_{n}+n$，$b_{1}=\\dfrac{1}{a_{1}}=1$</p><p>ここでこの式を</p><p>　$b_{n+1}+\\alpha(n+1)+\\beta=2\\left(b_{n}+\\alpha n+\\beta\\right)$</p><p>とおいて，展開して元の式と比較すると $\\alpha=\\beta=1$．</p><p>　$b_{n}+n+1=(b_{1}+1+1) \\cdot 2^{n-1}$</p><p>　　$\\therefore \ b_{n}=3\\cdot2^{n-1}-n-1$</p><p>　　$\\therefore \\ \\boldsymbol{a_{n}}=\\dfrac{1}{b_{n}}\\boldsymbol{=\\boldsymbol{\\dfrac{1}{3\\cdot2^{n-1}-n-1}}}$</p>",
    

    "$a_{1}=1$，$a_{2}=2x$，$a_{n+2}=2xa_{n+1}+(1-x^{2})a_{n}$":
    // 上級13，隣接3項間の応用，配信力たったの5さん寄贈
    "<p>与式を</p><p>$\\begin{cases} {a_{n+2}-(x-1)a_{n+1}=(x+1)(a_{n+1}-(x-1)a_{n})} \\\\ a_{n+2}-(x+1)a_{n+1}=(x-1)(a_{n+1}-(x+1)a_{n})\\end{cases}$</p><p>と変形すると，$\\{a_{n+1}-(x-1)a_{n}\\}$，$\\{a_{n+1}-(x+1)a_{n}\\}$ の一般項は</p><p>$\\begin{cases} a_{n+1}-(x-1)a_{n}=(a_{2}-(x-1)a_{1})(x+1)^{n-1}=(x+1)^{n} \\\\ a_{n+1}-(x+1)a_{n}=(a_{2}-(x+1)a_{1})(x-1)^{n-1}=(x-1)^{n}\\end{cases}$</p><p>辺々引くと</p><p>　$2a_{n}=(x+1)^{n}-(x-1)^{n}$</p><p>　$\\therefore \\ \\boldsymbol{a_{n}=\\dfrac{(x+1)^{n}-(x-1)^{n}}{2}}$</p>",
    

    "$a_{1}=\\dfrac{1}{3}$，$a_{n+1}=\\dfrac{1}{3-2a_{n}}$":
    // 上級14，1次分数型，元超級
    "<p>　$\\alpha=\\dfrac{1}{3-2\\alpha}$</p><p>を解くと，$2\\alpha^{2}-3\\alpha+1=0 \\ \\Longleftrightarrow \\ \\alpha=1$，$\\dfrac{1}{2}$．</p><p>　$b_{n}=\\dfrac{a_{n}-\\dfrac{1}{2}}{a_{n}-1}$</p><p>とおく( $a_{n}=1$ とすると $a_{n+1}=1$ となり，$a_{1}=1$ となり矛盾．つまり $a_{n}\\neq 1$ )．</p><p>　$b_{n+1}=\\dfrac{a_{n+1}-\\dfrac{1}{2}}{a_{n+1}-1}$</p><p>　　　$=\\dfrac{\\dfrac{1}{3-2a_{n}}-\\dfrac{1}{2}}{\\dfrac{1}{3-2a_{n}}-1}$</p><p>　　　$=\\dfrac{2-(3-2a_{n})}{2-2(3-2a_{n})}$</p><p>　　　$=\\dfrac{2a_{n}-1}{4a_{n}-4}=\\dfrac{1}{2}b_{n}$</p><p>　$\\therefore \\ b_{n}=b_{1}\\left(\\dfrac{1}{2}\\right)^{n-1}=\\left(\\dfrac{1}{2}\\right)^{n+1}$</p><p>また</p><p>　$b_{n}=\\dfrac{a_{n}-\\dfrac{1}{2}}{a_{n}-1} \\Longleftrightarrow (a_{n}-1)b_{n}=a_{n}-\\dfrac{1}{2}$</p><p>　$\\hspace{24mm} \\Longleftrightarrow (b_{n}-1)a_{n}=b_{n}-\\dfrac{1}{2}$</p><p>　$\\hspace{24mm} \\Longleftrightarrow a_{n}=\\dfrac{b_{n}-\\dfrac{1}{2}}{b_{n}-1}$</p><p>　$\\therefore \\ \\boldsymbol{a_{n}}=\\dfrac{\\left(\\dfrac{1}{2}\\right)^{n+1}-\\dfrac{1}{2}}{\\left(\\dfrac{1}{2}\\right)^{n+1}-1}\\boldsymbol{=\\dfrac{2^{n}-1}{2^{n+1}-1}}$</p>",
    

    "$a_{1}=1$，$a_{n+1}=\\dfrac{a_{n}}{1+n\\cdot 2^{n-1}a_{n}}$":
    // 上級15，逆数型，等差×等比
    "<p>$a_{1}$ および漸化式の形から，$a_{n}\\neq 0$．両辺の逆数をとると</p><p>　$\\dfrac{1}{a_{n+1}}=\\dfrac{1+n\\cdot 2^{n-1}a_{n}}{a_{n}}=\\dfrac{1}{a_{n}}+n\\cdot2^{n-1}$</p><p>$\\displaystyle S_{n}=\\sum_{k=1}^{n}k\\cdot 2^{k-1}$ とおくと，</p><p>　$S_{n}=1\\cdot1+2\\cdot2+\\cdots+n\\cdot2^{n-1}$</p><p>$\\underline{-)　2S_{n}=　1\\cdot2+\\cdots+(n-1)2^{n-1}+n\\cdot2^{n}}$</p><p>　$-S_{n}=1+2+2^{2}+\\cdots+2^{n-1}-n\\cdot 2^{n}$</p><p>これを整理すると</p><p>　$S_{n}=(n-1)2^{n}+1$</p><p>$n\\geqq 2$ のとき</p><p>　$\\dfrac{1}{a_{n}}=\\dfrac{1}{a_{1}}+S_{n-1}=(n-2)2^{n-1}+2$</p><p>これは $n=1$ のときも成り立つ．</p><p>　$\\therefore \\ \\boldsymbol{a_{n}=\\dfrac{1}{(n-2)2^{n-1}+2}}$</p>",
    

    "$a_{1}=7$，$a_{n+1}=\\dfrac{1}{2}a_{n}^{2}+a_{n}-\\dfrac{1}{2}$":
    // 上級16，元超級，白里さん寄贈
    "<p>両辺に $1$ を足して整理すると</p><p>　$a_{n+1}+1=\\dfrac{1}{2}(a_{n}+1)^{2}$</p><p>$a_{1}+1&gt;0$ および漸化式の形から $a_{n}+1&gt;0$．両辺 $2$ を底とする対数をとると</p><p>　$\\log_{2}(a_{n+1}+1)=2\\log_{2}(a_{n}+1)-1$</p><p>$\\Longleftrightarrow \\log_{2}(a_{n+1}+1)-1=2(\\log_{2}(a_{n}+1)-1)$</p><p>$\\{\\log_{2}(a_{n}+1)-1\\}$ の一般項は</p><p>　$\\log_{2}(a_{n}+1)-1=(\\log_{2}(a_{1}+1)-1)2^{n-1}=2^{n}$</p><p>$\\Longleftrightarrow \\log_{2}(a_{n}+1)=2^{n}+1$</p><p>$\\Longleftrightarrow a_{n}+1=2^{2^{n}+1}$</p><p>　$\\therefore \\ \\boldsymbol{a_{n}=2^{2^{n}+1}-1}$</p>",
    

    "$a_{1}=1$，$a_{n+1}=na_{n}$":
    // 上級17，階比型
    "<p>両辺 $n!$ で割ると</p><p>　$\\dfrac{a_{n+1}}{n!}=\\dfrac{a_{n}}{(n-1)!}=\\cdots=\\dfrac{a_{1}}{0!}=1$</p><p>　$\\therefore \\ \\boldsymbol{a_{n}=(n-1)!}$</p>",
    

    "$a_{1}=1$，$a_{n+1}=a_{n}+|n-10|$":
    // 上級18，階差型，絶対値
    "<p>$2\\leqq n\\leqq 10$ のとき</p><p>　$\\displaystyle a_{n}=a_{1}+\\sum_{k=1}^{n-1}(10-k)$</p><p>　　$\\displaystyle =1+10(n-1)-\\dfrac{1}{2}(n-1)n$</p><p>　　$\\displaystyle =-\\dfrac{1}{2}n^{2}+\\dfrac{21}{2}n-9$</p><p>これは $n=1$ のときも成り立つ．</p><p>$n\\geqq 11$ のとき</p><p>　$\\displaystyle a_{n}=a_{10}+\\sum_{k=10}^{n-1}(k-10)$</p><p>　　$\\displaystyle =46+\\{0+1+\\cdots+(n-11)\\}$</p><p>　　$\\displaystyle =46+\\dfrac{(n-10)(n-11)}{2}$</p><p>　　$\\displaystyle =\\dfrac{1}{2}n^{2}-\\dfrac{21}{2}n+101$</p><p>$\\therefore \\ \\boldsymbol {a_{n}=}\\begin{cases}\\boldsymbol {-\\dfrac{1}{2}n^{2}+\\dfrac{21}{2}n-9 \\ \\ (1\\leqq n\\leqq 10)} \\\\ \\boldsymbol {\\dfrac{1}{2}n^{2}-\\dfrac{21}{2}n+101 \\ \\ (n\\geqq 11)}\\end{cases}$</p>",
    

    "$a_{1}=0$，$b_{1}=1$，$a_{n+1}=a_{n}+3b_{n}+3$，$b_{n+1}=a_{n}-b_{n}$":
    // 上級19，連立の応用
    "<p>$a_{n+1}+\\alpha b_{n+1}+\\beta=\\gamma(a_{n}+\\alpha b_{n}+\\beta)$ とおく．左辺に与式を代入すると</p><p>$a_{n}+3b_{n}+3+\\alpha(a_{n}-b_{n})+\\beta=\\gamma(a_{n}+\\alpha b_{n}+\\beta)$</p><p>$\\Longleftrightarrow \\ (1+\\alpha)a_{n}+(3-\\alpha)b_{n}+3+\\beta=\\gamma a_{n}+\\gamma \\alpha b_{n}+\\gamma \\beta$</p><p>両辺係数比較して</p><p>　$\\begin{cases} 1+\\alpha=\\gamma \\\\ 3-\\alpha=\\gamma \\alpha \\\\ 3+\\beta=\\gamma \\beta\\end{cases}$</p><p>これを解くと</p><p>　$(\\alpha,\\gamma,\\beta)=(1,2,3)，\\left(-3,-2,-1\\right)$</p><p>より与式を</p><p>　$\\begin{cases}a_{n+1}+b_{n+1}+3=2(a_{n}+b_{n}+3) \\\\ a_{n+1}-3b_{n+1}-1=-2\\left(a_{n}-3b_{n}-1\\right)　\\end{cases}$</p><p>と変形できるから，$\\{a_{n}+b_{n}+3\\}$，$\\left\\{a_{n}-3b_{n}-1\\right\\}$ の一般項は</p><p>　$\\begin{cases}a_{n}+b_{n}+3=4\\cdot 2^{n-1}　\\\\ a_{n}-3b_{n}-1=-4(-2)^{n-1} \\end{cases}$</p><p>辺々引くと</p><p>　$4b_{n}+4=4\\cdot2^{n-1}+4(-2)^{n-1}$</p><p>　$\\therefore \\ \\boldsymbol{b_{n}=2^{n-1}+(-2)^{n-1}-1}$</p><p>$a_{n}=4\\cdot 2^{n-1}-b_{n}-3$ より</p><p>　$\\therefore \\ \\boldsymbol{a_{n}=3\\cdot2^{n-1}-(-2)^{n-1}-2}$</p>",
    

    "$a_{1}=2$，$S_{n+1}=3S_{n}+n^{2}+1$":
    // 上級20，和
    "<p>与式の $n$ のナンバリングを下にずらして，与式と辺々引くと</p><p>　　$S_{n+1}=3S_{n}+n^{2}+1$</p><p>　$\\underline{-)　S_{n}=3S_{n-1}+(n-1)^{2}+1　(n\\geqq 2)}$</p><p>　　$a_{n+1}=3a_{n}+2n-1$ $(n\\geqq 2)$</p><p>　$\\Longleftrightarrow \\ a_{n+1}+n+1=3(a_{n}+n)$ $(n\\geqq 2)$</p><p>与式に $n=1$ を代入すると</p><p>　$S_{2}=3S_{1}+1+1$ $\\Longleftrightarrow $ $a_{1}+a_{2}=3a_{1}+2$</p><p>となるから $a_{2}=6$．$\\{a_{n}+n\\}$ の一般項は</p><p>　$a_{n}+n=(a_{2}+2)3^{n-2}=8\\cdot3^{n-2}$ $(n\\geqq 2)$</p><p>　$\\therefore \\ \\boldsymbol {a_{n}=}\\begin{cases}\\boldsymbol {8\\cdot3^{n-2}-n \\ \\ (n\\geqq 2)} \\\\ \\boldsymbol {2 \\ \\ (n=1)}\\end{cases}$</p>",
    

    "$2S_{n}=a_{n}^{2}+n$ $(a_{n}&gt;0)$":
    // 上級21，和
    "<p>与式の $n$ のナンバリングを上にずらして，与式と辺々引くと</p><p>　　$2S_{n+1}=a_{n+1}^{2}+n+1$</p><p>　$\\underline{-)　2S_{n}=a_{n}^{2}+n　　}$</p><p>　　$2a_{n+1}=a_{n+1}^{2}-a_{n}^{2}+1$</p><p>　$\\Longleftrightarrow \\ a_{n}^{2}=(a_{n+1}-1)^{2}$</p><p>解くと</p><p>　$a_{n+1}=1\\pm a_{n}$</p><p>与式に $n=1$ を代入すると</p><p>　$2S_{1}=2a_{1}=a_{1}^{2}+1$ $\\Longleftrightarrow $ $a_{1}=1$</p><p>となるから $a_{n}&gt;0$ より</p><p>　$a_{n+1}=1+a_{n}$</p><p>　$\\therefore \\ \\boldsymbol {a_{n}=n}$</p>",
    

    "$S_{1}=2$，$S_{n+1}-4S_{n}=3^{n+1}-2$":
    // 上級22，和，サイトにあり
    "<p>与式の $n$ のナンバリングを下にずらす．</p><p>　$S_{n}-4S_{n-1}=3^{n}-2　(n\\geqq 2)$</p><p>与式と辺々引くと</p><p>　　$S_{n+1}-4S_{n}=3^{n+1}-2$</p><p>$\\underline{ -)　S_{n}-4S_{n-1}=3^{n}-2　(n\\geqq 2)}$</p><p>　　$a_{n+1}-4a_{n}=2\\cdot 3^{n}　(n\\geqq 2) \\ \\cdots$ ①</p><p>ここで</p><p>　$S_{2}=4S_{1}+3^{2}-2=15$　$\\therefore$ $a_{2}=13$</p><p>つまり</p><p>　$a_{2}-4a_{1}=13-4S_{1}=5\\neq 2\\cdot3$</p><p>より ①は $n=1$ では成り立たない．</p><p>①の両辺 $3^{n+1}$ で割ると</p><p>　$\\dfrac{a_{n+1}}{3^{n+1}}-\\dfrac{4}{3}\\cdot\\dfrac{a_{n}}{3^{n}}=\\dfrac{2}{3}$</p><p>$\\Longleftrightarrow \\ \\dfrac{a_{n+1}}{3^{n+1}}+2=\\dfrac{4}{3}\\left(\\dfrac{a_{n}}{3^{n}}+2\\right)$</P><p>となるから，$\\left\\{\\dfrac{a_{n}}{3^{n}}+2\\right\\}$ の一般項は，$n\\geqq 2$ であることを踏まえ</p><p>　$\\dfrac{a_{n}}{3^{n}}+2=\\left(\\dfrac{a_{2}}{3^{2}}+2\\right) \\left(\\dfrac{4}{3}\\right)^{n-2}=\\dfrac{31}{9} \\left(\\dfrac{4}{3}\\right)^{n-2}$</p><p>$\\Longleftrightarrow \\ \\dfrac{a_{n}}{3^{n}}=\\dfrac{31}{9} \\left(\\dfrac{4}{3}\\right)^{n-2}-2$</p><p>　$\\therefore \\ a_{n}=31\\cdot 4^{n-2}-2\\cdot3^{n}$</p><p>$n=1$ のときも考慮すると</p><p>　$\\boldsymbol {a_{n}=\\begin{cases} \\boldsymbol {31\\cdot 4^{n-2}-2\\cdot3^{n} \\ (n\\geqq 2)} \\\\ \\boldsymbol {2 \\hspace{3.2cm} (n=1)} \\end{cases}}$</p>",
    
 
        },
        "D": {
            "$a_{1}=1，$$a_{2n}=2a_{2n-1}+1，$$a_{2n+1}=a_{2n}+n$":
    // 超級1
    "<p>TBA</p>",
    

    "$a_{1}=0，$$a_{2}=1，$$a_{3}=2，$$a_{n+3}=6a_{n+2}-12a_{n+1}+8a_{n}$":
    // 超級2
    "<p>TBA</p>",
    

    "$a_{1}=2，$$na_{n+1}=a_{n}+n^{2}$":
    // 超級3，白里さん寄贈
    "<p>TBA</p>",
    

    "$a_{1}=3，$$a_{2}=1，$$a_{n+2}-a_{n+1}+a_{n}=2$":
    // 超級4，とますさん寄贈
    "<p>TBA</p>",
    

    "$a_{1}=1，$$a_{n+1}=\\dfrac{_{n+1}\\hspace{-0.3mm}{\\rm C}_{2}}{a_{n}}$":
    // 超級5，とますさん寄贈，rand3=61
    "<p>TBA</p>",
    

    "$a_{1}=1，$$a_{2}=3，$$a_{n+2}^{4}a_{n+1}^{4}-2^{n+1}a_{n+2}^{2}a_{n+1}^{2}=4a_{n+1}^{4}a_{n}^{4}-2^{n+2}a_{n+1}^{2}a_{n}^{2}$":
    // 超級6，りーくーとさん寄贈，rand3=62
    "<p>TBA</p>",
    

    "$a_{1}=1，$$\\displaystyle a_{n+1}= \\sum_{k=1}^{n}2ka_{k}+2$":
    // 超級7，白里さん寄贈
    "<p>TBA</p>",
    

    "$a_{1}=1，$$a_{2}=2，$$\\dfrac{1}{a_{n+2}}-\\dfrac{1}{a_{n+1}}+\\dfrac{1}{(n+2)a_{n}}=0$":
    // 超級8，白里さん寄贈
    "<p>TBA</p>",
    

    "$a_{1}=\\dfrac{1}{\\sqrt{6}-\\sqrt{2}}，$$a_{n+1}=-1+2a_{n}^2$":
    // 超級9，abachaさん寄贈
    "<p>TBA</p>",
    

    "$a_{1}=\\sqrt{3}，$$a_{n+1}=\\dfrac{a_{n}+1}{1-a_{n}}$":
    // 超級10，しんのす毛さん寄贈，rand3=66
    "<p>TBA</p>",
    

    "$a_{1}=1，$$\\dfrac{1}{a_{n+1}}=6a_{1}a_{2}\\cdots a_{n}+\\dfrac{1}{a_{1}a_{2}\\cdots a_{n}}+6$":
    // 超級11，主任さん寄贈
    "<p>TBA</p>",
    

    "$a_{1}=1，$$a_{n}>0，$$a_{n+1}^{2}a_{n}+2a_{n+1}-a_{n}=0$":
    // 超級12，雨乃松さん寄贈，rand3=68
    "<p>TBA</p>",
    

    "$a_{1}=3$$，$$a_{n+1}=a_{n}^{2}-2$":
    // 超級13，warning，うめぼしさん寄贈，rand3=69
    "<p>TBA</p>",
    

    "$a_{1}=\\dfrac{8}{3}，$$a_{n+1}=a_{n}^{3}+3a_{n}$":
    // 超級14，warning，全理さん寄贈，rand3=70
    "<p>TBA</p>",
    

    "$a_{1}=2，$$a_{n+1}=\\dfrac{a_{n}^{2}+2}{2a_{n}}$":
    // 超級15，warning，しんのす毛さん寄贈，rand3=71
    "<p>TBA</p>",
    

    "$a_{1}=0，$$a_{2n}=2a_{n}，$$a_{2n+1}=2a_{n}+1$":
    // 超級16，warning，白里さん寄贈，rand3=72
    "<p>TBA</p>",
    

    "$a_{1}=1，$$a_{2}=\\dfrac{1}{4}，$$a_{n}\\neq \\dfrac{1}{2}，$$2a_{n+1}^{2}-2a_{n}a_{n+2}-2a_{n+1}+a_{n}+a_{n+2}$ $=-\\dfrac{3}{4}\\left(-\\dfrac{1}{12}\\right)^{n}$":
    // 超級17，danger，白里さん寄贈，rand3=73
    "<p>TBA</p>",
    

    "$a_{1}$ $=$ $a_{2}$ $=$ $a_{3}$ $=$ $1$$，$ $a_{n+3}$ $=$ $\\dfrac{a_{n+2}a_{n+1}+1}{a_{n}}$":
    // 超級18，danger，Auさん寄贈
    "<p>TBA</p>",
    

    "$a_{1}=2，$$a_{n+1}=a_{n}^{2}+n^{2}+n-3\\left[\\dfrac{a_{n}^{2}+n^{2}+n}{3}\\right]$":
    // ガウスは問題文が違うのでここに，超級19，とますさん寄贈
    "<p>TBA</p>",
    

    "$a_{0}=1，$$a_{n+1}=a_{n}+\\left[\\sqrt{n+1}\\right]+1$ $(n\\geqq0)$":
    // ガウスは問題文が違うのでここに，超級20，とますさん寄贈
    "<p>TBA</p>",
    

    "$a_{1}=1，$$a_{n}=a_{\\left[\\frac{n+1}{2}\\right]}+a_{\\left[\\frac{n}{2}\\right]}+cn$ $(n\\geqq2)$":
    // ガウスは問題文が違うのでここに，超級21，warning，開集合さん寄贈
    "<p>TBA</p>",
    


    "$a_{1}=b_{1}=-1，$$a_{n+1}=2a_{n}-6b_{n}+3n，$$b_{n+1}=a_{n}+7b_{n}+4$":
    // 超級22，rand3=80
    "<p>TBA</p>",
    

    "$a_{1}=\\sqrt{3}+1，$$b_{1}=\\sqrt{3}-1，$$a_{n+1}=\\dfrac{a_{n}^{2}-b_{n}^{2}}{\\sqrt{a_{n}^{2}+b_{n}^{2}}}，$$b_{n+1}=\\dfrac{2a_{n}b_{n}}{\\sqrt{a_{n}^{2}+b_{n}^{2}}}$":
    // 超級23，白里さん寄贈
    "<p>TBA</p>",
    

    "$a_{1}=1，$$a_{n}=\\dfrac{-S_{n}^{2}}{n(n+1)-S_{n}}$ $(n\\geqq 2)$":
    // 超級24，rand3=91
    "<p>TBA</p>",
    

    "$S_{0}=0，$$\\displaystyle a_{n}=\\dfrac{1}{n}\\sum_{k=0}^{n-1}S_{k}+2-a_{n}$":
    // 超級25，swan-Pさん寄贈
    "<p>TBA</p>",
    

    "$a_{1}=5，$$b_{1}=2，$$c_{1}=-5，$$\\displaystyle a_{n+1}=a_{n}-b_{n}+2c_{n}，$$\\displaystyle b_{n+1}=a_{n}-2b_{n}+c_{n}，$$\\displaystyle c_{n+1}=2a_{n}-3b_{n}-3c_{n}$":
    // 超級26，warning，NEMOさん寄贈
    "<p>TBA</p>",
    
        }
    },
    "1": {
        "A": {
            "$12xy^{3}-27x^{3}y$": "<p>　$12xy^{3}-27x^{3}y$</p><p>$=3xy(4y^{2}-9x^{2})$</p><p>$=\\boldsymbol{3xy(2y+3x)(2y-3x)}$</p>", // 中学1
    "$6x^{2}+x-1$": "<p>　$6x^{2}+x-1$</p><p>$=\\boldsymbol{(2x+1)(3x-1)}$</p>", // たすきがけ1
    "$16a^{3}+54b^{3}$": "<p>　$16a^{3}+54b^{3}$</p><p>$=2(8a^{3}+27b^{3})$</p><p>$=\\boldsymbol{2(2a+3b)(4a^{2}-6ab+9b^{2})}$</p>", // 3乗
    "$(x^{2}-2x)^{2}-11(x^{2}-2x)+24$": "<p>　$(x^{2}-2x)^{2}-11(x^{2}-2x)+24$</p><p>$=A^{2}-11A+24$　$(A=x^{2}-2x)$</p><p>$=(A-3)(A-8)$</p><p>$=(x^{2}-2x-3)(x^{2}-2x-8)$</p><p>$=\\boldsymbol{(x-3)(x+1)(x-4)(x+2)}$</p>", // 置き換え
    "$4xy^{2}z+x^{2}yz^{2}-2xyz$": "<p>　$4xy^{2}z+x^{2}yz^{2}-2xyz$</p><p>$=\\boldsymbol{xyz(4y+xz-2)}$</p>", // 中学2，オリジナル
    "$9x^{2}+12xy+4y^{2}$": "<p>　$9x^{2}+12xy+4y^{2}$</p><p>$=\\boldsymbol{(3x+2y)^{2}}$</p>", // 中学3，，東京書籍wide
    "$x^{2}-3x-10$": "<p>　$x^{2}-3x-10$</p><p>$=\\boldsymbol{(x-5)(x+2)}$</p>", // 中学4
    "$2x^{2}-14x+12$": "<p>　$2x^{2}-14x+12$</p><p>$=2(x^{2}-7x+6)$</p><p>$=\\boldsymbol{2(x-1)(x-6)}$</p>", // 中学5
    "$16x^{2}-49y^{2}$": "<p>　$16x^{2}-49y^{2}$</p><p>$=\\boldsymbol{(4x+7y)(4x-7y)}$</p>", // 中学6
    "$x^{2}+33x+90$": "<p>　$x^{2}+33x+90$</p><p>$=\\boldsymbol{(x+30)(x+3)}$</p>", // 中学7，主任
    "$x^{2}+26x+144$": "<p>　$x^{2}+26x+144$</p><p>$=(x+13)^{2}-25$</p><p>$=(x+13+5)(x+13-5)$</p><p>$=\\boldsymbol{(x+18)(x+8)}$</p>", // 中学8，白里
    "$12x^{2}+108x+84$": "<p>　$12x^{2}+108x+84$</p><p>$=\\boldsymbol{12(x^{2}+9x+7)}$</p>", // 中学9，白里
    "$9x^{2}+123x$": "<p>　$9x^{2}+123x$</p><p>$=\\boldsymbol{3x(3x+41)}$</p>", // 中学10，オリジナル
    "$x^{2}-4x-12$": "<p>　$x^{2}-4x-12$</p><p>$=\\boldsymbol{(x+2)(x-6)}$</p>", // 中学11，オリジナル
    "$3x^{2}+2x-5$": "<p>　$3x^{2}+2x-5$</p><p>$=\\boldsymbol{(x-1)(3x+5)}$</p>", // たすきがけ2，東京書籍検定教科書例題
    "$2x^{2}-x-1$": "<p>　$2x^{2}-x-1$</p><p>$=\\boldsymbol{(2x+1)(x-1)}$</p>", // たすきがけ3，主任
    "$8x^{2}+19x+6$": "<p>　$8x^{2}+19x+6$</p><p>$=\\boldsymbol{(x+2)(8x+3)}$</p>", // たすきがけ4，オリジナル
    "$6x^{2}+7xy-24y^{2}$": "<p>　$6x^{2}+7xy-24y^{2}$</p><p>$=\\boldsymbol{(2x-3y)(3x+8y)}$</p>", // たすきがけ5，東京書籍wide 
    "$16x^{2}+43xy+27y^{2}$": "<p>　$16x^{2}+43xy+27y^{2}$</p><p>$=\\boldsymbol{(16x+27y)(x+y)}$</p>", // たすきがけ6，白里
    "$16x^{2}+48xy+27y^{2}$": "<p>　$16x^{2}+48xy+27y^{2}$</p><p>$=\\boldsymbol{(4x+3y)(4x+9y)}$</p>", // たすきがけ7，白里
    "$8x^{2}+7xy-18y^{2}$": "<p>　$8x^{2}+7xy-18y^{2}$</p><p>$=\\boldsymbol{(8x-9y)(x+2y)}$</p>", // たすきがけ8，Z会
    "$2x^{3}-x^{2}-18x+9$": "<p>　$2x^{3}-x^{2}-18x+9$</p><p>$=x^{2}(2x-1)-9(2x-1)$</p><p>$=(x^{2}-9)(2x-1)$</p><p>$=\\boldsymbol{(x+3)(x-3)(2x-1)}$</p>", // 共通因数探し
    "$(x+y)(x+y+5)+6$": "<p>　$(x+y)(x+y+5)+6$</p><p>$=A(A+5)+6$　$(A=x+y)$</p><p>$=A^{2}+5A+6$</p><p>$=(A+2)(A+3)$</p><p>$=\\boldsymbol{(x+y+2)(x+y+3)}$</p>", // 置き換え，東京書籍wide
    "$x^{2}-y^{2}+4yz-4z^{2}$": "<p>　$x^{2}-y^{2}+4yz-4z^{2}$</p><p>$=x^{2}-(y^{2}-4yz+4z^{2})$</p><p>$=x^{2}-(y-2z)^{2}$</p><p>$=x^{2}-A^{2}$　$(A=y-2z)$</p><p>$=(x+A)(x-A)$</p><p>$=\\boldsymbol{(x+y-2z)(x-y+2z)}$</p>", // 置き換え，Z会
    "$4a(ax^{2}+bx+c)+b^{2}-4ac$": "<p>　$4a(ax^{2}+bx+c)+b^{2}-4ac$</p><p>$=4a^{2}x^{2}+4abx+b^{2}$</p><p>$=\\boldsymbol{(2ax+b)^{2}}$</p>", // オムペン
    "$x^{4}-16$": "<p>　$x^{4}-16$</p><p>$=(x^{2}+4)(x^{2}-4)$</p><p>$=\\boldsymbol{(x^{2}+4)(x+2)(x-2)}$</p>", // 主任
    "$x^{3}+3x^{2}+3x+1$": "<p>　$x^{3}+3x^{2}+3x+1$</p><p>$=\\boldsymbol{(x+1)^{3}}$</p>", // 3乗，主任
    "$8x^{3}-12x^{2}+6x-1$": "<p>　$8x^{3}-12x^{2}+6x-1$</p><p>$=\\boldsymbol{(2x-1)^{3}}$</p>", // 3乗2，主任
    "$x^{3}-64y^{3}$": "<p>　$x^{3}-64y^{3}$</p><p>$=\\boldsymbol{(x-4y)(x^{2}+4xy+16y^{2})}$</p>", // 3乗，オリジナル
    "$x^{4}-15x^{2}-16$": "<p>　$x^{4}-15x^{2}-16$</p><p>$=(x^{2}+1)(x^{2}-16)$</p><p>$=\\boldsymbol{(x^{2}+1)(x+4)(x-4)}$</p>", // 置き換え，オリジナル
        },
        "B": {
            "$x(x-1)(x-2)(x-3)-24$": "<p>　$x(x-1)(x-2)(x-3)-24$</p><p>$=x(x-3)(x-1)(x-2)-24$</p><p>$=(x^{2}-3x)(x^{2}-3x+2)-24$</p><p>$=A(A+2)-24$　$(A=x^{2}-3x)$</p><p>$=A^{2}+2A-24$</p><p>$=(A+6)(A-4)$</p><p>$=(x^{2}-3x+6)(x^{2}-3x-4)$</p><p>$=\\boldsymbol{(x^{2}-3x+6)(x-4)(x+1)}$</p>", // 工夫，置き換え
    "$(x-1)(x-3)(x-5)(x-7)-9$": "<p>　$(x-1)(x-3)(x-5)(x-7)-9$</p><p>$=(x-1)(x-7)(x-3)(x-5)-9$</p><p>$=\\{(x^{2}-8x)+7\\}\\{(x^{2}-8x)+15\\}-9$</p><p>$=(A+7)(A+15)-9$　$(A=x^{2}-8x)$</p><p>$=A^{2}+22A+96$</p><p>$=(A+6)(A+16)$</p><p>$=(x^{2}-8x+6)(x^{2}-8x+16)$</p><p>$=\\boldsymbol{(x^{2}-8x+6)(x-4)^2}$</p>", // 工夫，置き換え，Z会
    "$a^{3}-a^{2}b-ac^{2}+bc^{2}$": "<p>　$a^{3}-a^{2}b-ac^{2}+bc^{2}$</p><p>$=(c^{2}-a^{2})b+a(a^{2}-c^{2})$</p><p>$=(c^{2}-a^{2})b-a(c^{2}-a^{2})$</p><p>$=(c^{2}-a^{2})(b-a)$</p><p>$=\\boldsymbol{(c+a)(c-a)(b-a)}$</p>", // 最低次数整理
    "$2x^{2}-5xy-3y^{2}+x+11y-6$": "<p>　$2x^{2}-5xy-3y^{2}+x+11y-6$</p><p>$=2x^{2}+(1-5y)x-3y^{2}+11y-6$</p><p>$=2x^{2}+(1-5y)x-(3y^{2}-11y+6)$</p><p>$=2x^{2}+(1-5y)x-(3y-2)(y-3)$</p><p>$=\\{2x+(y-3)\\}\\{x-(3y-2)\\}$</p><p>$=\\boldsymbol{(2x+y-3)(x-3y+2)}$</p>", // 最低次数整理
    "$x^{2}+3xy+2y^{2}+x+3y-2$": "<p>　$x^{2}+3xy+2y^{2}+x+3y-2$</p><p>$=x^{2}+(3y+1)x+2y^{2}+3y-2$</p><p>$=x^{2}+(3y+1)x+(2y-1)(y+2)$</p><p>$=\\boldsymbol{(x+2y-1)(x+y+2)}$</p>", // 最低次数整理，東京書籍wide
    "$x^{2}+5xy+6y^{2}+7x+18y+12$": "<p>　$x^{2}+5xy+6y^{2}+7x+18y+12$</p><p>$=x^{2}+(5y+7)x+6(y^{2}+3y+2)$</p><p>$=x^{2}+(5y+7)x+6(y+1)(y+2)$</p><p>$=\\{x+2(y+2)\\}\\{x+3(y+1)\\}$</p><p>$=\\boldsymbol{(x+2y+4)(x+3y+3)}$</p>", // 最低次数整理，Z会
    "$2x^{2}+3xy+y^{2}+x-y-6$": "<p>　$2x^{2}+3xy+y^{2}+x-y-6$</p><p>$=2x^{2}+(3y+1)x+y^{2}-y-6$</p><p>$=2x^{2}+(3y+1)x+(y-3)(y+2)$</p><p>$=\\{2x+(y-3)\\}\\{x+(y+2)\\}$</p><p>$=\\boldsymbol{(2x+y-3)(x+y+2)}$</p>", // 最低次数整理，2014宮城大
    "$3x^{2}+13ax+4a^{2}+8x-a-3$": "<p>　$3x^{2}+13ax+4a^{2}+8x-a-3$</p><p>$=3x^{2}+(13a+8)x+4a^{2}-a-3$</p><p>$=3x^{2}+(13a+8)x+(4a+3)(a-1)$</p><p>$=\\{3x+(a-1)\\}\\{x+(4a+3)\\}$</p><p>$=\\boldsymbol{(3x+a-1)(x+4a+3)}$</p>", // 最低次数整理，オリジナル
    "$(x^{2}+4x)^{2}+8x^{2}+32x+15$": "<p>　$(x^{2}+4x)^{2}+8x^{2}+32x+15$</p><p>$=A^{2}+8A+15$　$(A=x^{2}+4x)$</p><p>$=(A+3)(A+5)$</p><p>$=(x^{2}+4x+3)(x^{2}+4x+5)$</p><p>$=\\boldsymbol{(x+1)(x+3)(x^{2}+4x+5)}$</p>", // 置き換え，2015北海学園大
    "$4a^{4}-17a^{2}b^{2}+4b^{4}$": "<p>　$4a^{4}-17a^{2}b^{2}+4b^{4}$</p><p>$=(4a^{2}-b^{2})(a^{2}-4b^{2})$</p><p>$=\\boldsymbol{(2a+b)(2a-b)(a+2b)(a-2b)}$</p>", // たすきがけ，2018昭和大薬
    "$-9x^{2}+18x-9+4y^{2}$": "<p>　$-9x^{2}+18x-9+4y^{2}$</p><p>$=4y^{2}-9(x-1)^{2}$</p><p>$=\\{2y+3(x-1)\\}\\{2y-3(x-1)\\}$</p><p>$=\\boldsymbol{(2y+3x-3)(2y-3x+3)}$</p>", // 主任
    "$(ax+by)^{2}+(ay-bx)^{2}$": "<p>　$(ax+by)^{2}+(ay-bx)^{2}$</p><p>$=a^{2}x^{2}+b^{2}y^{2}+a^{2}y^{2}+b^{2}x^{2}$</p><p>$=(a^{2}+b^{2})x^{2}+(a^{2}+b^{2})y^{2}$</p><p>$=\\boldsymbol{(a^{2}+b^{2})(x^{2}+y^{2})}$</p>", // オムペン
    "$x^{6}-3x^{4}+3x^{2}-1$": "<p>　$x^{6}-3x^{4}+3x^{2}-1$</p><p>$=(x^{2}-1)^{3}$</p><p>$=\\{(x+1)(x-1)\\}^{3}$</p><p>$=\\boldsymbol{(x+1)^{3}(x-1)^{3}}$</p>", // 3乗，主任
    "$x^{2}-102x+2520$": "<p>　$x^{2}-102x+2520$</p><p>$=(x-51)^{2}-81$</p><p>$=(x-51+9)(x-51-9)$</p><p>$=\\boldsymbol{(x-42)(x-60)}$</p>", // 清水団
    "$x^{3}+2x^{2}y-x^{2}z-3xy^{2}-2xyz+3y^{2}z$": "<p>　$x^{3}+2x^{2}y-x^{2}z-3xy^{2}-2xyz+3y^{2}z$</p><p>$=(-x^{2}-2xy+3y^{2})z+x^{3}+2x^{2}y-3xy^{2}$</p><p>$=-(x^{2}+2xy-3y^{2})z+(x^{2}+2xy-3y^{2})x$</p><p>$=\\boldsymbol{(x+3y)(x-y)(x-z)}$</p>", // 最低次数整理，オリジナル
    "$x^{3}-2x^{2}y+xy-2y^{2}$": "<p>　$x^{3}-2x^{2}y+xy-2y^{2}$</p><p>$=-2y^{2}+(-2x^{2}+x)y+x^{3}$</p><p>$=(-2y+x)(y+x^{2})$</p><p>$=\\boldsymbol{(x^{2}+y)(x-2y)}$</p>", // 最低次数整理，オリジナル
    "$x^{3}-2x^{2}-5x+6$": "<p>　$x^{3}-2x^{2}-5x+6$</p><p>$=(x-1)(x^{2}-x-6)$</p><p>$=\\boldsymbol{(x-1)(x+2)(x-3)}$</p>", // 因数定理
    "$x^{3}+4x^{2}-7x-10$": "<p>　$x^{3}+4x^{2}-7x-10$</p><p>$=(x+1)(x^{2}+3x-10)$</p><p>$=\\boldsymbol{(x+1)(x+5)(x-2)}$</p>", // 因数定理
    "$2x^{3}-3x^{2}-11x+6$": "<p>　$2x^{3}-3x^{2}-11x+6$</p><p>$=(x+2)(2x^{2}-7x+3)$</p><p>$=\\boldsymbol{(x+2)(2x-1)(x-3)}$</p>", // 因数定理
    "$x(x+1)(x+2)-4\\cdot 5\\cdot 6$": "<p>　$x(x+1)(x+2)-4\\cdot 5\\cdot 6$</p><p>$=x^{3}+3x^{2}+2x-120$</p><p>$=\\boldsymbol{(x-4)(x^{2}+7x+30)}$</p>", // 因数定理，主任
    "$x^{4}-2x^{3}+2x^{2}-7x+6$": "<p>　$x^{4}-2x^{3}+2x^{2}-7x+6$</p><p>$=(x-1)(x^{3}-x^{2}+x-6)$</p><p>$=\\boldsymbol{(x-1)(x-2)(x^{2}+x+3)}$</p>", // 因数定理
    "$x^{4}+9x^{2}+25$": "<p>　$x^{4}+9x^{2}+25$</p><p>$=x^{4}+10x^{2}+25-x^{2}$</p><p>$=(x^{2}+5)^{2}-x^{2}$</p><p>$=(x^{2}+5+x)(x^{2}+5-x)$</p><p>$=\\boldsymbol{(x^{2}+x+5)(x^{2}-x+5)}$</p>", // 複2次式
    "$x^{4}-7x^{2}+1$": "<p>　$x^{4}-7x^{2}+1$</p><p>$=x^{4}+2x^{2}+1-9x^{2}$</p><p>$=(x^{2}+1)^{2}-9x^{2}$</p><p>$=(x^{2}+1+3x)(x^{2}+1-3x)$</p><p>$=\\boldsymbol{(x^{2}+3x+1)(x^{2}-3x+1)}$</p>", // 複2次式
    "$x^{4}+4x^{3}+6x^{2}+4x+5$": "<p>　$x^{4}+4x^{3}+6x^{2}+4x+5$</p><p>$=x^{4}+6x^{2}+5+4x(x^{2}+1)$</p><p>$=(x^{2}+1)(x^{2}+5)+4x(x^{2}+1)$</p><p>$=\\boldsymbol{(x^{2}+1)(x^{2}+4x+5)}$</p>", // 牡蠣
    "$x^{2}-101x+2520$": "<p>　$x^{2}-101x+2520$</p><p>$=x^{2}-101x+2^{3}\\cdot 3^{2}\\cdot 5\\cdot 7$</p><p>$=\\boldsymbol{(x-56)(x-45)}$</p>", // 清水団
    "$xyz+2xy+2yz+3zx+6x+4y+6z+12$": "<p>　$xyz+2xy+2yz+3zx+6x+4y+6z+12$</p><p>$=(xy+2y+3x+6)z+2xy+6x+4y+12$</p><p>$=(xy+2y+3x+6)z+(xy+2y+3x+6)2$</p><p>$=(xy+2y+3x+6)(z+2)$</p><p>$=\\boldsymbol{(x+2)(y+3)(z+2)}$</p>", // 主任
    "$25x^{4}+6x^{2}+1$": "<p>　$25x^{4}+6x^{2}+1$</p><p>$=25x^{4}+10x^{2}+1-4x^{2}$</p><p>$=(5x^{2}+1)^{2}-4x^{2}$</p><p>$=(5x^{2}+1+2x)(5x^{2}+1-2x)$</p><p>$=\\boldsymbol{(5x^{2}+2x+1)(5x^{2}-2x+1)}$</p>", // 複2次式，主任
    "$3x^{3}-x^{2}y+3x^{2}-2xy^{2}-3x+2y^{2}+y-3$": "<p>　$3x^{3}-x^{2}y+3x^{2}-2xy^{2}-3x+2y^{2}+y-3$</p><p>$=(2-2x)y^{2}+(1-x^{2})y+3x^{3}+3x^{2}-3x-3$</p><p>$=2(1-x)y^{2}+(1-x^{2})y+3x(x^{2}-1)+3(x^{2}-1)$</p><p>$=2(1-x)y^{2}+(1-x^{2})y+3(x+1)^{2}(x-1)$</p><p>$=(1-x)\\{2y^{2}+(1+x)y-3(x+1)^{2}\\}$</p><p>$=(1-x)\\{2y+3(x+1)\\}\\{y-(x+1)\\}$</p><p>$=\\boldsymbol{(x-1)(3x+2y+3)(x-y+1)}$</p>", // 最低次数整理，オリジナル
    "$x^{4}+x^{2}y^{2}+y^{4}$": "<p>　$x^{4}+x^{2}y^{2}+y^{4}$</p><p>$=x^{4}+2x^{2}y^{2}+y^{4}-x^{2}y^{2}$</p><p>$=(x^{2}+y^{2})^{2}-x^{2}y^{2}$</p><p>$=\\boldsymbol{(x^{2}+y^{2}+xy)(x^{2}+y^{2}-xy)}$</p>", // 複2次式，学院テキスト
    "$9x^{4}-7x^{2}+1$": "<p>　$9x^{4}-7x^{2}+1$</p><p>$=9x^{4}-6x^{2}+1-x^{2}$</p><p>$=(3x^{2}-1)^{2}-x^{2}$</p><p>$=(3x^{2}-1+x)(3x^{2}-1-x)$</p><p>$=\\boldsymbol{(3x^{2}+x-1)(3x^{2}-x-1)}$</p>", // 複2次式
    "$x^{8}+x^{4}+1$": "<p>　$x^{8}+x^{4}+1$</p><p>$=x^{8}+2x^{4}+1-x^{4}$</p><p>$=(x^{4}+1)^{2}-x^{4}$</p><p>$=(x^{4}+1+x^{2})(x^{4}+1-x^{2})$</p><p>$=(x^{4}+2x^{2}+1-x^{2})(x^{4}-x^{2}+1)$</p><p>$=\\{(x^{2}+1)^{2}-x^{2}\\}(x^{4}-x^{2}+1)$</p><p>$=\\boldsymbol{(x^{2}+x+1)(x^{2}-x+1)(x^{4}-x^{2}+1)}$</p>", // 複2次式2回
    "$2x^{4}+11x^{3}+6x^{2}+4x-5$": "<p>　$2x^{4}+11x^{3}+6x^{2}+4x-5$</p><p>$=(2x-1)(x^{3}+6x^{2}+6x+5)$</p><p>$=\\boldsymbol{(2x-1)(x+5)(x^{2}+x+1)}$</p>", // 因数定理
    "$2x^{4}-7x^{3}+4x^{2}-2x-3$": "<p>　$2x^{4}-7x^{3}+4x^{2}-2x-3$</p><p>$=(2x+1)(x^{3}-4x^{2}+4x-3)$</p><p>$=\\boldsymbol{(2x+1)(x-3)(x^{2}-x+1)}$</p>", // 因数定理
        },
        "C": {
            
        "$a^{3}+b^{3}+c^{3}-3abc$": // 上級1，3乗3つ
        "<p>　$a^{3}+b^{3}+c^{3}-3abc$</p><p>$=\\boldsymbol{(a+b+c)(a^{2}+b^{2}+c^{2}-ab-bc-ca)}$</p><p><b style=\"color: black\">公式の証明</b></p><p>　$a^{3}+b^{3}+c^{3}-3abc$</p><p>$=(a+b)^{3}-3ab(a+b)+c^{3}-3abc$</p><p>$=(a+b)^{3}+c^{3}-3ab(a+b)-3abc$</p><p>$=\\{(a+b)+c\\}\\{(a+b)^{2}-(a+b)c+c^{2}\\}-3ab(a+b+c)$</p><p>$=\\boldsymbol{(a+b+c)(a^{2}+b^{2}+c^{2}-ab-bc-ca)}$</p>",
        
    
        "$p^{3}-q^{3}-27r^{3}-9pqr$": // 上級2，3乗3つ
        "<p>　$p^{3}-q^{3}-27r^{3}-9pqr$</p><p>$=p^{3}+(-q)^{3}+(-3r)^{3}-3p(-q)(-3r)$</p><p>$=\\boldsymbol{(p-q-3r)(p^{2}+q^{2}+9r^{2}+pq-3qr+3rp)}$</p>",
        
    
        "$4x^{6}-4x^{5}+4x^{4}+x^{2}-x+1$": // 上級3，共通因数，複2次式，主任
        "<p>　$4x^{6}-4x^{5}+4x^{4}+x^{2}-x+1$</p><p>$=4x^{4}(x^{2}-x+1)+x^{2}-x+1$</p><p>$=(4x^{4}+1)(x^{2}-x+1)$</p><p>$=\\{(2x^{2}+1)^{2}-4x^{2}\\}(x^{2}-x+1)$</p><p>$=\\boldsymbol{(2x^{2}+2x+1)(2x^{2}-2x+1)(x^{2}-x+1)}$</p>",
        
    
        "$x(x+1)(x+2)-y(y+1)(y+2)+xy(x-y)$": // 上級4，2007秋田大
        "<p>$x$，$y$ の交代式なので $x-y$ を因数にもつ．</p><p>　$x(x+1)(x+2)-y(y+1)(y+2)+xy(x-y)$</p><p>$=x^{3}-y^{3}+3(x^{2}-y^{2})+2(x-y)+xy(x-y)$</p><p>$=(x-y)(x^{2}+xy+y^{2}+3x+3y+2+xy)$</p><p>$=(x-y)\\{(x+y)^{2}+3(x+y)+2\\}$</p><p>$=\\boldsymbol{(x-y)(x+y+1)(x+y+2)}$</p>",
        
    
        "$6(x+3)(x+4)(x+6)(x+8)-(x+1)(x+2)(x+12)(x+24)$": // 上級5，2014秋田大
        "<p>　$6(x+3)(x+4)(x+6)(x+8)-(x+1)(x+2)(x+12)(x+24)$</p><p>$=6(x+3)(x+8)(x+4)(x+6)-(x+1)(x+24)(x+2)(x+12)$</p><p>$=6(x^{2}+11x+24)(x^{2}+10x+24)-(x^{2}+25x+24)(x^{2}+14x+24)$</p><p>$=6(A+11x)(A+10x)-(A+25x)(A+14x)$　$(A=x^{2}+24)$</p><p>$=6(A^{2}+21xA+110x^{2})-(A^{2}+39xA+350x^{2})$</p><p>$=5A^{2}+87xA+310x^{2}$</p><p>$=(5A+62x)(A+5x)$</p><p>$=\\{5(x^{2}+24)+62x\\}\\{(x^{2}+24)+5x\\}$</p><p>$=\\boldsymbol{(5x+12)(x+10)(x^{2}+5x+24)}$</p>",
        
    
        "$2x^{3}+(-4a+y-6)x^{2}+2(y^{2}-3ay+a^{2}+6a)x+(y-6)(y^{2}-2ay+a^{2})$": // 上級6，2016埼玉医科大後期
        "<p>$a$ の2次式とみて整理します．</p><p>　$2x^{3}+(-4a+y-6)x^{2}+2(y^{2}-3ay+a^{2}+6a)x+(y-6)(y^{2}-2ay+a^{2})$</p><p>$=(2x+y-6)a^{2}+(-4x^{2}-6xy+12x-2y^{2}+12y)a+2x^{3}+2y^{2}x+(y-6)(x^{2}+y^{2})$</p><p>$=(2x+y-6)a^{2}-2(2x^{2}+3xy-6x+y^{2}-6y)a+2x(x^{2}+y^{2})+(y-6)(x^{2}+y^{2})$</p><p>$=(2x+y-6)a^{2}-2\\{y^{2}+(3x-6)y+x(2x-6)\\}a+(2x+y-6)(x^{2}+y^{2})$</p><p>$=(2x+y-6)a^{2}-2(y+x)(y+2x-6)a+(2x+y-6)(x^{2}+y^{2})$</p><p>$=\\boldsymbol{(2x+y-6)(a^{2}-2ax-2ay+x^{2}+y^{2})}$</p>",
        
    
        "$x^{7}+x^{6}+x^{5}+x^{4}+x^{3}+x^{2}+x+1$": // 上級7，K.H
        "<p>　$x^{7}+x^{6}+x^{5}+x^{4}+x^{3}+x^{2}+x+1$</p><p>$=x^{4}(x^{3}+x^{2}+x+1)+x^{3}+x^{2}+x+1$</p><p>$=(x^{4}+1)(x^{3}+x^{2}+x+1)$</p><p>$=(x^{4}+1)\\{x^{2}(x+1)+x+1\\}$</p><p>$=\\boldsymbol{(x^{4}+1)(x^{2}+1)(x+1)}$</p>",
        
    
        "$x^{6}+27$": // 上級8，numca
        "<p>　$x^{6}+27$</p><p>$=(x^{2}+3)(x^{4}-3x^{2}+9)$</p><p>$=(x^{2}+3)\\{(x^{2}+3)^{2}-9x^{2}\\}$</p><p>$=\\boldsymbol{(x^{2}+3)(x^{2}+3x+3)(x^{2}-3x+3)}$</p>",
        
    
        "$4x^{4}+2x^{3}y+2x^{2}y+xy+1$": // 上級9，rl
        "<p>　$4x^{4}+2x^{3}y+2x^{2}y+xy+1$</p><p>$=x(2x^{2}+2x+1)y+4x^{4}+1$</p><p>$=x(2x^{2}+2x+1)y+(2x^{2}+1)^{2}-4x^{2}$</p><p>$=x(2x^{2}+2x+1)y+(2x^{2}+1+2x)(2x^{2}+1-2x)$</p><p>$=\\boldsymbol{(xy+2x^{2}-2x+1)(2x^{2}+2x+1)}$</p>",
        
    
        "$x^{4}+y^{4}+(x+y)^{4}$": // 上級10，Kay
        "<p>　$x^{4}+y^{4}+(x+y)^{4}$</p><p>$=x^{4}+y^{4}+(x^{2}+y^{2}+2xy)^{2}$</p><p>$=x^{4}+y^{4}+(x^{2}+y^{2})^{2}+4xy(x^{2}+y^{2})+4x^{2}y^{2}$</p><p>$=2(x^{2}+y^{2})^{2}+4xy(x^{2}+y^{2})+2x^{2}y^{2}$</p><p>$=2\\{(x^{2}+y^{2})^{2}+2xy(x^{2}+y^{2})+x^{2}y^{2}\\}$</p><p>$=\\boldsymbol{2(x^{2}+y^{2}+xy)^{2}}$</p>",
        
    
        "$x^{3}+6xy+8y^{3}-1$": // 上級11，3乗3つ，白里
        "<p>　$x^{3}+6xy+8y^{3}-1$</p><p>$=x^{3}+(2y)^{3}+(-1)^{3}-3x(2y)(-1)$</p><p>$=(x+2y-1)\\{x^{2}+(2y)^{2}+(-1)^{2}-x\\cdot2y-2y(-1)-(-1)x\\}$</p><p>$=\\boldsymbol{(x+2y-1)(x^{2}+4y^{2}-2xy+x+2y+1)}$</p>",
        
    
        "$x^{3}-3x^{2}+xy+2-y$": // 上級12，最低次数整理，主任
        "<p>　$x^{3}-3x^{2}+xy+2-y$</p><p>$=(x-1)y+x^{3}-3x^{2}+2$</p><p>$=(x-1)y+(x-1)(x^{2}-2x-2)$</p><p>$=\\boldsymbol{(x-1)(y+x^{2}-2x-2)}$</p>",
        
    
        "$(x^{3}+2)^{3}+2(x^{3}+2)^{2}-21(x^{3}+2)+18$": // 上級13，置き換え，因数定理，主任
        "<p>　$(x^{3}+2)^{3}+2(x^{3}+2)^{2}-21(x^{3}+2)+18$</p><p>$=t^{3}+2t^{2}-21t+18$　$(t=x^{3}+2)$</p><p>$=(t-1)(t^{2}+3t-18)$</p><p>$=(t-1)(t+6)(t-3)$</p><p>$=(x^{3}+1)(x^{3}+8)(x^{3}-1)$</p><p>$=\\boldsymbol{(x+2)(x+1)(x-1)(x^{2}-2x+4)(x^{2}-x+1)(x^{2}+x+1)}$</p>",
        
    
        "$a^{4}+b^{4}+c^{4}-2a^{2}b^{2}-2b^{2}c^{2}-2c^{2}a^{2}$": // 上級14，最低次数整理，2011横浜市立大
        "<p>　$a^{4}+b^{4}+c^{4}-2a^{2}b^{2}-2b^{2}c^{2}-2c^{2}a^{2}$</p><p>$=a^{4}-2(b^{2}+c^{2})a^{2}+(b^{2}-c^{2})^{2}$</p><p>$=a^{4}-2(b^{2}+c^{2})a^{2}+(b+c)^{2}(b-c)^{2}$</p><p>$=\\{a^{2}-(b+c)^{2}\\}\\{a^{2}-(b-c)^{2}\\}$</p><p>$=\\boldsymbol{(a+b+c)(a-b-c)(a+b-c)(a-b+c)}$</p>",
        
    
        "$x^{12}-1$": // 上級15，Y.S.
        "<p>　$x^{12}-1$</p><p>$=(x^{6}+1)(x^{6}-1)$</p><p>$=(x^{2}+1)(x^{4}-x^{2}+1)(x^{2}-1)(x^{4}+x^{2}+1)$</p><p>$=(x^{2}+1)(x^{4}-x^{2}+1)(x+1)(x-1)\\{(x^{2}+1)^{2}-x^{2}\\}$</p><p>$=(x^{2}+1)(x^{4}-x^{2}+1)(x+1)(x-1)(x^{2}+1+x)(x^{2}+1-x)$</p><p>$=\\boldsymbol{(x+1)(x-1)(x^{2}+1)(x^{2}+x+1)(x^{2}-x+1)(x^{4}-x^{2}+1)}$</p>",
        
    
        "$x^{6}-x^{4}+3x^{2}-27$": // 上級16，Y.S.
        "<p>　$x^{6}-x^{4}+3x^{2}-27$</p><p>$=x^{6}-27-x^{2}(x^{2}-3)$</p><p>$=(x^{2}-3)(x^{4}+3x^{2}+9)-x^{2}(x^{2}-3)$</p><p>$=(x^{2}-3)(x^{4}+2x^{2}+9)$</p><p>$=(x^{2}-3)\\{(x^{2}+3)^{2}-4x^{2}\\}$</p><p>$=\\boldsymbol{(x^{2}-3)(x^{2}+2x+3)(x^{2}-2x+3)}$</p>",
        
    
    
        },
        "D": {
            "$-x^{6}+x^{5}+(y-1)x^{4}-3yx^{3}+(4y-4)x^{2}+(4-6y)x+y^{2}-4$": // 超級1，主任
        "<p>TBA</p>",
        
    
        "$x^{4}+y^{4}+z^{4}-2(xy+yz+zx)^{2}$": // 超級2
        "<p>TBA</p>",
        
    
        "$(4x^{4}+121)(4x^{4}+11x^{2}+121)-968x^{4}$": // 超級3，Au
        "<p>TBA</p>",
        
    
        "$x^{5}+x^{4}-2x+1$": // 超級4，Kay
        "<p>TBA</p>",
        
    
        "$(a+2b-3c)^{3}+(b+2c-3a)^{3}+(c+2a-3b)^{3}$": // 超級5，白里
        "<p>TBA</p>",
        
    
        "$(a-b+c)^{3}+(b-c+a)^{3}+(c-a+b)^{3}+24abc$": // 超級6，白里
        "<p>TBA</p>",
        
    
        "$a^{3}+b^{3}+c^{3}+d^{3}-3abc-3abd-3acd-3bcd$": // 超級7，白里
        "<p>TBA</p>",
        
    
        "$x^{6}-10x^{4}-6x^{3}+10x^{2}-1$": // 超級8，白里
        "<p>TBA</p>",
        
    
        "$x^{4}-4x^{3}-3x^{2}-4x+1$": // 超級9，Y.S.
        "<p>TBA</p>",
        
    
        "$4x^{4}+2x^{3}+x^{2}-3x-1$": // 超級10，雨乃松
        "<p>TBA</p>",
        
    
        "$6(2x-1)^{2}(3x-1)^{2}-5(2x-1)(3x-1)-x+1$": // 超級Warning，白里
        "<p>TBA</p>",
        
    
        "$x^{6}-21x^{4}+35x^{2}-7$": // 超級Danger，白里
        "<p>TBA</p>",
        
        }
    },
    "4": {
        "A": {
            "$\\displaystyle \\int_{}^{} \\ \\dfrac{1}{4x^{2}-4x+1}\\,dx$": "<p>　$\\displaystyle \\int_{}^{} \\ \\dfrac{1}{4x^{2}-4x+1}\\,dx$</p><p>$\\displaystyle =\\int_{}^{} \\ \\dfrac{1}{(2x-1)^{2}}\\,dx$</p><p>$=\\boldsymbol{-\\dfrac{1}{2(2x-1)}+C}$</p>",
    // 普通
    "$\\displaystyle \\int_{}^{} \\ \\dfrac{3x-2}{x+1}\\,dx$": "<p>　$\\displaystyle \\int_{}^{} \\ \\dfrac{3x-2}{x+1}\\,dx$</p><p>$\\displaystyle =\\int_{}^{} \\ \\dfrac{3(x+1)-5}{x+1}\\,dx$</p><p>$\\displaystyle =\\int_{}^{} \\ \\left(3-\\dfrac{5}{x+1}\\right)\\,dx$</p><p>$=\\boldsymbol{3x-5\\log|x+1|+C}$</p>",
    // 普通
    "$\\displaystyle \\int_{}^{} \\ \\pi^{2x-1}\\,dx$": "<p>　$\\displaystyle \\int_{}^{} \\ \\pi^{2x-1}\\,dx$</p><p>$=\\boldsymbol{\\dfrac{\\pi^{2x-1}}{2\\log\\pi}+C}$</p>",
    // 普通
    "$\\displaystyle \\int_{}^{} \\ \\dfrac{e^{3x}}{e^{x}+1}\\,dx$": "<p>$e^{x}+1=t$ とおくと，$e^{x}dx=dt$</p><p>　$\\displaystyle \\int_{}^{} \\ \\dfrac{e^{3x}}{e^{x}+1}\\,dx$</p><p>$\\displaystyle =\\int_{}^{} \\ \\dfrac{(t-1)^{2}}{t}\\,dt$</p><p>$\\displaystyle =\\int_{}^{} \\ \\left(t-2+\\dfrac{1}{t}\\right)\\,dt$</p><p>$\\displaystyle =\\dfrac{1}{2}t^{2}-2t+\\log |t|+C$</p><p>$=\\dfrac{1}{2}(e^{x}+1)^{2}-2(e^{x}+1)+\\log (e^{x}+1)+C$</p><p>$=\\boldsymbol{\\dfrac{e^{2x}}{2}-e^{x}+\\log (e^{x}+1)+C}$</p>",
    // 置換
    "$\\displaystyle \\int_{}^{} \\ \\dfrac{1}{\\cos x}\\,dx$": "<p>$\\sin{x}=t$ とおくと，$\\cos xdx=dt$</p><p>　$\\displaystyle \\int_{}^{} \\ \\dfrac{1}{\\cos x}\\,dx$</p><p>$\\displaystyle =\\int_{}^{} \\ \\dfrac{\\cos x}{1-\\sin^{2}x}\\,dx$</p><p>$\\displaystyle =\\int_{}^{} \\ \\dfrac{1}{1-t^2}\\,dt$</p><p>$\\displaystyle =\\int_{}^{} \\ \\dfrac{1}{(1-t)(1+t)}\\,dt$</p><p>$\\displaystyle =\\dfrac{1}{2}\\int_{}^{} \\ \\left(\\dfrac{1}{1-t}+\\dfrac{1}{1+t}\\right)\\,dt$</p><p>$\\displaystyle =\\dfrac{1}{2}\\left(-\\log|1-t|+\\log|1+t|\\right)+C$</p><p>$=\\boldsymbol{\\dfrac{1}{2}\\log\\dfrac{1+\\sin x}{1-\\sin x}+C}$</p>",
    // 置換
    "$\\displaystyle \\int_{}^{} \\ \\dfrac{1}{\\sin x}\\,dx$": "<p>$\\cos{x}=t$ とおくと，$-\\sin xdx=dt$</p><p>　$\\displaystyle \\int_{}^{} \\ \\dfrac{1}{\\sin x}\\,dx$</p><p>$\\displaystyle =\\int_{}^{} \\ \\dfrac{\\sin x}{1-\\cos^{2}x}\\,dx$</p><p>$\\displaystyle =\\int_{}^{}\\dfrac{-1}{1-t^2}\\,dt$</p><p>$\\displaystyle =\\int_{}^{}\\dfrac{1}{(t-1)(t+1)}\\,dt$</p><p>$\\displaystyle =\\dfrac{1}{2}\\int_{}^{} \\ \\left(\\dfrac{1}{t-1}-\\dfrac{1}{t+1}\\right)\\,dt$</p><p>$=\\dfrac{1}{2}(\\log |t-1|-\\log |t+1|)+C$</p><p>$=\\dfrac{1}{2}\\log \\dfrac{|\\cos x-1|}{|\\cos x+1|}+C$</p><p>$=\\boldsymbol{\\dfrac{1}{2}\\log \\dfrac{1-\\cos x}{1+\\cos x}+C}$</p><p><b style=\"color: black\">別解</b></p><p>　$\\displaystyle \\int_{}^{} \\ \\dfrac{1}{\\sin x}\\,dx$</p><p>$\\displaystyle =\\int_{}^{} \\ \\dfrac{1}{2\\sin\\frac{x}{2}\\cos\\frac{x}{2}}\\,dx$</p><p>$\\displaystyle =\\int_{}^{} \\ \\dfrac{1}{\\tan\\frac{x}{2}}\\cdot\\dfrac{1}{2\\cos^{2}\\frac{x}{2}}\\,dx$</p><p>$\\displaystyle =\\int_{}^{} \\ \\dfrac{1}{\\tan\\frac{x}{2}}\\left(\\tan\\frac{x}{2}\\right)'\\,dx$</p><p>$=\\boldsymbol{\\log \\left|\\tan\\dfrac{x}{2}\\right|+C}$</p>",
    // 置換
    "$\\displaystyle \\int_{}^{} \\ \\tan x\\,dx$": "<p>$\\cos{x}=t$ とおくと，$-\\sin xdx=dt$</p><p>　$\\displaystyle \\int_{}^{} \\ \\tan x\\,dx$</p><p>$\\displaystyle =\\int_{}^{} \\ \\dfrac{\\sin x}{\\cos x}\\,dx$</p><p>$\\displaystyle =\\int_{}^{} \\ \\dfrac{-1}{t}\\,dt$</p><p>$\\displaystyle =-\\log |t|+C$</p><p>$=\\boldsymbol{-\\log|\\cos x|+C}$</p>",
    // 置換
    "$\\displaystyle \\int_{}^{} \\ \\dfrac{1}{x(\\log x)^{2}}\\,dx$": "<p>$\\log{x}=t$ とおくと，$\\dfrac{1}{x}dx=dt$</p><p>　$\\displaystyle \\int_{}^{} \\ \\dfrac{1}{x(\\log x)^{2}}\\,dx$</p><p>$\\displaystyle =\\int_{}^{} \\ \\dfrac{1}{t^{2}}\\,dt$</p><p>$\\displaystyle =-\\dfrac{1}{t}+C$</p><p>$=\\boldsymbol{-\\dfrac{1}{\\log x}+C}$</p>",
    // 置換
    "$\\displaystyle \\int_{}^{} \\ \\dfrac{e^{x}-e^{-x}}{e^{x}+e^{-x}}\\,dx$": "<p>$\\displaystyle =\\int_{}^{} \\ \\dfrac{e^{x}-e^{-x}}{e^{x}+e^{-x}}\\,dx$</p><p>$\\displaystyle =\\int_{}^{} \\ \\dfrac{(e^{x}+e^{-x})'}{e^{x}+e^{-x}}\\,dx$</p><p>$=\\boldsymbol{\\log(e^{x}+e^{-x})+C}$</p>",
    // 置換
    "$\\displaystyle \\int_{}^{} \\ xe^{-2x}\\,dx$": "<p>　$\\displaystyle \\int_{}^{} \\ xe^{-2x}\\,dx$</p><p>$\\displaystyle =x\\left(-\\dfrac{1}{2}e^{-2x}\\right)-\\int_{}^{} \\ 1\\cdot \\left(-\\dfrac{1}{2}e^{-2x}\\right)\\,dx$</p><p>$\\displaystyle =-\\dfrac{x}{2}e^{-2x}+\\int_{}^{} \\ \\dfrac{1}{2}e^{-2x}\\,dx$</p><p>$=\\boldsymbol{-\\dfrac{x}{2}e^{-2x}-\\dfrac{1}{4}e^{-2x}+C}$</p>",
    // 部分
    "$\\displaystyle \\int_{}^{} \\ \\log x\\,dx$": "<p>　$\\displaystyle \\int_{}^{} \\ 1\\cdot \\log x\\,dx$</p><p>$\\displaystyle =x\\log x-\\int_{}^{} \\ x\\cdot \\dfrac{1}{x}\\,dx$</p><p>$=\\boldsymbol{x\\log x-x+C}$</p>",
    // 部分
    "$\\displaystyle \\int_{}^{} \\ \\log(x+2)\\,dx$": "<p>　$\\displaystyle \\int_{}^{} \\ \\log(x+2)\\,dx$</p><p>$\\displaystyle =\\int_{}^{} \\ (x+2)'\\log(x+2)\\,dx$</p><p>$\\displaystyle =(x+2)\\log(x+2)-\\int_{}^{} \\ (x+2)\\dfrac{1}{x+2}\\,dx$</p><p>$=\\boldsymbol{(x+2)\\log(x+2)-x+C}$</p>",
    // 部分
    "$\\displaystyle \\int_{}^{} \\ x\\log x\\,dx$": "<p>　$\\displaystyle \\int_{}^{} \\ x\\log x\\,dx$</p><p>$\\displaystyle =\\dfrac{x^2}{2}\\log x-\\int_{}^{} \\ \\dfrac{x^2}{2}\\cdot\\dfrac{1}{x}\\,dx$</p><p>$=\\boldsymbol{\\dfrac{x^2}{2}\\log x-\\dfrac{x^2}{4}+C}$</p>",
    // 部分
    "$\\displaystyle \\int_{}^{} \\ \\log_{2}x\\,dx$": "<p>　$\\displaystyle \\int_{}^{} \\ \\log_{2}x\\,dx$</p><p>$\\displaystyle =x\\log_{2} x-\\int_{}^{} \\ x\\cdot\\dfrac{1}{x\\log2}\\,dx$</p><p>$=\\boldsymbol{x\\log_{2}x-\\dfrac{x}{\\log2}+C}$</p><p><b style=\"color: black\">別解</b></p><p>　$\\displaystyle \\int_{}^{} \\ \\log_{2}x\\,dx$</p><p>$\\displaystyle =\\int_{}^{} \\ \\dfrac{\\log x}{\\log2}\\,dx$</p><p>$\\displaystyle =\\dfrac{x\\log x}{\\log 2}-\\int_{}^{} \\ x\\cdot\\dfrac{1}{x\\log 2}\\,dx$</p><p>$=\\boldsymbol{x\\log_{2}x-\\dfrac{x}{\\log 2}+C}$</p>",
    "$\\displaystyle \\int_{}^{} \\ x^{2}\\cos x\\,dx$": "<p>　$\\displaystyle \\int_{}^{} \\ x^{2}\\cos x\\,dx$</p><p>$\\displaystyle =x^{2}\\sin x-\\int_{}^{} \\ 2x\\sin x\\,dx$</p><p>$\\displaystyle =x^{2}\\sin x-\\left(2x(-\\cos x)-\\int_{}^{} \\ 2(-\\cos x)\\,dx\\right)$</p><p>$\\displaystyle =x^{2}\\sin x+2x\\cos x-\\int_{}^{} \\ 2\\cos x\\,dx$</p><p>$=\\boldsymbol{x^{2}\\sin x+2x\\cos x-2\\sin x+C}$</p>",
    // 部分
    "$\\displaystyle \\int_{}^{} \\ x\\sin^{2} x\\,dx$": "<p>　$\\displaystyle \\int_{}^{} \\ x\\sin^{2} x\\,dx$</p><p>$=\\displaystyle \\int_{}^{} \\ x\\cdot\\dfrac{1-\\cos2x}{2}\\,dx$</p><p>$=\\displaystyle \\dfrac{1}{2}\\int_{}^{} \\ (x-x\\cos2x)\\,dx$</p><p>$=\\displaystyle \\dfrac{1}{2}\\left\\{\\dfrac{x^{2}}{2}-\\left(\\dfrac{x}{2}\\sin2x-\\int_{}^{} \\ \\dfrac{1}{2}\\sin2x\\,dx\\right)\\right\\}$</p><p>$=\\displaystyle \\dfrac{x^{2}}{4}-\\dfrac{x}{4}\\sin2x+\\dfrac{1}{4}\\int_{}^{} \\ \\sin2x\\,dx$</p<p>$=\\boldsymbol{\\displaystyle \\dfrac{x^{2}}{4}-\\dfrac{x}{4}\\sin2x-\\dfrac{1}{8}\\cos2x+C}$</p>",
    // 部分
    "$\\displaystyle \\int_{}^{} \\ \\dfrac{x}{5^{x}}\\,dx$": "<p>　$\\displaystyle \\int_{}^{} \\ \\dfrac{x}{5^{x}}\\,dx$</p><p>$\\displaystyle =\\int_{}^{} \\ x\\cdot 5^{-x}\\,dx$</p><p>$\\displaystyle =x\\left(-\\dfrac{5^{-x}}{\\log5}\\right)-\\int_{}^{} \\ \\left(-\\dfrac{5^{-x}}{\\log5}\\right)\\,dx$</p><p>$\\displaystyle =-\\dfrac{x}{5^{x}\\log5}+\\int_{}^{} \\ \\dfrac{5^{-x}}{\\log5}\\,dx$</p><p>$\\displaystyle =\\boldsymbol{-\\dfrac{x}{5^{x}\\log5}-\\dfrac{1}{5^{x}(\\log5)^{2}}+C}$</p>",
    // 部分
    "$\\displaystyle \\int_{}^{} \\ \\dfrac{x^{2}+6x+9}{x+2}\\,dx$": "<p>　$\\displaystyle \\int_{}^{} \\ \\dfrac{x^{2}+6x+9}{x+2}\\,dx$</p><p>$\\displaystyle =\\int_{}^{} \\ \\dfrac{(x+4)(x+2)+1}{x+2}\\,dx$</p><p>$\\displaystyle =\\int_{}^{} \\ \\left(x+4+\\dfrac{1}{x+2}\\right)\\,dx$</p><p>$=\\boldsymbol{\\dfrac{1}{2}x^{2}+4x+\\log|x+2|+C}$</p>",
    // 分数関数
    "$\\displaystyle \\int_{}^{} \\ \\sin^{2}x\\,dx$": "<p>　$\\displaystyle \\int_{}^{} \\ \\sin^{2}x\\,dx$</p><p>$\\displaystyle =\\int_{}^{} \\ \\dfrac{1-\\cos 2x}{2}\\,dx$</p><p>$=\\boldsymbol{\\dfrac{1}{2}x-\\dfrac{1}{4}\\sin2x+C}$</p>",
    // 三角関数
    "$\\displaystyle \\int_{}^{} \\ \\cos^{2}x\\,dx$": "<p>　$\\displaystyle \\int_{}^{} \\ \\cos^{2}x\\,dx$</p><p>$\\displaystyle =\\int_{}^{} \\ \\dfrac{1+\\cos 2x}{2}\\,dx$</p><p>$=\\boldsymbol{\\dfrac{1}{2}x+\\dfrac{1}{4}\\sin2x+C}$</p>",
    // 三角関数
    "$\\displaystyle \\int_{}^{} \\ \\cos^{3}x\\,dx$": "<p>$\\sin x=t$ とおくと，$\\cos x\\, dx=dt$</p><p>　$\\displaystyle \\int_{}^{} \\ \\cos^{3}x\\,dx$</p><p>$\\displaystyle =\\int_{}^{} \\ (  1-\\sin^{2}x)\\cos x\\,dx$</p><p>$\\displaystyle =\\int_{}^{} \\ (  1-t^{2})\\,dt$</p><p>$\\displaystyle =t-\\dfrac{1}{3}t^{3}+C$</p><p>$=\\boldsymbol{\\sin x-\\dfrac{1}{3}\\sin^{3}x+C}$</p><p><b style=\"color: black\">別解</b></p><p><a href=\"3baikaku.html\">3倍角の公式</a>を使う．</p><p>　$\\displaystyle \\int_{}^{} \\ \\cos^{3}x\\,dx$</p><p>$\\displaystyle =\\int_{}^{} \\ \\left(\\dfrac{1}{4}\\cos 3x+\\dfrac{3}{4}\\cos x\\right)\\,dx$</p><p>$=\\boldsymbol{\\dfrac{1}{12}\\sin 3x+\\dfrac{3}{4}\\sin x+C}$</p>",
    // 三角関数
    "$\\displaystyle \\int_{}^{} \\ \\tan^{2}x\\,dx$": "<p>　$\\displaystyle \\int_{}^{} \\ \\tan^{2}x\\,dx$</p><p>$\\displaystyle =\\int_{}^{} \\ \\left(\\dfrac{1}{\\cos^{2}x}-1\\right)\\,dx$</p><p>$=\\boldsymbol{\\tan x-x+C}$</p>",
    // 三角関数
    "$\\displaystyle \\int_{}^{} \\ \\cos 4x\\cos 2x\\,dx$": "<p><a href=\"wasekisekiwa.html\">積和変換公式</a>を使う．</p><p>　$\\displaystyle \\int_{}^{} \\ \\cos 4x\\cos 2x\\,dx$</p><p>$\\displaystyle =\\int_{}^{} \\ \\dfrac{1}{2}\\{\\cos(4x+2x)+\\cos(4x-2x)\\}\\,dx$</p><p>$\\displaystyle =\\int_{}^{} \\ \\dfrac{1}{2}(\\cos 6x+\\cos 2x)\\,dx$</p><p>$=\\boldsymbol{\\dfrac{1}{12}\\sin 6x+\\dfrac{1}{4}\\sin2x+C}$</p>",
    // 三角関数
    "$\\displaystyle \\int_{}^{} \\ \\sin^{2}x\\cos^{3}x\\,dx$": "<p>$\\sin x=t$ とおくと，$\\cos x\\, dx=dt$</p><p>　$\\displaystyle \\int_{}^{} \\ \\sin^{2}x\\cos^{3}x\\,dx$</p><p>$\\displaystyle =\\int_{}^{} \\ \\sin^{2}x(1-\\sin^{2}x)\\cos x\\,dx$</p><p>$\\displaystyle =\\int_{}^{} \\ t^{2}(1-t^{2})\\,dt$</p><p>$\\displaystyle =\\dfrac{1}{3}t^{3}-\\dfrac{1}{5}t^{5}+C$</p><p>$=\\boldsymbol{\\dfrac{1}{3}\\sin^{3}x-\\dfrac{1}{5}\\sin^{5}x+C}$</p>",
    // 三角関数，置換
    "$\\displaystyle \\int_{}^{} \\ \\sin x\\cos x\\cos2x\\,dx$": "<p>　$\\displaystyle \\int_{}^{} \\ \\sin x\\cos x\\cos2x\\,dx$</p><p>$\\displaystyle =\\dfrac{1}{2}\\int_{}^{} \\ \\sin2x\\cos2x\\,dx$</p><p>$\\displaystyle =\\dfrac{1}{4}\\int_{}^{} \\ \\sin4x\\,dx$</p><p>$=\\boldsymbol{-\\dfrac{1}{16}\\cos4x+C}$</p>",
    // 三角関数
    "$\\displaystyle \\int_{0}^{2}\\sqrt{4-x^{2}}\\,dx$": "<img src=\"noteimages/integration-by-substitution1.png\" alt=\"円関数の積分1\" width=\"100%\"><p>扇型の面積であることを利用すると</p><p>　$\\displaystyle \\int_{0}^{2}\\sqrt{4-x^{2}}\\,dx$</p><p>$=4\\pi\\times\\dfrac{1}{4}=\\boldsymbol{\\pi}$</p>",
    // 置換
    "$\\displaystyle \\int_{-2}^{4}\\sqrt{16-x^{2}}\\,dx$": "<img src=\"noteimages/integration-by-substitution2.png\" alt=\"円関数の積分2\" width=\"100%\"><p>扇型と直角三角形の面積の和であることを利用すると</p><p>　$\\displaystyle \\int_{-2}^{4}\\sqrt{16-x^{2}}\\,dx$</p><p>$=16\\pi\\times\\dfrac{1}{3}+2\\cdot 2\\sqrt{3}\\cdot \\dfrac{1}{2}=\\boldsymbol{\\dfrac{16}{3}\\pi+2\\sqrt{3}}$</p>",
    // 置換
    "$\\displaystyle \\int_{0}^{1}\\dfrac{1}{\\sqrt{4-x^{2}}}\\,dx$": "<p>$x=2\\sin\\theta$ とおくと，$dx=2\\cos\\theta d\\theta$</p><p>積分範囲は</p><table border=\"1px\" cellpadding=\"10px\" style=\"border-collapse: collapse;text-align: center\" align=\"center\"><caption></caption><tr><th>$x$</th><td>$0 \\ \\to \\ 1$</td></tr><tr><th>$\\theta$</th><td>$0 \\ \\to \\ \\dfrac{\\pi}{6}$</td></tr></table><p>となるので</p><p>　$\\displaystyle \\int_{0}^{1}\\dfrac{1}{\\sqrt{4-x^{2}}}\\,dx$</p><p>$\\displaystyle =\\int_{0}^{\\frac{\\pi}{6}}\\dfrac{1}{\\sqrt{4-4\\sin^{2}\\theta}}\\cdot 2\\cos\\theta\\,d\\theta$</p><p>$\\displaystyle =\\int_{0}^{\\frac{\\pi}{6}}\\dfrac{1}{\\sqrt{4\\cos^{2}\\theta}}\\cdot 2\\cos\\theta\\,d\\theta$</p><p>$\\displaystyle =\\int_{0}^{\\frac{\\pi}{6}}1\\,d\\theta$</p><p>$=\\boldsymbol{\\dfrac{\\pi}{6}}$</p>",
    // 置換
    "$\\displaystyle \\int_{-1}^{3}\\dfrac{1}{x^{2}+3}\\,dx$": "<p>$x=\\sqrt{3}\\tan\\theta$ $\\left(-\\dfrac{\\pi}{2}&lt; \\theta &lt;\\dfrac{\\pi}{2}\\right)$ とおくと</p><p>　$dx=\\dfrac{\\sqrt{3}}{\\cos^{2}\\theta}d\\theta$</p><p>積分範囲は</p><table border=\"1px\" cellpadding=\"10px\" style=\"border-collapse: collapse;text-align: center\" align=\"center\"><caption></caption><tr><th>$x$</th><td>$-1 \\ \\to \\ 3$</td></tr><tr><th>$\\theta$</th><td>$-\\dfrac{\\pi}{6} \\ \\to \\ \\dfrac{\\pi}{3}$</td></tr></table><p>となるので</p><p>　$\\displaystyle \\int_{-1}^{3}\\dfrac{1}{x^{2}+3}\\,dx$</p><p>$\\displaystyle =\\int_{-\\frac{\\pi}{6}}^{\\frac{\\pi}{3}}\\dfrac{1}{3(1+\\tan^{2}\\theta)}\\cdot \\dfrac{\\sqrt{3}}{\\cos^{2}\\theta}\\,d\\theta$</p><p>$\\displaystyle =\\int_{-\\frac{\\pi}{6}}^{\\frac{\\pi}{3}}\\dfrac{\\sqrt{3}}{3}\\,d\\theta$</p><p>$\\displaystyle =\\left[\\dfrac{\\sqrt{3}}{3}\\theta\\right]_{-\\frac{\\pi}{6}}^{\\frac{\\pi}{3}}$</p><p>$=\\boldsymbol{\\dfrac{\\sqrt{3}}{6}\\pi}$</p>",
    // 置換
    "$\\displaystyle \\int_{2}^{5}x\\sqrt{x-2}\\,dx$": "<p>　$\\displaystyle \\int_{2}^{5}x\\sqrt{x-2}\\,dx$</p><p>$\\displaystyle =\\int_{2}^{5}(x-2+2)\\sqrt{x-2}\\,dx$</p><p>$\\displaystyle =\\int_{2}^{5}\\left\\{(x-2)^{\\frac{3}{2}}+2(x-2)^{\\frac{1}{2}}\\right\\}\\,dx$</p><p>$\\displaystyle =\\left[\\dfrac{2}{5}(x-2)^{\\frac{5}{2}}+\\dfrac{4}{3}(x-2)^{\\frac{3}{2}}\\right]_{2}^{5}$</p><p>$=\\boldsymbol{\\dfrac{38\\sqrt{3}}{5}}$</p>",
    // 置換
    "$\\displaystyle \\int_{0}^{\\pi}x\\sin 2x\\,dx$": "<p>　$\\displaystyle \\int_{0}^{\\pi}x\\sin 2x\\,dx$</p><p>$\\displaystyle =\\left[x\\left(-\\dfrac{1}{2}\\cos 2x\\right)\\right]_{0}^{\\pi}-\\int_{0}^{\\pi}\\left(-\\dfrac{1}{2}\\cos 2x\\right)\\,dx$</p><p>$\\displaystyle =-\\dfrac{\\pi}{2}+\\int_{0}^{\\pi}\\dfrac{1}{2}\\cos 2x\\,dx$</p><p>$\\displaystyle =-\\dfrac{\\pi}{2}+\\left[\\dfrac{1}{4}\\sin 2x\\right]_{0}^{\\pi}$</p><p>$=\\boldsymbol{-\\dfrac{\\pi}{2}}$</p>",
    // 部分
    "$\\displaystyle \\int_{1}^{2}x(\\log x)^{2}\\,dx$": "<p>　$\\displaystyle \\int_{1}^{2}x(\\log x)^{2}\\,dx$</p><p>$\\displaystyle =\\left[\\dfrac{x^{2}}{2}(\\log x)^{2}\\right]_{1}^{2}-\\int_{1}^{2}\\dfrac{x^{2}}{2}\\cdot 2(\\log x)\\dfrac{1}{x}\\,dx$</p><p>$\\displaystyle =2(\\log 2)^{2}-\\int_{1}^{2}x(\\log x)\\,dx$</p><p>$\\displaystyle =2(\\log 2)^{2}-\\left(\\left[\\dfrac{x^{2}}{2}(\\log x)\\right]_{1}^{2}-\\int_{1}^{2}\\dfrac{x^2}{2}\\cdot\\dfrac{1}{x}\\,dx\\right)$</p><p>$\\displaystyle =2(\\log 2)^{2}-2\\log 2+\\int_{1}^{2}\\dfrac{x}{2}\\,dx$</p><p>$\\displaystyle =2(\\log 2)^{2}-2\\log 2+\\left[\\dfrac{x^2}{4} \\right]_{1}^{2}$</p><p>$=\\boldsymbol{2(\\log 2)^{2}-2\\log 2+\\dfrac{3}{4}}$</p>",
    // 部分
    "$\\displaystyle \\int_{\\alpha}^{\\beta}(x-\\alpha)(x-\\beta)\\,dx$": "<p>　$\\displaystyle \\int_{\\alpha}^{\\beta}(x-\\alpha)(x-\\beta)\\,dx$</p><p>$\\displaystyle =\\left[\\dfrac{1}{2}(x-\\alpha)^{2}(x-\\beta)\\right]_{\\alpha}^{\\beta}-\\int_{\\alpha}^{\\beta}\\dfrac{1}{2}(x-\\alpha)^{2}\\,dx$</p><p>$\\displaystyle =-\\left[\\dfrac{1}{6}(x-\\alpha)^{3}\\right]_{\\alpha}^{\\beta}$</p><p>$\\displaystyle =\\boldsymbol{-\\dfrac{1}{6}(\\beta-\\alpha)^{3}}$</p>",
    // 1/6公式
    "$\\displaystyle \\int_{1}^{2}\\dfrac{4x+5}{2x^{2}+5x-3}\\,dx$": "<p>　$\\displaystyle \\int_{1}^{2}\\dfrac{4x+5}{2x^{2}+5x-3}\\,dx$</p><p>$\\displaystyle =\\Bigl[\\log |2x^{2}+5x-3|\\Bigr]_{1}^{2}$</p><p>$\\displaystyle =\\log15-\\log4$</p><p>$=\\boldsymbol{\\log\\dfrac{15}{4}}$</p>",
    // 基本&分数関数
    "$\\displaystyle \\int_{0}^{\\frac{1}{2}}\\dfrac{5x+1}{2x^{2}-x-1}\\,dx$": "<p>　$\\dfrac{5x+1}{2x^{2}-x-1}=\\dfrac{a}{2x+1}+\\dfrac{b}{x-1}$</p><p>として，両辺 $2x^{2}-x-1$ かけると</p><p>　$5x+1=a(x-1)+b(2x+1)$</p><p>　$\\therefore \\ \\begin{cases}5=a+2b \\\\ 1=-a+b\\end{cases}$</p><p>　$\\therefore \\ a=1$，$b=2$</p><p>　$\\displaystyle \\int_{0}^{\\frac{1}{2}}\\dfrac{5x+1}{2x^{2}-x-1}\\,dx$</p><p>$\\displaystyle =\\int_{0}^{\\frac{1}{2}}\\left(\\dfrac{1}{2x+1}+\\dfrac{2}{x-1}\\right)\\,dx$</p><p>$\\displaystyle =\\left[\\dfrac{1}{2}\\log |2x+1|+2\\log|x-1|\\right]_{0}^{\\frac{1}{2}}$</p><p>$\\displaystyle =\\dfrac{1}{2}\\log2+2\\log\\dfrac{1}{2}$</p><p>$=\\boldsymbol{-\\dfrac{3}{2}\\log2}$</p>",
    // 分数関数
    "$\\displaystyle \\int_{0}^{\\frac{\\pi}{2}}\\sin6x\\cos4x\\,dx$": "<p><a href=\"wasekisekiwa.html\">積和変換公式</a>を使う．</p><p>　$\\displaystyle \\int_{0}^{\\frac{\\pi}{2}}\\sin6x\\cos4x\\,dx$</p><p>$\\displaystyle =\\int_{0}^{\\frac{\\pi}{2}}\\dfrac{1}{2}\\{\\sin(6x+4x)+\\sin(6x-4x)\\}\\,dx$</p><p>$\\displaystyle =\\int_{0}^{\\frac{\\pi}{2}}\\dfrac{1}{2}(\\sin10x+\\sin2x)\\,dx$</p><p>$\\displaystyle =\\left[-\\dfrac{1}{20}\\cos10x-\\dfrac{1}{4}\\cos2x\\right]_{0}^{\\frac{\\pi}{2}}$</p><p>$=\\boldsymbol{\\dfrac{3}{5}}$</p>",
    // 三角関数
    "$\\displaystyle \\int_{-1}^{1}\\dfrac{x+1}{x^{2}+1}\\,dx$": "<p>　$\\displaystyle \\int_{-1}^{1}\\dfrac{x+1}{x^{2}+1}\\,dx$</p><p>$\\displaystyle =\\int_{-1}^{1}\\left(\\dfrac{x}{x^{2}+1}+\\dfrac{1}{x^{2}+1}\\right)\\,dx$</p><p>$\\displaystyle =2\\int_{0}^{1}\\dfrac{1}{x^{2}+1}\\,dx$</p><p>$\\displaystyle =2\\int_{0}^{\\frac{\\pi}{4}}\\dfrac{1}{\\tan^{2}\\theta+1}\\cdot\\dfrac{1}{\\cos^{2}\\theta}\\,d\\theta$</p><p>$\\displaystyle =2\\Bigl[\\theta\\Bigr]_{0}^{\\frac{\\pi}{4}}$</p><p>$=\\boldsymbol{\\dfrac{\\pi}{2}}$</p>",
    // 偶関数奇関数
    "$\\displaystyle \\int_{-\\pi}^{\\pi}(x+1)\\sin x\\,dx$": "<p>　$\\displaystyle \\int_{-\\pi}^{\\pi}(x+1)\\sin x\\,dx$</p><p>$\\displaystyle =\\int_{-\\pi}^{\\pi}(x\\sin x+\\sin x)\\,dx$</p><p>$\\displaystyle =2\\int_{0}^{\\pi}x\\sin x\\,dx$</p><p>$\\displaystyle =2\\Bigl[x(-\\cos x)+\\sin x \\Bigr]_{0}^{\\pi}$</p><p>$=\\boldsymbol{2\\pi}$</p>",
    // 偶関数奇関数
    "$\\displaystyle \\int_{-4}^{1}\\left|\\dfrac{1}{2}x+1\\right|\\,dx$": "<p>グラフで該当の定積分を図示すると</p><div style=\"text-align: center\"><img src=\"noteimages/integrals-zettaichi2.png\" alt=\"絶対値付き関数の定積分2\" width=\"100%\"></div><p>　$\\displaystyle \\int_{-4}^{1}\\left|\\dfrac{1}{2}x+1\\right|\\,dx$</p><p>$=2\\cdot1\\cdot\\dfrac{1}{2}+3\\cdot\\dfrac{3}{2}\\cdot\\dfrac{1}{2}=\\boldsymbol{\\dfrac{13}{4}}$</p>",
    // 絶対値
    "$\\displaystyle \\int_{0}^{1}\\left|e^{x}-2\\right|\\,dx$": "<p>　$\\displaystyle \\int_{0}^{1}\\left|e^{x}-2\\right|\\,dx$</p><p>$\\displaystyle =\\int_{0}^{\\log 2}(2-e^{x})\\,dx+\\int_{\\log 2}^{1}(e^{x}-2)\\,dx$</p><p>$\\displaystyle =\\Bigl[2x-e^{x}\\Bigr]_{0}^{\\log 2}+\\Bigl[e^{x}-2x\\Bigr]_{\\log 2}^{1}$</p><p>$\\displaystyle =2(2\\log2-2)+1+e-2$</p><p>$=\\boldsymbol{e+4\\log2-5}$</p>",
    // 絶対値
    "$\\displaystyle \\int_{0}^{\\frac{\\pi}{2}}\\left|\\sin x-\\dfrac{1}{2}\\right|\\,dx$": "<p>　$\\displaystyle \\int_{0}^{\\frac{\\pi}{2}}\\left|\\sin x-\\dfrac{1}{2}\\right|\\,dx$</p><p>$\\displaystyle =\\int_{0}^{\\frac{\\pi}{6}}\\left(\\dfrac{1}{2}-\\sin x\\right)\\,dx+\\int_{\\frac{\\pi}{6}}^{\\frac{\\pi}{2}}\\left(\\sin x-\\dfrac{1}{2}\\right)\\,dx$</p><p>$\\displaystyle =\\left[\\dfrac{1}{2}x+\\cos x\\right]_{0}^{\\frac{\\pi}{6}}+\\left[-\\cos x-\\dfrac{1}{2}x\\right]_{\\frac{\\pi}{6}}^{\\frac{\\pi}{2}}$</p><p>$\\displaystyle =2\\left(\\dfrac{\\pi}{12}+\\dfrac{\\sqrt{3}}{2}\\right)-1-\\dfrac{\\pi}{4}$</p><p>$=\\boldsymbol{\\sqrt{3}-1-\\dfrac{\\pi}{12}}$</p>",
    // 絶対値
        },
        "B": {
            "$\\displaystyle \\int_{}^{} \\ e^{x}\\sin x\\,dx$": "<p>$\\displaystyle I=\\int_{}^{} \\ e^{x}\\sin x\\,dx$ とおく．</p><p>　$\\displaystyle I$</p><p>$\\displaystyle =e^{x}\\sin x-\\int_{}^{} \\ e^{x}\\cos x\\,dx$</p><p>$\\displaystyle =e^{x}\\sin x-\\left(e^{x}\\cos x-\\int_{}^{} \\ e^{x}(-\\sin x)\\,dx\\right)$</p><p>$\\displaystyle =e^{x}\\sin x-e^{x}\\cos x-\\int_{}^{} \\ e^{x}\\sin x\\,dx$</p><p>$\\displaystyle =e^{x}(\\sin x-\\cos x)-I$</p><p>$\\displaystyle 2I=e^{x}(\\sin x-\\cos x)$ だが，積分定数を入れて</p><p>　$\\boldsymbol{I=\\dfrac{e^{x}}{2}(\\sin x-\\cos x)+C}$</p>",
    // 部分
    "$\\displaystyle \\int_{}^{} \\ \\dfrac{2x^{4}-x^{3}-x^{2}+x+2}{x^{2}(x-1)}\\,dx$": "<p>　$\\displaystyle \\int_{}^{} \\ \\dfrac{2x^{4}-x^{3}-x^{2}+x+2}{x^{2}(x-1)}\\,dx$</p><p>$\\displaystyle =\\int_{}^{} \\ \\dfrac{(x^{3}-x^{2})(2x+1)+x+2}{x^{2}(x-1)}\\,dx$</p><p>$\\displaystyle =\\int_{}^{} \\ \\left(2x+1+\\dfrac{x+2}{x^{2}(x-1)}\\right)\\,dx$</p><p>ここで</p><p>　$\\dfrac{x+2}{x^{2}(x-1)}=\\dfrac{a}{x}+\\dfrac{b}{x^2}+\\dfrac{c}{x-1}$</p><p>として，両辺 $x^{2}(x-1)$ かけると</p><p>　$x+2=ax(x-1)+b(x-1)+cx^2$</p><p>　$\\therefore \\ \\begin{cases}0=a+c \\\\ 1=-a+b \\\\ 2=-b\\end{cases}$</p><p>　$\\therefore \\ a=-3$，$b=-2$，$c=3$</p><p>　$\\displaystyle \\int_{}^{} \\ \\dfrac{2x^{4}-x^{3}-x^{2}+x+2}{x^{2}(x-1)}\\,dx$</p><p>$\\displaystyle =\\int_{}^{} \\ \\left(2x+1-\\dfrac{3}{x}-\\dfrac{2}{x^2}+\\dfrac{3}{x-1}\\right)\\,dx$</p><p>$=x^{2}+x-3\\log|x|+\\dfrac{2}{x}+3\\log|x-1|+C$</p><p>$=\\boldsymbol{x^{2}+x+\\dfrac{2}{x}+3\\log\\left|\\dfrac{x-1}{x}\\right|+C}$</p>",
    // 分数関数
    "$\\displaystyle \\int_{}^{} \\ \\dfrac{4x^{2}+x+1}{x^{3}-1}\\,dx$": "<p>　$\\displaystyle \\int_{}^{} \\ \\dfrac{4x^{2}+x+1}{x^{3}-1}\\,dx$</p><p>$\\displaystyle =\\int_{}^{} \\ \\dfrac{3x^{2}+x^{2}+x+1}{x^{3}-1}\\,dx$</p><p>$\\displaystyle =\\int_{}^{} \\ \\left(\\dfrac{3x^{2}}{x^{3}-1}+\\dfrac{1}{x-1}\\right)\\,dx$</p><p>$=\\log|x^{3}-1|+\\log|x-1|+C$</p><p>$=\\boldsymbol{\\log(x-1)^{2}(x^{2}+x+1)+C}$</p><p><b style=\"color: black\">別解</b></p><p>　$\\dfrac{4x^{2}+x+1}{x^{3}-1}=\\dfrac{a}{x-1}+\\dfrac{bx+c}{x^{2}+x+1}$</p><p>として，両辺 $x^{3}-1$ かけると</p><p>$4x^{2}+x+1=a(x^{2}+x+1)+(bx+c)(x-1)=(a+b)x^{2}+(a-b+c)x+a-c$</p><p>　$\\therefore \\ \\begin{cases}4=a+b \\\\ 1=a-b+c \\\\ 1=a-c\\end{cases}$</p><p>　$\\therefore \\ a=b=2$，$c=1$</p><p>　$\\displaystyle \\int_{}^{} \\ \\dfrac{4x^{2}+x+1}{x^{3}-1}\\,dx$</p><p>$\\displaystyle =\\int_{}^{} \\ \\left(\\dfrac{2}{x-1}+\\dfrac{2x+1}{x^{2}+x+1}\\right)\\,dx$</p><p>$=2\\log|x-1|+\\log|x^{2}+x+1|+C$</p><p>$=\\boldsymbol{\\log(x-1)^{2}(x^{2}+x+1)+C}$</p>",
    // 分数関数
    "$\\displaystyle \\int_{}^{} \\ \\dfrac{1}{\\sin^{2}x}\\,dx$": "<p>$\\tan x=t$ とおくと $\\dfrac{1}{\\cos^{2}x}dx=dt$</p><p>つまり $dx=\\cos^{2}xdt=\\dfrac{1}{1+\\tan^{2}x}dt=\\dfrac{1}{1+t^{2}}dt$</p><p>また $\\sin^{2}x=1-\\cos^{2}x=1-\\dfrac{1}{1+t^{2}}=\\dfrac{t^{2}}{1+t^{2}}$</p><p>より</p><p>　$\\displaystyle \\int_{}^{} \\ \\dfrac{1}{\\sin^{2}x}\\,dx$</p><p>$\\displaystyle =\\int_{}^{} \\ \\dfrac{1+t^{2}}{t^{2}}\\cdot\\dfrac{1}{1+t^{2}}\\,dt$</p><p>$=-\\dfrac{1}{t}+C$</p><p>$=\\boldsymbol{-\\dfrac{1}{\\tan x}+C}$</p>",
    // 三角関数
    "$\\displaystyle \\int_{}^{} \\ \\dfrac{1}{x\\sqrt{1+x^{3}}}\\,dx$": "<p>$\\sqrt{1+x^{3}}=t$ とおくと，$1+x^{3}=t^{2}$</p><p>　$3x^{2}dx=2tdt$</p><p>　$\\displaystyle \\int_{}^{} \\ \\dfrac{1}{x\\sqrt{1+x^{3}}}\\,dx$</p><p>$\\displaystyle =\\int_{}^{} \\ \\dfrac{x^{2}}{x^{3}\\sqrt{1+x^{3}}}\\,dx$</p><p>$\\displaystyle =\\int_{}^{} \\ \\dfrac{1}{(t^{2}-1)t}\\cdot\\dfrac{2}{3}t\\,dt$</p><p>$\\displaystyle =\\dfrac{2}{3}\\int_{}^{} \\ \\dfrac{1}{(t+1)(t-1)}\\,dt$</p><p>$\\displaystyle =\\dfrac{1}{3}\\int_{}^{} \\ \\left(\\dfrac{1}{t-1}-\\dfrac{1}{t+1}\\right)\\,dt$</p><p>$\\displaystyle =\\dfrac{1}{3}(\\log|t-1|-\\log|t+1|)+C$</p><p>$\\displaystyle =\\dfrac{1}{3}\\log\\dfrac{|t-1|}{|t+1|}+C$</p><p>$=\\boldsymbol{\\dfrac{1}{3}\\log\\dfrac{\\left|\\sqrt{1+x^{3}}-1\\right|}{\\sqrt{1+x^{3}}+1}+C}$</p>",
    // 置換，分数関数，2001横浜国大改
    "$\\displaystyle \\int_{}^{} \\ \\left(x-\\dfrac{1}{x}\\right)(\\log x)^{2}\\,dx$": "<p>$\\log x=t$ とおく．$x=e^{t}$ より $dx=e^{t}dt$</p><p>　$\\displaystyle \\int_{}^{} \\ \\left(x-\\dfrac{1}{x}\\right)(\\log x)^{2}\\,dx$</p><p>$\\displaystyle =\\int_{}^{} \\ \\left(e^{t}-\\dfrac{1}{e^{t}}\\right)t^{2}e^{t}\\,dt$</p><p>$\\displaystyle =\\int_{}^{} \\ (t^{2}e^{2t}-t^{2})\\,dt$</p><p>$\\displaystyle =\\dfrac{1}{2}t^{2}e^{2t}-\\int_{}^{} \\ te^{2t}\\,dt-\\int_{}^{} \\ t^{2}\\,dt$</p><p>$\\displaystyle =\\dfrac{1}{2}t^{2}e^{2t}-\\left(\\dfrac{1}{2}te^{2t}-\\int_{}^{} \\ \\dfrac{1}{2}e^{2t}\\,dt\\right)-\\int_{}^{} \\ t^{2}\\,dt$</p><p>$\\displaystyle =\\dfrac{1}{2}t^{2}e^{2t}-\\dfrac{1}{2}te^{2t}+\\dfrac{1}{4}e^{2t}-\\dfrac{1}{3}t^{3}+C$</p><p>$=\\boldsymbol{\\dfrac{x^{2}}{2}(\\log x)^{2}-\\dfrac{x^{2}}{2}\\log x+\\dfrac{x^2}{4}-\\dfrac{1}{3}(\\log x)^{3}+C}$</p>",
    // 置換，部分，2011弘前大改
    "$\\displaystyle \\int_{}^{} \\ \\tan^{3}x\\,dx$": "<p>　$\\displaystyle \\int_{}^{} \\ \\tan^{3}x\\,dx$</p><p>$\\displaystyle =\\int_{}^{} \\ \\tan x\\left(\\dfrac{1}{\\cos^{2}x}-1\\right)\\,dx$</p><p>$\\displaystyle =\\int_{}^{} \\ \\left\(\\tan x (\\tan x)'+\\dfrac{-\\sin x}{\\cos x}\\right)\\,dx$</p><p>$=\\boldsymbol{\\dfrac{1}{2}\\tan^{2}x+\\log |\\cos x|+C}$</p>",
    // 三角関数，置換
    "$\\displaystyle \\int_{}^{} \\ \\dfrac{1}{x^{2}+2ax+b}\\,dx$　$( \\ a^{2}\\geqq b \\ )$": "<p>(ⅰ) $a^{2}=b$ のとき</p><p>　$\\displaystyle \\int_{}^{} \\ \\dfrac{1}{x^{2}+2ax+b}\\,dx$</p><p>$\\displaystyle =\\int_{}^{} \\ \\dfrac{1}{(x+a)^{2}}\\,dx$</p><p>$=\\boldsymbol{-\\dfrac{1}{x+a}+C}$</p><p>(ⅱ) $a^2 &gt;b$ のとき</p><p>　$\\displaystyle \\int_{}^{} \\ \\dfrac{1}{x^{2}+2ax+b}\\,dx$</p><p>$\\displaystyle =\\int_{}^{} \\ \\dfrac{1}{(x+a)^{2}-(a^{2}-b)}\\,dx$</p><p>$\\displaystyle =\\int_{}^{} \\ \\dfrac{1}{(x+a-\\sqrt{a^{2}-b})(x+a+\\sqrt{a^{2}-b})}\\,dx$</p><p>$\\displaystyle =\\dfrac{1}{2\\sqrt{a^{2}-b}}\\int_{}^{} \\ \\left(\\dfrac{1}{x+a-\\sqrt{a^{2}-b}}-\\dfrac{1}{x+a+\\sqrt{a^{2}-b}}\\right)\\,dx$</p><p>$\\displaystyle =\\dfrac{1}{2\\sqrt{a^{2}-b}}\\left(\\log|x+a-\\sqrt{a^{2}-b}|-\\log|x+a+\\sqrt{a^{2}-b}|\\right)+C$</p><p>$=\\boldsymbol{\\dfrac{1}{2\\sqrt{a^{2}-b}}\\log\\left|\\dfrac{x+a-\\sqrt{a^{2}-b}}{x+a+\\sqrt{a^{2}-b}}\\right|+C}$</p>",
    "$\\displaystyle \\int_{}^{} \\ \\dfrac{\\log x}{(x+1)^{2}}\\,dx$": "<p>　$\\displaystyle \\int_{}^{} \\ \\dfrac{\\log x}{(x+1)^{2}}\\,dx$</p><p>$\\displaystyle =-\\dfrac{\\log x}{x+1}-\\int_{}^{} \\ \\left(-\\dfrac{1}{x+1}\\cdot\\dfrac{1}{x}\\right)\\,dx$</p><p>$\\displaystyle =-\\dfrac{\\log x}{x+1}+\\int_{}^{} \\ \\left(\\dfrac{1}{x}-\\dfrac{1}{x+1}\\right)\\,dx$</p><p>$\\displaystyle =-\\dfrac{\\log x}{x+1}+\\log |x|-\\log |x+1|+C$</p><p>$=\\boldsymbol{-\\dfrac{\\log x}{x+1}+\\log \\dfrac{x}{x+1}+C}$</p>",
    // 部分，分数関数
    "$\\displaystyle \\int_{}^{} \\ \\log(x+\\sqrt{x^{2}+1})\\,dx$": "<p>　$\\displaystyle \\int_{}^{} \\ \\log(x+\\sqrt{x^{2}+1})\\,dx$</p><p>$\\displaystyle =\\int_{}^{} \\ (x)'\\log(x+\\sqrt{x^{2}+1})\\,dx$</p><p>$\\displaystyle =x\\log(x+\\sqrt{x^{2}+1})-\\int_{}^{} \\ x\\cdot\\dfrac{1}{x+\\sqrt{x^{2}+1}}\\left(1+\\dfrac{x}{\\sqrt{x^{2}+1}}\\right)\\,dx$</p><p>$\\displaystyle =x\\log(x+\\sqrt{x^{2}+1})-\\int_{}^{} \\ \\dfrac{x}{\\sqrt{x^{2}+1}}\\,dx$</p><p>$\\displaystyle =x\\log(x+\\sqrt{x^{2}+1})-\\dfrac{1}{2}\\int_{}^{} \\ 2x(x^{2}+1)^{-\\frac{1}{2}}\\,dx$</p><p>$\\displaystyle =x\\log(x+\\sqrt{x^{2}+1})-\\dfrac{1}{2}\\cdot 2(x^{2}+1)^{\\frac{1}{2}}+C$</p><p>$=\\boldsymbol{x\\log(x+\\sqrt{x^{2}+1})-\\sqrt{x^{2}+1}+C}$</p>",
    // 部分，置換
    "$\\displaystyle \\int_{}^{} \\ \\dfrac{1}{\\cos^{4}x}\\,dx$": "<p>　$\\displaystyle \\int_{}^{} \\ \\dfrac{1}{\\cos^{4}x}\\,dx$</p><p>$\\displaystyle =\\int_{}^{} \\ (1+\\tan^{2}x)\\dfrac{1}{\\cos^{2}x}\\,dx$</p><p>$\\displaystyle =\\boldsymbol{\\tan x+\\dfrac{1}{3}\\tan^{3}x+C}$</p>",
    "$\\displaystyle \\int{}{}\\dfrac{\\log(\\sin^{2}x)}{\\tan x}\\,dx$": "<p>$\\log(\\sin^{2}x)=t$ とおくと，$\\dfrac{2\\sin x \\cos x}{\\sin^{2}x}dx=dt$ より $\\dfrac{1}{\\tan x}dx=\\dfrac{1}{2}dt$．</p><p>　$\\displaystyle \\int{}{}\\dfrac{\\log(\\sin^{2}x)}{\\tan x}\\,dx$</p><p>$\\displaystyle =\\int_{}^{} \\ \\dfrac{t}{2}\\,dt$</p><p>$\\displaystyle =\\dfrac{1}{4}t^{2}+C$</p><p>$\\displaystyle =\\dfrac{1}{4}\\{\\log(\\sin^{2}x)\\}^{2}+C$</p><p>$\\displaystyle =\\dfrac{1}{4}(2\\log|\\sin x|)^{2}+C$</p><p>$\\displaystyle =\\boldsymbol{(\\log|\\sin x|)^{2}+C}$</p>",
    "$\\displaystyle \\int_{}^{} \\ \\dfrac{\\sin 3x}{\\cos x}\\,dx$": "<p>　$\\displaystyle \\int_{}^{} \\ \\dfrac{\\sin 3x}{\\cos x}\\,dx$</p><p>$\\displaystyle =\\int_{}^{} \\ \\dfrac{3\\sin x-4\\sin^{3}x}{\\cos x}\\,dx$</p><p>$\\displaystyle =\\int_{}^{} \\ \\dfrac{3\\sin x-4\\sin x(1-\\cos^{2}x)}{\\cos x}\\,dx$</p><p>$\\displaystyle =\\int_{}^{} \\ \\left(\\dfrac{-\\sin x}{\\cos x}+2\\sin2x\\right)\\,dx$</p><p>$=\\boldsymbol{\\log|\\cos x|-\\cos 2x+C}$</p>",
    "$\\displaystyle \\int_{0}^{\\pi}e^{-x}\\cos 2x\\,dx$": "<p>$\\displaystyle I=\\int_{}^{} \\ e^{-x}\\cos 2x\\,dx$ とおく．</p><p>　$\\displaystyle I$</p><p>$\\displaystyle =-e^{-x}\\cos2x-\\int_{}^{} \\ (-e^{-x})(-2\\sin 2x)\\,dx$</p><p>$\\displaystyle =-e^{-x}\\cos2x-2\\int_{}^{} \\ e^{-x}\\sin 2x\\,dx$</p><p>$\\displaystyle =-e^{-x}\\cos2x-2\\left(-e^{-x}\\sin 2x-\\int_{}^{} \\ (-e^{-x})2\\cos 2x\\,dx\\right)$</p><p>$\\displaystyle =-e^{-x}\\cos2x+2e^{-x}\\sin2x-4I$</p><p>$\\displaystyle 5I=e^{-x}\\left(2\\sin 2x-\\cos 2x\\right)$ だが，積分定数を入れて</p><p>　$I=\\dfrac{e^{-x}}{5}(2\\sin 2x-\\cos 2x)+C$</p><p>これより</p><p>　$\\displaystyle \\int_{0}^{\\pi}e^{-x}\\cos 2x\\,dx$</p><p>$=\\left[\\dfrac{e^{-x}}{5}(2\\sin 2x-\\cos 2x)\\right]_{0}^{\\pi}$</p><p>$=\\boldsymbol{\\dfrac{1}{5}(1-e^{-\\pi})}$</p>",
    // 部分
    "$\\displaystyle \\int_{\\alpha}^{\\beta}(x-\\alpha)x(x-\\beta)\\,dx$": "<p>　$\\displaystyle \\int_{\\alpha}^{\\beta}(x-\\alpha)x(x-\\beta)\\,dx$</p><p>$\\displaystyle =\\int_{\\alpha}^{\\beta}(x-\\alpha)(x-\\beta)(x-\\beta+\\beta)\\,dx$</p><p>$\\displaystyle =\\int_{\\alpha}^{\\beta}(x-\\alpha)(x-\\beta)^{2}\\,dx+\\int_{\\alpha}^{\\beta}\\beta(x-\\alpha)(x-\\beta)\\,dx$</p><p>$\\displaystyle =\\left[\\dfrac{1}{3}(x-\\alpha)(x-\\beta)^{3}\\right]_{\\alpha}^{\\beta}-\\int_{\\alpha}^{\\beta}\\dfrac{1}{3}(x-\\beta)^{3}\\,dx+\\beta\\int_{\\alpha}^{\\beta}(x-\\alpha)(x-\\beta)\\,dx$</p><p>$\\displaystyle =-\\left[\\dfrac{1}{12}(x-\\beta)^{4}\\right]_{\\alpha}^{\\beta}+\\beta\\left(\\left[\\dfrac{1}{2}(x-\\alpha)(x-\\beta)^{2}\\right]_{\\alpha}^{\\beta}-\\int_{\\alpha}^{\\beta}\\dfrac{1}{2}(x-\\beta)^{2}\\,dx\\right)$</p><p>$\\displaystyle =\\dfrac{1}{12}(\\alpha-\\beta)^{4}-\\beta\\left[\\dfrac{1}{6}(x-\\beta)^{3}\\right]_{\\alpha}^{\\beta}$</p><p>$\\displaystyle =\\dfrac{1}{12}(\\alpha-\\beta)^{4}+\\dfrac{\\beta}{6}(\\alpha-\\beta)^{3}$</p><p>$\\displaystyle =\\dfrac{(\\alpha-\\beta)^{3}}{12}(\\alpha-\\beta+2\\beta)$</p><p>$\\displaystyle =\\boldsymbol{-\\dfrac{(\\beta-\\alpha)^{3}}{12}(\\alpha+\\beta)}$</p>",
    // 1/6公式の応用
    "$\\displaystyle \\int_{-3}^{2}(x+3)(x-2)^{2}\\,dx$": "<p>　$\\displaystyle \\int_{-3}^{2}(x+3)(x-2)^{2}\\,dx$</p><p>$\\displaystyle =\\left[\\dfrac{1}{3}(x+3)(x-2)^{3}\\right]_{-3}^{2}-\\int_{-3}^{2}\\dfrac{1}{3}(x-2)^{3}\\,dx$</p><p>$\\displaystyle =-\\left[\\dfrac{1}{12}(x-2)^{4}\\right]_{-3}^{2}$</p><p>$\\displaystyle =\\boldsymbol{\\dfrac{625}{12}}$</p>",
    // 1/12公式
    "$\\displaystyle \\int_{-1}^{5}(x+1)(x-2)^{3}(x-5)\\,dx$": "<p>　$\\displaystyle \\int_{-1}^{5}(x+1)(x-2)^{3}(x-5)\\,dx$</p><p>$\\displaystyle =\\int_{-3}^{3}(t+3)t^{3}(t-3)\\,dt$　$(t=x-2)$</p><p>$\\displaystyle =\\int_{-3}^{3}(t^{5}-9t^{3})\\,dt$</p><p>$\\displaystyle =\\boldsymbol{0}$</p>",
    // 置換，偶関数奇関数
    "$\\displaystyle \\int_{0}^{\\frac{\\pi}{2}}|3\\sin x-4\\cos x|\\,dx$": "<p>　$3\\sin x-4\\cos x=5\\sin(x-\\alpha)$</p><p>とする．ここで $\\cos\\alpha=\\dfrac{3}{5}$，$\\sin\\alpha=\\dfrac{4}{5}$ である．</p><p>　$|3\\sin x-4\\cos x|$</p><p>$=\\begin{cases}-3\\sin x+4\\cos x \\ (0\\leqq x&lt; \\alpha) \\\\ 3\\sin x-4\\cos x \\ \\left(\\alpha \\leqq x\\leqq \\dfrac{\\pi}{2}\\right)\\end{cases}$</p><p>より</p><p>　$\\displaystyle \\int_{0}^{\\frac{\\pi}{2}}|3\\sin x-4\\cos x|\\,dx$</p><p>$\\displaystyle =\\int_{0}^{\\alpha}(-3\\sin x+4\\cos x)\\,dx+\\int_{\\alpha}^{\\frac{\\pi}{2}}(3\\sin x-4\\cos x)\\,dx$</p><p>$\\displaystyle =\\Bigl[3\\cos x +4\\sin x\\Bigr]_{0}^{\\alpha}+\\Bigl[-3\\cos x -4\\sin x\\Bigr]_{\\alpha}^{\\frac{\\pi}{2}}$</p><p>$\\displaystyle =2(3\\cos\\alpha+4\\sin\\alpha)-3-4$</p><p>$=\\boldsymbol{3}$</p>",
    // 絶対値
    "$\\displaystyle \\int_{0}^{2\\pi}\\sqrt{2-2\\cos x}\\,dx$": "<p>　$\\displaystyle \\int_{0}^{2\\pi}\\sqrt{2-2\\cos x}\\,dx$</p><p>$\\displaystyle =\\int_{0}^{2\\pi}\\sqrt{2-2\\cos 2\\cdot\\dfrac{x}{2}}\\,dx$</p><p>$\\displaystyle =\\int_{0}^{2\\pi}\\sqrt{2-2\\left(1-2\\sin^{2}\\dfrac{x}{2}\\right)}\\,dx$</p><p>$\\displaystyle =\\int_{0}^{2\\pi}\\sqrt{4\\sin^{2}\\dfrac{x}{2}}\\,dx$</p><p>$\\displaystyle =\\int_{0}^{2\\pi}\\left|2\\sin\\dfrac{x}{2}\\right|\\,dx$</p><p>$\\displaystyle =\\int_{0}^{2\\pi}2\\sin\\dfrac{x}{2}\\,dx$</p><p>$\\displaystyle =\\left[-4\\cos\\dfrac{x}{2}\\right]_{0}^{2\\pi}$</p><p>$=\\boldsymbol{8}$</p>",
    // 三角関数
    "$\\displaystyle \\int_{0}^{\\frac{\\pi}{2}}\\cos^{2}x\\sin x\\tan\\dfrac{x}{2}\\,dx$": "<p>　$\\displaystyle \\int_{0}^{\\frac{\\pi}{2}}\\cos^{2}x\\sin x\\tan\\dfrac{x}{2}\\,dx$</p><p>$\\displaystyle =\\int_{0}^{\\frac{\\pi}{2}}\\cos^{2}x \\cdot 2\\sin\\dfrac{x}{2}\\cos\\dfrac{x}{2} \\cdot \\dfrac{\\sin\\dfrac{x}{2}}{\\cos\\dfrac{x}{2}}\\,dx$</p><p>$\\displaystyle =\\int_{0}^{\\frac{\\pi}{2}}\\cos^{2}x \\cdot 2\\sin^{2}\\dfrac{x}{2}\\,dx$</p><p>$\\displaystyle =\\int_{0}^{\\frac{\\pi}{2}}\\cos^{2}x(1-\\cos x)\\,dx$</p><p>$\\displaystyle =\\int_{0}^{\\frac{\\pi}{2}}(\\cos^{2}x-\\cos^{3}x)\\,dx$</p><p>$\\displaystyle =\\int_{0}^{\\frac{\\pi}{2}}\\left\\{\\dfrac{1+\\cos2x}{2}-(1-\\sin^{2}x)\\cos x\\right\\}\\,dx$</p><p>$\\displaystyle =\\left[\\dfrac{1}{2}x+\\dfrac{1}{4}\\sin 2x-\\sin x+\\dfrac{1}{3}\\sin^{3}x\\right]_{0}^{\\frac{\\pi}{2}}$</p><p>$=\\boldsymbol{\\dfrac{\\pi}{4}-\\dfrac{2}{3}}$</p>",
    // 2014埼玉医科大
    "$\\displaystyle \\int_{0}^{\\log2}\\dfrac{e^x}{e^{2x}-2e^{x}+2}\\,dx$": "<p>$e^{x}-1=\\tan u$ とおくと，$e^{x}\\,dx=\\dfrac{1}{\\cos^{2}u}\\,du$</p><p>積分範囲は</p><table border=\"1px\" cellpadding=\"10px\" style=\"border-collapse: collapse;text-align: center\" align=\"center\"><caption></caption><tr><th>$x$</th><td>$0 \\ \\to \\ \\log2$</td></tr><tr><th>$u$</th><td>$0 \\ \\to \\ \\dfrac{\\pi}{4}$</td></tr></table><p>となるので</p><p>　$\\displaystyle \\int_{0}^{\\log2}\\dfrac{e^x}{e^{2x}-2e^{x}+2}\\,dx$</p><p>$\\displaystyle =\\int_{0}^{\\log2}\\dfrac{1}{(e^{x}-1)^{2}+1}\\cdot e^{x}\\,dx$</p><p>$\\displaystyle =\\int_{0}^{\\frac{\\pi}{4}}\\dfrac{1}{\\tan^{2}u+1}\\cdot\\dfrac{1}{\\cos^{2}u}\\,du$</p><p>$\\displaystyle =\\int_{0}^{\\frac{\\pi}{4}}1\\,du$</p><p>$=\\boldsymbol{\\dfrac{\\pi}{4}}$</p>",
    // 置換2回，オリジナル
    "$\\displaystyle \\int_{\\frac{\\pi}{6}}^{\\frac{\\pi}{3}}\\dfrac{\\log(\\sin x)}{\\tan x}\\,dx$": "<p>$\\sin x=t$ とおくと，$\\cos x\\,dx=dt$</p><p>積分範囲は</p><table border=\"1px\" cellpadding=\"10px\" style=\"border-collapse: collapse;text-align: center\" align=\"center\"><caption></caption><tr><th>$x$</th><td>$\\dfrac{\\pi}{6} \\ \\to \\ \\dfrac{\\pi}{3}$</td></tr><tr><th>$u$</th><td>$\\dfrac{1}{2} \\ \\to \\ \\dfrac{\\sqrt{3}}{2}$</td></tr></table><p>となるので</p><p>　$\\displaystyle \\int_{\\frac{\\pi}{6}}^{\\frac{\\pi}{3}}\\dfrac{\\log(\\sin x)}{\\tan x}\\,dx$</p><p>$\\displaystyle =\\int_{\\frac{\\pi}{6}}^{\\frac{\\pi}{3}}\\dfrac{\\log(\\sin x)}{\\sin x}\\cdot \\cos x\\,dx$</p><p>$\\displaystyle =\\int_{\\frac{1}{2}}^{\\frac{\\sqrt{3}}{2}}\\dfrac{\\log t}{t}\\,dt$</p><p>$\\displaystyle =\\left[\\dfrac{1}{2}(\\log t)^{2}\\right]_{\\frac{1}{2}}^{\\frac{\\sqrt{3}}{2}}$</p><p>$\\displaystyle =\\dfrac{1}{2}\\left\\{\\left(\\log\\dfrac{\\sqrt{3}}{2}\\right)^{2}-\\left(\\log\\dfrac{1}{2}\\right)^{2}\\right\\}$</p><p>$\\displaystyle =\\dfrac{1}{2}\\left(\\log\\dfrac{\\sqrt{3}}{2}+\\log\\dfrac{1}{2}\\right)\\left(\\log\\dfrac{\\sqrt{3}}{2}-\\log\\dfrac{1}{2}\\right)$</p><p>$\\displaystyle =\\dfrac{1}{2}\\left(\\log\\dfrac{\\sqrt{3}}{4}\\right)\\left(\\log\\sqrt{3}\\right)$</p><p>$\\displaystyle =\\dfrac{1}{8}\\left(\\log\\dfrac{3}{16}\\right)\\left(\\log3\\right)$</p><p>$=\\boldsymbol{\\dfrac{\\log3}{8}\\left(\\log3-4\\log2\\right)}$</p>",
    // 置換2回，2020横浜国大改
    "$\\displaystyle \\int_{0}^{\\frac{\\pi}{6}}\\dfrac{1}{3\\sin^{2}x+\\cos^{2}x}\\,dx$": "<p>　$\\displaystyle \\int_{0}^{\\frac{\\pi}{6}}\\dfrac{1}{3\\sin^{2}x+\\cos^{2}x}\\,dx$</p><p>$\\displaystyle =\\int_{0}^{\\frac{\\pi}{6}}\\dfrac{1}{3\\tan^{2}x+1}\\cdot \\dfrac{1}{\\cos^{2}x}\\,dx$</p><p>$\\displaystyle =\\int_{0}^{\\frac{1}{\\sqrt{3}}}\\dfrac{1}{3u^{2}+1}\\,du$　$(u=\\tan x)$</p><p>$\\displaystyle =\\int_{0}^{\\frac{\\pi}{4}}\\dfrac{1}{\\tan^{2}\\theta+1}\\cdot\\dfrac{1}{\\sqrt{3}\\cos^{2}\\theta}\\,d\\theta$　$(\\tan \\theta=\\sqrt{3}u)$</p><p>$\\displaystyle =\\int_{0}^{\\frac{\\pi}{4}}\\dfrac{1}{\\sqrt{3}}\\,d\\theta$</p><p>$=\\boldsymbol{\\dfrac{\\sqrt{3}\\pi}{12}}$</p>",
    // 2006横浜国大改
    "$\\displaystyle \\int_{\\frac{4}{3}}^{2}\\dfrac{1}{x^{2}\\sqrt{x-1}}\\,dx$": "<p>$\\sqrt{x-1}=t$ とおくと</p><p>　$x-1=t^2$</p><p>　$dx=2t\\,dt$</p><p>積分範囲は</p><table border=\"1px\" cellpadding=\"10px\" style=\"border-collapse: collapse;text-align: center\" align=\"center\"><caption></caption><tr><th>$x$</th><td>$\\dfrac{4}{3} \\ \\to \\ 2$</td></tr><tr><th>$t$</th><td>$\\dfrac{1}{\\sqrt{3}} \\ \\to \\ 1$</td></tr></table><p>となるので</p><p>　$\\displaystyle \\int_{\\frac{4}{3}}^{2}\\dfrac{1}{x^{2}\\sqrt{x-1}}\\,dx$</p><p>$\\displaystyle =\\int_{\\frac{1}{\\sqrt{3}}}^{1}\\dfrac{1}{(t^{2}+1)^{2}t}\\cdot2t\\,dt$</p><p>$\\displaystyle =\\int_{\\frac{1}{\\sqrt{3}}}^{1}\\dfrac{2}{(t^{2}+1)^{2}}\\,dt$</p><p>$\\displaystyle =\\int_{\\frac{\\pi}{6}}^{\\frac{\\pi}{4}}\\dfrac{2}{(\\tan^{2}u+1)^{2}}\\cdot\\dfrac{1}{\\cos^{2}u}\\,du$　$(t=\\tan u)$</p><p>$\\displaystyle =\\int_{\\frac{\\pi}{6}}^{\\frac{\\pi}{4}}\\dfrac{2}{\\tan^{2}u+1}\\,du$</p><p>$\\displaystyle =\\int_{\\frac{\\pi}{6}}^{\\frac{\\pi}{4}}2\\cos^{2}u\\,du$</p><p>$\\displaystyle =\\int_{\\frac{\\pi}{6}}^{\\frac{\\pi}{4}}(1+\\cos 2u)\\,du$</p><p>$=\\left[u+\\dfrac{1}{2}\\sin2u\\right]_{\\frac{\\pi}{6}}^{\\frac{\\pi}{4}}$</p><p>$=\\boldsymbol{\\dfrac{\\pi}{12}+\\dfrac{2-\\sqrt{3}}{4}}$</p>",
    // 置換2回，2007横浜国大
    "$\\displaystyle \\int_{1}^{e}3^{\\log x}\\,dx$": "<p>$A=3^{\\log x}$ とおいて，両辺自然対数をとると</p><p>　$\\log A=\\log 3^{\\log x}=(\\log 3)(\\log x)=\\log x^{\\log 3}$</p><p>　$\\therefore \\ A=x^{\\log 3}$</p><p>　$\\displaystyle \\int_{1}^{e}3^{\\log x}\\,dx$</p><p>$\\displaystyle =\\int_{1}^{e}x^{\\log 3}\\,dx$</p><p>$=\\left[\\dfrac{1}{1+\\log 3}x^{1+\\log 3}\\right]_{1}^{e}$</p><p>$=\\dfrac{1}{1+\\log 3}(e^{1+\\log 3}-1)$</p><p>$=\\boldsymbol{\\dfrac{3e-1}{1+\\log 3}}$</p>",
    // 2003横浜国大改
    "$\\displaystyle \\int_{\\frac{\\pi}{3}}^{\\frac{2}{3}\\pi}\\dfrac{2+\\sin x}{1+\\cos x}\\,dx$": "<p>　$\\displaystyle \\int_{\\frac{\\pi}{3}}^{\\frac{2}{3}\\pi}\\dfrac{2+\\sin x}{1+\\cos x}\\,dx$</p><p>$\\displaystyle =\\int_{\\frac{\\pi}{3}}^{\\frac{2}{3}\\pi}\\left(\\dfrac{2}{1+\\cos x}+\\dfrac{\\sin x}{1+\\cos x}\\right)\\,dx$</p><p>$\\displaystyle =\\int_{\\frac{\\pi}{3}}^{\\frac{2}{3}\\pi}\\left(\\dfrac{2}{1+2\\cos^{2}\\frac{x}{2}-1}-\\dfrac{-\\sin x}{1+\\cos x}\\right)\\,dx$</p><p>$\\displaystyle =\\int_{\\frac{\\pi}{3}}^{\\frac{2}{3}\\pi}\\left(\\dfrac{1}{\\cos^{2}\\frac{x}{2}}-\\dfrac{(1+\\cos x)'}{1+\\cos x}\\right)\\,dx$</p><p>$\\displaystyle =\\left[2\\tan\\dfrac{x}{2}-\\log(1+\\cos x)\\right]_{\\frac{\\pi}{3}}^{\\frac{2}{3}\\pi}$</p><p>$=\\boldsymbol{\\dfrac{4\\sqrt{3}}{3}+\\log 3}$</p>",
    // 2012横浜国大改
    "$\\displaystyle \\int_{1}^{3}\\dfrac{\\log(x+1)}{x^{2}}\\,dx$": "<p>　$\\displaystyle \\int_{1}^{3}\\dfrac{\\log(x+1)}{x^{2}}\\,dx$</p><p>$\\displaystyle =\\left[-\\dfrac{1}{x}\\log(x+1)\\right]_{1}^{3}-\\int_{1}^{3}\\left\\{-\\dfrac{1}{x(x+1)}\\right\\}\\,dx$</p><p>$\\displaystyle =-\\dfrac{1}{3}\\log 4+\\log 2+\\int_{1}^{3}\\left(\\dfrac{1}{x}-\\dfrac{1}{x+1}\\right)\\,dx$</p><p>$\\displaystyle =-\\dfrac{2}{3}\\log 2+\\log 2+\\Bigl[\\log|x|-\\log|x+1|\\Bigr]_{1}^{3}$</p><p>$\\displaystyle =\\dfrac{1}{3}\\log 2+\\log 3-\\log4+\\log 2$</p><p>$=\\boldsymbol{\\log 3-\\dfrac{2}{3}\\log 2}$</p>",
    // 2010弘前大
    "$\\displaystyle \\int_{0}^{\\frac{\\pi}{3}}\\dfrac{x}{\\cos^{2}x}\\,dx$": "<p>　$\\displaystyle \\int_{0}^{\\frac{\\pi}{3}}\\dfrac{x}{\\cos^{2}x}\\,dx$</p><p>$\\displaystyle =\\Bigl[x\\tan x\\Bigr]_{0}^{\\frac{\\pi}{3}}-\\int_{0}^{\\frac{\\pi}{3}}\\tan x\\,dx$</p><p>$\\displaystyle =\\dfrac{\\sqrt{3}\\pi}{3}+\\int_{0}^{\\frac{\\pi}{3}}\\dfrac{-\\sin x}{\\cos x}\\,dx$</p><p>$\\displaystyle =\\dfrac{\\sqrt{3}\\pi}{3}+\\Bigl[\\log |\\cos x|\\Bigr]_{0}^{\\frac{\\pi}{3}}$</p><p>$=\\boldsymbol{\\dfrac{\\sqrt{3}\\pi}{3}-\\log 2}$</p>",
    // 部分，置換，2019京大改
    "$\\displaystyle \\int_{1}^{2}\\dfrac{x^{5}}{e^{x^{3}}}\\,dx$": "<p>$x^{3}=t$ とおくと $3x^{2}dx=dt$</p><p>積分範囲は</p><table border=\"1px\" cellpadding=\"10px\" style=\"border-collapse: collapse;text-align: center\" align=\"center\"><caption></caption><tr><th>$x$</th><td>$1 \\ \\to \\ 2$</td></tr><tr><th>$t$</th><td>$1 \\ \\to \\ 8$</td></tr></table><p>となるので</p><p>　$\\displaystyle \\int_{1}^{2}\\dfrac{x^{5}}{e^{x^{3}}}\\,dx$</p><p>$\\displaystyle =\\dfrac{1}{3}\\int_{1}^{2}x^{3}e^{-x^{3}}\\cdot 3x^{2}\\,dx$</p><p>$\\displaystyle =\\dfrac{1}{3}\\int_{1}^{8}te^{-t}\\,dt$</p><p>$\\displaystyle =\\dfrac{1}{3}\\left(\\Bigl[-te^{-t}\\Bigr]_{1}^{8}-\\int_{1}^{8}(-e^{-t})\\,dt \\right)$</p><p>$\\displaystyle =\\dfrac{1}{3}\\left(-8e^{-8}+e^{-1}+\\int_{1}^{8}e^{-t}\\,dt \\right)$</p><p>$=\\boldsymbol{-3e^{-8}+\\dfrac{2}{3}e^{-1}}$</p>",
    // 置換，部分，オリジナル
    "$\\displaystyle \\int_{0}^{\\sqrt{2}}x^{2}\\sqrt{4-x^{2}}\\,dx$": "<p>$x=2\\sin\\theta$ とおくと，$dx=2\\cos\\theta d\\theta$</p><p>積分範囲は</p><table border=\"1px\" cellpadding=\"10px\" style=\"border-collapse: collapse;text-align: center\" align=\"center\"><caption></caption><tr><th>$x$</th><td>$0 \\ \\to \\ \\sqrt{2}$</td></tr><tr><th>$\\theta$</th><td>$0 \\ \\to \\ \\dfrac{\\pi}{4}$</td></tr></table><p>となるので</p><p>　$\\displaystyle \\int_{0}^{\\sqrt{2}}x^{2}\\sqrt{4-x^{2}}\\,dx$</p><p>$\\displaystyle =\\int_{0}^{\\frac{\\pi}{4}}4\\sin^{2}\\theta\\sqrt{4-4\\sin^{2}\\theta}\\cdot2\\cos\\theta\\,d\\theta$</p><p>$\\displaystyle =\\int_{0}^{\\frac{\\pi}{4}}16\\sin^{2}\\theta\\cos^{2}\\theta\\,d\\theta$</p><p>$\\displaystyle =\\int_{0}^{\\frac{\\pi}{4}}4\\sin^{2}2\\theta\\,d\\theta$</p><p>$\\displaystyle =\\int_{0}^{\\frac{\\pi}{4}}2(1-\\cos4\\theta)\\,d\\theta$</p><p>$\\displaystyle =\\left[2\\theta-\\dfrac{1}{2}\\sin4\\theta\\right]_{0}^{\\frac{\\pi}{4}}$</p><p>$=\\boldsymbol{\\dfrac{\\pi}{2}}$</p>",
    // 置換，三角関数，2021神戸大改
    "$\\displaystyle \\int_{0}^{1} x\\sqrt{-x^{2}+2x}\\,dx$": "<p>　$\\displaystyle \\int_{0}^{1} x\\sqrt{-x^{2}+2x}\\,dx$</p><p>$\\displaystyle =\\int_{0}^{1} (x-1+1)\\sqrt{-x^{2}+2x}\\,dx$</p><p>$\\displaystyle =-\\dfrac{1}{2}\\int_{0}^{1} (-2x+2)(-x^{2}+2x)^{\\frac{1}{2}}\\,dx+\\int_{0}^{1}\\sqrt{-x^{2}+2x}\\,dx$</p><p>$\\displaystyle =-\\dfrac{1}{2}\\left[\\dfrac{2}{3}(-x^{2}+2x)^{\\frac{3}{2}}\\right]_{0}^{1}+\\int_{0}^{1} \\sqrt{1-(x-1)^{2}}\\,dx$</p><p>$\\displaystyle =-\\dfrac{1}{3}+\\int_{-1}^{0} \\sqrt{1-t^{2}}\\,dt$　( $t=x-1$ )</p><p>$\\displaystyle \\int_{-1}^{0}\\sqrt{1-t^{2}}\\,dt$ は単位円の第 $2$ 象限部分と $x$ 軸と $y$ 軸で囲まれた部分(四分円)の面積より $\\dfrac{\\pi}{4}$．</p><p>　$\\displaystyle \\int_{0}^{1}x\\sqrt{-x^{2}+2x}\\,dx=\\boldsymbol{-\\dfrac{1}{3}+\\dfrac{\\pi}{4}}$</p>",
    // オリジナル，円の面積利用
    "$\\displaystyle \\int_{0}^{\\frac{\\pi}{3}}|\\sin x-2\\cos x|\\,dx$": "<p>　$\\sin x-2\\cos x=\\sqrt{5}\\sin(x-\\alpha)$</p><p>とする．ここで $\\cos\\alpha=\\dfrac{1}{\\sqrt{5}}$，$\\sin\\alpha=\\dfrac{2}{\\sqrt{5}}$ である．</p><p>$\\tan\\dfrac{\\pi}{3}=\\sqrt{3}$，$\\tan\\alpha=2$ より，$\\dfrac{\\pi}{3}&lt;\\alpha &lt;\\dfrac{\\pi}{2}$．つまり $0\\leqq x\\leqq \\dfrac{\\pi}{3}$ で $\\sqrt{5}\\sin\\left(x-\\alpha\\right)&lt;0$．</p><p>　$\\displaystyle \\int_{0}^{\\frac{\\pi}{3}}|\\sin x-2\\cos x|\\,dx$</p><p>$\\displaystyle =\\int_{0}^{\\frac{\\pi}{3}}(-\\sin x+2\\cos x)\\,dx$</p><p>$\\displaystyle =\\Bigl[\\cos x+2\\sin x\\Bigr]_{0}^{\\frac{\\pi}{3}}$</p><p>$\\displaystyle =\\boldsymbol{\\sqrt{3}-\\dfrac{1}{2}}$</p>",
    // 絶対値
    "$\\displaystyle \\int_{0}^{1} \\dfrac{x+1}{(x^{2}+1)^{2}}\\,dx$": "<p>$x=\\tan\\theta$ とおくと，$dx=\\dfrac{1}{\\cos^{2}\\theta}d\\theta$</p><p>積分範囲は</p><table border=\"1px\" cellpadding=\"10px\" style=\"border-collapse: collapse;text-align: center\" align=\"center\"><caption></caption><tr><th>$x$</th><td>$0 \\ \\to \\ 1$</td></tr><tr><th>$\\theta$</th><td>$0 \\ \\to \\ \\dfrac{\\pi}{4}$</td></tr></table><p>となるので</p><p>　$\\displaystyle \\int_{0}^{1}\\dfrac{x+1}{(x^{2}+1)^{2}}\\,dx$</p><p>$=\\displaystyle \\int_{0}^{\\frac{\\pi}{4}}\\dfrac{\\tan\\theta+1}{\\frac{1}{\\cos^{4}\\theta}}\\cdot\\dfrac{1}{\\cos^{2}\\theta}\\,d\\theta$</p><p>$=\\displaystyle \\int_{0}^{\\frac{\\pi}{4}}(\\sin\\theta\\cos\\theta+\\cos^{2}\\theta)\\,d\\theta$</p><p>$=\\displaystyle \\int_{0}^{\\frac{\\pi}{4}}\\left(\\dfrac{1}{2}\\sin2\\theta+\\dfrac{1+\\cos2\\theta}{2}\\right)\\,d\\theta$</p><p>$=\\left[-\\dfrac{1}{4}\\cos2\\theta+\\dfrac{\\theta}{2}+\\dfrac{1}{4}\\sin2\\theta\\right]_{0}^{\\frac{\\pi}{4}}$</p><p>$=\\boldsymbol{\\dfrac{\\pi}{8}+\\dfrac{1}{2}}$</p>",
    // 置換，三角関数
    "$\\displaystyle \\int_{-\\frac{1}{3}}^{\\frac{1}{2}}\\dfrac{1}{1+x^{2}}\\,dx$": "<p>$x=\\tan\\theta$ $\\left(-\\dfrac{\\pi}{2}&lt;\\theta&lt;\\dfrac{\\pi}{2}\\right)$，$\\tan\\alpha=-\\dfrac{1}{3}$ $\\left(-\\dfrac{\\pi}{2}&lt;\\alpha &lt;0\\right)$，$\\tan\\beta=\\dfrac{1}{2}$ $\\left(0&lt;\\beta&lt;\\dfrac{\\pi}{2}\\right)$ とおくと $dx=\\dfrac{1}{\\cos^{2}\\theta}d\\theta$</p><p>積分範囲は</p><table border=\"1px\" cellpadding=\"10px\" style=\"border-collapse: collapse;text-align: center\" align=\"center\"><caption></caption><tr><th>$x$</th><td>$-\\dfrac{1}{3} \\ \\to \\ \\dfrac{1}{2}$</td></tr><tr><th>$\\theta$</th><td>$\\alpha \\ \\to \\ \\beta$</td></tr></table><p>となるので</p><p>　$\\displaystyle \\int_{-\\frac{1}{3}}^{\\frac{1}{2}}\\dfrac{1}{1+x^{2}}\\,dx$</p><p>$\\displaystyle =\\int_{\\alpha}^{\\beta}\\dfrac{1}{1+\\tan^{2}\\theta}\\cdot\\dfrac{1}{\\cos^{2}\\theta}\\,d\\theta$</p><p>$\\displaystyle =\\beta-\\alpha$</p><p>ここで</p><p>　$\\tan(\\beta-\\alpha)$</p><p>$=\\dfrac{\\tan\\beta-\\tan\\alpha}{1+\\tan\\beta\\tan\\alpha}$</p><p>$=\\dfrac{\\dfrac{1}{2}-\\left(-\\dfrac{1}{3}\\right)}{1+\\dfrac{1}{2}\\left(-\\dfrac{1}{3}\\right)}$</p><p>$=1$</p><p>$0&lt;\\beta-\\alpha&lt;\\pi$ より</p><p>　$\\displaystyle \\int_{-\\frac{1}{3}}^{\\frac{1}{2}}\\dfrac{1}{1+x^{2}}\\,dx=\\beta-\\alpha=\\boldsymbol{\\dfrac{\\pi}{4}}$</p>",
    // Twitterで見かけた問題改
        },
        "C": {
            
    "$\\displaystyle \\int_{}^{} \\ \\dfrac{1}{13\\sin x+5}\\,dx$":
    // 上級1，三角関数
    "<p>$\\tan\\dfrac{x}{2}=t$ とおくと</p><p>　$\\sin x$</p><p>$=\\dfrac{2\\sin\\dfrac{x}{2}\\cos\\dfrac{x}{2}}{\\cos^{2}\\dfrac{x}{2}+\\sin^{2}\\dfrac{x}{2}}$</p><p>$=\\dfrac{2\\tan\\dfrac{x}{2}}{1+\\tan^{2}\\dfrac{x}{2}}$</p><p>$=\\dfrac{2t}{1+t^2}$</p><p>また</p><p>　$\\dfrac{1}{2\\cos^{2}\\dfrac{x}{2}}\\, dx=dt$</p><p>　$dx=\\dfrac{2}{1+t^2}\\, dt$</p><p>　$\\displaystyle \\int_{}^{} \\ \\dfrac{1}{13\\sin x+5}\\,dx$</p><p>$\\displaystyle =\\int_{}^{} \\ \\dfrac{1}{\\dfrac{26t}{1+t^{2}}+5}\\cdot\\dfrac{2}{1+t^2}\\,dt$</p><p>$\\displaystyle =\\int_{}^{} \\ \\dfrac{2}{(5t+1)(t+5)}\\,dt$</p><p>$\\displaystyle =\\dfrac{1}{12}\\int_{}^{} \\ \\left(\\dfrac{5}{5t+1}-\\dfrac{1}{t+5}\\right)\\,dt$</p><p>$\\displaystyle =\\dfrac{1}{12}\\left(\\log|5t+1|-\\log|t+5|\\right)+C$</p><p>$=\\boldsymbol{\\dfrac{1}{12}\\log\\left|\\dfrac{5\\tan\\dfrac{x}{2}+1}{\\tan\\dfrac{x}{2}+5}\\right|+C}$</p>",
    

    "$\\displaystyle \\int_{}^{}\\dfrac{1}{\\sqrt{x^{2}+1}}\\,dx$":
    // 上級2，双曲線関数
    "<p>$\\displaystyle x=\\dfrac{e^{t}-e^{-t}}{2}$ とおくと，$dx=\\dfrac{e^{t}+e^{-t}}{2}\\,dt$</p><p>　$\\displaystyle \\int_{}^{}\\dfrac{1}{\\sqrt{x^{2}+1}}\\,dx$</p><p>$\\displaystyle =\\int_{}^{}\\dfrac{1}{\\sqrt{\\left(\\dfrac{e^{t}-e^{-t}}{2}\\right)^{2}+1}}\\cdot\\dfrac{e^{t}+e^{-t}}{2}\\,dt$</p><p>$\\displaystyle =\\int_{}^{}\\dfrac{1}{\\sqrt{\\left(\\dfrac{e^{t}+e^{-t}}{2}\\right)^{2}}}\\cdot\\dfrac{e^{t}+e^{-t}}{2}\\,dt$</p><p>$\\displaystyle =\\int_{}^{} \\ 1 \\,dt$</p><p>$\\displaystyle =t+C$</p><p>ここで</p><p>　$\\displaystyle x=\\dfrac{e^{t}-e^{-t}}{2}$</p><p>$\\Longleftrightarrow \\ e^{2t}-2xe^{t}-1=0$</p><p>$\\Longleftrightarrow \\ e^{t}=x+\\sqrt{x^{2}+1}$　$(\\because e^{t}>0)$</p><p>$\\Longleftrightarrow \\ t=\\log(x+\\sqrt{x^{2}+1})$</p><p>より</p><p>　$\\displaystyle \\int_{}^{}\\dfrac{1}{\\sqrt{x^{2}+1}}\\,dx$</p><p>$=\\boldsymbol{\\log\\left(x+\\sqrt{x^{2}+1}\\right)+C}$</p>",
    

    "$\\displaystyle \\int_{}^{}\\sqrt{x^{2}+1}\\,dx$":
    // 上級3，双曲線関数
    "<p>$\\displaystyle x=\\dfrac{e^{t}-e^{-t}}{2}$ とおくと $dx=\\dfrac{e^{t}+e^{-t}}{2}dt$</p><p>　$\\displaystyle \\int_{}^{}\\sqrt{x^{2}+1}\\,dx$</p><p>$\\displaystyle =\\int_{}^{}\\sqrt{\\dfrac{e^{2t}+e^{-2t}+2}{4}}\\cdot\\dfrac{e^{t}+e^{-t}}{2}\\,dt$</p><p>$\\displaystyle =\\int_{}^{} \\ \\dfrac{e^{t}+e^{-t}}{2}\\cdot\\dfrac{e^{t}+e^{-t}}{2}\\,dt$</p><p>$\\displaystyle =\\int_{}^{} \\ \\dfrac{e^{2t}+e^{-2t}+2}{4}\\,dt$</p><p>$\\displaystyle =\\dfrac{e^{2t}-e^{-2t}}{8}+\\dfrac{1}{2}t+C$</p><p>$\\displaystyle =\\dfrac{(e^{t}+e^{-t})(e^{t}-e^{-t})}{8}+\\dfrac{1}{2}t+C$</p><p>ここで</p><p>　$\\displaystyle x=\\dfrac{e^{t}-e^{-t}}{2}$</p><p>$\\Longleftrightarrow \\ e^{2t}-2xe^{t}-1=0$</p><p>$\\Longleftrightarrow \\ e^{t}=x+\\sqrt{x^{2}+1} \\ ( \\because e^{t}>0)$</p><p>$\\Longleftrightarrow \\ t=\\log(x+\\sqrt{x^{2}+1})$</p><p>より</p><p>　$\\displaystyle \\int_{}^{}\\sqrt{x^{2}+1}\\,dx$</p><p>$\\displaystyle =\\dfrac{(e^{t}+e^{-t})2x}{8}+\\dfrac{1}{2}t+C$</p><p>$\\displaystyle =\\dfrac{\\left(x+\\sqrt{x^{2}+1}+\\dfrac{1}{x+\\sqrt{x^{2}+1}}\\right)x}{4}+\\dfrac{1}{2}\\log(x+\\sqrt{x^{2}+1})+C$</p><p>$=\\boldsymbol{\\dfrac{1}{2}x\\sqrt{x^{2}+1}+\\dfrac{1}{2}\\log(x+\\sqrt{x^{2}+1})+C}$</p>",
    

    "$\\displaystyle \\int_{}^{} \\ \\dfrac{1}{\\sin^{3}x}\\,dx$":
    // 上級4，三角関数
    "<p>　$\\displaystyle \\int_{}^{} \\ \\dfrac{1}{\\sin^{3}x}\\,dx$</p><p>$\\displaystyle =\\int_{}^{} \\ \\dfrac{\\sin x}{(1-\\cos^{2}x)^2}\\,dx$</p><p>$\\displaystyle =\\int_{}^{} \\ \\dfrac{-1}{(1-t^{2})^2}\\,dt$　$(t=\\cos x)$</p><p>$\\displaystyle =\\int_{}^{} \\ \\dfrac{-1}{(1+t)^{2}(1-t)^{2}}\\,dt$</p><p>ここで</p><p>$\\dfrac{-1}{(1+t)^{2}(1-t)^{2}}=\\dfrac{a}{1+t}+\\dfrac{b}{1-t}+\\dfrac{c}{(1+t)^2}+\\dfrac{d}{(1-t)^2}$</p><p>とおく．両辺 $(1+t)^{2}(1-t)^{2}$ 倍すると</p><p>$-1=a(1+t)(1-t)^{2}+b(1+t)^{2}(1-t)+c(1-t)^{2}+d(1+t)^{2}$</p><p>展開して係数比較すると</p><p>　$\\begin{cases}a-b=0 \\\\ -a-b+c+d=0 \\\\ -a+b-2c+2d=0 \\\\ a+b+c+d=-1 \\end{cases}$</p><p>解くと $a=b=c=d=-\\dfrac{1}{4}$</p><p>これより</p><p>　$\\displaystyle \\int_{}^{} \\ \\dfrac{1}{\\sin^{3}x}\\,dx$</p><p>$\\displaystyle =-\\dfrac{1}{4}\\int_{}^{} \\ \\left\\{\\dfrac{1}{1+t}+\\dfrac{1}{1-t}+\\dfrac{1}{(1+t)^2}+\\dfrac{1}{(1-t)^2}\\right\\}\\,dt$</p><p>$\\displaystyle =-\\dfrac{1}{4}\\left(\\log|1+t|-\\log|1-t|-\\dfrac{1}{1+t}+\\dfrac{1}{1-t}\\right)+C$</p><p>$\\displaystyle =-\\dfrac{1}{4}\\left(\\log\\left|\\dfrac{1+t}{1-t}\\right|+\\dfrac{2t}{1-t^2}\\right)+C$</p><p>$\\displaystyle =-\\dfrac{1}{4}\\left(\\log\\left|\\dfrac{1+\\cos x}{1-\\cos x}\\right|+\\dfrac{2\\cos x}{1-\\cos^{2}x}\\right)+C$</p><p>$=\\boldsymbol{\\dfrac{1}{4}\\log\\dfrac{1-\\cos x}{1+\\cos x}-\\dfrac{\\cos x}{2\\sin^{2}x}+C}$</p>",
    

    "$\\displaystyle \\int_{}^{} \\ \\dfrac{1}{\\sin^{4}x}\\,dx$":
    // 上級5，三角関数
    "<p>$\\tan x=t$ とおくと $\\dfrac{1}{\\cos^{2}x}dx=dt$</p><p>つまり $dx=\\cos^{2}xdt=\\dfrac{1}{1+\\tan^{2}x}dt=\\dfrac{1}{1+t^{2}}dt$</p><p>また $\\sin^{2}x=1-\\cos^{2}x=1-\\dfrac{1}{1+t^{2}}=\\dfrac{t^{2}}{1+t^{2}}$</p><p>より</p><p>　$\\displaystyle \\int_{}^{} \\ \\dfrac{1}{\\sin^{4}x}\\,dx$</p><p>$\\displaystyle =\\int_{}^{} \\ \\left(\\dfrac{1+t^{2}}{t^{2}}\\right)^{2}\\dfrac{1}{1+t^{2}}\\,dt$</p><p>$\\displaystyle =\\int_{}^{} \\ \\left(\\dfrac{1}{t^4}+\\dfrac{1}{t^2}\\right)\\,dt$</p><p>$=-\\dfrac{1}{3t^3}-\\dfrac{1}{t}+C$</p><p>$=\\boldsymbol{-\\dfrac{1}{3\\tan^{3}x}-\\dfrac{1}{\\tan x}+C}$</p>",
    

    "$\\displaystyle \\int_{}^{} \\ xe^{x}\\sin x\\,dx$":
    // 上級6，部分積分の応用
    "<p>$\\displaystyle I=\\int_{}^{} \\ e^{x}\\sin x\\,dx$ とおく．</p><p>　$\\displaystyle I$</p><p>$\\displaystyle =e^{x}\\sin x-\\int_{}^{} \\ e^{x}\\cos x\\,dx$</p><p>$\\displaystyle =e^{x}\\sin x-\\left(e^{x}\\cos x-\\int_{}^{} \\ e^{x}(-\\sin x)\\,dx\\right)$</p><p>$\\displaystyle =e^{x}\\sin x-e^{x}\\cos x-\\int_{}^{} \\ e^{x}\\sin x\\,dx$</p><p>$\\displaystyle =e^{x}(\\sin x-\\cos x)-I$</p><p>$\\displaystyle 2I=e^{x}(\\sin x-\\cos x)$ だが，積分定数を入れて</p><p>　$I=\\dfrac{e^{x}}{2}(\\sin x-\\cos x)+C$</p><p>　$\\displaystyle \\int_{}^{} \\ xe^{x}\\sin x\\,dx$</p><p>$\\displaystyle =\\int_{}^{} \\ x\\left(\\dfrac{e^{x}}{2}(\\sin x-\\cos x)\\right)'\\,dx$</p><p>$\\displaystyle =\\dfrac{xe^{x}}{2}(\\sin x-\\cos x)-\\int_{}^{} \\ \\dfrac{e^{x}}{2}(\\sin x-\\cos x)\\,dx$</p><p>$\\displaystyle =\\dfrac{xe^{x}}{2}(\\sin x-\\cos x)-\\dfrac{1}{2}I+\\dfrac{1}{2}\\int_{}^{} \\ e^{x}\\cos x\\,dx$</p><p>$\\displaystyle =\\dfrac{xe^{x}}{2}(\\sin x-\\cos x)-\\dfrac{1}{2}I+\\dfrac{1}{2}(e^{x}\\sin x-I)$</p><p>$\\displaystyle =\\dfrac{xe^{x}}{2}(\\sin x-\\cos x)-\\dfrac{e^{x}}{2}(\\sin x-\\cos x)+\\dfrac{e^{x}}{2}\\sin x+C$</p><p>$=\\boldsymbol{\\dfrac{e^{x}}{2}(x\\sin x-x\\cos x+\\cos x)+C}$</p>",
    

    "$\\displaystyle \\int_{}^{} \\sqrt{1-e^{-2x}}\\,dx$":
    // 上級7，2008横浜国大
    "<p>$\\displaystyle \\sqrt{1-e^{-2x}}=t$ とおくと，$1-e^{-2x}=t^2$ より</p><p>　$2e^{-2x}dx=2tdt$</p><p>　$\\displaystyle \\int_{}^{} \\sqrt{1-e^{-2x}}\\,dx$</p><p>$\\displaystyle =\\int_{}^{} \\ t\\cdot \\dfrac{t}{e^{-2x}}\\,dt$</p><p>$\\displaystyle =\\int_{}^{} \\ \\dfrac{t^{2}}{1-t^{2}}\\,dt$</p><p>$\\displaystyle =\\int_{}^{} \\ \\dfrac{t^{2}-1+1}{1-t^{2}}\\,dt$</p><p>$\\displaystyle =\\int_{}^{} \\ \\left\\{\\dfrac{1}{(1-t)(1+t)}-1\\right\\}\\,dt$</p><p>$\\displaystyle =\\int_{}^{} \\ \\left(\\dfrac{\\frac{1}{2}}{1-t}+\\dfrac{\\frac{1}{2}}{1+t}-1\\right)\\,dt$</p><p>$\\displaystyle =-\\dfrac{1}{2}\\log|1-t|+\\dfrac{1}{2}\\log|1+t|-t+C$</p><p>$\\displaystyle =\\dfrac{1}{2}\\log\\left|\\dfrac{1+\\sqrt{1-e^{-2x}}}{1-\\sqrt{1-e^{-2x}}}\\right|-\\sqrt{1-e^{-2x}}+C$</p><p>$=\\boldsymbol{\\log(1+\\sqrt{1-e^{-2x}})+x-\\sqrt{1-e^{-2x}}+C}$</p>",
    

    "$\\displaystyle \\int_{}^{} \\ \\sqrt{\\dfrac{1}{x^2}+1}\\,dx$　$( \\ x&gt;0 \\ )$":
    // 上級8，logxの曲線の長さ
    "<p>　$\\displaystyle \\int_{}^{} \\ \\sqrt{\\dfrac{1}{x^2}+1}\\,dx$　$(x&gt;0)$</p><p>$\\displaystyle =\\int_{}^{} \\ \\dfrac{\\sqrt{1+x^{2}}}{x}\\,dx$</p><p>$\\sqrt{1+x^{2}}=t$ とおくと，$1+x^{2}=t^{2}$．$2xdx=2tdt$．</p><p>　$\\displaystyle \\int_{}^{} \\ \\dfrac{\\sqrt{1+x^{2}}}{x}\\,dx$</p><p>$\\displaystyle =\\int_{}^{} \\ \\dfrac{t}{x^{2}}\\cdot x\\,dx$</p><p>$\\displaystyle =\\int_{}^{} \\ \\dfrac{t^{2}}{t^{2}-1}\\,dt$</p><p>$\\displaystyle =\\int_{}^{} \\ \\left(1+\\dfrac{1}{t^{2}-1}\\right)\\,dt$</p><p>$\\displaystyle =\\int_{}^{} \\ \\left\\{1+\\dfrac{1}{2(t-1)}-\\dfrac{1}{2(t+1)}\\right\\}\\,dt$</p><p>$\\displaystyle =t+\\dfrac{1}{2}\\log|t-1|-\\dfrac{1}{2}\\log|t+1|+C$</p><p>$\\displaystyle =\\boldsymbol{\\sqrt{1+x^{2}}+\\dfrac{1}{2}\\log\\dfrac{\\sqrt{1+x^{2}}-1}{\\sqrt{1+x^{2}}+1}+C}$</p>",
    
    

    "$\\displaystyle \\int_{0}^{\\frac{\\pi}{2}}\\sin^{9} x\\,dx$":
    // 上級9，ウォリス積分
    "<p>$\\displaystyle I_{n}=\\int_{0}^{\\frac{\\pi}{2}}\\sin^{n}x\\,dx$ とおくと</p><p>　$I_{n}$</p><p>$\\displaystyle =\\int_{0}^{\\frac{\\pi}{2}}\\left(-\\cos x\\right)'\\sin^{n-1}x\\,dx$</p><p>$\\displaystyle =\\Bigl[-\\cos x\\sin^{n-1}x\\Bigr]_{0}^{\\frac{\\pi}{2}}-\\int_{0}^{\\frac{\\pi}{2}}(n-1)\\sin^{n-2}x(-\\cos^{2} x)\\,dx$</p><p>$\\displaystyle =(n-1)\\int_{0}^{\\frac{\\pi}{2}}\\sin^{n-2}x\\cos^{2}x\\,dx$</p><p>$\\displaystyle =(n-1)\\int_{0}^{\\frac{\\pi}{2}}\\sin^{n-2}x(1-\\sin^{2}x)\\,dx$</p><p>$\\displaystyle =(n-1)I_{n-2}-(n-1)I_{n}$</p><p>$\\therefore \\ \\displaystyle nI_{n}=(n-1)I_{n-2}$</p><p>$\\therefore \\ \\displaystyle I_{n}=\\dfrac{n-1}{n}I_{n-2}$</p><p>これより</p><p>　$\\displaystyle \\int_{0}^{\\frac{\\pi}{2}}\\sin^{9} x\\,dx$</p><p>$=I_{9}=\\dfrac{8}{9}I_{7}= \\cdots =\\dfrac{8}{9}\\cdot \\dfrac{6}{7}\\cdot \\dfrac{4}{5}\\cdot \\dfrac{2}{3}\\cdot I_{1}=\\boldsymbol{\\dfrac{128}{315}}$</p>",
    

    "$\\displaystyle \\int_{0}^{\\frac{\\pi}{2}}\\cos^{8} x\\,dx$":
    // 上級10，ウォリス積分
    "<p>$\\displaystyle I_{n}=\\int_{0}^{\\frac{\\pi}{2}}\\cos^{n}x\\,dx$ とおくと</p><p>　$I_{n}$</p><p>$\\displaystyle =\\int_{0}^{\\frac{\\pi}{2}}\\left(\\sin x\\right)'\\cos^{n-1}x\\,dx$</p><p>$\\displaystyle =\\Bigl[\\sin x\\cos^{n-1}x\\Bigr]_{0}^{\\frac{\\pi}{2}}-\\int_{0}^{\\frac{\\pi}{2}}(n-1)\\cos^{n-2}x(-\\sin^{2} x)\\,dx$</p><p>$\\displaystyle =(n-1)\\int_{0}^{\\frac{\\pi}{2}}\\cos^{n-2}x\\sin^{2}x\\,dx$</p><p>$\\displaystyle =(n-1)\\int_{0}^{\\frac{\\pi}{2}}\\cos^{n-2}x(1-\\cos^{2}x)\\,dx$</p><p>$\\displaystyle =(n-1)I_{n-2}-(n-1)I_{n}$</p><p>$\\therefore \\ \\displaystyle nI_{n}=(n-1)I_{n-2}$</p><p>$\\therefore \\ \\displaystyle I_{n}=\\dfrac{n-1}{n}I_{n-2}$</p><p>これより</p><p>　$\\displaystyle \\int_{0}^{\\frac{\\pi}{2}}\\cos^{8} x\\,dx$</p><p>$=I_{8}=\\dfrac{7}{8}I_{6}= \\cdots =\\dfrac{7}{8}\\cdot \\dfrac{5}{6}\\cdot \\dfrac{3}{4}\\cdot \\dfrac{1}{2}\\cdot I_{0}=\\boldsymbol{\\dfrac{35}{256}\\pi}$</p>",
    

    "$\\displaystyle \\int_{0}^{1}x^{m}(1-x)^{n}\\,dx$　$( \\ m，n \\ は \\ 0 \\ 以上の整数 \\ )$":
    // 上級11，ベータ関数
    "<p>与式を $B(m,n)$ とおく．</p><p>　$B(m,n)$</p><p>$=\\displaystyle \\int_{0}^{1}x^{m}(1-x)^{n}\\,dx$</p><p>$=\\displaystyle \\int_{0}^{1}\\left(\\frac{x^{m+1}}{m+1}\\right)'(1-x)^{n}\\,dx$</p><p>$=\\displaystyle \\left[\\frac{x^{m+1}}{m+1}(1-x)^{n}\\right]_{0}^{1}-\\int_{0}^{1}\\frac{x^{m+1}}{m+1}(-n)(1-x)^{n-1}\\,dx$</p><p>$=\\displaystyle \\frac{n}{m+1}\\int_{0}^{1}x^{m+1}(1-x)^{n-1}\\,dx$</p><p>$=\\displaystyle \\frac{n}{m+1} B(m+1,n-1)$</p><p>$=\\displaystyle \\frac{n}{m+1}\\cdot\\frac{n-1}{m+2} B(m+2,n-2)$</p><p>$=\\displaystyle \\frac{n}{m+1}\\cdot\\frac{n-1}{m+2}\\cdots \\frac{1}{m+n} B(m+n,0)$</p><p>$=\\displaystyle \\dfrac{m!n!}{(m+n)!} \\int_{0}^{1}x^{m+n}\\,dx$</p><p>$=\\boldsymbol{\\dfrac{m!n!}{(m+n+1)!}}$</p>",
    

    "$\\displaystyle \\int_{\\frac{\\pi}{6}}^{\\frac{\\pi}{3}}\\sqrt{1+\\sin x}\\,dx$":
    // 上級12，宮崎大改
    "<p>$x=\\dfrac{\\pi}{2}-t$ とおくと，$dx=-dt$</p><p>積分範囲は</p><table border=\"1px\" cellpadding=\"10px\" style=\"border-collapse: collapse;text-align: center\" align=\"center\"><caption></caption><tr><th>$x$</th><td>$\\dfrac{\\pi}{6} \\ \\to \\ \\dfrac{\\pi}{3}$</td></tr><tr><th>$t$</th><td>$\\dfrac{\\pi}{3} \\ \\to \\ \\dfrac{\\pi}{6}$</td></tr></table><p>となるので</p><p>　$\\displaystyle \\int_{\\frac{\\pi}{6}}^{\\frac{\\pi}{3}}\\sqrt{1+\\sin x}\\,dx$</p><p>$\\displaystyle =\\int_{\\frac{\\pi}{3}}^{\\frac{\\pi}{6}}\\sqrt{1+\\sin \\left(\\dfrac{\\pi}{2}-t\\right)}\\,(-dt)$</p><p>$\\displaystyle =\\int_{\\frac{\\pi}{6}}^{\\frac{\\pi}{3}}\\sqrt{1+\\cos t}\\,dt$</p><p>$\\displaystyle =\\int_{\\frac{\\pi}{6}}^{\\frac{\\pi}{3}}\\sqrt{1+2\\cos^{2} \\dfrac{t}{2}-1}\\,dt$</p><p>$\\displaystyle =\\int_{\\frac{\\pi}{6}}^{\\frac{\\pi}{3}}\\sqrt{2}\\cos \\dfrac{t}{2}\\,dt$</p><p>$\\displaystyle =\\left[2\\sqrt{2}\\sin\\dfrac{t}{2}\\right]_{\\frac{\\pi}{6}}^{\\frac{\\pi}{3}}$</p><p>$=2\\sqrt{2}\\left(\\sin\\dfrac{\\pi}{6}-\\sin\\dfrac{\\pi}{12}\\right)$</p><p>$=2\\sqrt{2}\\left(\\dfrac{1}{2}-\\dfrac{\\sqrt{6}-\\sqrt{2}}{4}\\right)$</p><p>$=\\boldsymbol{\\sqrt{2}-\\sqrt{3}+1}$</p>",
    

    "$\\displaystyle \\int_{0}^{\\frac{\\pi}{2}}\\dfrac{1}{5\\sin x+12\\cos x}\\,dx$":
    // 上級13，2017横浜国大改
    "<p>　$\\displaystyle \\int_{0}^{\\frac{\\pi}{2}}\\dfrac{1}{5\\sin x+12\\cos x}\\,dx$</p><p>$\\displaystyle =\\int_{0}^{\\frac{\\pi}{2}}\\dfrac{1}{13\\left(\\sin x \\cdot \\dfrac{5}{13}+\\cos x \\cdot \\dfrac{12}{13}\\right)}\\,dx$</p><p>$\\displaystyle =\\int_{0}^{\\frac{\\pi}{2}}\\dfrac{1}{13\\sin (x+\\alpha)}\\,dx$</p><p>$\\displaystyle =\\int_{0}^{\\frac{\\pi}{2}}\\dfrac{\\sin (x+\\alpha)}{13\\{1-\\cos^{2}(x+\\alpha)\\}}\\,dx$</p><p>$\\displaystyle =\\int_{\\cos \\alpha}^{\\cos\\left(\\frac{\\pi}{2}+\\alpha\\right)}\\dfrac{-1}{13(1-t^{2})}\\,dt$　$(t=\\cos(x+\\alpha))$</p><p>$\\displaystyle =-\\dfrac{1}{13}\\int_{\\cos \\alpha}^{-\\sin\\alpha}\\dfrac{1}{(1-t)(1+t)}\\,dt$</p><p>$\\displaystyle =\\dfrac{1}{26}\\int_{-\\sin\\alpha}^{\\cos \\alpha}\\left(\\dfrac{1}{1-t}+\\dfrac{1}{1+t}\\right)\\,dt$</p><p>$\\displaystyle =\\dfrac{1}{26}\\Bigl[-\\log(1-t)+\\log(1+t)\\Bigr]_{-\\frac{12}{13}}^{\\frac{5}{13}}$</p><p>$\\displaystyle =\\dfrac{1}{26}\\left[\\log \\dfrac{1+t}{1-t}\\right]_{-\\frac{12}{13}}^{\\frac{5}{13}}$</p><p>$\\displaystyle =\\dfrac{1}{26}\\left(\\log\\dfrac{18}{8}-\\log\\dfrac{1}{25}\\right)$</p><p>$\\displaystyle =\\dfrac{1}{26}\\log\\dfrac{225}{4}$</p><p>$=\\boldsymbol{\\dfrac{1}{13}\\log\\dfrac{15}{2}}$</p>",
    

    "$\\displaystyle \\int_{0}^{\\pi}\\dfrac{x\\sin x}{15+\\sin^{2} x}\\,dx$":
    // 上級14，x=\pi-tの置換
    "<p>$I=\\displaystyle \\int_{0}^{\\pi}\\dfrac{x\\sin x}{15+\\sin^{2} x}\\,dx$ とおく</p><p>$\\displaystyle =\\int_{\\pi}^{0}\\dfrac{(\\pi-t)\\sin(\\pi-t)}{15+\\sin^{2}(\\pi-t)}(-1)\\,dt$　$(x=\\pi-t)$</p><p>$\\displaystyle =\\int_{0}^{\\pi}\\dfrac{(\\pi-t)\\sin t}{15+\\sin^{2}t}\\,dt$</p><p>$\\displaystyle =\\pi\\int_{0}^{\\pi}\\dfrac{\\sin t}{15+\\sin^{2}t}\\,dt-I$</p><p>つまり</p><p>　$2I$</p><p>$\\displaystyle =\\pi\\int_{0}^{\\pi}\\dfrac{\\sin t}{16-\\cos^{2}t}\\,dt$</p><p>$\\displaystyle =\\pi\\int_{1}^{-1}\\dfrac{-1}{16-u^{2}}\\,du$　$(u=\\cos t)$</p><p>$\\displaystyle =\\pi\\int_{-1}^{1}\\dfrac{1}{16-u^{2}}\\,du$</p><p>$\\displaystyle =2\\pi\\int_{0}^{1}\\dfrac{1}{(4-u)(4+u)}\\,du$</p><p>$\\displaystyle =\\dfrac{\\pi}{4}\\int_{0}^{1}\\left(\\dfrac{1}{4-u}+\\dfrac{1}{4+u}\\right)\\,du$</p><p>$\\displaystyle =\\dfrac{\\pi}{4}\\Bigl[-\\log|4-u|+\\log|4+u|\\Bigr]_{0}^{1}$</p><p>$\\displaystyle =\\dfrac{\\pi}{4}\\log\\dfrac{5}{3}$</p><p>$\\displaystyle \\therefore \\ I=\\int_{0}^{\\pi}\\dfrac{x\\sin x}{15+\\sin^{2} x}\\,dx=\\boldsymbol{\\dfrac{\\pi}{8}\\log\\dfrac{5}{3}}$</p>",
    

    "$\\displaystyle \\int_{0}^{\\frac{\\pi}{2}}\\dfrac{\\sin x}{\\sin x+\\cos x}\\,dx$":
    // 上級15，x=\dfrac{\pi}{2}-tの置換
    "<p>$\\displaystyle I=\\int_{0}^{\\frac{\\pi}{2}}\\dfrac{\\sin x}{\\sin x+\\cos x}\\,dx$ とおく</p><p>$\\displaystyle =\\int_{\\frac{\\pi}{2}}^{0}\\dfrac{\\sin\\left(\\dfrac{\\pi}{2}-t\\right)}{\\sin\\left(\\dfrac{\\pi}{2}-t\\right)+\\cos\\left(\\dfrac{\\pi}{2}-t\\right)}\\,(-dt)$　$\\left(x=\\dfrac{\\pi}{2}-t\\right)$</p><p>$\\displaystyle =\\int_{0}^{\\frac{\\pi}{2}}\\dfrac{\\cos t}{\\cos t+\\sin t}\\,dt$</p><p>$\\displaystyle =\\int_{0}^{\\frac{\\pi}{2}}\\dfrac{\\cos x}{\\cos x+\\sin x}\\,dx$</p><p>つまり</p><p>　$2I$</p><p>$\\displaystyle =\\int_{0}^{\\frac{\\pi}{2}}\\dfrac{\\sin x}{\\sin x+\\cos x}\\,dx+\\int_{0}^{\\frac{\\pi}{2}}\\dfrac{\\cos x}{\\sin x+\\cos x}\\,dx$</p><p>$\\displaystyle =\\int_{0}^{\\frac{\\pi}{2}}\\dfrac{\\sin x+\\cos x}{\\sin x+\\cos x}\\,dx$</p><p>$\\displaystyle =\\dfrac{\\pi}{2}$</p><p>$\\displaystyle \\therefore \\ I=\\int_{0}^{\\frac{\\pi}{2}}\\dfrac{\\sin x}{\\sin x+\\cos x}\\,dx=\\boldsymbol{\\dfrac{\\pi}{4}}$</p>",
    

    "$\\displaystyle \\int_{0}^{1}\\dfrac{1}{x^{3}+1}\\,dx$":
    // 上級16，分数関数
    "<p>　$\\displaystyle \\int_{0}^{1}\\dfrac{1}{x^{3}+1}\\,dx$</p><p>$\\displaystyle =\\int_{0}^{1}\\dfrac{1}{(x+1)(x^{2}-x+1)}\\,dx$</p><p>ここで</p><p>　$\\dfrac{1}{(x+1)(x^{2}-x+1)}=\\dfrac{a}{x+1}+\\dfrac{bx+c}{x^{2}-x+1}$</p><p>とおく．両辺 $(x+1)(x^{2}-x+1)$ かけると</p><p>　$1=a(x^{2}-x+1)+(bx+c)(x+1)$</p><p>右辺整理して，両辺係数比較すると</p><p>　$\\begin{cases}0=a+b \\\\ 0=-a+b+c \\\\ 1=a+c \\end{cases}$ $\\therefore \\ a=\\dfrac{1}{3}，b=-\\dfrac{1}{3}，c=\\dfrac{2}{3}$</p><p>　$\\displaystyle \\int_{0}^{1}\\dfrac{1}{x^{3}+1}\\,dx$</p><p>$\\displaystyle =\\int_{0}^{1}\\left(\\dfrac{\\frac{1}{3}}{x+1}+\\dfrac{-\\frac{1}{3}x+\\frac{1}{6}+\\frac{1}{2}}{x^{2}-x+1}\\right)\\,dx$</p><p>$\\displaystyle =\\dfrac{1}{3}\\int_{0}^{1}\\dfrac{1}{x+1}\\,dx-\\dfrac{1}{6}\\int_{0}^{1}\\dfrac{2x-1}{x^{2}-x+1}\\,dx+\\dfrac{1}{2}\\int_{0}^{1}\\dfrac{1}{\\left(x-\\frac{1}{2}\\right)^{2}+\\frac{3}{4}}\\,dx$</p><p>$\\displaystyle =\\dfrac{1}{3}\\log 2-\\dfrac{1}{6}\\Bigl[\\log|x^{2}-x+1|\\Bigr]_{0}^{1}+\\dfrac{1}{2}\\int_{-\\frac{1}{\\sqrt{3}}}^{\\frac{1}{\\sqrt{3}}}\\dfrac{1}{\\frac{3}{4}t^{2}+\\frac{3}{4}}\\cdot\\dfrac{\\sqrt{3}}{2}\\,dt$　$\\left(x-\\dfrac{1}{2}=\\dfrac{\\sqrt{3}}{2}t\\right)$</p><p>$\\displaystyle =\\dfrac{1}{3}\\log 2+\\dfrac{2\\sqrt{3}}{3}\\int_{0}^{\\frac{1}{\\sqrt{3}}}\\dfrac{1}{t^{2}+1}\\,dt$</p><p>$\\displaystyle =\\dfrac{1}{3}\\log 2+\\dfrac{2\\sqrt{3}}{3}\\int_{0}^{\\frac{\\pi}{6}}\\dfrac{1}{\\tan u^{2}+1}\\cdot\\dfrac{1}{\\cos^{2}u}\\,du$　$(t=\\tan u)$</p><p>$\\displaystyle =\\dfrac{1}{3}\\log 2+\\dfrac{2\\sqrt{3}}{3}\\cdot\\dfrac{\\pi}{6}$</p><p>$=\\boldsymbol{\\dfrac{1}{3}\\log 2+\\dfrac{\\sqrt{3}\\pi}{9}}$</p>",
    

    "$\\displaystyle \\int_{0}^{\\frac{\\pi}{4}}\\dfrac{\\tan x}{2-\\cos2x}\\,dx$":
    // 上級17，2014長崎大
    "<p>　$\\displaystyle \\int_{0}^{\\frac{\\pi}{4}}\\dfrac{\\tan x}{2-\\cos2x}\\,dx$</p><p>$\\displaystyle =\\int_{0}^{\\frac{\\pi}{4}}\\dfrac{\\tan x}{3-2\\cos^{2}x}\\,dx$</p><p>$\\displaystyle =\\int_{0}^{\\frac{\\pi}{4}}\\dfrac{\\tan x}{3\\frac{1}{\\cos^{2}x}-2}\\cdot\\dfrac{1}{\\cos^{2}x}\\,dx$</p><p>$\\displaystyle =\\int_{0}^{1}\\dfrac{t}{3(1+t^{2})-2}\\,dt$　$(t=\\tan x)$</p><p>$\\displaystyle =\\dfrac{1}{6}\\int_{0}^{1}\\dfrac{6t}{1+3t^{2}}\\,dt$</p><p>$\\displaystyle =\\dfrac{1}{6}\\Bigl[\\log(1+3t^{2})\\Bigr]_{0}^{1}$</p><p>$=\\boldsymbol{\\dfrac{1}{3}\\log2}$</p>",
    

    "$\\displaystyle \\int_{-\\frac{\\pi}{2}}^{\\frac{\\pi}{2}}\\dfrac{e^{x}+e^{-x}}{2^{x}+1}\\,dx$":
    // 上級18，オリジナル
    "<p>$\\displaystyle I=\\int_{-\\frac{\\pi}{2}}^{\\frac{\\pi}{2}}\\dfrac{e^{x}+e^{-x}}{2^{x}+1}\\,dx$ とおくと</p><p>　$\\displaystyle I$</p><p>$\\displaystyle =\\int_{\\frac{\\pi}{2}}^{-\\frac{\\pi}{2}}\\dfrac{e^{-t}+e^{t}}{2^{-t}+1}(-1)\\,dt$　$(x=-t)$</p><p>$\\displaystyle =\\int_{-\\frac{\\pi}{2}}^{\\frac{\\pi}{2}}\\dfrac{e^{t}+e^{-t}}{2^{-t}+1}\\,dt$</p><p>$\\displaystyle =\\int_{-\\frac{\\pi}{2}}^{\\frac{\\pi}{2}}\\dfrac{e^{x}+e^{-x}}{2^{-x}+1}\\,dx$</p><p>　$\\displaystyle 2I$</p><p>$\\displaystyle =\\int_{-\\frac{\\pi}{2}}^{\\frac{\\pi}{2}}\\dfrac{e^{x}+e^{-x}}{2^{x}+1}\\,dx+\\int_{-\\frac{\\pi}{2}}^{\\frac{\\pi}{2}}\\dfrac{e^{x}+e^{-x}}{2^{-x}+1}\\,dx$</p><p>$\\displaystyle =\\int_{-\\frac{\\pi}{2}}^{\\frac{\\pi}{2}}(e^{x}+e^{-x})\\left(\\dfrac{1}{2^{x}+1}+\\dfrac{1}{2^{-x}+1}\\right)\\,dx$</p><p>$\\displaystyle =\\int_{-\\frac{\\pi}{2}}^{\\frac{\\pi}{2}}(e^{x}+e^{-x})\\dfrac{2^{-x}+1+2^{x}+1}{(2^{x}+1)(2^{-x}+1)}\\,dx$</p><p>$\\displaystyle =\\int_{-\\frac{\\pi}{2}}^{\\frac{\\pi}{2}}(e^{x}+e^{-x})\\,dx$</p><p>$\\displaystyle =2\\int_{0}^{\\frac{\\pi}{2}}(e^{x}+e^{-x})\\,dx$</p><p>　$\\displaystyle I$</p><p>$\\displaystyle =\\int_{0}^{\\frac{\\pi}{2}}(e^{x}+e^{-x})\\,dx$</p><p>$\\displaystyle =\\Bigl[e^{x}-e^{-x}\\Bigr]_{0}^{\\frac{\\pi}{2}}$</p><p>$=\\boldsymbol{e^{\\frac{\\pi}{2}}-e^{-\\frac{\\pi}{2}}}$</p>",
    

    "$\\displaystyle \\int_{0}^{\\pi}|\\sin nx|\\,dx$　$( \\ n \\ は自然数 \\ )$":
    // 上級19，絶対値
    "<p>　$\\displaystyle \\int_{0}^{\\pi}|\\sin nx|\\,dx$</p><p>$\\displaystyle =\\int_{0}^{n\\pi}|\\sin t|\\dfrac{1}{n}\\,dt$　$(t=nx)$</p><p>$\\displaystyle =\\dfrac{1}{n}\\sum_{k=1}^{n}\\int_{(k-1)\\pi}^{k\\pi}|\\sin t|\\,dt$</p><p>$\\displaystyle =\\dfrac{1}{n}\\sum_{k=1}^{n}\\int_{(k-1)\\pi}^{k\\pi}(-1)^{k-1}\\sin t\\,dt$</p><p>$\\displaystyle =\\dfrac{1}{n}\\sum_{k=1}^{n}(-1)^{k-1}\\int_{(k-1)\\pi}^{k\\pi}\\sin t\\,dt$</p><p>$\\displaystyle =\\dfrac{1}{n}\\sum_{k=1}^{n}(-1)^{k-1}\\Bigl[-\\cos t\\Bigr]_{(k-1)\\pi}^{k\\pi}$</p><p>$\\displaystyle =\\dfrac{1}{n}\\sum_{k=1}^{n}(-1)^{k-1}\\left\\{-(-1)^{k}+(-1)^{k-1}\\right\\}$</p><p>$\\displaystyle =\\dfrac{1}{n}\\sum_{k=1}^{n}(-1)^{k-1}\\left\\{(-1)^{k-1}+(-1)^{k-1}\\right\\}$</p><p>$\\displaystyle =\\dfrac{1}{n}\\sum_{k=1}^{n}2$</p><p>$=\\boldsymbol{2}$</p>",
    

    "$\\displaystyle \\int_{0}^{1}2^{x^2}\\,dx+\\int_{1}^{2}\\sqrt{\\log_{2}x}\\,dx$":
    // 上級20，逆関数と面積利用
    "<div style=\"text-align: center\"><img src=\"noteimages/integral-gacha.png\" alt=\"逆関数同士の積分\" width=\"74%\"></div><p>　$\\\displaystyle \\int_{0}^{1}2^{x^2}\\,dx+\\int_{1}^{2}\\sqrt{\\log_{2}x}\\,dx$</p><p>$\\displaystyle =\\int_{0}^{1}2^{x^2}\\,dx+\\int_{1}^{2}\\sqrt{\\log_{2}y}\\,dy$</p><p>求める積分の値は 図の赤い部分と青い部分の面積の和，つまり長方形の面積になるので，$1\\cdot2=\\boldsymbol{2}$</p>",
    

    "$\\displaystyle \\int_{2}^{3}\\dfrac{1}{\\sqrt{x^{2}-1}}\\,dx$":
    // 上級21，双曲線関数
    "<p>　$x=\\dfrac{e^{t}+e^{-t}}{2}$ $(t&gt;0)$ とおくと，$dx=\\dfrac{e^{t}-e^{-t}}{2}dt$</p><p>また</p><div style=\"text-align: center\"><p>$x=\\dfrac{e^{t}+e^{-t}}{2}$</p><p>$\\Longleftrightarrow \\ (e^{t})^{2}-2xe^{t}+1=0$</p><p>$\\Longleftrightarrow \\ e^{t}=x+\\sqrt{x^{2}-1} \\ (\\because e^{t}&gt;1)$</p><p>$\\Longleftrightarrow \\ t=\\log(x+\\sqrt{x^{2}-1})$</p></div><p>積分範囲は</p><table border=\"1px\" cellpadding=\"10px\" style=\"border-collapse: collapse;text-align: center\" align=\"center\"><caption></caption><tr><th>$x$</th><td>$2 \\ \\to \\ 3$</td></tr><tr><th>$t$</th><td>$\\log(2+\\sqrt{3}) \\ \\to \\ \\log(3+2\\sqrt{2})$</td></tr></table><p>となるので</p><p>　$\\displaystyle \\int_{2}^{3}\\dfrac{1}{\\sqrt{x^{2}-1}}\\,dx$</p><p>$\\displaystyle =\\int_{\\log(2+\\sqrt{3})}^{\\log(3+2\\sqrt{2})}\\dfrac{1}{\\sqrt{\\left(\\dfrac{e^{t}+e^{-t}}{2}\\right)^{2}-1}}\\cdot\\dfrac{e^{t}-e^{-t}}{2}\\,dt$</p><p>$\\displaystyle =\\int_{\\log(2+\\sqrt{3})}^{\\log(3+2\\sqrt{2})}\\dfrac{1}{\\sqrt{\\left(\\dfrac{e^{t}-e^{-t}}{2}\\right)^{2}}}\\cdot\\dfrac{e^{t}-e^{-t}}{2}\\,dt$</p><p>$\\displaystyle =\\int_{\\log(2+\\sqrt{3})}^{\\log(3+2\\sqrt{2})}1\\,dt$</p><p>$=\\log(3+2\\sqrt{2})-\\log(2+\\sqrt{3})$</p><p>$=\\log\\dfrac{3+2\\sqrt{2}}{2+\\sqrt{3}}$</p><p>$=\\boldsymbol{\\log(6-3\\sqrt{3}+4\\sqrt{2}-2\\sqrt{6})}$</p>",
    

    "$\\displaystyle \\int_{0}^{\\frac{\\pi}{4}} \\tan^{5}x\\,dx$":
    // 上級22，三角関数，積分漸化式
    "<p>$\\displaystyle I_{n}=\\int_{0}^{\\frac{\\pi}{4}} \\tan^{n}x\\,dx$ とおく</p><p>　$\\displaystyle I_{n+2}$</p><p>$\\displaystyle =\\int_{0}^{\\frac{\\pi}{4}} \\tan^{n+2}x\\,dx$</p><p>$\\displaystyle =\\int_{0}^{\\frac{\\pi}{4}} \\tan^{n}x\\left(\\dfrac{1}{\\cos^{2}x}-1\\right)\\,dx$</p><p>$\\displaystyle =\\int_{0}^{1} u^{n}\\,du-\\int_{0}^{\\frac{\\pi}{4}} \\tan^{n}x\\,dx$　( $u=\\tan x$ )</p><p>$\\displaystyle =\\dfrac{1}{n+1}-I_{n}$</p><p>　$I_{5}$</p><p>$=\\dfrac{1}{4}-I_{3}$</p><p>$=\\dfrac{1}{4}-\\left(\\dfrac{1}{2}-I_{1}\\right)$</p><p>$\\displaystyle =-\\dfrac{1}{4}+\\int_{0}^{\\frac{\\pi}{4}} \\tan x\\,dx$</p><p>$\\displaystyle =-\\dfrac{1}{4}-\\int_{0}^{\\frac{\\pi}{4}} \\dfrac{-\\sin x}{\\cos x}\\,dx$</p><p>$\\displaystyle =-\\dfrac{1}{4}-\\Bigl[\\log|\\cos x|\\Bigr]_{0}^{\\frac{\\pi}{4}}$</p><p>$\\displaystyle =-\\dfrac{1}{4}-\\log\\dfrac{1}{\\sqrt{2}}$</p><p>$=\\boldsymbol{-\\dfrac{1}{4}+\\dfrac{1}{2}\\log 2}$</p>",
    

    "$\\displaystyle \\int_{0}^{\\frac{1}{2}}f^{-1}(x)\\,dx$　ただし $f(x)=\\sin x$　$\\left(0\\leqq x &lt; \\dfrac{\\pi}{2}\\right)$":
    // 上級23，逆三角関数の積分
    "<p>$y=f(x)=\\sin x$　$\\left(0\\leqq x &lt; \\dfrac{\\pi}{2}\\right)$ とおく．</p><p>逆関数は $x=\\sin y$　$\\left(0\\leqq y &lt; \\dfrac{\\pi}{2}\\right)$．両辺 $x$ で微分すると</p><p style=\"text-align: center\">$1=\\cos y \\cdot \\dfrac{dy}{dx}$</p><p style=\"text-align: center\">$\\dfrac{dy}{dx}=\\left(f^{-1}(x)\\right)'=\\dfrac{1}{\\cos y}=\\dfrac{1}{\\sqrt{1-\\sin^{2}y}}=\\dfrac{1}{\\sqrt{1-x^{2}}}$</p><p>これを踏まえ</p><p>　$\\displaystyle \\int_{0}^{\\frac{1}{2}}f^{-1}(x)\\,dx$</p><p>$\\displaystyle =\\Bigl[xf^{-1}(x)\\Bigr]_{0}^{\\frac{1}{2}}-\\int_{0}^{\\frac{1}{2}}x\\left(f^{-1}(x)\\right)'\\,dx$</p><p>$\\displaystyle =\\dfrac{1}{2}\\cdot f^{-1}\\left(\\frac{1}{2}\\right)-\\int_{0}^{\\frac{1}{2}}\\dfrac{x}{\\sqrt{1-x^{2}}}\\,dx$</p><p>$\\displaystyle =\\dfrac{1}{2}\\cdot\\dfrac{\\pi}{6}+\\Bigl[\\sqrt{1-x^{2}}\\Bigr]_{0}^{\\frac{1}{2}}$</p><p>$=\\boldsymbol{\\dfrac{\\pi}{12}+\\dfrac{\\sqrt{3}}{2}-1}$</p>",
    

    "$\\displaystyle \\int_{0}^{\\frac{\\pi}{4}}(\\cos x)\\log(\\cos x)\\,dx$":
    // 上級24，2022東大
    "<p>　$\\displaystyle \\int_{0}^{\\frac{\\pi}{4}}(\\cos x)\\log(\\cos x)\\,dx$</p><p>$\\displaystyle =\\Bigl[(\\sin x)\\log (\\cos x)\\Bigr]_{0}^{\\frac{\\pi}{4}}-\\int_{0}^{\\frac{\\pi}{4}}\\sin x \\cdot \\dfrac{(\\cos x)'}{\\cos x}\\,dx$</p><p>$\\displaystyle =\\dfrac{1}{\\sqrt{2}}\\log\\dfrac{1}{\\sqrt{2}}+\\int_{0}^{\\frac{\\pi}{4}}\\dfrac{\\sin^{2}x}{\\cos x}\\,dx$</p><p>$\\displaystyle =\\dfrac{1}{\\sqrt{2}}\\log\\dfrac{1}{\\sqrt{2}}+\\int_{0}^{\\frac{\\pi}{4}}\\dfrac{\\sin^{2}x}{1-\\sin^{2} x}\\cdot \\cos x\\,dx$</p><p>$\\displaystyle =\\dfrac{1}{\\sqrt{2}}\\log\\dfrac{1}{\\sqrt{2}}+\\int_{0}^{\\frac{1}{\\sqrt{2}}}\\dfrac{t^{2}}{1-t^{2}}\\,dt$　$(t=\\sin x)$</p><p>$\\displaystyle =\\dfrac{1}{\\sqrt{2}}\\log\\dfrac{1}{\\sqrt{2}}+\\int_{0}^{\\frac{1}{\\sqrt{2}}}\\left(-1+\\dfrac{1}{1-t^{2}}\\right)\\,dt$</p><p>$\\displaystyle =\\dfrac{1}{\\sqrt{2}}\\log\\dfrac{1}{\\sqrt{2}}+\\int_{0}^{\\frac{1}{\\sqrt{2}}}\\left\\{-1+\\dfrac{1}{2(1+t)}+\\dfrac{1}{2(1-t)}\\right\\}\\,dt$</p><p>$\\displaystyle =\\dfrac{1}{\\sqrt{2}}\\log\\dfrac{1}{\\sqrt{2}}+\\left[-t+\\dfrac{1}{2}\\log|1+t|-\\dfrac{1}{2}\\log|1-t|\\right]_{0}^{\\frac{1}{\\sqrt{2}}}$</p><p>$\\displaystyle =\\dfrac{1}{\\sqrt{2}}\\log\\dfrac{1}{\\sqrt{2}}-\\dfrac{1}{\\sqrt{2}}+\\dfrac{1}{2}\\log\\dfrac{1+\\frac{1}{\\sqrt{2}}}{1-\\frac{1}{\\sqrt{2}}}$</p><p>$\\displaystyle =-\\dfrac{1}{2\\sqrt{2}}\\log2-\\dfrac{1}{\\sqrt{2}}+\\dfrac{1}{2}\\log(\\sqrt{2}+1)^{2}$</p><p>$=\\boldsymbol{\\log(\\sqrt{2}+1)-\\dfrac{\\sqrt{2}}{4}\\log2-\\dfrac{1}{\\sqrt{2}}}$</p>",
    

    
    

        },
        "D": {

            "$\\displaystyle \\int_{}^{} \\ \\dfrac{\\sin^{2}x}{\\sin x+\\cos x+1}\\,dx$":
    // 超級1，主任
    "<p>TBA</p>",
    

    "$\\displaystyle \\int_{}^{} \\ \\sqrt{x^{2}+1} \\ \\sqrt[3]{x+\\sqrt{x^{2}+1}}\\,dx$":
    // 超級2，
    "<p>TBA</p>",
    

    "$\\displaystyle \\int_{}^{} \\ \\dfrac{x^{2}}{(x\\cos x-\\sin x)^{2}}\\,dx$":
    // 超級3，主任
    "<p>TBA</p>",
    

    "$\\displaystyle \\int_{}^{} \\ \\dfrac{e^{\\sin^{4}x}\\cos x(1+2\\cos^{2}x-\\cos^{4}x)}{\\sin^{9}x}\\,dx$":
    // 超級4，主任
    "<p>TBA</p>",
    

    "$\\displaystyle \\int_{}^{} \\ \\dfrac{1}{x^{n}(x^{2}-1)}\\,dx$　$( \\ n \\ は自然数 \\ )$":
    // 超級5，主任
    "<p>TBA</p>",
    

    "$\\displaystyle \\int_{}^{} \\ \\dfrac{e^{2x}-1}{\\sqrt{e^{4x}+4e^{3x}+10e^{2x}+4e^{x}+1}}\\,dx$":
    // 超級6，こおり！！！！！
    "<p>TBA</p>",
    

    "$\\displaystyle \\int_{}^{} \\ \\dfrac{1+x^{2}}{(1-x^{2})\\sqrt{1+x^{4}}}\\,dx$":
    // 超級7，warning，しん
    "<p>TBA</p>",
    
            "$\\displaystyle \\int_{0}^{\\frac{1}{2}}\\dfrac{1}{(x+1)^{3}\\sqrt{1-x^2}}\\,dx$":
    // 超級8
    "<p>TBA</p>",
    

    "$\\displaystyle \\int_{0}^{2\\pi}\\left(\\sum_{k=1}^{n}k\\sin kx\\right)^{2}\\,dx$":
    // 超級9
    "<p>TBA</p>",
    

    "$\\displaystyle \\int_{0}^{1}\\dfrac{x^{2}\\log(x+1)}{(x^{2}+1)^{2}}\\,dx$":
    // 超級10，ジョガマヤ，ちなみにかつて超級10は主任の問題だが3周年で削除
    "<p>TBA</p>",
    

    "$\\displaystyle \\int_{0}^{\\pi}\\dfrac{(3\\pi-2x)x^{2}\\sin x}{\\sqrt{3-2\\sin^{2}x}}\\,dx$":
    // 超級11，ジョガマヤ
    "<p>TBA</p>",
    

    "$\\displaystyle \\int_{\\frac{3}{2}}^{\\frac{7}{4}}\\sqrt{\\dfrac{x-1}{2-x}}\\,dx$":
    // 超級12，主任
    "<p>TBA</p>",
    

    "$\\displaystyle \\int_{0}^{1}\\dfrac{x^{2}-x+1}{\\sqrt{x^{2}+1}}\\,dx$":
    // 超級13，牡蠣
    "<p>TBA</p>",
    

    "$\\displaystyle \\int_{a}^{b}\\cos\\left(x-\\dfrac{ab}{x}\\right)\\,dx$　$(ab\\geqq0)$":
    // 超級14，Kay
    "<p>TBA</p>",
    

    "$\\displaystyle \\int_{-\\frac{\\pi}{2}}^{\\frac{\\pi}{2}}(1+\\sin x)^{n}\\,dx$　$( \\ n \\ は自然数 \\ )$":
    // 超級15，warning
    "<p>TBA</p>",
    

    "$\\displaystyle \\int_{-\\frac{4}{3}}^{0}\\dfrac{(2t+1)^{3}(t-2)^{3}}{(t^{2}+1)(3t-1)^{3}(t+3)^{3}}\\,dt$":
    // 超級16，warning，Au
    "<p>TBA</p>",
    

    "$\\displaystyle \\int_{0}^{\\pi}\\sin\\left(\\dfrac{x}{2}\\right)\\sqrt{\\sin x}\\,dx$":
    // 超級17，warning，Kay
    "<p>TBA</p>",
    

    "$\\displaystyle \\int_{\\frac{\\sqrt{2}}{2}}^{1}\\dfrac{(x^{4}-x^{6})\\sqrt{1-x^{2}}}{32x^{8}-64x^{6}+40x^{4}-8x^{2}+1}\\,dx$":
    // 超級18，warning，トゲ
    "<p>TBA</p>",
    

    "$\\displaystyle \\int_{-\\pi}^{\\pi}\\dfrac{\\sin^{2n} x}{(1+e^{x})\\sqrt{1+\\cos x}}\\,dx$　$( \\ n \\ は自然数 \\ )$":
    // 超級19，warning，kazumath
    "<p>TBA</p>",
    

    "$\\displaystyle \\int_{0}^{1}x^{3n}\\sqrt{x-x^{4}}\\,dx$　$( \\ n \\ は \\ 0 \\ 以上の整数 \\ )$":
    // 超級20，warning，TyLite
    "<p>TBA</p>",
    

    "$\\displaystyle \\int_{0}^{1}\\sqrt{\\dfrac{x^{2}+1+\\sqrt{x^{4}-x^{2}+1}}{x^{4}-x^{2}+1}}\\,dx$":
    // 超級21，warning，NEMO
    "<p>TBA</p>",
        }
    }
}

console.log(gachaItems);