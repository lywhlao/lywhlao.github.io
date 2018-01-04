step1list = new Array();
step1list["ΦΑΓΙΑ"] = "ΦΑ";
step1list["ΦΑΓΙΟΥ"] = "ΦΑ";
step1list["ΦΑΓΙΩΝ"] = "ΦΑ";
step1list["ΣΚΑΓΙΑ"] = "ΣΚΑ";
step1list["ΣΚΑΓΙΟΥ"] = "ΣΚΑ";
step1list["ΣΚΑΓΙΩΝ"] = "ΣΚΑ";
step1list["ΟΛΟΓΙΟΥ"] = "ΟΛΟ";
step1list["ΟΛΟΓΙΑ"] = "ΟΛΟ";
step1list["ΟΛΟΓΙΩΝ"] = "ΟΛΟ";
step1list["ΣΟΓΙΟΥ"] = "ΣΟ";
step1list["ΣΟΓΙΑ"] = "ΣΟ";
step1list["ΣΟΓΙΩΝ"] = "ΣΟ";
step1list["ΤΑΤΟΓΙΑ"] = "ΤΑΤΟ";
step1list["ΤΑΤΟΓΙΟΥ"] = "ΤΑΤΟ";
step1list["ΤΑΤΟΓΙΩΝ"] = "ΤΑΤΟ";
step1list["ΚΡΕΑΣ"] = "ΚΡΕ";
step1list["ΚΡΕΑΤΟΣ"] = "ΚΡΕ";
step1list["ΚΡΕΑΤΑ"] = "ΚΡΕ";
step1list["ΚΡΕΑΤΩΝ"] = "ΚΡΕ";
step1list["ΠΕΡΑΣ"] = "ΠΕΡ";
step1list["ΠΕΡΑΤΟΣ"] = "ΠΕΡ";
step1list["ΠΕΡΑΤΑ"] = "ΠΕΡ";
step1list["ΠΕΡΑΤΩΝ"] = "ΠΕΡ";
step1list["ΤΕΡΑΣ"] = "ΤΕΡ";
step1list["ΤΕΡΑΤΟΣ"] = "ΤΕΡ";
step1list["ΤΕΡΑΤΑ"] = "ΤΕΡ";
step1list["ΤΕΡΑΤΩΝ"] = "ΤΕΡ";
step1list["ΦΩΣ"] = "ΦΩ";
step1list["ΦΩΤΟΣ"] = "ΦΩ";
step1list["ΦΩΤΑ"] = "ΦΩ";
step1list["ΦΩΤΩΝ"] = "ΦΩ";
step1list["ΚΑΘΕΣΤΩΣ"] = "ΚΑΘΕΣΤ";
step1list["ΚΑΘΕΣΤΩΤΟΣ"] = "ΚΑΘΕΣΤ";
step1list["ΚΑΘΕΣΤΩΤΑ"] = "ΚΑΘΕΣΤ";
step1list["ΚΑΘΕΣΤΩΤΩΝ"] = "ΚΑΘΕΣΤ";
step1list["ΓΕΓΟΝΟΣ"] = "ΓΕΓΟΝ";
step1list["ΓΕΓΟΝΟΤΟΣ"] = "ΓΕΓΟΝ";
step1list["ΓΕΓΟΝΟΤΑ"] = "ΓΕΓΟΝ";
step1list["ΓΕΓΟΝΟΤΩΝ"] = "ΓΕΓΟΝ";

v = "[ΑΕΗΙΟΥΩ]";
v2 = "[ΑΕΗΙΟΩ]"

function stemWord(w) {
  var stem;
  var suffix;
  var firstch;
  var origword = w;
  test1 = new Boolean(true);

  if(w.length < 4) {
    return w;
  }

  var re;
  var re2;
  var re3;
  var re4;

  re = /(.*)(ΦΑΓΙΑ|ΦΑΓΙΟΥ|ΦΑΓΙΩΝ|ΣΚΑΓΙΑ|ΣΚΑΓΙΟΥ|ΣΚΑΓΙΩΝ|ΟΛΟΓΙΟΥ|ΟΛΟΓΙΑ|ΟΛΟΓΙΩΝ|ΣΟΓΙΟΥ|ΣΟΓΙΑ|ΣΟΓΙΩΝ|ΤΑΤΟΓΙΑ|ΤΑΤΟΓΙΟΥ|ΤΑΤΟΓΙΩΝ|ΚΡΕΑΣ|ΚΡΕΑΤΟΣ|ΚΡΕΑΤΑ|ΚΡΕΑΤΩΝ|ΠΕΡΑΣ|ΠΕΡΑΤΟΣ|ΠΕΡΑΤΑ|ΠΕΡΑΤΩΝ|ΤΕΡΑΣ|ΤΕΡΑΤΟΣ|ΤΕΡΑΤΑ|ΤΕΡΑΤΩΝ|ΦΩΣ|ΦΩΤΟΣ|ΦΩΤΑ|ΦΩΤΩΝ|ΚΑΘΕΣΤΩΣ|ΚΑΘΕΣΤΩΤΟΣ|ΚΑΘΕΣΤΩΤΑ|ΚΑΘΕΣΤΩΤΩΝ|ΓΕΓΟΝΟΣ|ΓΕΓΟΝΟΤΟΣ|ΓΕΓΟΝΟΤΑ|ΓΕΓΟΝΟΤΩΝ)$/;

  if(re.test(w)) {
    var fp = re.exec(w);
    stem = fp[1];
    suffix = fp[2];
    w = stem + step1list[suffix];
    test1 = false;
  }

  re = /^(.+?)(ΑΔΕΣ|ΑΔΩΝ)$/;

  if(re.test(w)) {
    var fp = re.exec(w);
    stem = fp[1];
    w = stem;

    reg1 = /(ΟΚ|ΜΑΜ|ΜΑΝ|ΜΠΑΜΠ|ΠΑΤΕΡ|ΓΙΑΓΙ|ΝΤΑΝΤ|ΚΥΡ|ΘΕΙ|ΠΕΘΕΡ)$/;

    if(!(reg1.test(w))) {
      w = w + "ΑΔ";
    }
  }

  re2 = /^(.+?)(ΕΔΕΣ|ΕΔΩΝ)$/;

  if(re2.test(w)) {
    var fp = re2.exec(w);
    stem = fp[1];
    w = stem;

    exept2 = /(ΟΠ|ΙΠ|ΕΜΠ|ΥΠ|ΓΗΠ|ΔΑΠ|ΚΡΑΣΠ|ΜΙΛ)$/;

    if(exept2.test(w)) {
      w = w + "ΕΔ";
    }
  }

  re3 = /^(.+?)(ΟΥΔΕΣ|ΟΥΔΩΝ)$/;

  if(re3.test(w)) {
    var fp = re3.exec(w);
    stem = fp[1];
    w = stem;

    exept3 = /(ΑΡΚ|ΚΑΛΙΑΚ|ΠΕΤΑΛ|ΛΙΧ|ΠΛΕΞ|ΣΚ|Σ|ΦΛ|ΦΡ|ΒΕΛ|ΛΟΥΛ|ΧΝ|ΣΠ|ΤΡΑΓ|ΦΕ)$/;

    if(exept3.test(w)) {
      w = w + "ΟΥΔ";
    }
  }

  re4 = /^(.+?)(ΕΩΣ|ΕΩΝ)$/;

  if(re4.test(w)) {
    var fp = re4.exec(w);
    stem = fp[1];
    w = stem;
    test1 = false;

    exept4 = /^(Θ|Δ|ΕΛ|ΓΑΛ|Ν|Π|ΙΔ|ΠΑΡ)$/;

    if(exept4.test(w)) {
      w = w + "Ε";
    }
  }

  re = /^(.+?)(ΙΑ|ΙΟΥ|ΙΩΝ)$/;

  if(re.test(w)) {
    var fp = re.exec(w);
    stem = fp[1];
    w = stem;
    re2 = new RegExp(v + "$");
    test1 = false;

    if(re2.test(w)) {
      w = stem + "Ι";
    }
  }

  re = /^(.+?)(ΙΚΑ|ΙΚΟ|ΙΚΟΥ|ΙΚΩΝ)$/;

  if(re.test(w)) {
    var fp = re.exec(w);
    stem = fp[1];
    w = stem;
    test1 = false;

    re2 = new RegExp(v + "$");
    exept5 = /^(ΑΛ|ΑΔ|ΕΝΔ|ΑΜΑΝ|ΑΜΜΟΧΑΛ|ΗΘ|ΑΝΗΘ|ΑΝΤΙΔ|ΦΥΣ|ΒΡΩΜ|ΓΕΡ|ΕΞΩΔ|ΚΑΛΠ|ΚΑΛΛΙΝ|ΚΑΤΑΔ|ΜΟΥΛ|ΜΠΑΝ|ΜΠΑΓΙΑΤ|ΜΠΟΛ|ΜΠΟΣ|ΝΙΤ|ΞΙΚ|ΣΥΝΟΜΗΛ|ΠΕΤΣ|ΠΙΤΣ|ΠΙΚΑΝΤ|ΠΛΙΑΤΣ|ΠΟΣΤΕΛΝ|ΠΡΩΤΟΔ|ΣΕΡΤ|ΣΥΝΑΔ|ΤΣΑΜ|ΥΠΟΔ|ΦΙΛΟΝ|ΦΥΛΟΔ|ΧΑΣ)$/;

    if((exept5.test(w)) || (re2.test(w))) {
      w = w + "ΙΚ";
    }
  }

  re = /^(.+?)(ΑΜΕ)$/;
  re2 = /^(.+?)(ΑΓΑΜΕ|ΗΣΑΜΕ|ΟΥΣΑΜΕ|ΗΚΑΜΕ|ΗΘΗΚΑΜΕ)$/;
  if(w == "ΑΓΑΜΕ") {
    w = "ΑΓΑΜ";
  }

  if(re2.test(w)) {
    var fp = re2.exec(w);
    stem = fp[1];
    w = stem;
    test1 = false;
  }

  if(re.test(w)) {
    var fp = re.exec(w);
    stem = fp[1];
    w = stem;
    test1 = false;

    exept6 = /^(ΑΝΑΠ|ΑΠΟΘ|ΑΠΟΚ|ΑΠΟΣΤ|ΒΟΥΒ|ΞΕΘ|ΟΥΛ|ΠΕΘ|ΠΙΚΡ|ΠΟΤ|ΣΙΧ|Χ)$/;

    if(exept6.test(w)) {
      w = w + "ΑΜ";
    }
  }

  re2 = /^(.+?)(ΑΝΕ)$/;
  re3 = /^(.+?)(ΑΓΑΝΕ|ΗΣΑΝΕ|ΟΥΣΑΝΕ|ΙΟΝΤΑΝΕ|ΙΟΤΑΝΕ|ΙΟΥΝΤΑΝΕ|ΟΝΤΑΝΕ|ΟΤΑΝΕ|ΟΥΝΤΑΝΕ|ΗΚΑΝΕ|ΗΘΗΚΑΝΕ)$/;

  if(re3.test(w)) {
    var fp = re3.exec(w);
    stem = fp[1];
    w = stem;
    test1 = false;

    re3 = /^(ΤΡ|ΤΣ)$/;

    if(re3.test(w)) {
      w = w + "ΑΓΑΝ";
    }
  }

  if(re2.test(w)) {
    var fp = re2.exec(w);
    stem = fp[1];
    w = stem;
    test1 = false;

    re2 = new RegExp(v2 + "$");
    exept7 = /^(ΒΕΤΕΡ|ΒΟΥΛΚ|ΒΡΑΧΜ|Γ|ΔΡΑΔΟΥΜ|Θ|ΚΑΛΠΟΥΖ|ΚΑΣΤΕΛ|ΚΟΡΜΟΡ|ΛΑΟΠΛ|ΜΩΑΜΕΘ|Μ|ΜΟΥΣΟΥΛΜ|Ν|ΟΥΛ|Π|ΠΕΛΕΚ|ΠΛ|ΠΟΛΙΣ|ΠΟΡΤΟΛ|ΣΑΡΑΚΑΤΣ|ΣΟΥΛΤ|ΤΣΑΡΛΑΤ|ΟΡΦ|ΤΣΙΓΓ|ΤΣΟΠ|ΦΩΤΟΣΤΕΦ|Χ|ΨΥΧΟΠΛ|ΑΓ|ΟΡΦ|ΓΑΛ|ΓΕΡ|ΔΕΚ|ΔΙΠΛ|ΑΜΕΡΙΚΑΝ|ΟΥΡ|ΠΙΘ|ΠΟΥΡΙΤ|Σ|ΖΩΝΤ|ΙΚ|ΚΑΣΤ|ΚΟΠ|ΛΙΧ|ΛΟΥΘΗΡ|ΜΑΙΝΤ|ΜΕΛ|ΣΙΓ|ΣΠ|ΣΤΕΓ|ΤΡΑΓ|ΤΣΑΓ|Φ|ΕΡ|ΑΔΑΠ|ΑΘΙΓΓ|ΑΜΗΧ|ΑΝΙΚ|ΑΝΟΡΓ|ΑΠΗΓ|ΑΠΙΘ|ΑΤΣΙΓΓ|ΒΑΣ|ΒΑΣΚ|ΒΑΘΥΓΑΛ|ΒΙΟΜΗΧ|ΒΡΑΧΥΚ|ΔΙΑΤ|ΔΙΑΦ|ΕΝΟΡΓ|ΘΥΣ|ΚΑΠΝΟΒΙΟΜΗΧ|ΚΑΤΑΓΑΛ|ΚΛΙΒ|ΚΟΙΛΑΡΦ|ΛΙΒ|ΜΕΓΛΟΒΙΟΜΗΧ|ΜΙΚΡΟΒΙΟΜΗΧ|ΝΤΑΒ|ΞΗΡΟΚΛΙΒ|ΟΛΙΓΟΔΑΜ|ΟΛΟΓΑΛ|ΠΕΝΤΑΡΦ|ΠΕΡΗΦ|ΠΕΡΙΤΡ|ΠΛΑΤ|ΠΟΛΥΔΑΠ|ΠΟΛΥΜΗΧ|ΣΤΕΦ|ΤΑΒ|ΤΕΤ|ΥΠΕΡΗΦ|ΥΠΟΚΟΠ|ΧΑΜΗΛΟΔΑΠ|ΨΗΛΟΤΑΒ)$/;

    if((re2.test(w)) || (exept7.test(w))) {
      w = w + "ΑΝ";
    }
  }

  re3 = /^(.+?)(ΕΤΕ)$/;
  re4 = /^(.+?)(ΗΣΕΤΕ)$/;

  if(re4.test(w)) {
    var fp = re4.exec(w);
    stem = fp[1];
    w = stem;
    test1 = false;
  }

  if(re3.test(w)) {
    var fp = re3.exec(w);
    stem = fp[1];
    w = stem;
    test1 = false;

    re3 = new RegExp(v2 + "$");
    exept8 = /(ΟΔ|ΑΙΡ|ΦΟΡ|ΤΑΘ|ΔΙΑΘ|ΣΧ|ΕΝΔ|ΕΥΡ|ΤΙΘ|ΥΠΕΡΘ|ΡΑΘ|ΕΝΘ|ΡΟΘ|ΣΘ|ΠΥΡ|ΑΙΝ|ΣΥΝΔ|ΣΥΝ|ΣΥΝΘ|ΧΩΡ|ΠΟΝ|ΒΡ|ΚΑΘ|ΕΥΘ|ΕΚΘ|ΝΕΤ|ΡΟΝ|ΑΡΚ|ΒΑΡ|ΒΟΛ|ΩΦΕΛ)$/;
    exept9 = /^(ΑΒΑΡ|ΒΕΝ|ΕΝΑΡ|ΑΒΡ|ΑΔ|ΑΘ|ΑΝ|ΑΠΛ|ΒΑΡΟΝ|ΝΤΡ|ΣΚ|ΚΟΠ|ΜΠΟΡ|ΝΙΦ|ΠΑΓ|ΠΑΡΑΚΑΛ|ΣΕΡΠ|ΣΚΕΛ|ΣΥΡΦ|ΤΟΚ|Υ|Δ|ΕΜ|ΘΑΡΡ|Θ)$/;

    if((re3.test(w)) || (exept8.test(w)) || (exept9.test(w))) {
      w = w + "ΕΤ";
    }
  }

  re = /^(.+?)(ΟΝΤΑΣ|ΩΝΤΑΣ)$/;

  if(re.test(w)) {
    var fp = re.exec(w);
    stem = fp[1];
    w = stem;
    test1 = false;

    exept10 = /^(ΑΡΧ)$/;
    exept11 = /(ΚΡΕ)$/;
    if(exept10.test(w)) {
      w = w + "ΟΝΤ";
    }
    if(exept11.test(w)) {
      w = w + "ΩΝΤ";
    }
  }

  re = /^(.+?)(ΟΜΑΣΤΕ|ΙΟΜΑΣΤΕ)$/;

  if(re.test(w)) {
    var fp = re.exec(w);
    stem = fp[1];
    w = stem;
    test1 = false;

    exept11 = /^(ΟΝ)$/;

    if(exept11.test(w)) {
      w = w + "ΟΜΑΣΤ";
    }
  }

  re = /^(.+?)(ΕΣΤΕ)$/;
  re2 = /^(.+?)(ΙΕΣΤΕ)$/;

  if(re2.test(w)) {
    var fp = re2.exec(w);
    stem = fp[1];
    w = stem;
    test1 = false;

    re2 = /^(Π|ΑΠ|ΣΥΜΠ|ΑΣΥΜΠ|ΑΚΑΤΑΠ|ΑΜΕΤΑΜΦ)$/;

    if(re2.test(w)) {
      w = w + "ΙΕΣΤ";
    }
  }

  if(re.test(w)) {
    var fp = re.exec(w);
    stem = fp[1];
    w = stem;
    test1 = false;

    exept12 = /^(ΑΛ|ΑΡ|ΕΚΤΕΛ|Ζ|Μ|Ξ|ΠΑΡΑΚΑΛ|ΑΡ|ΠΡΟ|ΝΙΣ)$/;

    if(exept12.test(w)) {
      w = w + "ΕΣΤ";
    }
  }

  re = /^(.+?)(ΗΚΑ|ΗΚΕΣ|ΗΚΕ)$/;
  re2 = /^(.+?)(ΗΘΗΚΑ|ΗΘΗΚΕΣ|ΗΘΗΚΕ)$/;

  if(re2.test(w)) {
    var fp = re2.exec(w);
    stem = fp[1];
    w = stem;
    test1 = false;
  }

  if(re.test(w)) {
    var fp = re.exec(w);
    stem = fp[1];
    w = stem;
    test1 = false;

    exept13 = /(ΣΚΩΛ|ΣΚΟΥΛ|ΝΑΡΘ|ΣΦ|ΟΘ|ΠΙΘ)$/;
    exept14 = /^(ΔΙΑΘ|Θ|ΠΑΡΑΚΑΤΑΘ|ΠΡΟΣΘ|ΣΥΝΘ|)$/;

    if((exept13.test(w)) || (exept14.test(w))) {
      w = w + "ΗΚ";
    }
  }

  re = /^(.+?)(ΟΥΣΑ|ΟΥΣΕΣ|ΟΥΣΕ)$/;

  if(re.test(w)) {
    var fp = re.exec(w);
    stem = fp[1];
    w = stem;
    test1 = false;

    exept15 = /^(ΦΑΡΜΑΚ|ΧΑΔ|ΑΓΚ|ΑΝΑΡΡ|ΒΡΟΜ|ΕΚΛΙΠ|ΛΑΜΠΙΔ|ΛΕΧ|Μ|ΠΑΤ|Ρ|Λ|ΜΕΔ|ΜΕΣΑΖ|ΥΠΟΤΕΙΝ|ΑΜ|ΑΙΘ|ΑΝΗΚ|ΔΕΣΠΟΖ|ΕΝΔΙΑΦΕΡ|ΔΕ|ΔΕΥΤΕΡΕΥ|ΚΑΘΑΡΕΥ|ΠΛΕ|ΤΣΑ)$/;
    exept16 = /(ΠΟΔΑΡ|ΒΛΕΠ|ΠΑΝΤΑΧ|ΦΡΥΔ|ΜΑΝΤΙΛ|ΜΑΛΛ|ΚΥΜΑΤ|ΛΑΧ|ΛΗΓ|ΦΑΓ|ΟΜ|ΠΡΩΤ)$/;

    if((exept15.test(w)) || (exept16.test(w))) {
      w = w + "ΟΥΣ";
    }
  }

  re = /^(.+?)(ΑΓΑ|ΑΓΕΣ|ΑΓΕ)$/;

  if(re.test(w)) {
    var fp = re.exec(w);
    stem = fp[1];
    w = stem;
    test1 = false;

    exept17 = /^(ΨΟΦ|ΝΑΥΛΟΧ)$/;
    exept20 = /(ΚΟΛΛ)$/;
    exept18 = /^(ΑΒΑΣΤ|ΠΟΛΥΦ|ΑΔΗΦ|ΠΑΜΦ|Ρ|ΑΣΠ|ΑΦ|ΑΜΑΛ|ΑΜΑΛΛΙ|ΑΝΥΣΤ|ΑΠΕΡ|ΑΣΠΑΡ|ΑΧΑΡ|ΔΕΡΒΕΝ|ΔΡΟΣΟΠ|ΞΕΦ|ΝΕΟΠ|ΝΟΜΟΤ|ΟΛΟΠ|ΟΜΟΤ|ΠΡΟΣΤ|ΠΡΟΣΩΠΟΠ|ΣΥΜΠ|ΣΥΝΤ|Τ|ΥΠΟΤ|ΧΑΡ|ΑΕΙΠ|ΑΙΜΟΣΤ|ΑΝΥΠ|ΑΠΟΤ|ΑΡΤΙΠ|ΔΙΑΤ|ΕΝ|ΕΠΙΤ|ΚΡΟΚΑΛΟΠ|ΣΙΔΗΡΟΠ|Λ|ΝΑΥ|ΟΥΛΑΜ|ΟΥΡ|Π|ΤΡ|Μ)$/;
    exept19 = /(ΟΦ|ΠΕΛ|ΧΟΡΤ|ΛΛ|ΣΦ|ΡΠ|ΦΡ|ΠΡ|ΛΟΧ|ΣΜΗΝ)$/;

    if(((exept18.test(w)) || (exept19.test(w))) && !((exept17.test(w)) || (exept20.test(w)))) {
      w = w + "ΑΓ";
    }
  }

  re = /^(.+?)(ΗΣΕ|ΗΣΟΥ|ΗΣΑ)$/;

  if(re.test(w)) {
    var fp = re.exec(w);
    stem = fp[1];
    w = stem;
    test1 = false;

    exept21 = /^(Ν|ΧΕΡΣΟΝ|ΔΩΔΕΚΑΝ|ΕΡΗΜΟΝ|ΜΕΓΑΛΟΝ|ΕΠΤΑΝ)$/;

    if(exept21.test(w)) {
      w = w + "ΗΣ";
    }
  }

  re = /^(.+?)(ΗΣΤΕ)$/;

  if(re.test(w)) {
    var fp = re.exec(w);
    stem = fp[1];
    w = stem;
    test1 = false;

    exept22 = /^(ΑΣΒ|ΣΒ|ΑΧΡ|ΧΡ|ΑΠΛ|ΑΕΙΜΝ|ΔΥΣΧΡ|ΕΥΧΡ|ΚΟΙΝΟΧΡ|ΠΑΛΙΜΨ)$/;

    if(exept22.test(w)) {
      w = w + "ΗΣΤ";
    }
  }

  re = /^(.+?)(ΟΥΝΕ|ΗΣΟΥΝΕ|ΗΘΟΥΝΕ)$/;

  if(re.test(w)) {
    var fp = re.exec(w);
    stem = fp[1];
    w = stem;
    test1 = false;

    exept23 = /^(Ν|Ρ|ΣΠΙ|ΣΤΡΑΒΟΜΟΥΤΣ|ΚΑΚΟΜΟΥΤΣ|ΕΞΩΝ)$/;

    if(exept23.test(w)) {
      w = w + "ΟΥΝ";
    }
  }

  re = /^(.+?)(ΟΥΜΕ|ΗΣΟΥΜΕ|ΗΘΟΥΜΕ)$/;

  if(re.test(w)) {
    var fp = re.exec(w);
    stem = fp[1];
    w = stem;
    test1 = false;

    exept24 = /^(ΠΑΡΑΣΟΥΣ|Φ|Χ|ΩΡΙΟΠΛ|ΑΖ|ΑΛΛΟΣΟΥΣ|ΑΣΟΥΣ)$/;

    if(exept24.test(w)) {
      w = w + "ΟΥΜ";
    }
  }

  re = /^(.+?)(ΜΑΤΑ|ΜΑΤΩΝ|ΜΑΤΟΣ)$/;
  re2 = /^(.+?)(Α|ΑΓΑΤΕ|ΑΓΑΝ|ΑΕΙ|ΑΜΑΙ|ΑΝ|ΑΣ|ΑΣΑΙ|ΑΤΑΙ|ΑΩ|Ε|ΕΙ|ΕΙΣ|ΕΙΤΕ|ΕΣΑΙ|ΕΣ|ΕΤΑΙ|Ι|ΙΕΜΑΙ|ΙΕΜΑΣΤΕ|ΙΕΤΑΙ|ΙΕΣΑΙ|ΙΕΣΑΣΤΕ|ΙΟΜΑΣΤΑΝ|ΙΟΜΟΥΝ|ΙΟΜΟΥΝΑ|ΙΟΝΤΑΝ|ΙΟΝΤΟΥΣΑΝ|ΙΟΣΑΣΤΑΝ|ΙΟΣΑΣΤΕ|ΙΟΣΟΥΝ|ΙΟΣΟΥΝΑ|ΙΟΤΑΝ|ΙΟΥΜΑ|ΙΟΥΜΑΣΤΕ|ΙΟΥΝΤΑΙ|ΙΟΥΝΤΑΝ|Η|ΗΔΕΣ|ΗΔΩΝ|ΗΘΕΙ|ΗΘΕΙΣ|ΗΘΕΙΤΕ|ΗΘΗΚΑΤΕ|ΗΘΗΚΑΝ|ΗΘΟΥΝ|ΗΘΩ|ΗΚΑΤΕ|ΗΚΑΝ|ΗΣ|ΗΣΑΝ|ΗΣΑΤΕ|ΗΣΕΙ|ΗΣΕΣ|ΗΣΟΥΝ|ΗΣΩ|Ο|ΟΙ|ΟΜΑΙ|ΟΜΑΣΤΑΝ|ΟΜΟΥΝ|ΟΜΟΥΝΑ|ΟΝΤΑΙ|ΟΝΤΑΝ|ΟΝΤΟΥΣΑΝ|ΟΣ|ΟΣΑΣΤΑΝ|ΟΣΑΣΤΕ|ΟΣΟΥΝ|ΟΣΟΥΝΑ|ΟΤΑΝ|ΟΥ|ΟΥΜΑΙ|ΟΥΜΑΣΤΕ|ΟΥΝ|ΟΥΝΤΑΙ|ΟΥΝΤΑΝ|ΟΥΣ|ΟΥΣΑΝ|ΟΥΣΑΤΕ|Υ|ΥΣ|Ω|ΩΝ)$/;

  if(re.test(w)) {
    var fp = re.exec(w);
    stem = fp[1];
    w = stem + "ΜΑ";
  }

  if((re2.test(w)) && (test1)) {
    var fp = re2.exec(w);
    stem = fp[1];
    w = stem;

  }

  re = /^(.+?)(ΕΣΤΕΡ|ΕΣΤΑΤ|ΟΤΕΡ|ΟΤΑΤ|ΥΤΕΡ|ΥΤΑΤ|ΩΤΕΡ|ΩΤΑΤ)$/;

  if(re.test(w)) {
    var fp = re.exec(w);
    stem = fp[1];
    w = stem;
  }

  return w;
};

var greekStemmer = function (token) {
  return token.update(function (word) {
    return stemWord(word);
  })
}

var idx = lunr(function () {
  this.field('title')
  this.field('excerpt')
  this.field('categories')
  this.field('tags')
  this.ref('id')

  this.pipeline.remove(lunr.trimmer)
  this.pipeline.add(greekStemmer)
  this.pipeline.remove(lunr.stemmer)

  
  
    
    
      this.add({
          title: "Java ASM 入门实战",
          excerpt: "1.什么是asm asm就是一个可以直接修改或产生字节码的工具，比方说需要统计类中所有方法的耗时时间，一种是在代码中运用切面（例如spring中的aspect），另外一种是直接在字节码中增加相应的方法。 2.asm实战 ####2.1 maven依赖 &lt;dependency&gt; &lt;groupId&gt;org.ow2.asm&lt;/groupId&gt; &lt;artifactId&gt;asm&lt;/artifactId&gt; &lt;version&gt;6.0&lt;/version&gt; &lt;/dependency&gt; &lt;!-- https://mvnrepository.com/artifact/org.ow2.asm/asm-util --&gt; &lt;dependency&gt; &lt;groupId&gt;org.ow2.asm&lt;/groupId&gt; &lt;artifactId&gt;asm-util&lt;/artifactId&gt; &lt;version&gt;6.0&lt;/version&gt; &lt;/dependency&gt; &lt;!-- https://mvnrepository.com/artifact/org.ow2.asm/asm-commons...",
          categories: ["tec"],
          tags: [],
          id: 0
      })
      
    
      this.add({
          title: "Guava本地缓存托底缓存以及异步更新缓存",
          excerpt: "####1.简介 1.1 guava本地缓存是开发中比较常用的组件，一般使用 LoadingCache，将需要的值加载在内存中，如下所示 LoadingCache&lt;String,T&gt; cacheLoader= CacheBuilder .newBuilder() .expireAfterWrite(5, TimeUnit.MINUTES) .build(new CacheLoader&lt;String, T&gt;() { @Override public T load(String key) throws...",
          categories: ["tec"],
          tags: [],
          id: 1
      })
      
    
      this.add({
          title: "linux按行读取文件",
          excerpt: "#!/bin/sh #文件的路径 File=$1 if [ -f $File ]; then cat $File | while read line do echo $line #打印每一行的内容 done...",
          categories: ["tec"],
          tags: [],
          id: 2
      })
      
    
      this.add({
          title: "JackSon反序列化报错,Unrecognized field, not marked as ignorable",
          excerpt: "####1.报错的情景 字段 JavaBean redis 是否报错 包含字段 a,b a 否 包含字段 a a,b 是 ####2.解决办法 2.1对于JaveBean的类定义上加上注解 @JsonIgnoreProperties(ignoreUnknown = true) public Class...",
          categories: ["tec"],
          tags: [],
          id: 3
      })
      
    
      this.add({
          title: "spring 动态切换数据源",
          excerpt: "1.背景 对于数据量在1千万，单个mysql数据库就可以支持，但是如果数据量大于这个数的时候，例如1亿，那么查询的性能就会很低。此时需要对数据库做水平切分，常见的做法是按照用户的账号进行hash，然后选择对应的数据库。 水平切分图，数据落入不同的库中 2.实现 2.1示意图 先来看下大致示意图： 图1是比较常见的情况，单个数据库 图2展示了web应用和数据库之间的一个中间层，这个中间层去选择使用哪个数据库。 2.2数据库配置 首先我们需要配置多个数据源，我是用xml进行配置的其他方法大同小异，就是多建立了几个bean。 &lt;bean id=\"parentDataSource\" abstract=\"true\" class=\"org.apache.tomcat.jdbc.pool.DataSource\" destroy-method=\"close\" p:maxWait=\"10000\" p:removeAbandoned=\"true\" p:removeAbandonedTimeout=\"180\" p:connectionProperties=\"clientEncoding=UTF-8\" p:validationQuery=\"SELECT...",
          categories: ["tec"],
          tags: [],
          id: 4
      })
      
    
      this.add({
          title: "自定义CacheManager",
          excerpt: "####1.背景 spring框架提供了多种cacheManager，例如guavaCacheManager，ehcacheCacheManager，RedisCacheManager等，通过这种方式我们可以很方便的集成这些第三方的cache，并且通过@Cacheable,@CachePut等注解使用。 那么如何把这些第三方缓存联合起来，做一个多级缓存。例如一般是使用本地缓存+redis缓存的方式，如何封装一个中间价，对上层应用使用透明，那么可以较大地提升开发效率。如下图所示 图例 ####2.准备工作 1.spring提供了一个AbstractCacheManager，已实现了大部分管理Cache的方法，我们继承这个类ActivityCacheManager，并且实现它的loadCaches方法。同时自定义了一个cache:ActCache，下图说明了这一关系 ####3.实现自定义cache 先来实现ActCacheManager类: package com.netease.mail.activity.cache.atcache; import com.google.common.cache.CacheBuilder; import com.google.common.cache.LoadingCache; import org.slf4j.Logger; import org.slf4j.LoggerFactory; import org.springframework.beans.factory.annotation.Autowired;...",
          categories: ["tec"],
          tags: [],
          id: 5
      })
      
    
  
});

console.log( jQuery.type(idx) );

var store = [
  
    
    
    
      
      {
        "title": "Java ASM 入门实战",
        "url": "http://localhost:4000/tec/2017/01/01/Java-ASM-%E5%85%A5%E9%97%A8%E5%AE%9E%E6%88%98.html",
        "excerpt": "1.什么是asm asm就是一个可以直接修改或产生字节码的工具，比方说需要统计类中所有方法的耗时时间，一种是在代码中运用切面（例如spring中的aspect），另外一种是直接在字节码中增加相应的方法。 2.asm实战 ####2.1 maven依赖 &lt;dependency&gt; &lt;groupId&gt;org.ow2.asm&lt;/groupId&gt; &lt;artifactId&gt;asm&lt;/artifactId&gt; &lt;version&gt;6.0&lt;/version&gt; &lt;/dependency&gt; &lt;!-- https://mvnrepository.com/artifact/org.ow2.asm/asm-util --&gt; &lt;dependency&gt; &lt;groupId&gt;org.ow2.asm&lt;/groupId&gt; &lt;artifactId&gt;asm-util&lt;/artifactId&gt; &lt;version&gt;6.0&lt;/version&gt; &lt;/dependency&gt; &lt;!-- https://mvnrepository.com/artifact/org.ow2.asm/asm-commons...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Guava本地缓存托底缓存以及异步更新缓存",
        "url": "http://localhost:4000/tec/2017/01/01/guava%E6%89%98%E5%BA%95%E7%BC%93%E5%AD%98%E4%BB%A5%E5%8F%8A%E5%BC%82%E6%AD%A5%E6%9B%B4%E6%96%B0%E7%BC%93%E5%AD%98.html",
        "excerpt": "####1.简介 1.1 guava本地缓存是开发中比较常用的组件，一般使用 LoadingCache，将需要的值加载在内存中，如下所示 LoadingCache&lt;String,T&gt; cacheLoader= CacheBuilder .newBuilder() .expireAfterWrite(5, TimeUnit.MINUTES) .build(new CacheLoader&lt;String, T&gt;() { @Override public T load(String key) throws...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "linux按行读取文件",
        "url": "http://localhost:4000/tec/2017/01/01/linux%E6%8C%89%E8%A1%8C%E8%AF%BB%E5%8F%96%E6%96%87%E4%BB%B6.html",
        "excerpt": "#!/bin/sh #文件的路径 File=$1 if [ -f $File ]; then cat $File | while read line do echo $line #打印每一行的内容 done...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "JackSon反序列化报错,Unrecognized field, not marked as ignorable",
        "url": "http://localhost:4000/tec/2017/01/01/redis%E5%BA%8F%E5%88%97%E5%8C%96%E9%97%AE%E9%A2%98.html",
        "excerpt": "####1.报错的情景 字段 JavaBean redis 是否报错 包含字段 a,b a 否 包含字段 a a,b 是 ####2.解决办法 2.1对于JaveBean的类定义上加上注解 @JsonIgnoreProperties(ignoreUnknown = true) public Class...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "spring 动态切换数据源",
        "url": "http://localhost:4000/tec/2017/01/01/spring%E5%8A%A8%E6%80%81%E5%88%87%E6%8D%A2%E6%95%B0%E6%8D%AE%E6%BA%90.html",
        "excerpt": "1.背景 对于数据量在1千万，单个mysql数据库就可以支持，但是如果数据量大于这个数的时候，例如1亿，那么查询的性能就会很低。此时需要对数据库做水平切分，常见的做法是按照用户的账号进行hash，然后选择对应的数据库。 水平切分图，数据落入不同的库中 2.实现 2.1示意图 先来看下大致示意图： 图1是比较常见的情况，单个数据库 图2展示了web应用和数据库之间的一个中间层，这个中间层去选择使用哪个数据库。 2.2数据库配置 首先我们需要配置多个数据源，我是用xml进行配置的其他方法大同小异，就是多建立了几个bean。 &lt;bean id=\"parentDataSource\" abstract=\"true\" class=\"org.apache.tomcat.jdbc.pool.DataSource\" destroy-method=\"close\" p:maxWait=\"10000\" p:removeAbandoned=\"true\" p:removeAbandonedTimeout=\"180\" p:connectionProperties=\"clientEncoding=UTF-8\" p:validationQuery=\"SELECT...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "自定义CacheManager",
        "url": "http://localhost:4000/tec/2017/01/01/%E8%87%AA%E5%AE%9A%E4%B9%89cahceManager.html",
        "excerpt": "####1.背景 spring框架提供了多种cacheManager，例如guavaCacheManager，ehcacheCacheManager，RedisCacheManager等，通过这种方式我们可以很方便的集成这些第三方的cache，并且通过@Cacheable,@CachePut等注解使用。 那么如何把这些第三方缓存联合起来，做一个多级缓存。例如一般是使用本地缓存+redis缓存的方式，如何封装一个中间价，对上层应用使用透明，那么可以较大地提升开发效率。如下图所示 图例 ####2.准备工作 1.spring提供了一个AbstractCacheManager，已实现了大部分管理Cache的方法，我们继承这个类ActivityCacheManager，并且实现它的loadCaches方法。同时自定义了一个cache:ActCache，下图说明了这一关系 ####3.实现自定义cache 先来实现ActCacheManager类: package com.netease.mail.activity.cache.atcache; import com.google.common.cache.CacheBuilder; import com.google.common.cache.LoadingCache; import org.slf4j.Logger; import org.slf4j.LoggerFactory; import org.springframework.beans.factory.annotation.Autowired;...",
        "teaser":
          
            null
          
      }
    
  ]

$(document).ready(function() {
  $('input#search').on('keyup', function () {
    var resultdiv = $('#results');
    var query = $(this).val().toLowerCase();
    var result =
      idx.query(function (q) {
        query.split(lunr.tokenizer.separator).forEach(function (term) {
          q.term(term, { boost: 100 })
          if(query.lastIndexOf(" ") != query.length-1){
            q.term(term, { usePipeline: false, wildcard: lunr.Query.wildcard.TRAILING, boost: 10 })
          }
          if (term != ""){
            q.term(term, { usePipeline: false, editDistance: 1, boost: 1 })
          }
        })
      });
    resultdiv.empty();
    resultdiv.prepend('<p class="results__found">'+result.length+' Result(s) found</p>');
    for (var item in result) {
      var ref = result[item].ref;
      if(store[ref].teaser){
        var searchitem =
          '<div class="list__item">'+
            '<article class="archive__item" itemscope itemtype="http://schema.org/CreativeWork">'+
              '<h2 class="archive__item-title" itemprop="headline">'+
                '<a href="'+store[ref].url+'" rel="permalink">'+store[ref].title+'</a>'+
              '</h2>'+
              '<div class="archive__item-teaser">'+
                '<img src="'+store[ref].teaser+'" alt="">'+
              '</div>'+
              '<p class="archive__item-excerpt" itemprop="description">'+store[ref].excerpt+'</p>'+
            '</article>'+
          '</div>';
      }
      else{
    	  var searchitem =
          '<div class="list__item">'+
            '<article class="archive__item" itemscope itemtype="http://schema.org/CreativeWork">'+
              '<h2 class="archive__item-title" itemprop="headline">'+
                '<a href="'+store[ref].url+'" rel="permalink">'+store[ref].title+'</a>'+
              '</h2>'+
              '<p class="archive__item-excerpt" itemprop="description">'+store[ref].excerpt+'</p>'+
            '</article>'+
          '</div>';
      }
      resultdiv.append(searchitem);
    }
  });
});
