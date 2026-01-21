var isIsomorphic = function(s, t) {
    if (s.length !== t.length) return false;

    const st = new Map(); // s -> t
    const ts = new Map(); // t -> s

    for (let i = 0; i < s.length; i++) {
        const a = s[i];
        const b = t[i];

        if (st.has(a) && st.get(a) !== b) return false;
        if (ts.has(b) && ts.get(b) !== a) return false;

        st.set(a, b);
        ts.set(b, a);
    }

    return true;
};
