/**
 * GS POINTER TWO-COLUMN PDF GENERATOR
 * Production-Ready Single Page Application Logic
 */

// ==========================================
// PRESET SAMPLE DATASETS (Authentic GS Pointer)
// ==========================================
const SAMPLE_DATASETS = {
  history: `### पाषाण काल
Q1. रॉबर्ट ब्रुस फुट थे एक === भूगर्भ वैज्ञानिक एवं पुरातत्वविद
Q2. भारतीय प्रागैतिहास का पिता कहा जाता है === रॉबर्ट ब्रुस फुट को
Q3. कोपेनहेगन संग्रहालय की सामग्री से पाषाण, कांस्य और लौह युग का त्रियुगीन विभाजन किया था === थॉमसन ने
Q4. उत्खनित प्रमाणों के अनुसार पशुपालन का प्रारंभ हुआ था === मध्य पाषाण काल में
Q5. मध्यपाषाणिक संदर्भ में वन्य धान का प्रमाण मिला है === चौपानी माण्डो से
Q6. खाद्यान्नों की कृषि सर्वप्रथम प्रारम्भ हुई थी === नवपाषाण काल में
Q7. भारत में मानव का सर्वप्रथम साक्ष्य मिलता है === नर्मदा घाटी में
Q8. मानव द्वारा सर्वप्रथम प्रयुक्त अनाज था === जौ
Q9. भारतीय उपमहाद्वीप में कृषि के प्राचीनतम साक्ष्य प्राप्त हुए हैं === लहुरादेव से
Q10. पुरापाषाण, मध्यपाषाण और नवपाषाण काल के अवशेष प्राप्त हुए हैं === बेलन घाटी से
Q11. मानव कंकाल के साथ कुत्ते का कंकाल शवाधान से प्राप्त हुआ है === बुर्जहोम से
Q12. गर्त आवास के साक्ष्य प्राप्त हुए हैं === बुर्जहोम से
Q13. विंध्य क्षेत्र का वह शिलाश्रय जहां से सर्वाधिक मानव कंकाल मिले हैं === लेखहिया
Q14. भारतीय पुरातत्व सर्वेक्षण के प्रथम महानिदेशक थे === जॉन मार्शल
Q15. राष्ट्रीय मानव संग्रहालय स्थित है === भोपाल में

### सैंधव सभ्यता एवं संस्कृति
Q16. सैंधव सभ्यता किस काल से संबंधित है === आद्य-ऐतिहासिक युग से
Q17. सिंधु घाटी की सभ्यता गैर-आर्य थी, क्योंकि === वह एक नगरीय सभ्यता थी
Q18. हड़प्पा संस्कृति की जानकारी का प्रमुख स्रोत है === पुरातात्विक खुदाई
Q19. भारत में चांदी की उपलब्धता के प्राचीनतम साक्ष्य मिलते हैं === हड़प्पा संस्कृति में
Q20. मूर्ति पूजा का आरम्भ माना जाता है === पूर्व आर्य काल से
Q21. हड़प्पा संस्कृति में नहीं पाई गई थी === गाय की मुहरें
Q22. जूते हुए खेत की खोज की गई थी === कालीबंगा में
Q23. विशाल स्नानागार किस पुरातत्व स्थल से पाया गया === मोहनजोदड़ो से
Q24. सिंधु सभ्यता का पतन नगर (बंदरगाह) था === लोथल
Q25. हाथी दांत का पैमाना हड़प्पीय संदर्भ में मिला है === लोथल से
Q26. धौलावीरा किस राज्य में स्थित है === गुजरात में
Q27. हड़प्पन नगर जिसका प्रतिनिधित्व तीन भागों में विभाजित नगर करता है === धौलावीरा
Q28. उन्नत जल प्रबंधन व्यवस्था का साक्ष्य प्राप्त हुआ है === धौलावीरा से
Q29. वस्त्रों के लिए कपास की खेती का आरम्भ सबसे पहले किया गया === भारत में
Q30. सर्वप्रथम मानव ने किस धातु का उपयोग किया था === तांबा
Q31. हड़प्पा कालीन स्थलों में अभी तक किस धातु की प्राप्ति नहीं हुई है === लोहा
Q32. प्रसिद्ध पशुपति शिव की मुहर प्राप्त हुई है === मोहनजोदड़ो से
Q33. चन्हूदड़ों के उत्खनन का निर्देशन किया था === जे. एच. मैके ने
Q34. सिंधु घाटी के लोग विश्वास करते थे === मातृशक्ति में
Q35. हड़प्पा किस नदी के किनारे स्थित है === रावी नदी
Q36. मोहनजोदड़ो किस नदी के तट पर स्थित है === सिंधु नदी

### वैदिक काल एवं दर्शन
Q37. ऋग्वेद में कुल मंडलों की संख्या है === 10 मंडल
Q38. गायत्री मंत्र का उल्लेख किस वेद में मिलता है === ऋग्वेद (तृतीय मंडल)
Q39. सत्यमेव जयते शब्द किस उपनिषद से लिया गया है === मुण्डकोपनिषद से
Q40. प्राचीन भारत में 'निष्क' के नाम से जाना जाता था === स्वर्ण आभूषण
Q41. तमसो मा ज्योतिर्गमय कथन मूलतः उद्धृत है === बृहदारण्यक उपनिषद से
Q42. न्याय दर्शन को प्रचारित किया था === महर्षि गौतम ने
Q43. सांख्य दर्शन के प्रतिपादक थे === महर्षि कपिल
Q44. अष्टाध्यायी के रचनाकार कौन थे === पाणिनी

### बौद्ध एवं जैन धर्म
Q45. बुद्ध का जन्म कहां हुआ था === लुम्बिनी में
Q46. भगवान बुद्ध को ज्ञान की प्राप्ति हुई थी === बोधगया में (पीपल वृक्ष के नीचे)
Q47. बुद्ध ने अपना प्रथम उपदेश (धर्मचक्रप्रवर्तन) दिया था === सारनाथ में
Q48. गौतम बुद्ध का महापरिनिर्वाण हुआ था === कुशीनगर में
Q49. प्रथम बौद्ध संगीति किसके शासनकाल में आयोजित की गई थी === अजातशत्रु (राजगृह)
Q50. जैन धर्म के 24वें तीर्थंकर थे === भगवान महावीर स्वामी
Q51. जैन धर्म के प्रथम तीर्थंकर कौन थे === ऋषभदेव (आदिनाथ)
Q52. त्रिरत्न सिद्धांत (सम्यक दर्शन, सम्यक ज्ञान, सम्यक आचरण) संबंधित है === जैन धर्म से
Q53. आजीवक संप्रदाय के संस्थापक कौन थे === मक्खलि गोशाल
Q54. पाटलिपुत्र के संस्थापक कौन थे === उदायिन
Q55. मगध की प्रथम राजधानी कौन सी थी === गिरिव्रज (राजगृह)
Q56. सिकंदर के भारत आक्रमण के समय मगध का शासक था === घनानंद (नंद वंश)

### मौर्य साम्राज्य एवं प्राचीन राजवंश
Q57. कौटिल्य (चाणक्य) प्रधानमंत्री थे === चंद्रगुप्त मौर्य के
Q58. 'इंडिका' पुस्तक के लेखक कौन थे === मेगस्थनीज
Q59. अशोक के शिलालेखों को सर्वप्रथम किसने पढ़ा था === जेम्स प्रिंसेप (1837 ई.)
Q60. कलिंग युद्ध का विवरण अशोक के किस शिलालेख से मिलता है === 13वें शिलालेख से
Q61. सांची का स्तूप किसने बनवाया था === सम्राट अशोक ने
Q62. भारत का नेपोलियन किसे कहा जाता है === समुद्रगुप्त को
Q63. गुप्त काल में सोने के सिक्के को क्या कहा जाता था === दीनार
Q64. नालंदा विश्वविद्यालय के संस्थापक कौन थे === कुमारगुप्त प्रथम
Q65. हर्षचरित के लेखक कौन थे === बाणभट्ट
Q66. चीनी यात्री ह्वेनसांग किसके शासनकाल में भारत आया था === हर्षवर्धन
Q67. कोणार्क का सूर्य मंदिर किसने बनवाया था === नरसिंहदेव प्रथम
Q68. एलोरा के प्रसिद्ध कैलाश मंदिर का निर्माण कराया था === कृष्ण प्रथम (राष्ट्रकूट)
Q69. खजुराहो के मंदिरों का निर्माण करवाया था === चंदेल राजाओं ने
Q70. दिलवाड़ा का जैन मंदिर कहां स्थित है === माउंट आबू (राजस्थान)`,

  polity: `Q1. संविधान सभा की प्रथम बैठक कब हुई थी === 9 दिसंबर 1946 को
Q2. संविधान सभा के अस्थायी अध्यक्ष कौन थे === डॉ. सच्चिदानंद सिन्हा
Q3. संविधान सभा के स्थायी अध्यक्ष निर्वाचित हुए थे === डॉ. राजेंद्र प्रसाद
Q4. प्रारूप समिति (Drafting Committee) के अध्यक्ष थे === डॉ. बी. आर. अम्बेडकर
Q5. भारतीय संविधान को अंगीकृत एवं अधिनियमित किया गया था === 26 नवंबर 1949 को
Q6. भारतीय संविधान पूर्ण रूप से लागू हुआ === 26 जनवरी 1950 को
Q7. भारतीय संविधान की प्रस्तावना में समाजवादी और पंथनिरपेक्ष शब्द जोड़े गए === 42वें संविधान संशोधन 1976 द्वारा
Q8. भारत में एकल नागरिकता की अवधारणा किस देश से ली गई है === ब्रिटेन से
Q9. भारतीय संविधान में मौलिक अधिकार लिए गए हैं === संयुक्त राज्य अमेरिका से
Q10. नीति निदेशक तत्व किस देश के संविधान से प्रेरित हैं === आयरलैंड से
Q11. भारतीय संविधान में समवर्ती सूची की संकल्पना ली गई है === ऑस्ट्रेलिया से
Q12. आपातकालीन उपबंध भारतीय संविधान में लिए गए हैं === जर्मनी के वेइमर संविधान से
Q13. संविधान में संशोधन की प्रक्रिया किस देश से गृहीत है === दक्षिण अफ्रीका से
Q14. वर्तमान में भारतीय संविधान में कुल अनुसूचियां हैं === 12 अनुसूचियां
Q15. दलबदल विरोधी कानून किस अनुसूची से संबंधित है === 10वीं अनुसूची
Q16. पंचायती राज व्यवस्था किस अनुसूची में वर्णित है === 11वीं अनुसूची (29 विषय)
Q17. भारतीय संविधान का कौन सा अनुच्छेद अस्पृश्यता उन्मूलन से संबंधित है === अनुच्छेद 17
Q18. उपाधियों के अंत का उल्लेख किस अनुच्छेद में है === अनुच्छेद 18
Q19. वाक् एवं अभिव्यक्ति की स्वतंत्रता प्राप्त है === अनुच्छेद 19(1)(क) में
Q20. प्राण एवं दैहिक स्वतंत्रता का संरक्षण किस अनुच्छेद में है === अनुच्छेद 21
Q21. 6 से 14 वर्ष के बच्चों के लिए अनिवार्य एवं निःशुल्क शिक्षा === अनुच्छेद 21(क)
Q22. कारखानों में बालकों के नियोजन का प्रतिषेध करता है === अनुच्छेद 24
Q23. संवैधानिक उपचारों का अधिकार किस अनुच्छेद में है === अनुच्छेद 32 (संविधान की आत्मा)
Q24. ग्राम पंचायतों के गठन का निर्देश किस अनुच्छेद में है === अनुच्छेद 40
Q25. नागरिकों के लिए समान नागरिक संहिता (UCC) का उल्लेख है === अनुच्छेद 44
Q26. कार्यपालिका से न्यायपालिका का पृथक्करण किस अनुच्छेद में है === अनुच्छेद 50
Q27. अंतरराष्ट्रीय शांति और सुरक्षा की अभिवृद्धि किस अनुच्छेद में है === अनुच्छेद 51
Q28. मूल कर्तव्य किस समिति की अनुशंसा पर जोड़े गए थे === स्वर्ण सिंह समिति
Q29. वर्तमान में कुल कितने मौलिक कर्तव्य हैं === 11 मौलिक कर्तव्य
Q30. भारत का एक राष्ट्रपति होगा, किस अनुच्छेद में वर्णित है === अनुच्छेद 52
Q31. राष्ट्रपति पर महाभियोग चलाने की प्रक्रिया किस अनुच्छेद में है === अनुच्छेद 61
Q32. राष्ट्रपति को क्षमादान की शक्ति प्राप्त है === अनुच्छेद 72 के तहत
Q33. भारत का महान्यायवादी (Attorney General) किस अनुच्छेद से संबंधित है === अनुच्छेद 76
Q34. संसद के दोनों सदनों की संयुक्त बैठक आहूत करता है === भारत का राष्ट्रपति
Q35. संसद की संयुक्त बैठक की अध्यक्षता कौन करता है === लोकसभा अध्यक्ष
Q36. कोई विधेयक धन विधेयक है या नहीं, इसका निर्णय करता है === लोकसभा अध्यक्ष`,

  hindi: `Q1. 'अतिथि' का विलोम शब्द है === आतिथेय
Q2. 'अमृत' का विलोम शब्द क्या है === विष
Q3. 'अनुराग' का विलोम शब्द है === विराग
Q4. 'अनुकूल' का सटीक विलोम शब्द है === प्रतिकूल
Q5. 'अल्पज्ञ' का विलोम शब्द होता है === बहुज्ञ
Q6. 'उत्कृष्ट' का विलोम शब्द क्या है === निकृष्ट
Q7. 'उन्मूलन' का विलोम शब्द है === रोपण
Q8. 'ऋजु' का विलोम शब्द परीक्षा में बार-बार पूछा जाता है === वक्र
Q9. 'कृत्रिम' का विलोम शब्द है === प्राकृतिक (या नैसर्गिक)
Q10. 'गरिमा' का विलोम शब्द होता है === लघिमा
Q11. 'जंगम' का विलोम शब्द क्या है === स्थावर
Q12. 'तिमिर' का विलोम शब्द है === आलोक (या प्रकाश)
Q13. 'दयालु' का विलोम शब्द है === निर्दयी
Q14. 'निषिद्ध' का विलोम शब्द होता है === विहित
Q15. 'परुष' का विलोम शब्द है === कोमल
Q16. 'बंधन' का विलोम शब्द है === मोक्ष (या मुक्ति)
Q17. 'मूक' का विलोम शब्द क्या है === वाचाल
Q18. 'योगी' का विलोम शब्द होता है === भोगी
Q19. 'श्यामा' का विलोम शब्द है === गौरी
Q20. 'संकीर्ण' का विलोम शब्द है === विस्तीर्ण
Q21. 'सूक्ष्म' का विलोम शब्द होता है === स्थूल
Q22. जो सब कुछ जानता हो, उसके लिए एक शब्द === सर्वज्ञ
Q23. जो कम जानता हो, उसे क्या कहते हैं === अल्पज्ञ
Q24. जिसे जीता न जा सके, उसके लिए एक शब्द === अजेय
Q25. जिसके आने की तिथि ज्ञात न हो === अतिथि
Q26. जिसका जन्म अंडे से हुआ हो === अंडज
Q27. जो पहले कभी न हुआ हो === अभूतपूर्व
Q28. दोपहर के बाद का समय कहलाता है === अपराह्न
Q29. दोपहर से पहले का समय कहलाता है === पूर्वाह्न
Q30. जो मापा न जा सके, उसे कहते हैं === अपरिमेय
Q31. गुरु के समीप रहने वाला छात्र कहलाता है === अन्तेवासी
Q32. जिसे बुलाया न गया हो === अनाहूत
Q33. जिसका कोई शत्रु न जन्मा हो === अजातशत्रु
Q34. मोक्ष की इच्छा रखने वाला व्यक्ति कहलाता है === मुमुक्षु
Q35. जीने की प्रबल इच्छा क्या कहलाती है === जिजीविषा
Q36. जंगल में लगने वाली आग को क्या कहते हैं === दावानल`,

  science: `### भौतिक विज्ञान (मात्रक एवं भौतिक राशियां)
Q1. शक्ति का SI मात्रक क्या है === वाट (Watt)
Q2. बल का SI मात्रक क्या होता है === न्यूटन (Newton)
Q3. कार्य और ऊर्जा का मात्रक क्या है === जूल (Joule)
Q4. प्रकाश वर्ष किसकी इकाई है === दूरी की (Distance)
Q5. एक पारसेक (Parsec) कितने प्रकाश वर्ष के बराबर होता है === लगभग 3.26 प्रकाश वर्ष
Q6. त्वरण का मात्रक क्या होता है === m/s² (मीटर प्रति सेकंड²)
Q7. ध्वनि की तीव्रता मापने की इकाई है === डेसिबल (Decibel)
Q8. वायुमंडलीय दाब मापने का यंत्र क्या कहलाता है === बैरोमीटर (Barometer)
Q9. दूध के घनत्व को किसके द्वारा मापा जाता है === लैक्टोमीटर द्वारा
Q10. वायु की आर्द्रता मापने हेतु प्रयुक्त यंत्र है === हाइग्रोमीटर (Hygrometer)
Q11. भूकंप की तीव्रता किस पैमाने पर मापी जाती है === रिक्टर पैमाना (Richter Scale)
Q12. वाशिंग मशीन का कार्य सिद्धांत किस पर आधारित है === अपकेंद्रण (Centrifugation)
Q13. गुरुत्वाकर्षण का सार्वभौमिक नियम किसने दिया था === सर आइजक न्यूटन ने
Q14. वर्षा की बूंद गोलाकार होती है, इसका कारण है === पृष्ठ तनाव (Surface Tension)
Q15. बादलों के वायुमंडल में तैरने का कारण है उनका === कम घनत्व
Q16. जल का अधिकतम घनत्व किस तापमान पर होता है === 4°C पर
Q17. प्रकाश की चाल निर्वात में होती है === 3 × 10⁸ m/s

### रसायन विज्ञान (रासायनिक सूत्र एवं महत्वपूर्ण यौगिक)
Q18. साधारण जल का रासायनिक सूत्र एवं अणुभार है === H₂O (अणुभार 18)
Q19. भारी जल का रासायनिक सूत्र एवं उपयोग === D₂O (परमाणु भट्टी में मंदक के रूप में)
Q20. शुष्क बर्फ (Dry Ice) क्या कहलाता है === ठोस कार्बन डाइऑक्साइड (CO₂)
Q21. अम्लीय वर्षा (Acid Rain) के प्रमुख घटक हैं === SO₂ तथा NO₂ गैसें
Q22. रसायनों का सम्राट (King of Chemicals) किसे कहा जाता है === सल्फ्यूरिक अम्ल (H₂SO₄)
Q23. चूना पत्थर तथा संगमरमर का रासायनिक सूत्र है === कैल्शियम कार्बोनेट (CaCO₃)
Q24. खाने का सोडा (बेकिंग सोडा) का सूत्र है === सोडियम बाइकार्बोनेट (NaHCO₃)
Q25. धावन सोडा (वाशिंग सोडा) का सूत्र है === Na₂CO₃·10H₂O
Q26. प्लास्टर ऑफ पेरिस का रासायनिक सूत्र है === CaSO₄·½H₂O
Q27. जिप्सम का रासायनिक सूत्र क्या है === CaSO₄·2H₂O
Q28. गोबर गैस तथा बायोगैस का मुख्य घटक है === मिथेन (CH₄)
Q29. रक्त शर्करा (ग्लूकोज) का रासायनिक सूत्र है === C₆H₁₂O₆
Q30. ओजोन परत में पाई जाने वाली गैस का सूत्र है === O₃ (ऑक्सीजन का अपररूप)
Q31. हास्य गैस (लाफिंग गैस) का रासायनिक नाम है === नाइट्रस ऑक्साइड (N₂O)
Q32. विरंजक चूर्ण (Bleaching Powder) का रासायनिक सूत्र === CaOCl₂

### जीव विज्ञान एवं मानव शरीर
Q33. मानव शरीर की सबसे बड़ी ग्रंथि कौन-सी है === यकृत (Liver)
Q34. मास्टर ग्रंथि (Master Gland) किसे कहा जाता है === पीयूष ग्रंथि (Pituitary Gland)
Q35. रक्त का pH मान कितना होता है === लगभग 7.4 (हल्का क्षारीय)
Q36. इंसुलिन की कमी से होने वाला रोग है === मधुमेह (Diabetes)`
};

// ==========================================
// PRESET SAMPLE DATASETS FOR MCQ (Platform / Rukmini Practice Sets)
// ==========================================
const SAMPLE_MCQ_DATASETS = {
  biharPolice: `1. 10 सेमी० व्यास का एक सिक्का, f फोकस दूरी वाले एक अवतल दर्पण के ध्रुव से 3.5f की दूरी पर रखा गया है। प्रतिबिंब का रैखिक आवर्धन और व्यास ज्ञात कीजिए।
(A) क्रमशः 3/5 और 2 सेमी०
(B) क्रमशः 2/5 और 4 सेमी०
(C) क्रमशः 3/5 और 5 सेमी०
(D) क्रमशः 4/5 और 8 सेमी०
Ans: B

2. प्रकाश वर्ष (Light year) निम्नलिखित में से किसकी इकाई है?
(A) समय (Time)
(B) दूरी (Distance)
(C) प्रकाश की तीव्रता (Intensity of light)
(D) द्रव्यमान (Mass)
Ans: B

3. नीचे दो कथन दिए गए हैं—अभिकथन (A) व कारण (R)। दिए गए कूटों में से सही कूट का चयन कीजिए।
अभिकथन (A) : उत्तल दर्पण (Convex Mirror) का उपयोग वाहनों में पीछे देखने वाले दर्पण (rear-view mirror) के रूप में किया जाता है।
कारण (R) : उत्तल दर्पण सदैव आभासी (virtual), सीधा (erect) और छोटा प्रतिबिंब बनाता है, जिससे दृष्टि क्षेत्र (field of view) बढ़ जाता है।
(A) दोनों A व R सही हैं तथा R, A का सही स्पष्टीकरण है।
(B) दोनों A व R सही हैं तथा R, A का सही स्पष्टीकरण नहीं है।
(C) A सही है, लेकिन R गलत है।
(D) A गलत है, लेकिन R सही है।
Ans: A

4. निम्नलिखित को सही उत्तर से मिलाएं:
कॉलम-I (भौतिक राशियां)       कॉलम-II (मात्रक)
a. विद्युत धारा (Electric Current)   1. ओम (Ohm)
b. प्रतिरोध (Resistance)             2. ऐम्पियर (Ampere)
c. कार्य (Work)                       3. हर्ट्ज (Hertz)
d. आवृत्ति (Frequency)               4. जूल (Joule)
(A) a-2, b-1, c-4, d-3
(B) a-1, b-2, c-3, d-4
(C) a-2, b-4, c-1, d-3
(D) a-3, b-1, c-4, d-2
Ans: A

5. बेकिंग सोडा (Baking Soda) का रासायनिक सूत्र क्या है?
(A) Na2CO3  (B) NaHCO3  (C) NaCl  (D) NaOH
Ans: B

6. आधुनिक आवर्त सारणी (Modern Periodic Table) में सर्वाधिक विद्युत ऋणात्मक (Electronegative) तत्व कौन-सा है?
(A) फ्लोरीन (Fluorine)
(B) क्लोरीन (Chlorine)
(C) ऑक्सीजन (Oxygen)
(D) नाइट्रोजन (Nitrogen)
Ans: A

7. मई 2026 में खबरों में रहा 'माउंट डुकोनो' (Mount Dukono) ज्वालामुखी, जिसमें हुए भीषण विस्फोट के कारण कई पर्वतारोहियों की जान चली गई, किस देश में स्थित है?
(A) जापान  (B) इंडोनेशिया  (C) इटली  (D) फिलीपींस
Ans: B

8. 7 मई 2026 को भारत और किस देश के बीच 'रक्षा नीति वार्ता' (Defence Policy Talks) का 10वां संस्करण नई दिल्ली में आयोजित किया गया?
(A) अमेरिका  (B) जापान  (C) ऑस्ट्रेलिया  (D) फ्रांस
Ans: B

9. विश्व रेड क्रॉस और रेड क्रेसेंट दिवस 2026 के संदर्भ में निम्नलिखित कथनों पर विचार करते हुए सही विकल्प चुनिए:
1. यह दिवस हर साल 8 मई को इंटरनेशनल कमेटी ऑफ द रेड क्रॉस (ICRC) के संस्थापक हेनरी ड्यूनेंट के जन्मदिन के उपलक्ष्य में मनाया जाता है।
2. पहला आधिकारिक अंतर्राष्ट्रीय रेड क्रॉस दिवस वर्ष 1984 में मनाया गया था।
उपरोक्त में से कौन-सा/से कथन सत्य है/हैं?
(A) केवल 1  (B) केवल 2  (C) 1 और 2  (D) न तो 1, न ही 2
Ans: A

10. वह छोटी से छोटी संख्या कौन-सी है, जिसे 435 में जोड़ने पर एक पूर्ण वर्ग प्राप्त होता है?
(A) 3  (B) 8  (C) 6  (D) 4
Ans: B

11. एक पाइप एक टंकी को 2 घंटे में भर सकता है। एक जगह रिसाव होने के कारण टंकी भरने में 2⅓ घंटे का समय लग जाता है। यह रिसाव टंकी के पानी को कितने समय में खाली कर देगा?
(A) 6 घंटे  (B) 11 घंटे  (C) 8 घंटे  (D) 15 घंटे
Ans: D

12. भारत के संविधान के अनुसार उच्चतम न्यायालय के न्यायाधीशों की सेवानिवृत्ति की आयु है—
(A) 70 वर्ष  (B) 65 वर्ष  (C) 62 वर्ष  (D) 60 वर्ष
Ans: B

13. संस्कृत वाक्यांश 'सत्यमेव जयते' ................. से लिया गया है।
(A) बाइबिल  (B) मुण्डकोपनिषद  (C) त्रिपिटक  (D) आगम साहित्य
Ans: B

14. भारतीय रेलवे बोर्ड अधिनियम किस वर्ष पारित किया गया था?
(A) 1966  (B) 1905  (C) 1937  (D) 1890
Ans: B

15. किस विश्व विरासत स्थल में ली कोर्बुजिए के वास्तुशिल्प स्थित हैं?
(A) कोच्चि  (B) पुदुचेरी  (C) चंडीगढ़  (D) गोवा
Ans: C

16. तीरंदाजी निम्नलिखित में से किस देश का राष्ट्रीय खेल है?
(A) भूटान  (B) जापान  (C) तुर्की  (D) चीन
Ans: A

17. नीति आयोग के 'नीति' (NITI) का पूरा नाम है—
(A) नेशनल इंस्टीट्यूट ऑफ ट्रांसफॉर्मिंग इंडिया
(B) नेशनल इंस्टीट्यूशन फॉर ट्रांसफॉर्मिंग इंडियन्स
(C) नेशनल इंडेक्स ऑफ ट्रांससोडिंग इंडियन
(D) नेशनल इंस्टीट्यूशन फॉर ट्रांसफॉर्मिंग इंडिया
Ans: D

18. ................. भारत संघ की कार्यपालिका का संवैधानिक प्रमुख होता है।
(A) मुख्य न्यायाधीश  (B) राष्ट्रपति  (C) प्रधानमंत्री  (D) मुख्य निर्वाचन आयुक्त
Ans: B

19. सिंधु घाटी सभ्यता एक ................. थी।
(A) लौह युग की सभ्यता
(B) कांस्य युग की सभ्यता
(C) ताम्र युग की सभ्यता
(D) अक्षीय युग की सभ्यता
Ans: B

20. 100 रुपये का सिक्का आर.एस.एस. के 100 वर्ष पूर्ण होने पर जारी किया गया।
कथन (R) : भारतीय मुद्रा पर भारतमाता प्रथम बार दर्शायी गयी।
(A) (A) तथा (R) दोनों सही हैं तथा (R) (A) की सही व्याख्या है।
(B) (A) सही है लेकिन (R) गलत है।
(C) (A) तथा (R) दोनों सही हैं तथा (R) (A) की सही व्याख्या नहीं है।
(D) (A) गलत है लेकिन (R) सही है।
Ans: A

21. "इट शुल्ड हैव बीन यू" पुस्तक किसने लिखी है?
(A) रोमिला थापर  (B) जेन डॉनीसन  (C) अरुंधति राय  (D) एंड्र्रिया मायरा
Ans: D

22. निर्देश (प्र०सं० 22-24): प्रकृति ने हमें जल, वायु, वनस्पति जैसी अमूल्य निधियां दी हैं। वृक्ष धरती के आभूषण हैं, जो न केवल प्राकृतिक सौंदर्य बढ़ाते हैं, बल्कि पर्यावरण का संतुलन भी बनाए रखते हैं।
गद्यांश के अनुसार, धरती का आभूषण किसे कहा गया है?
(A) नदियों को  (B) पहाड़ों को  (C) वृक्षों को  (D) वन्यजीवों को
Ans: C

23. पर्यावरण संतुलन बिगड़ने और ग्लोबल वार्मिंग का मुख्य कारण क्या है?
(A) अत्यधिक वर्षा  (B) पेड़ों की अंधाधुंध कटाई  (C) कारखानों का निर्माण  (D) कृषि का विस्तार
Ans: B

24. भविष्य में मानव जीवन को खतरे से बचाने के लिए क्या आवश्यक है?
(A) वनों का संरक्षण करना  (B) नदियों को सुखाना  (C) पहाड़ों को काटना  (D) नई इमारतें बनाना
Ans: A

25. सूची-I को सूची-II से सुमेलित कीजिए:
सूची-I (मुहावरा)          सूची-II (अर्थ)
a. आसमान सिर पर उठाना    1. वास्तविकता का बोध होना
b. आंखें खुलना              2. बहुत शोर करना
c. कान भरना              3. खुशियां मनाना
d. घी के दिये जलाना        4. चुगली करना
(A) a-2, b-1, c-4, d-3
(B) a-1, b-2, c-3, d-4
(C) a-4, b-3, c-2, d-1
(D) a-3, b-4, c-1, d-2
Ans: A

26. अभिकथन (A) : प्रकृति में कार्बन बड़ी संख्या में यौगिकों का निर्माण करता है।
कारण (R) : कार्बन में श्रृंखलन (Catenation) का अद्वितीय गुण पाया जाता है।
(A) दोनों A व R सही हैं तथा R, A का सही स्पष्टीकरण है।
(B) दोनों A व R सही हैं तथा R, A का सही स्पष्टीकरण नहीं है।
(C) A सही है, लेकिन R गलत है।
(D) A गलत है, लेकिन R सही है।
Ans: A

27. निम्नलिखित को सुमेलित कीजिए:
कॉलम-I (प्राकृतिक स्रोत)    कॉलम-II (उपस्थित अम्ल)
a. सिरका (Vinegar)          1. लैक्टिक अम्ल
b. नींबू (Lemon)            2. ऑक्जेलिक अम्ल
c. टमाटर (Tomato)          3. ऐसीटिक अम्ल
d. खट्टा दूध (Sour Milk)     4. सिट्रिक अम्ल
(A) a-3, b-4, c-2, d-1
(B) a-1, b-2, c-3, d-4
(C) a-4, b-3, c-1, d-2
(D) a-3, b-2, c-4, d-1
Ans: A

28. कोशिका का ऊर्जा-गृह (Powerhouse of the Cell) किसे कहा जाता है?
(A) राइबोसोम (Ribosome)
(B) गॉल्जीकाय (Golgi Apparatus)
(C) माइटोकॉन्ड्रिया (Mitochondria)
(D) लाइसोसोम (Lysosome)
Ans: C

29. किस विटामिन की कमी के कारण स्कर्वी (Scurvy) रोग होता है?
(A) विटामिन A  (B) विटामिन B  (C) विटामिन C  (D) विटामिन D
Ans: C

30. अभिकथन (A) : पौधों में जाइलम (Xylem) उत्तक मुख्य रूप से जल के परिवहन के लिए उत्तरदायी है।
कारण (R) : फ्लोएम (Phloem) उत्तक पौधों में भोजन के परिवहन का कार्य करता है।
(A) दोनों A व R सही हैं तथा R, A का सही स्पष्टीकरण है।
(B) दोनों A व R सही हैं तथा R, A का सही स्पष्टीकरण नहीं है।
(C) A सही है, लेकिन R गलत है।
(D) A गलत है, लेकिन R सही है।
Ans: B

31. निम्नलिखित को सुमेलित कीजिए:
कॉलम-I (रोग)        कॉलम-II (रोगजनक)
a. मलेरिया (Malaria)   1. जीवाणु (Bacteria)
b. टी.बी. (Tuberculosis) 2. विषाणु (Virus)
c. एड्स (AIDS)        3. प्रोटोजोआ (Protozoa)
d. दाद (Ringworm)      4. कवक (Fungi)
(A) a-3, b-1, c-2, d-4
(B) a-1, b-3, c-4, d-2
(C) a-2, b-4, c-1, d-3
(D) a-3, b-2, c-1, d-4
Ans: A

32. 'प्रोजेक्ट नारी-शक्ति' (Project Nari-Shakti), जिसे 8 मई को विस्तार दिया गया, किस क्षेत्र से संबंधित है?
(A) महिला शिक्षा
(B) ग्रामीण महिला उद्यमिता और ड्रोन प्रशिक्षण
(C) महिला स्वास्थ्य और पोषण
(D) सशस्त्र बलों में महिला भर्ती
Ans: B

33. 'राष्ट्रीय हरित हाइड्रोजन हब' योजना के तहत किस शहर को पहला हब घोषित किया गया?
(A) जामनगर  (B) विशाखापत्तनम  (C) कोच्चि  (D) पारादीप
Ans: B

34. मई 2026 में नीति आयोग द्वारा जारी 'बियॉन्ड 2026' विजन डॉक्यूमेंट का प्राथमिक उद्देश्य क्या है?
(A) भारत को दुनिया का सबसे बड़ा चावल निर्यातक बनाना।
(B) जलवायु अनुकूल फसलों को बढ़ावा देना और कृषि में 'नेट-जीरो' उत्सर्जन प्राप्त करना।
(C) रासायनिक उर्वरकों के उपयोग को दोगुना करना।
(D) कृषि क्षेत्र का पूर्ण निजीकरण करना।
Ans: B

35. X, 94 प्रश्न का उत्तर देता है और उसे 141 अंक मिलते हैं। यदि प्रत्येक सही प्रश्न के लिए 4 अंक दिए जाते हैं और प्रत्येक गलत उत्तर के लिए 1 अंक काटा जाता है तो X द्वारा दिए गए गलत उत्तरों की संख्या है:
(A) 47  (B) 40  (C) 57  (D) 45
Ans: A

36. कितने समय में ₹ 4400 ब्याज की 8% वार्षिक दर पर ₹ 4576 हो जायेंगे, जबकि यह चक्रवृद्धि ब्याज अर्धवार्षिक संयोजित होता है?
(A) 6 माह  (B) 2 वर्ष  (C) 7 माह  (D) 1 वर्ष
Ans: A

37. मुद्राओं के बारे में सही विकल्प है:
1. कुवैती दीनार मजबूत मुद्रा है
2. ब्रिटेन में यूरो प्रयुक्त होता है
3. जी.बी.पी. जिब्राल्टर पाउंड का कोड है
4. स्विस फ्रैंक का कोड सी. एच. एफ. है
(A) 1 एवं 2 सही हैं  (B) 1 एवं 4 सही हैं  (C) 2 एवं 3 सही हैं  (D) 1, 2 एवं 4 सही हैं
Ans: B

38. सूची-I को सूची-II से सुमेलित कीजिए:
सूची-I (नदी)       सूची-II (उद्गम)
I. महानंदा        (a) शिवपुरी श्रेणी (नेपाल)
II. बागमती       (b) महाभारत श्रेणी (नेपाल)
III. कमला        (c) तिब्बत का पठार
IV. घाघरा        (d) पश्चिम बंगाल
(A) I-d, II-b, III-a, IV-c
(B) I-a, II-d, III-c, IV-b
(C) I-b, II-a, III-d, IV-c
(D) I-c, II-b, III-a, IV-d
Ans: A

39. निम्न में से कौन-सा कथन सही नहीं है?
I. सतपुड़ा पश्चिम से पूर्व को फैली है।
II. भारत के मध्य भाग में सतपुड़ा को महादेव श्रेणियों के रूप में जाना जाता है।
III. सतपुड़ा प्रायद्वीपीय पठार की उत्तरी सीमा है।
IV. सतपुड़ा श्रेणी विंध्यन श्रेणियों से लगी है।
(A) I  (B) II  (C) III  (D) IV
Ans: D

40. कर्क रेखा का विचार करते हुए, निम्न में से कौन-सा लौह इस्पात संयंत्र भिन्न है?
(A) राउरकेला  (B) बोकारो  (C) भिलाई  (D) जमशेदपुर
Ans: A`,

  science: `1. शक्ति (Power) का SI मात्रक क्या है?
(A) वाट (Watt)  (B) जूल (Joule)  (C) न्यूटन (Newton)  (D) पास्कल (Pascal)
Ans: A

2. साधारण जल का रासायनिक सूत्र क्या है?
(A) H2O  (B) D2O  (C) H2O2  (D) H2SO4
Ans: A

3. भारी जल (Heavy Water) का रासायनिक सूत्र क्या होता है?
(A) H2O  (B) D2O  (C) CO2  (D) CH4
Ans: B

4. शुष्क बर्फ (Dry Ice) किसे कहा जाता है?
(A) ठोस CO2  (B) ठोस N2  (C) ठोस H2O  (D) ठोस SO2
Ans: A

5. अम्लीय वर्षा (Acid Rain) के लिए मुख्य रूप से उत्तरदायी गैसें कौन-सी हैं?
(A) SO2 तथा NO2  (B) CO तथा CO2  (C) CH4 तथा O3  (D) N2 तथा O2
Ans: A

6. रसायनों का सम्राट (King of Chemicals) किसे कहा जाता है?
(A) हाइड्रोक्लोरिक अम्ल (HCl)  (B) सल्फ्यूरिक अम्ल (H2SO4)  (C) नाइट्रिक अम्ल (HNO3)  (D) एसिटिक अम्ल
Ans: B

7. चूना पत्थर तथा संगमरमर का रासायनिक सूत्र क्या है?
(A) CaO  (B) Ca(OH)2  (C) CaCO3  (D) CaCl2
Ans: C

8. त्वरण (Acceleration) का मात्रक क्या है?
(A) m/s  (B) m/s2  (C) m2/s  (D) kg/m
Ans: B`
};

// ==========================================
// DEFAULT APPLICATION STATE
// ==========================================
const DEFAULT_STATE = {
  // Header / Footer Branding
  leftBrandText: "GS प्वाइंटर",
  centerSubjectText: "(भारतीय इतिहास)",
  instituteLogo: "", // Base64 data URL
  topBannerText: "CLICK HERE - JOIN @APNAPDFS",
  topBannerUrl: "https://t.me/apnapdfs",
  watermarkText: "Join @Apnapdfs",
  watermarkPos: "bottom-right", // "bottom-right", "center", "none"
  watermarkOpacity: 0.35,
  startingPageNumber: 1,

  // Cover Page (Optional Front Title Page)
  includeCoverPage: false,
  coverSubtitle: "सामान्य अध्ययन (GS) वन-लाइनर सम्पूर्ण रिवीजन बुकलेट",
  coverTargetExams: "UPSC • BPSC • UPPSC • MPPSC • SSC • Railway • All State Exams",

  // Layout & Formatting
  paginationMode: "autofit", // "autofit" (100% full page pack) or "manual" (slider)
  itemsPerPage: 48,
  itemSpacing: "3.5",
  outerFrame: "none", // "none", "single", "double"
  fontSize: 12.0,
  lineHeight: "1.45",
  columnGap: "7",
  columnDivider: "none", // "none", "solid", "dashed"
  answerStyle: "style-right", // "style-right" (Mode 1), "style-inline" (Mode 2)
  topicBannerMode: "single-column", // "single-column" (Authentic GS Pointer 1-side), "span-both" (Full-width)
  autoFormatFormulas: true,
  answerColor: "#dc2626", // Red default for answer as requested!
  questionColor: "#000000", // Black for question!
  bulletStyle: "➢", // "➢", "•", "◆", "➔", "none"
  stripQNumbers: true,

  // Content
  rawContent: SAMPLE_DATASETS.history,

  // Mode Selection: "pointer" (One-Liner Studio) vs "mcq" (Practice Set Studio)
  currentMode: "pointer",
  mcqActiveTab: "content", // "content", "branding", "images", "layout"

  // MCQ Practice Set Studio State (Platform / Rukmini Exam Format)
  mcq: {
    examTitle: "Bihar Police Constable Exam.",
    seriesSubtitle: "Test Series for",
    setNumber: "06",
    topAppBannerText: "Online Test के लिए App अभी डाउनलोड करें➔",
    topAppBannerUrl: "https://t.me/apnapdfs",
    footerExamText: "BIHAR POLICE CONSTABLE EXAM., TEST SERIES VOL.-1",
    footerWebText: "www.rukminiprakashan.com",
    footerWebUrl: "https://www.rukminiprakashan.com",
    watermarkText: "PLATFORM",
    watermarkOpacity: 0.12,
    startingPageNumber: 99,
    qNumColor: "#dc2626", // Crimson Red for question numbers
    optionsLayout: "auto", // "auto", "grid2x2", "inline4", "stacked"
    colDivider: "solid", // "solid", "dashed", "none"
    includeAnswerKey: true,
    fontSize: 11.5,
    rawMcqContent: SAMPLE_MCQ_DATASETS.biharPolice,
    questionImages: {} // map of { 1: dataUrl, 4: dataUrl, ... }
  },

  // UI state
  activeTab: "content", // "content", "branding", "layout"
  previewZoom: 100, // percentage
  fitToScreen: false,
  currentViewPage: 1,
  searchQuery: ""
};

// Application State Store (initialized from localStorage if present)
let appState = { ...DEFAULT_STATE };

// ==========================================
// LOCAL STORAGE PERSISTENCE
// ==========================================
const STORAGE_KEY = "GS_POINTER_SETTINGS_V1";

function loadSavedSettings() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      appState = {
        ...DEFAULT_STATE,
        ...parsed,
        mcq: {
          ...DEFAULT_STATE.mcq,
          ...(parsed.mcq || {})
        }
      };
      return true;
    }
  } catch (err) {
    console.warn("Could not read from localStorage:", err);
  }
  return false;
}

function saveSettingsToStorage() {
  try {
    const toSave = { ...appState };
    // We can preserve or exclude rawContent; keeping it saves user work!
    localStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
    showToast("Template settings saved successfully!", "success");
  } catch (err) {
    console.error("Failed to save to localStorage:", err);
    showToast("Failed to save settings to browser storage.", "error");
  }
}

function resetSettingsToDefault() {
  if (confirm("Reset all settings and content back to standard defaults?")) {
    appState = JSON.parse(JSON.stringify(DEFAULT_STATE));
    syncInputsFromState();
    renderDocument();
    showToast("Settings reset to default.", "info");
  }
}

// ==========================================
// SMART QUESTION-ANSWER PARSER
// ==========================================
function parseRawContent(rawText, shouldStripQ) {
  if (!rawText || !rawText.trim()) return [];

  const lines = rawText.split(/\r?\n/);
  const items = [];

  // Regex to strip question number prefixes:
  // e.g. "Q168.", "Q. 168:", "168.", "168 -", "168)", "(168)", "प्रश्न 168.", "प्र. 168:"
  const qNumRegex = /^(?:[Qq][.\s]*\d+[.\-:\s)]*|\d+[.\-:\s)]+|(?:प्रश्न|प्र)[.\s]*\d+[.\-:\s)]*|\(\d+\)\s*)/;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;

    // Check for Chapter / Topic Section Heading:
    // Matches "### title", "## title", "[ title ]", "--- title ---", "❖ title ❖"
    if (line.startsWith("###") || line.startsWith("##") || line.startsWith("# ") || (/^\[\s*.+\s*\]$/.test(line)) || (/^[-—=]{3,}\s*.+\s*[-—=]{3,}$/.test(line)) || line.startsWith("❖")) {
      const cleanHeading = line.replace(/^[#\-\—=\[\]❖\s]+|[#\-\—=\[\]❖\s]+$/g, "").trim();
      if (cleanHeading) {
        items.push({
          id: i + 1,
          isHeading: true,
          title: cleanHeading
        });
        continue;
      }
    }

    let question = "";
    let answer = "";

    // 1. Check for '===' delimiter
    if (line.includes("===")) {
      const parts = line.split("===");
      question = parts[0].trim();
      answer = parts.slice(1).join("===").trim();
    }
    // 2. Check for tab delimiter
    else if (line.includes("\t")) {
      const parts = line.split("\t");
      question = parts[0].trim();
      answer = parts.slice(1).join(" ").trim();
    }
    // 3. Check for ' :: ' or ' : ' delimiter (avoid single colon within text if not flanked by space)
    else if (line.includes(" :: ")) {
      const parts = line.split(" :: ");
      question = parts[0].trim();
      answer = parts.slice(1).join(" :: ").trim();
    } else if (line.includes(" : ")) {
      const parts = line.split(" : ");
      question = parts[0].trim();
      answer = parts.slice(1).join(" : ").trim();
    }
    // 4. Check for ' — ' or ' – ' or ' - ' delimiter with spaces
    else if (line.includes(" — ")) {
      const parts = line.split(" — ");
      question = parts[0].trim();
      answer = parts.slice(1).join(" — ").trim();
    } else if (line.includes(" – ")) {
      const parts = line.split(" – ");
      question = parts[0].trim();
      answer = parts.slice(1).join(" – ").trim();
    } else if (line.includes(" - ")) {
      const parts = line.split(" - ");
      question = parts[0].trim();
      answer = parts.slice(1).join(" - ").trim();
    }
    // 5. Check for "उत्तर:" or "Ans:"
    else if (/^(.*?)(\s+(?:उत्तर|Ans|Answer)\s*[:\-]\s*)(.*)$/i.test(line)) {
      const match = line.match(/^(.*?)(\s+(?:उत्तर|Ans|Answer)\s*[:\-]\s*)(.*)$/i);
      question = match[1].trim();
      answer = match[3].trim();
    }
    // Fallback: If no delimiter found, treated as full question with empty or same-line answer
    else {
      question = line;
      answer = "";
    }

    // Strip leading question numbers if enabled
    if (shouldStripQ && question) {
      question = question.replace(qNumRegex, "").trim();
    }

    // Clean up leading dashes, colons, or punctuation from answer
    if (answer) {
      answer = answer.replace(/^[\s\-—–:\.]+/u, "").trim();
    }

    if (question || answer) {
      items.push({
        id: i + 1,
        question: question || line,
        answer: answer
      });
    }
  }

  return items;
}

// ==========================================
// 1-CLICK LANGUAGE TRANSLATOR ENGINE
// ==========================================
let isTranslating = false;

async function translateSingleText(text, fromLang, toLang) {
  if (!text || !text.trim()) return text;
  const clean = text.trim();
  const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(clean)}&langpair=${fromLang}|${toLang}`;
  
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    if (data && data.responseData && data.responseData.translatedText) {
      return data.responseData.translatedText;
    }
  } catch (err) {
    console.warn("Translation fallback for:", clean, err);
  }
  return text; // fallback: return original text safely
}

async function convertLanguageBatch(fromLang, toLang) {
  if (isTranslating) return;
  if (!appState.rawContent || !appState.rawContent.trim()) {
    showToast("Please enter or load some questions first!", "error");
    return;
  }

  isTranslating = true;
  const badge = document.getElementById("trans-status-badge");
  const btnEn = document.getElementById("btn-trans-to-en");
  const btnHi = document.getElementById("btn-trans-to-hi");

  if (badge) {
    badge.classList.remove("hidden");
    badge.innerText = "Starting translation...";
  }
  if (btnEn) btnEn.disabled = true;
  if (btnHi) btnHi.disabled = true;

  try {
    const lines = appState.rawContent.split(/\r?\n/);
    const totalLines = lines.filter(l => l.trim().length > 0).length;
    let completed = 0;

    // Helper to translate a single line preserving its delimiter
    async function translateLine(line) {
      if (!line || !line.trim()) return line;

      // Detect delimiter
      let delim = null;
      let parts = [];

      if (line.includes("===")) {
        delim = "===";
        parts = line.split("===");
      } else if (line.includes(" — ")) {
        delim = " — ";
        parts = line.split(" — ");
      } else if (line.includes(" – ")) {
        delim = " – ";
        parts = line.split(" – ");
      } else if (line.includes(" - ")) {
        delim = " - ";
        parts = line.split(" - ");
      } else if (line.includes(" :: ")) {
        delim = " :: ";
        parts = line.split(" :: ");
      } else if (line.includes(" : ")) {
        delim = " : ";
        parts = line.split(" : ");
      } else if (line.includes("\t")) {
        delim = "\t";
        parts = line.split("\t");
      }

      if (delim && parts.length >= 2) {
        const qPart = parts[0];
        const aPart = parts.slice(1).join(delim);

        // Translate question and answer concurrently
        const [qTrans, aTrans] = await Promise.all([
          translateSingleText(qPart, fromLang, toLang),
          translateSingleText(aPart, fromLang, toLang)
        ]);

        return `${qTrans.trim()} ${delim} ${aTrans.trim()}`;
      } else {
        // Single line without delimiter
        return await translateSingleText(line, fromLang, toLang);
      }
    }

    // Process with concurrency pool of 4
    const concurrency = 4;
    const results = new Array(lines.length);
    let currentIndex = 0;

    async function worker() {
      while (currentIndex < lines.length) {
        const idx = currentIndex++;
        const line = lines[idx];
        if (!line || !line.trim()) {
          results[idx] = line;
          continue;
        }

        try {
          results[idx] = await translateLine(line);
        } catch (e) {
          results[idx] = line;
        }

        completed++;
        if (badge) {
          badge.innerText = `Translating: ${completed}/${totalLines}...`;
        }
      }
    }

    const workers = [];
    for (let w = 0; w < concurrency; w++) {
      workers.push(worker());
    }
    await Promise.all(workers);

    // Apply converted text
    appState.rawContent = results.join("\n");
    setValue("textarea-content", appState.rawContent);

    // Also smartly convert subject header title
    if (toLang === "en") {
      if (appState.centerSubjectText.includes("इतिहास")) appState.centerSubjectText = "(Indian History)";
      else if (appState.centerSubjectText.includes("राजव्यवस्था")) appState.centerSubjectText = "(Indian Polity)";
      else if (appState.centerSubjectText.includes("हिंदी")) appState.centerSubjectText = "(General Hindi)";
      else if (appState.centerSubjectText.includes("विज्ञान")) appState.centerSubjectText = "(General Science)";
      else appState.centerSubjectText = await translateSingleText(appState.centerSubjectText, "hi", "en");
    } else {
      if (appState.centerSubjectText.toLowerCase().includes("history")) appState.centerSubjectText = "(भारतीय इतिहास)";
      else if (appState.centerSubjectText.toLowerCase().includes("polity")) appState.centerSubjectText = "(भारतीय राजव्यवस्था)";
      else if (appState.centerSubjectText.toLowerCase().includes("hindi")) appState.centerSubjectText = "(सामान्य हिंदी)";
      else if (appState.centerSubjectText.toLowerCase().includes("science")) appState.centerSubjectText = "(सामान्य विज्ञान)";
      else appState.centerSubjectText = await translateSingleText(appState.centerSubjectText, "en", "hi");
    }
    setValue("input-center-subject", appState.centerSubjectText);

    // Re-render document
    renderDocument();
    showToast(`Converted all questions to ${toLang === "en" ? "English" : "हिन्दी"} in 1-Click!`, "success");

  } catch (err) {
    console.error("Language conversion error:", err);
    showToast("Translation error. Please check your internet connection.", "error");
  } finally {
    isTranslating = false;
    if (badge) badge.classList.add("hidden");
    if (btnEn) btnEn.disabled = false;
    if (btnHi) btnHi.disabled = false;
  }
}

// ==========================================
// DUAL DOCUMENT RENDER ENGINE
// Mode 1: GS Pointer (One-Liner Two-Column Booklet)
// Mode 2: MCQ Test Series (Platform / Rukmini Practice Set)
// ==========================================
function renderDocument() {
  if (appState.currentMode === "mcq") {
    renderMcqDocument();
  } else {
    renderPointerDocument();
  }
}

/**
 * Renders GS Pointer One-Liner Format
 */
function renderPointerDocument() {
  const container = document.getElementById("pages-render-target");
  if (!container) return;

  const items = parseRawContent(appState.rawContent, appState.stripQNumbers);

  // Update root CSS variables for dynamic typography & column rules
  document.documentElement.style.setProperty("--doc-font-size", `${appState.fontSize}px`);
  document.documentElement.style.setProperty("--doc-line-height", appState.lineHeight);
  document.documentElement.style.setProperty("--doc-column-gap", `${appState.columnGap}mm`);
  document.documentElement.style.setProperty("--doc-item-spacing", `${appState.itemSpacing || 3.5}px`);
  document.documentElement.style.setProperty("--doc-answer-color", appState.answerColor || "#dc2626");
  document.documentElement.style.setProperty("--doc-question-color", appState.questionColor || "#000000");

  let ruleStyle = "none";
  if (appState.columnDivider === "solid") ruleStyle = "0.75px solid #000000";
  else if (appState.columnDivider === "dashed") ruleStyle = "0.75px dashed #9ca3af";
  document.documentElement.style.setProperty("--doc-column-rule", ruleStyle);

  // Clear previous pages
  container.innerHTML = "";

  if (items.length === 0) {
    updateStatisticsBadge(0, 1);
    container.innerHTML = `
      <div class="a4-sheet" style="justify-content: center; align-items: center; text-align: center; color: #94a3b8; font-family: var(--font-ui);">
        <div class="p-8">
          <div class="text-4xl mb-3">📄</div>
          <div class="text-lg font-bold text-slate-700">No Content to Display</div>
          <div class="text-sm mt-1 text-slate-500 max-w-sm">Paste your questions and answers into the editor or select a sample dataset to generate the A4 book preview.</div>
        </div>
      </div>
    `;
    return;
  }

  // Chunk items into pages (Auto-Fit 100% Full Page vs Manual)
  let pageChunks = [];
  if (appState.paginationMode === "manual") {
    const itemsPerPage = Math.max(1, parseInt(appState.itemsPerPage) || 48);
    const totalP = Math.ceil(items.length / itemsPerPage);
    for (let i = 0; i < totalP; i++) {
      pageChunks.push(items.slice(i * itemsPerPage, (i + 1) * itemsPerPage));
    }
  } else {
    // 🚀 Auto-Fit 100% Packing Engine (Guarantees full pages with zero blank waste)
    pageChunks = packItemsAutoFit(items);
  }

  const totalPages = Math.max(1, pageChunks.length);
  const startPageNum = parseInt(appState.startingPageNumber) || 1;

  // Optional Booklet Cover Page
  if (appState.includeCoverPage) {
    const coverElement = createCoverPageElement();
    container.appendChild(coverElement);
  }

  for (let pageIdx = 0; pageIdx < totalPages; pageIdx++) {
    const pageItems = pageChunks[pageIdx] || [];
    const currentPageNum = startPageNum + pageIdx;

    const pageElement = createA4PageElement(pageItems, currentPageNum, totalPages, pageIdx + 1);
    container.appendChild(pageElement);
  }

  // Update UI Stats (include cover page in total count)
  const displayPages = appState.includeCoverPage ? totalPages + 1 : totalPages;
  updateStatisticsBadge(items.length, displayPages);

  // Apply preview zoom scale
  applyZoomScale();
}

/**
 * 📝 Renders Platform / Rukmini Exam MCQ Practice Set Format
 */
function renderMcqDocument() {
  const container = document.getElementById("pages-render-target");
  if (!container) return;

  const items = parseRawMcqContent(appState.mcq.rawMcqContent);

  // Update typography
  document.documentElement.style.setProperty("--doc-font-size", `${appState.mcq.fontSize || 11.5}px`);
  document.documentElement.style.setProperty("--mcq-qnum-color", appState.mcq.qNumColor || "#dc2626");

  container.innerHTML = "";

  if (items.length === 0) {
    updateStatisticsBadge(0, 1);
    container.innerHTML = `
      <div class="a4-sheet" style="justify-content: center; align-items: center; text-align: center; color: #94a3b8; font-family: var(--font-ui);">
        <div class="p-8">
          <div class="text-4xl mb-3">📝</div>
          <div class="text-lg font-bold text-slate-700">No MCQ Questions to Display</div>
          <div class="text-sm mt-1 text-slate-500 max-w-sm">Paste your questions with (A), (B), (C), (D) options or upload a Word/Text file to generate the practice set.</div>
        </div>
      </div>
    `;
    return;
  }

  // Auto-fit packing for MCQs
  const pageChunks = packMcqItemsAutoFit(items);
  const totalPages = Math.max(1, pageChunks.length);
  const startPageNum = parseInt(appState.mcq.startingPageNumber) || 99;

  for (let pageIdx = 0; pageIdx < totalPages; pageIdx++) {
    const pageItems = pageChunks[pageIdx] || [];
    const currentPageNum = startPageNum + pageIdx;
    const isLast = (pageIdx === totalPages - 1);

    const pageElement = createMcqA4PageElement(pageItems, currentPageNum, totalPages, isLast, items);
    container.appendChild(pageElement);
  }

  updateStatisticsBadge(items.length, totalPages);
  applyZoomScale();
}

/**
 * Smart MCQ Parser: Extracts Question number, body, (A)/(B)/(C)/(D) options and Answer
 */
function parseRawMcqContent(rawText) {
  if (!rawText || !rawText.trim()) return [];

  const lines = rawText.split(/\r?\n/);
  const qBlocks = [];
  let currentBlock = null;

  const qStartRegex = /^\s*(?:Q\.?\s*(\d+)|\((\d+)\)|(\d+)[\.\)\:\-])\s*(.*)$/;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const match = line.match(qStartRegex);

    if (match) {
      if (currentBlock) {
        qBlocks.push(currentBlock);
      }
      const qNum = match[1] || match[2] || match[3] || (qBlocks.length + 1);
      const rest = match[4] || "";
      currentBlock = {
        qNum: parseInt(qNum),
        lines: rest.trim() ? [rest.trim()] : []
      };
    } else {
      if (currentBlock) {
        currentBlock.lines.push(line);
      } else if (line.trim()) {
        currentBlock = {
          qNum: 1,
          lines: [line.trim()]
        };
      }
    }
  }
  if (currentBlock) qBlocks.push(currentBlock);

  const items = [];
  const ansRegex = /(?:Ans|उत्तर|Answer|Key)\s*[:\-\=]\s*\(?([A-Da-d1-4])\)?/i;
  const markerRegex = /(?:(?:\r?\n\s*|\s{2,}|\b)(?:\(([A-Da-d])\)|([A-Da-d])[\.\)]|\(([1-4])\))\s*)/g;

  for (let b = 0; b < qBlocks.length; b++) {
    const block = qBlocks[b];
    const fullText = block.lines.join("\n");
    let answer = "";

    const ansMatch = fullText.match(ansRegex);
    if (ansMatch) {
      answer = ansMatch[1].toUpperCase();
    }
    const textWithoutAns = fullText.replace(ansRegex, "").trim();

    const markers = [];
    let m;
    while ((m = markerRegex.exec(textWithoutAns)) !== null) {
      const label = (m[1] || m[2] || m[3]).toUpperCase();
      markers.push({
        label: label,
        index: m.index,
        length: m[0].length
      });
    }

    if (markers.length < 2) {
      items.push({
        qNum: block.qNum,
        question: textWithoutAns,
        options: [],
        answer: answer
      });
      continue;
    }

    const questionText = textWithoutAns.substring(0, markers[0].index).trim();
    const options = [];
    for (let i = 0; i < markers.length; i++) {
      const start = markers[i].index + markers[i].length;
      const end = (i + 1 < markers.length) ? markers[i + 1].index : textWithoutAns.length;
      options.push({
        label: markers[i].label,
        text: textWithoutAns.substring(start, end).trim()
      });
    }

    items.push({
      qNum: block.qNum,
      question: questionText,
      options: options,
      answer: answer
    });
  }

  return items;
}

/**
 * Measures and packs MCQ items into 2 columns of 260mm before moving to next A4 sheet
 */
function packMcqItemsAutoFit(items) {
  if (!items || items.length === 0) return [];
  if (typeof document === "undefined" || !document.body) {
    const chunks = [];
    const perPage = 18;
    for (let i = 0; i < items.length; i += perPage) chunks.push(items.slice(i, i + perPage));
    return chunks;
  }

  let measureSandbox = document.getElementById("gs-measure-sandbox");
  if (!measureSandbox) {
    measureSandbox = document.createElement("div");
    measureSandbox.id = "gs-measure-sandbox";
    measureSandbox.style.position = "absolute";
    measureSandbox.style.left = "-9999px";
    measureSandbox.style.top = "0";
    measureSandbox.style.width = "91.5mm";
    measureSandbox.style.visibility = "hidden";
    measureSandbox.style.pointerEvents = "none";
    document.body.appendChild(measureSandbox);
  }

  const heightProbe = document.createElement("div");
  heightProbe.style.height = "260mm";
  measureSandbox.appendChild(heightProbe);
  const colCapacityPx = heightProbe.offsetHeight || 980;
  measureSandbox.removeChild(heightProbe);

  const maxColHeight = colCapacityPx - 6;
  const itemHeights = [];

  measureSandbox.innerHTML = "";
  const frag = document.createDocumentFragment();

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const itemEl = createMcqDomElement(item);
    frag.appendChild(itemEl);
  }
  measureSandbox.appendChild(frag);

  const children = measureSandbox.children;
  for (let i = 0; i < children.length; i++) {
    const h = children[i].offsetHeight + 5;
    itemHeights.push(Math.max(24, h));
  }
  measureSandbox.innerHTML = "";

  const pageChunks = [];
  let currentPage = [];
  let currentColHeight = 0;
  let currentColIndex = 1;

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const h = itemHeights[i] || 50;

    if (currentColHeight + h <= maxColHeight) {
      currentPage.push(item);
      currentColHeight += h;
    } else {
      if (currentColIndex === 1) {
        currentColIndex = 2;
        currentColHeight = h;
        currentPage.push(item);
      } else {
        pageChunks.push(currentPage);
        currentPage = [item];
        currentColIndex = 1;
        currentColHeight = h;
      }
    }
  }

  if (currentPage.length > 0) {
    pageChunks.push(currentPage);
  }

  return pageChunks;
}

/**
 * Creates a single DOM element for an MCQ item with question, attached diagram, and options
 */
function createMcqDomElement(item) {
  const div = document.createElement("div");
  div.className = "mcq-item gs-document-font";

  const qNum = item.qNum;
  const diagramUrl = (appState.mcq && appState.mcq.questionImages) ? appState.mcq.questionImages[qNum] : "";

  let optLayoutClass = "mcq-options-grid2x2";
  if (appState.mcq && appState.mcq.optionsLayout === "grid2x2") {
    optLayoutClass = "mcq-options-grid2x2";
  } else if (appState.mcq && appState.mcq.optionsLayout === "inline4") {
    optLayoutClass = "mcq-options-inline4";
  } else if (appState.mcq && appState.mcq.optionsLayout === "stacked") {
    optLayoutClass = "mcq-options-stacked";
  } else {
    const maxOptLen = (item.options && item.options.length > 0) 
      ? Math.max(...(item.options.map(o => (o.text || "").length))) 
      : 0;
    if (maxOptLen <= 6 && item.options.length <= 4) {
      optLayoutClass = "mcq-options-inline4";
    } else if (maxOptLen <= 26 && item.options.length <= 4) {
      optLayoutClass = "mcq-options-grid2x2";
    } else {
      optLayoutClass = "mcq-options-stacked";
    }
  }

  let optionsHtml = "";
  if (item.options && item.options.length > 0) {
    optionsHtml = `
      <div class="mcq-options-container ${optLayoutClass}">
        ${item.options.map(opt => `
          <div class="mcq-opt-item">
            <span class="mcq-opt-label">(${escapeHtml(opt.label)})</span>
            <span class="mcq-opt-text">${highlightFormattedText(opt.text)}</span>
          </div>
        `).join("")}
      </div>
    `;
  }

  let diagramHtml = "";
  if (diagramUrl) {
    diagramHtml = `
      <div class="mcq-diagram-wrapper">
        <img src="${diagramUrl}" class="mcq-diagram-img" alt="Diagram for Q${qNum}">
      </div>
    `;
  }

  let cleanQText = item.question.replace(/^\s*(?:Q\.?\s*\d+|\(\d+\)|\d+[\.\)\:\-])\s*/, "").trim();

  div.innerHTML = `
    <div class="mcq-q-header">
      <span class="mcq-qnum" style="color: ${escapeHtml(appState.mcq.qNumColor || '#dc2626')};">${qNum}.</span>
      <div class="mcq-qtext">${highlightFormattedText(cleanQText)}</div>
    </div>
    ${diagramHtml}
    ${optionsHtml}
  `;

  return div;
}

/**
 * Creates authentic Platform / Rukmini A4 Page with Set Ribbon Header and Center Rule
 */
function createMcqA4PageElement(pageItems, pageNum, totalPages, isLastPage, allItems) {
  const sheet = document.createElement("div");
  sheet.className = "a4-sheet";
  sheet.dataset.page = pageNum;

  const watermarkText = (appState.mcq.watermarkText || "").trim();
  const watermarkHtml = watermarkText
    ? `<div class="gs-watermark-overlay pos-center" style="opacity: ${appState.mcq.watermarkOpacity || 0.12};">${escapeHtml(watermarkText)}</div>`
    : "";

  const topAppText = (appState.mcq.topAppBannerText || "").trim();
  const topAppUrl = (appState.mcq.topAppBannerUrl || "").trim() || "#";
  const topBannerHtml = topAppText ? `
    <div class="mcq-top-app-banner">
      <span><a href="${escapeHtml(topAppUrl)}" target="_blank">${escapeHtml(topAppText)}</a></span>
      <span class="app-pill">📱 Rukmini's Exam Prep App</span>
    </div>
  ` : "";

  const headerHtml = `
    <div class="mcq-header-box">
      <div class="mcq-header-left">
        <div class="series-sub">${escapeHtml(appState.mcq.seriesSubtitle || "Test Series for")}</div>
        <div class="exam-main">${escapeHtml(appState.mcq.examTitle || "Bihar Police Constable Exam.")}</div>
      </div>
      <div class="mcq-header-right">
        <div class="mcq-set-badge">
          <div class="set-tag">SET</div>
          <div class="set-number">${escapeHtml(appState.mcq.setNumber || "06")}</div>
        </div>
      </div>
    </div>
  `;

  const colDivider = appState.mcq.colDivider || "solid";
  const dividerStyle = colDivider === "none" ? "column-rule: none;" : (colDivider === "dashed" ? "column-rule: 1px dashed #000;" : "column-rule: 1px solid #000;");

  let itemsHtml = "";
  for (const item of pageItems) {
    const el = createMcqDomElement(item);
    itemsHtml += el.outerHTML;
  }

  // Answer Key Section if on last page
  let answerKeyHtml = "";
  if (isLastPage && appState.mcq.includeAnswerKey && allItems && allItems.length > 0) {
    const answered = allItems.filter(it => it.answer);
    if (answered.length > 0) {
      let rowsHtml = "";
      const colsPerRow = 10;
      for (let r = 0; r < answered.length; r += colsPerRow) {
        const slice = answered.slice(r, r + colsPerRow);
        rowsHtml += `<tr>${slice.map(a => `<th>Q${a.qNum}</th>`).join("")}</tr>`;
        rowsHtml += `<tr>${slice.map(a => `<td>${a.answer}</td>`).join("")}</tr>`;
      }
      answerKeyHtml = `
        <div class="mcq-answer-key-section">
          <div class="mcq-answer-key-title">उत्तरमाला / ANSWER KEY (SET ${escapeHtml(appState.mcq.setNumber || "06")})</div>
          <table class="mcq-answer-key-table">
            <tbody>${rowsHtml}</tbody>
          </table>
        </div>
      `;
    }
  }

  const footerHtml = `
    <div class="mcq-footer-box">
      <div class="mcq-footer-left">
        <a href="${escapeHtml(appState.mcq.footerWebUrl || '#')}" target="_blank">🌐 ${escapeHtml(appState.mcq.footerWebText || "www.rukminiprakashan.com")}</a>
      </div>
      <div class="mcq-footer-center">
        ◆ ${escapeHtml(appState.mcq.footerExamText || "BIHAR POLICE CONSTABLE EXAM., TEST SERIES VOL.-1")} ◆
      </div>
      <div class="mcq-footer-right">
        ◆ ${pageNum} ◆
      </div>
    </div>
  `;

  sheet.innerHTML = `
    ${watermarkHtml}
    <div class="a4-sheet-inner">
      ${topBannerHtml}
      ${headerHtml}
      <div class="mcq-columns-container" style="${dividerStyle}">
        ${itemsHtml}
        ${answerKeyHtml}
      </div>
      ${footerHtml}
    </div>
  `;

  return sheet;
}

/**
 * Creates a professional A4 Booklet Cover Title Page
 */
function createCoverPageElement() {
  const sheet = document.createElement("div");
  sheet.className = "a4-cover-sheet";
  sheet.dataset.isCover = "true";

  const logoImg = appState.instituteLogo 
    ? `<img src="${appState.instituteLogo}" class="cover-logo-center" alt="Institute Logo">` 
    : `<div class="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-700 to-indigo-600 text-white font-black text-2xl flex items-center justify-center mx-auto mb-3 shadow-lg shadow-blue-500/20">GS</div>`;

  const topPromo = appState.topBannerText.trim()
    ? `<div class="gs-top-banner pb-2"><a href="${escapeHtml(appState.topBannerUrl || '#')}" target="_blank">${escapeHtml(appState.topBannerText)}</a></div>`
    : "";

  const subjectClean = appState.centerSubjectText.replace(/^\(|\)$/g, "").trim() || "सामान्य अध्ययन";

  sheet.innerHTML = `
    <div class="a4-cover-inner gs-document-font">
      <!-- Top Section -->
      <div>
        ${topPromo}
        <div class="text-center pt-6">
          ${logoImg}
          <div class="text-xs uppercase tracking-widest font-extrabold text-blue-900 mb-1">${escapeHtml(appState.leftBrandText)}</div>
          <h1 class="cover-hero-title">${escapeHtml(appState.leftBrandText)} 2026</h1>
          <div class="cover-subject-pill">${escapeHtml(subjectClean)}</div>
        </div>
      </div>

      <!-- Center Features Card -->
      <div class="cover-features-box">
        <div class="text-sm font-bold text-slate-800 text-center mb-3">${escapeHtml(appState.coverSubtitle)}</div>
        <div class="grid grid-cols-2 gap-3 text-xs text-slate-700">
          <div class="flex items-center gap-2"><span class="text-emerald-600 font-black">✓</span> <span>प्रतियोगी परीक्षा विशेषांक</span></div>
          <div class="flex items-center gap-2"><span class="text-emerald-600 font-black">✓</span> <span>टू-कॉलम क्विक रिवीजन प्रारूप</span></div>
          <div class="flex items-center gap-2"><span class="text-emerald-600 font-black">✓</span> <span>विगत वर्षों के प्रश्नों का संकलन</span></div>
          <div class="flex items-center gap-2"><span class="text-emerald-600 font-black">✓</span> <span>नवीनतम पाठ्यक्रम पर आधारित</span></div>
        </div>
      </div>

      <!-- Bottom Target Exams & Join Banner -->
      <div class="space-y-3 pt-2">
        <div class="cover-tag-banner">
          ${escapeHtml(appState.coverTargetExams)}
        </div>
        <div class="text-center text-[11px] text-slate-500 font-medium">
          PDF Compilations & Daily Notes Available on: <a href="${escapeHtml(appState.topBannerUrl || '#')}" target="_blank" class="text-blue-600 font-bold hover:underline">${escapeHtml(appState.topBannerText)}</a>
        </div>
      </div>
    </div>
  `;

  return sheet;
}

/**
 * Smart Auto-Fit 100% Page Packing Engine:
 * Measures actual rendered height of items in a standard A4 column (91.5mm width),
 * and packs Column 1 and Column 2 to 100% capacity before spilling to the next page.
 * Guarantees NO unwanted blank space on the page!
 */
function packItemsAutoFit(items) {
  if (!items || items.length === 0) return [];

  if (typeof document === "undefined" || !document.body) {
    const perPage = Math.max(1, parseInt(appState.itemsPerPage) || 48);
    const chunks = [];
    for (let i = 0; i < items.length; i += perPage) {
      chunks.push(items.slice(i, i + perPage));
    }
    return chunks;
  }

  // Create or retrieve measurement sandbox matching exact column width (91.5mm)
  let measureSandbox = document.getElementById("gs-measure-sandbox");
  if (!measureSandbox) {
    measureSandbox = document.createElement("div");
    measureSandbox.id = "gs-measure-sandbox";
    // 210mm A4 width - 20mm horizontal padding = 190mm inner printable width.
    // 190mm - 7mm column gap = 183mm.
    // Each column = 183mm / 2 = 91.5mm!
    measureSandbox.style.cssText = "position:absolute; visibility:hidden; pointer-events:none; top:-9999px; left:-9999px; width:91.5mm; box-sizing:border-box; overflow:visible;";
    document.body.appendChild(measureSandbox);
  }

  measureSandbox.style.fontSize = `${appState.fontSize}px`;
  measureSandbox.style.lineHeight = appState.lineHeight;
  measureSandbox.style.fontFamily = "var(--font-devanagari)";

  // Measure actual column height in pixels dynamically (260mm)
  const heightProbe = document.createElement("div");
  heightProbe.style.height = "260mm";
  heightProbe.style.margin = "0";
  heightProbe.style.padding = "0";
  measureSandbox.appendChild(heightProbe);
  const colCapacityPx = (heightProbe.offsetHeight && heightProbe.offsetHeight > 500) ? heightProbe.offsetHeight : 982;
  measureSandbox.removeChild(heightProbe);

  // A tiny 6px breathing room at the bottom of the column to avoid subpixel clipping
  const maxColHeight = colCapacityPx - 6;

  // Render all items into measurement sandbox to measure their exact rendered height
  const bulletSymbol = appState.bulletStyle === "none" ? "" : `<span class="gs-bullet">${appState.bulletStyle}</span>`;
  const itemSpacingPx = parseFloat(appState.itemSpacing) || 3.5;
  const itemHeights = [];

  measureSandbox.innerHTML = "";
  const frag = document.createDocumentFragment();

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    if (item.isHeading) {
      const isSpanBoth = appState.topicBannerMode === "span-both";
      const headingDiv = document.createElement("div");
      headingDiv.className = `gs-topic-banner ${isSpanBoth ? "span-both" : "single-col"} gs-document-font`;
      headingDiv.innerHTML = `
        <div class="banner-decor-left"><span></span><span></span></div>
        <div class="banner-title">${escapeHtml(item.title)}</div>
        <div class="banner-decor-right"><span></span><span></span></div>
      `;
      headingDiv.style.marginBottom = `${itemSpacingPx}px`;
      frag.appendChild(headingDiv);
      continue;
    }

    let qText = item.question;
    let aText = item.answer;
    if (appState.autoFormatFormulas) {
      qText = formatScienceFormulas(qText);
      aText = formatScienceFormulas(aText);
    }
    qText = escapeHtmlPreservingTags(qText);
    aText = escapeHtmlPreservingTags(aText);
    const div = document.createElement("div");

    if (appState.answerStyle === "style-right") {
      div.className = "gs-qa-item style-right gs-document-font";
      div.innerHTML = `${bulletSymbol}<span class="gs-question">${qText}</span>${aText ? `<span class="gs-answer">– ${aText}</span>` : ""}`;
    } else {
      div.className = "gs-qa-item style-inline gs-document-font";
      div.innerHTML = `${bulletSymbol}<span class="gs-question">${qText}</span>${aText ? `<span class="gs-answer"> – ${aText}</span>` : ""}`;
    }
    div.style.marginBottom = `${itemSpacingPx}px`;
    frag.appendChild(div);
  }
  measureSandbox.appendChild(frag);

  // Read off the actual rendered height of every item
  const children = measureSandbox.children;
  for (let i = 0; i < children.length; i++) {
    const h = children[i].offsetHeight + itemSpacingPx;
    itemHeights.push(Math.max(16, h));
  }
  measureSandbox.innerHTML = ""; // clean up sandbox

  // Pack items into pages:
  // Each page has 2 columns: Column 1 (left) and Column 2 (right).
  // Column 1 fills until next item exceeds maxColHeight.
  // Then Column 2 fills until next item exceeds maxColHeight.
  // Then and ONLY then does Page 2 start!
  const pageChunks = [];
  let currentPage = [];
  let currentColHeight = 0;
  let currentColIndex = 1; // 1 or 2

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const h = itemHeights[i] || 38;

    if (currentColHeight + h <= maxColHeight) {
      // Fits in current column!
      currentPage.push(item);
      currentColHeight += h;
    } else {
      // Does not fit in current column!
      if (currentColIndex === 1) {
        // Column 1 is 100% full! Move to Column 2 of the same page!
        currentColIndex = 2;
        currentColHeight = 0;

        if (currentColHeight + h <= maxColHeight) {
          currentPage.push(item);
          currentColHeight += h;
        } else {
          currentPage.push(item);
          currentColHeight = maxColHeight;
        }
      } else {
        // Column 2 is also 100% full! This A4 page is completely packed!
        pageChunks.push(currentPage);

        // Start next page in Column 1
        currentPage = [item];
        currentColIndex = 1;
        currentColHeight = h;
      }
    }
  }

  if (currentPage.length > 0) {
    pageChunks.push(currentPage);
  }

  return pageChunks;
}

/**
 * Creates a single authentic A4 Sheet DOM Element
 */
function createA4PageElement(pageItems, pageNumber, totalPages, pageSequence) {
  const sheet = document.createElement("div");
  const frameClass = appState.outerFrame === "single" ? "frame-single" : (appState.outerFrame === "double" ? "frame-double" : "");
  sheet.className = `a4-sheet ${frameClass}`.trim();
  sheet.dataset.pageSequence = pageSequence;

  // Watermark Element
  let watermarkHtml = "";
  if (appState.watermarkPos !== "none" && appState.watermarkText.trim()) {
    const posClass = appState.watermarkPos === "center" ? "pos-center" : "pos-bottom-right";
    watermarkHtml = `
      <div class="gs-watermark-overlay ${posClass}" style="opacity: ${appState.watermarkOpacity};">
        ${escapeHtml(appState.watermarkText)}
      </div>
    `;
  }

  // Top Clickable Promo Banner
  let bannerHtml = "";
  if (appState.topBannerText.trim()) {
    const url = appState.topBannerUrl.trim() || "#";
    bannerHtml = `
      <div class="gs-top-banner">
        <a href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">
          ${escapeHtml(appState.topBannerText)}
        </a>
      </div>
    `;
  }

  // 3-Part Header with Optional Logo
  const logoHtml = appState.instituteLogo ? `<img src="${appState.instituteLogo}" class="header-logo-img" alt="Logo">` : "";
  const headerHtml = `
    <div class="gs-header-box">
      <div class="header-left flex items-center">${logoHtml}<span>${escapeHtml(appState.leftBrandText)}</span></div>
      <div class="header-center">${escapeHtml(appState.centerSubjectText)}</div>
      <div class="header-right">${pageNumber}</div>
    </div>
  `;

  // 3-Part Footer (Exact Mirror of Header)
  const footerHtml = `
    <div class="gs-footer-box">
      <div class="footer-left flex items-center">${logoHtml}<span>${escapeHtml(appState.leftBrandText)}</span></div>
      <div class="footer-center">${escapeHtml(appState.centerSubjectText)}</div>
      <div class="footer-right">${pageNumber}</div>
    </div>
  `;

  // Two-Column Items Content
  const hasDividerClass = appState.columnDivider !== "none" ? "has-divider" : "";
  const bulletSymbol = appState.bulletStyle === "none" ? "" : `<span class="gs-bullet">${appState.bulletStyle}</span>`;

  let itemsHtml = "";
  for (const item of pageItems) {
    if (item.isHeading) {
      const isSpanBoth = appState.topicBannerMode === "span-both";
      const bannerClass = isSpanBoth ? "gs-topic-banner span-both" : "gs-topic-banner single-col";
      itemsHtml += `
        <div class="${bannerClass} gs-document-font">
          <div class="banner-decor-left"><span></span><span></span></div>
          <div class="banner-title">${highlightFormattedText(item.title)}</div>
          <div class="banner-decor-right"><span></span><span></span></div>
        </div>
      `;
      continue;
    }

    const questionText = highlightFormattedText(item.question);
    const answerText = highlightFormattedText(item.answer);

    if (appState.answerStyle === "style-right") {
      // Mode 1: Authentic GS Pointer Right-Aligned
      itemsHtml += `
        <div class="gs-qa-item style-right gs-document-font">
          ${bulletSymbol}<span class="gs-question">${questionText}</span>
          ${answerText ? `<span class="gs-answer">– ${answerText}</span>` : ""}
        </div>
      `;
    } else {
      // Mode 2: Inline Bold
      itemsHtml += `
        <div class="gs-qa-item style-inline gs-document-font">
          ${bulletSymbol}<span class="gs-question">${questionText}</span>${answerText ? `<span class="gs-answer"> – ${answerText}</span>` : ""}
        </div>
      `;
    }
  }

  // Inner assembly
  sheet.innerHTML = `
    ${watermarkHtml}
    <div class="a4-sheet-inner">
      ${bannerHtml}
      ${headerHtml}
      <div class="gs-columns-container ${hasDividerClass}">
        ${itemsHtml}
      </div>
      ${footerHtml}
    </div>
  `;

  return sheet;
}

// Utility: HTML Escaping
function escapeHtml(str) {
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Utility: HTML Escaping with Safe Tag Preservation (sub, sup, b, i, u)
function escapeHtmlPreservingTags(str) {
  if (!str) return "";
  let safe = str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

  // Restore allowed safe formatting tags: sub, sup, b, i, u
  safe = safe
    .replace(/&lt;(\/?)sub&gt;/gi, "<$1sub>")
    .replace(/&lt;(\/?)sup&gt;/gi, "<$1sup>")
    .replace(/&lt;(\/?)b&gt;/gi, "<$1b>")
    .replace(/&lt;(\/?)i&gt;/gi, "<$1i>")
    .replace(/&lt;(\/?)u&gt;/gi, "<$1u>");

  return safe;
}

// Superscript digit mapping
const SUPERSCRIPT_MAP = {
  "0": "⁰", "1": "¹", "2": "²", "3": "³", "4": "⁴",
  "5": "⁵", "6": "⁶", "7": "⁷", "8": "⁸", "9": "⁹",
  "+": "⁺", "-": "⁻"
};

/**
 * 🧪 Advanced Scientific Formula & Subscript Beautifier
 * - Auto-corrects typos: H20 -> H₂O, D20 -> D₂O
 * - Converts chemical formulas into true Unicode subscripts: H₂O, CO₂, SO₂, H₂SO₄, CaCO₃, etc.
 * - Formats units and exponents: m/s² (from m/s2 or m/s^2), m², cm³, 10⁵, 10⁻³
 */
function formatScienceFormulas(text) {
  if (!text) return "";
  let str = text;

  // 1. Auto-correct common typos (typing zero '0' instead of capital 'O')
  str = str.replace(/\bH20\b/gi, "H₂O");
  str = str.replace(/\bD20\b/gi, "D₂O");
  str = str.replace(/\bCO0\b/gi, "CO₂");

  // 2. Comprehensive Chemical Formulas in General Science / GS Pointer
  const formulaReplacements = [
    // Water, Heavy Water, Peroxide
    [/\bH2O\b/gi, "H₂O"],
    [/\bD2O\b/gi, "D₂O"],
    [/\bT2O\b/gi, "T₂O"],
    [/\bH2O2\b/gi, "H₂O₂"],
    // Carbon, Sulfur, Nitrogen Oxides & Gases
    [/\bCO2\b/gi, "CO₂"],
    [/\bSO2\b/gi, "SO₂"],
    [/\bSO3\b/gi, "SO₃"],
    [/\bNO2\b/gi, "NO₂"],
    [/\bN2O\b/gi, "N₂O"],
    [/\bO2\b/g, "O₂"],
    [/\bN2\b/g, "N₂"],
    [/\bO3\b/gi, "O₃"],
    [/\bCl2\b/gi, "Cl₂"],
    [/\bH2\b/g, "H₂"],
    [/\bF2\b/gi, "F₂"],
    [/\bBr2\b/gi, "Br₂"],
    [/\bI2\b/gi, "I₂"],
    // Hydrocarbons & Organic Compounds
    [/\bCH4\b/gi, "CH₄"],
    [/\bC2H6\b/gi, "C₂H₆"],
    [/\bC2H4\b/gi, "C₂H₄"],
    [/\bC2H2\b/gi, "C₂H₂"],
    [/\bC3H8\b/gi, "C₃H₈"],
    [/\bC4H10\b/gi, "C₄H₁₀"],
    [/\bC6H6\b/gi, "C₆H₆"],
    [/\bC2H5OH\b/gi, "C₂H₅OH"],
    [/\bCH3OH\b/gi, "CH₃OH"],
    [/\bCH3COOH\b/gi, "CH₃COOH"],
    [/\bC6H12O6\b/gi, "C₆H₁₂O₆"],
    [/\bC12H22O11\b/gi, "C₁₂H₂₂O₁₁"],
    // Acids
    [/\bH2SO4\b/gi, "H₂SO₄"],
    [/\bHNO3\b/gi, "HNO₃"],
    [/\bH3PO4\b/gi, "H₃PO₄"],
    [/\bH2CO3\b/gi, "H₂CO₃"],
    // Salts, Minerals, Bases
    [/\bCaCO3\b/gi, "CaCO₃"],
    [/\bNaHCO3\b/gi, "NaHCO₃"],
    [/\bNa2CO3\b/gi, "Na₂CO₃"],
    [/\bCaOCl2\b/gi, "CaOCl₂"],
    [/\bCa\(OH\)2\b/gi, "Ca(OH)₂"],
    [/\bMg\(OH\)2\b/gi, "Mg(OH)₂"],
    [/\bAl\(OH\)3\b/gi, "Al(OH)₃"],
    [/\bNH3\b/gi, "NH₃"],
    [/\bNH4Cl\b/gi, "NH₄Cl"],
    [/\b\(NH4\)2SO4\b/gi, "(NH₄)₂SO₄"],
    [/\bKMnO4\b/gi, "KMnO₄"],
    [/\bKClO3\b/gi, "KClO₃"],
    [/\bFe2O3\b/gi, "Fe₂O₃"],
    [/\bFe3O4\b/gi, "Fe₃O₄"],
    [/\bAl2O3\b/gi, "Al₂O₃"],
    [/\bMgSO4\b/gi, "MgSO₄"],
    [/\bCaCl2\b/gi, "CaCl₂"],
    [/\bCuSO4\b/gi, "CuSO₄"],
    [/\bZnSO4\b/gi, "ZnSO₄"],
    [/\bFeSO4\b/gi, "FeSO₄"],
    [/\bPbO2\b/gi, "PbO₂"],
    [/\bP2O5\b/gi, "P₂O₅"],
    [/\bAgNO3\b/gi, "AgNO₃"],
    [/\bAgCl\b/gi, "AgCl"],
    [/\bCa3\(PO4\)2\b/gi, "Ca₃(PO₄)₂"],
    // Hydrates
    [/\bCaSO4[\.·]2H2O\b/gi, "CaSO₄·2H₂O"],
    [/\bCaSO4[\.·]1\/2H2O\b/gi, "CaSO₄·½H₂O"],
    [/\bNa2CO3[\.·]10H2O\b/gi, "Na₂CO₃·10H₂O"],
    [/\bCuSO4[\.·]5H2O\b/gi, "CuSO₄·5H₂O"],
    [/\bFeSO4[\.·]7H2O\b/gi, "FeSO₄·7H₂O"]
  ];

  for (let i = 0; i < formulaReplacements.length; i++) {
    str = str.replace(formulaReplacements[i][0], formulaReplacements[i][1]);
  }

  // 3. Units & Exponents (m/s2 -> m/s², m2 -> m², cm3 -> cm³, etc.)
  str = str.replace(/\b(m|cm|mm|km)\/s\^?2\b/gi, "$1/s²");
  str = str.replace(/\b(m|cm|mm|km)\^?2\b/gi, "$1²");
  str = str.replace(/\b(m|cm|mm|km)\^?3\b/gi, "$1³");

  // Power of 10: 10^5 -> 10⁵, 10^-3 -> 10⁻³
  str = str.replace(/10\^([\+\-]?[0-9]+)/g, (match, exp) => {
    return "10" + exp.split("").map((c) => SUPERSCRIPT_MAP[c] || c).join("");
  });

  return str;
}

// Hindi Spelling Dictionary for Competitive Exams & GS
const HINDI_SPELLING_DICTIONARY = [
  ["हाईड्रोजन", "हाइड्रोजन"],
  ["आक्सीजन", "ऑक्सीजन"],
  ["नाईट्रोजन", "नाइट्रोजन"],
  ["सल्फ्यूरीक", "सल्फ्यूरिक"],
  ["कैलशियम", "कैल्शियम"],
  ["कैल्सियम", "कैल्शियम"],
  ["पोटेसियम", "पोटैशियम"],
  ["पोटाशियम", "पोटैशियम"],
  ["मैगनीशियम", "मैग्नीशियम"],
  ["मैग्नेशियम", "मैग्नीशियम"],
  ["एल्युमिनियम", "ऐलुमिनियम"],
  ["एल्यूमिनियम", "ऐलुमिनियम"],
  ["गुरूत्वाकर्षण", "गुरुत्वाकर्षण"],
  ["वायुमण्डल", "वायुमंडल"],
  ["डाईऑक्साइड", "डाइऑक्साइड"],
  ["डेसीबल", "डेसिबल"],
  ["न्युटन", "न्यूटन"],
  ["आइंस्टाइन", "आइंस्टीन"],
  ["ऐतिहासीक", "ऐतिहासिक"],
  ["मोहनजोदारो", "मोहनजोदड़ो"],
  ["मोहनजोदडो", "मोहनजोदड़ो"],
  ["ऋगवेद", "ऋग्वेद"],
  ["यजुरवेद", "यजुर्वेद"],
  ["अथर्ववेद", "अथर्ववेद"],
  ["उपनीषद", "उपनिषद"],
  ["बौध", "बौद्ध"],
  ["जैनधर्म", "जैन धर्म"],
  ["संस्क्रति", "संस्कृति"],
  ["पुरातत्वविद", "पुरातत्वविद्"]
];

/**
 * 1-Click Spelling & Formula Batch Corrector
 * Cleans user's raw pasted text, fixes H20 -> H₂O, formulas and Hindi typos.
 */
function runFullCorrections(text) {
  if (!text) return { text: "", formulaFixCount: 0, spellingFixCount: 0 };
  let str = text;
  let formulaFixCount = 0;
  let spellingFixCount = 0;

  // Typo checks & counts
  str = str.replace(/\bH20\b/gi, () => { formulaFixCount++; return "H₂O"; });
  str = str.replace(/\bD20\b/gi, () => { formulaFixCount++; return "D₂O"; });
  str = str.replace(/\bCO0\b/gi, () => { formulaFixCount++; return "CO₂"; });

  // Standard chemical formulas
  const chemList = [
    [/\bH2O\b/g, "H₂O"], [/\bD2O\b/g, "D₂O"], [/\bCO2\b/g, "CO₂"], [/\bSO2\b/g, "SO₂"],
    [/\bNO2\b/g, "NO₂"], [/\bO2\b/g, "O₂"], [/\bN2\b/g, "N₂"], [/\bO3\b/g, "O₃"],
    [/\bCH4\b/g, "CH₄"], [/\bNH3\b/g, "NH₃"], [/\bH2SO4\b/g, "H₂SO₄"], [/\bHNO3\b/g, "HNO₃"],
    [/\bCaCO3\b/g, "CaCO₃"], [/\bNaHCO3\b/g, "NaHCO₃"], [/\bNa2CO3\b/g, "Na₂CO₃"],
    [/\bC6H12O6\b/g, "C₆H₁₂O₆"], [/\bKMnO4\b/g, "KMnO₄"], [/\bFe2O3\b/g, "Fe₂O₃"],
    [/\bAl2O3\b/g, "Al₂O₃"], [/\bMgSO4\b/g, "MgSO₄"], [/\bCaCl2\b/g, "CaCl₂"],
    [/\bCuSO4\b/g, "CuSO₄"], [/\bH2O2\b/g, "H₂O₂"]
  ];
  for (let i = 0; i < chemList.length; i++) {
    const [re, rep] = chemList[i];
    str = str.replace(re, () => { formulaFixCount++; return rep; });
  }

  // Units
  str = str.replace(/\b(m|cm|mm|km)\/s\^?2\b/gi, (m, u) => { formulaFixCount++; return u + "/s²"; });
  str = str.replace(/\b(m|cm|mm|km)\^?2\b/gi, (m, u) => { formulaFixCount++; return u + "²"; });
  str = str.replace(/\b(m|cm|mm|km)\^?3\b/gi, (m, u) => { formulaFixCount++; return u + "³"; });
  str = str.replace(/10\^([\+\-]?[0-9]+)/g, (match, exp) => {
    formulaFixCount++;
    return "10" + exp.split("").map((c) => SUPERSCRIPT_MAP[c] || c).join("");
  });

  // Hindi Spellings
  for (let i = 0; i < HINDI_SPELLING_DICTIONARY.length; i++) {
    const [wrong, right] = HINDI_SPELLING_DICTIONARY[i];
    const re = new RegExp("(^|[^\\u0900-\\u097F])" + wrong + "(?=[^\\u0900-\\u097F]|$)", "g");
    if (re.test(str)) {
      str = str.replace(re, (m, p1) => {
        spellingFixCount++;
        return p1 + right;
      });
    }
  }

  return { text: str, formulaFixCount, spellingFixCount };
}

// Helper: Format and Highlight Text (Formulas + Search)
function highlightFormattedText(text) {
  if (!text) return "";
  let processed = text;
  if (appState.autoFormatFormulas) {
    processed = formatScienceFormulas(processed);
  }
  const safe = escapeHtmlPreservingTags(processed);
  if (!appState.searchQuery || !appState.searchQuery.trim()) return safe;
  const q = appState.searchQuery.trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regex = new RegExp(`(${q})`, "gi");
  return safe.replace(regex, '<mark class="search-highlight">$1</mark>');
}

// ==========================================
// UI SYNCHRONIZATION & INTERACTION
// ==========================================
function syncInputsFromState() {
  // Mode selection & view
  updateModeView(appState.currentMode || "pointer");

  // GS Pointer Branding inputs
  setValue("input-left-brand", appState.leftBrandText);
  setValue("input-center-subject", appState.centerSubjectText);
  setValue("input-top-banner-text", appState.topBannerText);
  setValue("input-top-banner-url", appState.topBannerUrl);
  setValue("input-watermark-text", appState.watermarkText);
  setValue("select-watermark-pos", appState.watermarkPos);
  setValue("input-watermark-opacity", appState.watermarkOpacity);
  setText("val-watermark-opacity", Math.round(appState.watermarkOpacity * 100) + "%");
  setValue("input-start-page", appState.startingPageNumber);
  setChecked("check-include-cover", appState.includeCoverPage);

  // GS Pointer Layout inputs
  setValue("select-pagination-mode", appState.paginationMode || "autofit");
  const sliderWrapper = document.getElementById("wrapper-items-slider");
  if (sliderWrapper) {
    if (appState.paginationMode === "manual") {
      sliderWrapper.classList.remove("hidden");
    } else {
      sliderWrapper.classList.add("hidden");
    }
  }
  setValue("input-items-per-page", appState.itemsPerPage);
  setText("val-items-per-page", appState.itemsPerPage);
  setValue("select-item-spacing", appState.itemSpacing || "3.5");
  setText("val-item-spacing", `${appState.itemSpacing || 3.5}px`);
  setValue("input-font-size", appState.fontSize);
  setText("val-font-size", `${appState.fontSize}px`);
  setValue("select-line-height", appState.lineHeight);
  setValue("select-column-gap", appState.columnGap);
  setValue("select-column-divider", appState.columnDivider);
  setValue("select-answer-style", appState.answerStyle);
  setValue("select-topic-banner-mode", appState.topicBannerMode || "single-column");
  setValue("input-answer-color", appState.answerColor || "#dc2626");
  setValue("input-question-color", appState.questionColor || "#000000");
  setValue("select-bullet-style", appState.bulletStyle);
  setValue("select-outer-frame", appState.outerFrame || "none");
  setChecked("check-strip-q", appState.stripQNumbers);
  setChecked("check-auto-formulas", appState.autoFormatFormulas !== false);

  // Logo status indicator
  const logoStatus = document.getElementById("label-logo-status");
  const btnRemoveLogo = document.getElementById("btn-remove-logo");
  if (logoStatus) {
    if (appState.instituteLogo) {
      logoStatus.innerText = "Active";
      logoStatus.className = "text-[10px] text-emerald-600 font-bold";
      if (btnRemoveLogo) btnRemoveLogo.classList.remove("hidden");
    } else {
      logoStatus.innerText = "None";
      logoStatus.className = "text-[10px] text-slate-400 font-medium";
      if (btnRemoveLogo) btnRemoveLogo.classList.add("hidden");
    }
  }

  // Pointer Content textarea
  setValue("textarea-content", appState.rawContent);

  // MCQ Practice Set State Sync
  if (!appState.mcq) appState.mcq = {};
  setValue("textarea-mcq-content", appState.mcq.rawMcqContent || "");
  setValue("input-mcq-series-sub", appState.mcq.seriesSubtitle || "Test Series for");
  setValue("input-mcq-exam-title", appState.mcq.examTitle || "Bihar Police Constable Exam.");
  setValue("input-mcq-set-num", appState.mcq.setNumber || "06");
  setText("preview-set-badge", appState.mcq.setNumber || "06");
  setValue("input-mcq-top-app-text", appState.mcq.topAppBannerText || "");
  setValue("input-mcq-top-app-url", appState.mcq.topAppBannerUrl || "");
  setValue("input-mcq-footer-text", appState.mcq.footerExamText || "");
  setValue("input-mcq-footer-web", appState.mcq.footerWebText || "");
  setValue("input-mcq-start-page", appState.mcq.startingPageNumber || 99);
  setValue("input-mcq-watermark", appState.mcq.watermarkText || "");
  setValue("select-mcq-options-layout", appState.mcq.optionsLayout || "auto");
  setValue("select-mcq-qnum-color", appState.mcq.qNumColor || "#dc2626");
  setValue("select-mcq-col-divider", appState.mcq.colDivider || "solid");
  setChecked("check-mcq-answer-key", appState.mcq.includeAnswerKey !== false);
  setValue("input-mcq-font-size", appState.mcq.fontSize || 11.5);
  setText("val-mcq-font-size", `${appState.mcq.fontSize || 11.5}px`);

  // Active MCQ Tab & Attached Diagrams
  switchMcqTab(appState.mcqActiveTab || "content");
  renderAttachedImagesList();
}

function setValue(id, val) {
  const el = document.getElementById(id);
  if (el) el.value = val;
}

function setText(id, text) {
  const el = document.getElementById(id);
  if (el) el.innerText = text;
}

function setChecked(id, bool) {
  const el = document.getElementById(id);
  if (el) el.checked = Boolean(bool);
}

function updateStatisticsBadge(itemsCount, totalPages) {
  const statsEl = document.getElementById("document-stats-badge");
  if (statsEl) {
    const isMcq = appState.currentMode === "mcq";
    statsEl.innerHTML = `
      <span class="inline-flex items-center gap-1.5 font-medium text-slate-700">
        <span class="w-2 h-2 rounded-full ${isMcq ? 'bg-red-500' : 'bg-emerald-500'}"></span>
        <strong>${itemsCount}</strong> ${isMcq ? 'MCQ Questions' : 'Q&A Items'}
      </span>
      <span class="text-slate-300">•</span>
      <span class="text-slate-600"><strong>${totalPages}</strong> A4 Page${totalPages === 1 ? "" : "s"}</span>
    `;
  }

  const pageNavInfo = document.getElementById("page-nav-info");
  if (pageNavInfo) {
    if (appState.currentViewPage > totalPages) appState.currentViewPage = totalPages;
    if (appState.currentViewPage < 1) appState.currentViewPage = 1;
    pageNavInfo.innerText = `${appState.currentViewPage} / ${totalPages} Page${totalPages === 1 ? "" : "s"}`;
  }
}

function scrollToPage(pageNum) {
  const sheets = document.querySelectorAll(".a4-sheet");
  if (!sheets.length) return;
  const targetNum = Math.max(1, Math.min(pageNum, sheets.length));
  appState.currentViewPage = targetNum;

  const targetSheet = document.querySelector(`.a4-sheet[data-page-sequence="${targetNum}"]`);
  if (targetSheet) {
    targetSheet.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const pageNavInfo = document.getElementById("page-nav-info");
  if (pageNavInfo) {
    pageNavInfo.innerText = `${targetNum} / ${sheets.length} Page${sheets.length === 1 ? "" : "s"}`;
  }
}

// ==========================================
// PREVIEW ZOOM & RESPONSIVE SCALING
// ==========================================
function setPreviewZoom(zoomLevel) {
  appState.previewZoom = zoomLevel;
  appState.fitToScreen = false;
  applyZoomScale();
}

function applyZoomScale() {
  const target = document.getElementById("pages-render-target");
  const zoomText = document.getElementById("zoom-percent-display");
  if (!target) return;

  if (appState.fitToScreen) {
    // Calculate fit to viewport width
    const scrollContainer = document.getElementById("preview-scroll-container");
    if (scrollContainer) {
      const containerWidth = scrollContainer.clientWidth - 48; // padding
      const a4WidthPx = 794; // 210mm in standard 96dpi pixels approx
      const fitZoom = Math.min(130, Math.max(35, Math.floor((containerWidth / a4WidthPx) * 100)));
      appState.previewZoom = fitZoom;
    }
  }

  const scale = appState.previewZoom / 100;
  target.style.transform = `scale(${scale})`;
  target.style.transformOrigin = "top center";

  // Adjust container height to avoid bottom overflow gap
  const sheets = target.querySelectorAll(".a4-sheet");
  if (sheets.length > 0) {
    // 297mm in pixels approx 1123px + margin gap
    const sheetHeightPx = 1123;
    const totalHeight = sheets.length * (sheetHeightPx + 32);
    target.style.marginBottom = `${-(1 - scale) * totalHeight}px`;
  }

  if (zoomText) {
    zoomText.innerText = `${appState.previewZoom}%`;
  }
}

// ==========================================
// PRINT ENGINE TRIGGER
// ==========================================
function triggerPrintEngine() {
  // Make sure full document is fresh
  renderDocument();

  // Show helpful hint before print
  showToast("Opening Print / Save as PDF dialog...", "info");

  // Small timeout to let DOM settle and webfonts render
  setTimeout(() => {
    window.print();
  }, 250);
}

// ==========================================
// TOAST NOTIFICATION SYSTEM
// ==========================================
function showToast(message, type = "info") {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  const colors = {
    success: "bg-emerald-800 text-white border-emerald-700",
    error: "bg-rose-800 text-white border-rose-700",
    info: "bg-slate-900 text-white border-slate-700"
  };

  const icons = {
    success: "✓",
    error: "✕",
    info: "ℹ"
  };

  toast.className = `flex items-center gap-2.5 px-4 py-2.5 rounded-lg shadow-lg text-sm border ${colors[type] || colors.info} transform transition-all duration-300 translate-y-2 opacity-0 select-none`;
  toast.innerHTML = `
    <span class="font-bold text-xs bg-white/20 px-1.5 py-0.5 rounded">${icons[type] || "•"}</span>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  // Trigger animation
  requestAnimationFrame(() => {
    toast.classList.remove("translate-y-2", "opacity-0");
  });

  // Auto remove after 3.2 seconds
  setTimeout(() => {
    toast.classList.add("translate-y-2", "opacity-0");
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

// ==========================================
// EVENT LISTENERS BINDING
// ==========================================
function setupEventListeners() {
  // Textarea input
  const textarea = document.getElementById("textarea-content");
  if (textarea) {
    textarea.addEventListener("input", (e) => {
      appState.rawContent = e.target.value;
      renderDocument();
    });
  }

  // Branding inputs
  bindInput("input-left-brand", "leftBrandText");
  bindInput("input-center-subject", "centerSubjectText");
  bindInput("input-top-banner-text", "topBannerText");
  bindInput("input-top-banner-url", "topBannerUrl");
  bindInput("input-watermark-text", "watermarkText");
  bindInput("select-watermark-pos", "watermarkPos");

  const opacityInput = document.getElementById("input-watermark-opacity");
  if (opacityInput) {
    opacityInput.addEventListener("input", (e) => {
      appState.watermarkOpacity = parseFloat(e.target.value);
      setText("val-watermark-opacity", Math.round(appState.watermarkOpacity * 100) + "%");
      renderDocument();
    });
  }

  const startPageInput = document.getElementById("input-start-page");
  if (startPageInput) {
    startPageInput.addEventListener("input", (e) => {
      appState.startingPageNumber = parseInt(e.target.value) || 1;
      renderDocument();
    });
  }

  const coverCheck = document.getElementById("check-include-cover");
  if (coverCheck) {
    coverCheck.addEventListener("change", (e) => {
      appState.includeCoverPage = e.target.checked;
      renderDocument();
    });
  }

  // Layout inputs
  const paginationModeSelect = document.getElementById("select-pagination-mode");
  if (paginationModeSelect) {
    paginationModeSelect.addEventListener("change", (e) => {
      appState.paginationMode = e.target.value;
      const sliderWrapper = document.getElementById("wrapper-items-slider");
      if (sliderWrapper) {
        if (appState.paginationMode === "manual") {
          sliderWrapper.classList.remove("hidden");
        } else {
          sliderWrapper.classList.add("hidden");
        }
      }
      renderDocument();
    });
  }

  const itemSpacingSelect = document.getElementById("select-item-spacing");
  if (itemSpacingSelect) {
    itemSpacingSelect.addEventListener("change", (e) => {
      appState.itemSpacing = e.target.value;
      setText("val-item-spacing", `${appState.itemSpacing}px`);
      renderDocument();
    });
  }

  const itemsPerPageInput = document.getElementById("input-items-per-page");
  if (itemsPerPageInput) {
    itemsPerPageInput.addEventListener("input", (e) => {
      appState.itemsPerPage = parseInt(e.target.value) || 48;
      setText("val-items-per-page", appState.itemsPerPage);
      renderDocument();
    });
  }

  const fontSizeInput = document.getElementById("input-font-size");
  if (fontSizeInput) {
    fontSizeInput.addEventListener("input", (e) => {
      appState.fontSize = parseFloat(e.target.value) || 12;
      setText("val-font-size", `${appState.fontSize}px`);
      renderDocument();
    });
  }

  bindInput("select-line-height", "lineHeight");
  bindInput("select-column-gap", "columnGap");
  bindInput("select-column-divider", "columnDivider");
  bindInput("select-answer-style", "answerStyle");
  bindInput("select-topic-banner-mode", "topicBannerMode");
  bindInput("select-bullet-style", "bulletStyle");

  // Answer & Question Color Controls
  const ansColorInput = document.getElementById("input-answer-color");
  if (ansColorInput) {
    ansColorInput.addEventListener("input", (e) => {
      appState.answerColor = e.target.value;
      renderDocument();
    });
  }

  const qColorInput = document.getElementById("input-question-color");
  if (qColorInput) {
    qColorInput.addEventListener("input", (e) => {
      appState.questionColor = e.target.value;
      renderDocument();
    });
  }

  document.querySelectorAll(".btn-color-quick").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const color = e.currentTarget.dataset.color;
      appState.answerColor = color;
      setValue("input-answer-color", color);
      renderDocument();
    });
  });

  document.querySelectorAll(".btn-qcolor-quick").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const color = e.currentTarget.dataset.color;
      appState.questionColor = color;
      setValue("input-question-color", color);
      renderDocument();
    });
  });

  // 1-Click Language Translation Buttons
  const btnTransEn = document.getElementById("btn-trans-to-en");
  if (btnTransEn) {
    btnTransEn.addEventListener("click", () => {
      convertLanguageBatch("hi", "en");
    });
  }

  const btnTransHi = document.getElementById("btn-trans-to-hi");
  if (btnTransHi) {
    btnTransHi.addEventListener("click", () => {
      convertLanguageBatch("en", "hi");
    });
  }

  // Outer Page Frame
  bindInput("select-outer-frame", "outerFrame");

  // Institute Logo File Upload & Remove
  const logoInput = document.getElementById("input-logo-file");
  const btnRemoveLogo = document.getElementById("btn-remove-logo");
  const logoStatusEl = document.getElementById("label-logo-status");

  if (logoInput) {
    logoInput.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (evt) => {
        appState.instituteLogo = evt.target.result;
        if (btnRemoveLogo) btnRemoveLogo.classList.remove("hidden");
        if (logoStatusEl) {
          logoStatusEl.innerText = "Active";
          logoStatusEl.className = "text-[10px] text-emerald-600 font-bold";
        }
        renderDocument();
        showToast("Institute Logo loaded into Header!", "success");
      };
      reader.readAsDataURL(file);
    });
  }

  if (btnRemoveLogo) {
    btnRemoveLogo.addEventListener("click", () => {
      appState.instituteLogo = "";
      if (logoInput) logoInput.value = "";
      btnRemoveLogo.classList.add("hidden");
      if (logoStatusEl) {
        logoStatusEl.innerText = "None";
        logoStatusEl.className = "text-[10px] text-slate-400 font-medium";
      }
      renderDocument();
      showToast("Logo removed from header.", "info");
    });
  }

  // File Upload (.txt / .csv)
  const fileUploadInput = document.getElementById("input-file-upload");
  if (fileUploadInput) {
    fileUploadInput.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (evt) => {
        appState.rawContent = evt.target.result;
        setValue("textarea-content", appState.rawContent);
        renderDocument();
        showToast(`Loaded "${file.name}" successfully!`, "success");
      };
      reader.readAsText(file);
    });
  }

  // Copy Content to Clipboard
  const btnCopyContent = document.getElementById("btn-copy-content");
  if (btnCopyContent) {
    btnCopyContent.addEventListener("click", () => {
      if (!appState.rawContent || !appState.rawContent.trim()) {
        showToast("Nothing to copy!", "error");
        return;
      }
      navigator.clipboard.writeText(appState.rawContent).then(() => {
        showToast("Copied all content to clipboard!", "success");
      });
    });
  }

  // Download Content as .txt
  const btnDownloadContent = document.getElementById("btn-download-content");
  if (btnDownloadContent) {
    btnDownloadContent.addEventListener("click", () => {
      if (!appState.rawContent || !appState.rawContent.trim()) {
        showToast("No content to export!", "error");
        return;
      }
      const blob = new Blob([appState.rawContent], { type: "text/plain;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "gs-pointer-questions.txt";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      showToast("Questions exported as .txt file!", "success");
    });
  }

  // Live Preview Question Search
  const searchInput = document.getElementById("input-preview-search");
  const btnClearSearch = document.getElementById("btn-clear-search");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      appState.searchQuery = e.target.value;
      if (btnClearSearch) {
        if (appState.searchQuery) btnClearSearch.classList.remove("hidden");
        else btnClearSearch.classList.add("hidden");
      }
      renderDocument();
    });
  }

  if (btnClearSearch) {
    btnClearSearch.addEventListener("click", () => {
      appState.searchQuery = "";
      if (searchInput) searchInput.value = "";
      btnClearSearch.classList.add("hidden");
      renderDocument();
    });
  }

  const stripQCheck = document.getElementById("check-strip-q");
  if (stripQCheck) {
    stripQCheck.addEventListener("change", (e) => {
      appState.stripQNumbers = e.target.checked;
      renderDocument();
    });
  }

  const autoFormulasCheck = document.getElementById("check-auto-formulas");
  if (autoFormulasCheck) {
    autoFormulasCheck.addEventListener("change", (e) => {
      appState.autoFormatFormulas = e.target.checked;
      renderDocument();
    });
  }

  // 1-Click Fix Formulas (H₂O, CO₂ etc.) & Hindi Spellings
  const btnFixFormulas = document.getElementById("btn-fix-formulas");
  if (btnFixFormulas) {
    btnFixFormulas.addEventListener("click", () => {
      const textarea = document.getElementById("textarea-content");
      if (!textarea) return;
      const currentVal = textarea.value || "";
      if (!currentVal.trim()) {
        showToast("Please enter or paste questions first!", "info");
        return;
      }
      const res = runFullCorrections(currentVal);
      textarea.value = res.text;
      appState.rawContent = res.text;
      renderDocument();
      const total = res.formulaFixCount + res.spellingFixCount;
      if (total > 0) {
        showToast(`✨ ${res.formulaFixCount} formulas (H₂O, CO₂ etc.) & ${res.spellingFixCount} spellings auto-corrected!`, "success");
      } else {
        showToast("All formulas (H₂O) and spellings are already clean and correct!", "info");
      }
    });
  }

  // Action Buttons
  const btnPrint = document.getElementById("btn-print-pdf");
  if (btnPrint) btnPrint.addEventListener("click", triggerPrintEngine);

  const btnPrintHeader = document.getElementById("btn-print-header");
  if (btnPrintHeader) btnPrintHeader.addEventListener("click", triggerPrintEngine);

  const btnSave = document.getElementById("btn-save-template");
  if (btnSave) btnSave.addEventListener("click", saveSettingsToStorage);

  const btnReset = document.getElementById("btn-reset-defaults");
  if (btnReset) btnReset.addEventListener("click", resetSettingsToDefault);

  const btnClear = document.getElementById("btn-clear-content");
  if (btnClear) {
    btnClear.addEventListener("click", () => {
      if (confirm("Clear all content from the input area?")) {
        appState.rawContent = "";
        setValue("textarea-content", "");
        renderDocument();
        showToast("Content cleared.", "info");
      }
    });
  }

  // Sample Data Loaders
  document.querySelectorAll("[data-sample-preset]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const presetKey = e.currentTarget.dataset.samplePreset;
      if (SAMPLE_DATASETS[presetKey]) {
        appState.rawContent = SAMPLE_DATASETS[presetKey];
        if (presetKey === "history") {
          appState.centerSubjectText = "(भारतीय इतिहास)";
        } else if (presetKey === "polity") {
          appState.centerSubjectText = "(भारतीय राजव्यवस्था)";
        } else if (presetKey === "hindi") {
          appState.centerSubjectText = "(सामान्य हिंदी)";
        } else if (presetKey === "science") {
          appState.centerSubjectText = "(सामान्य विज्ञान)";
        }
        syncInputsFromState();
        renderDocument();
        showToast(`Loaded ${presetKey.toUpperCase()} sample questions!`, "success");
      }
    });
  });

  // Tab Switching in Control Panel
  document.querySelectorAll(".tab-button").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const targetTab = e.currentTarget.dataset.tab;
      switchTab(targetTab);
    });
  });

  // Dual Engine Mode Switcher
  const btnModePointer = document.getElementById("btn-mode-pointer");
  if (btnModePointer) {
    btnModePointer.addEventListener("click", () => setAppMode("pointer"));
  }

  const btnModeMcq = document.getElementById("btn-mode-mcq");
  if (btnModeMcq) {
    btnModeMcq.addEventListener("click", () => setAppMode("mcq"));
  }

  // MCQ Tab Switching
  document.querySelectorAll(".mcq-tab-button").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const tab = e.currentTarget.dataset.mcqTab;
      switchMcqTab(tab);
    });
  });

  // MCQ Content Textarea
  const textareaMcq = document.getElementById("textarea-mcq-content");
  if (textareaMcq) {
    textareaMcq.addEventListener("input", (e) => {
      if (!appState.mcq) appState.mcq = {};
      appState.mcq.rawMcqContent = e.target.value;
      renderDocument();
    });
  }

  // MCQ Word (.docx / .doc) and Text File Upload
  const inputMcqUpload = document.getElementById("input-mcq-file-upload");
  if (inputMcqUpload) {
    inputMcqUpload.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (!file) return;

      const fileName = file.name.toLowerCase();
      if (fileName.endsWith(".docx") || fileName.endsWith(".doc")) {
        if (typeof mammoth !== "undefined") {
          const reader = new FileReader();
          reader.onload = (loadEvt) => {
            const arrayBuffer = loadEvt.target.result;
            mammoth.extractRawText({ arrayBuffer: arrayBuffer })
              .then((result) => {
                const text = result.value || "";
                if (!text.trim()) {
                  showToast(`Word file "${file.name}" contained no readable text.`, "error");
                  return;
                }
                if (!appState.mcq) appState.mcq = {};
                appState.mcq.rawMcqContent = text;
                setValue("textarea-mcq-content", text);
                renderDocument();
                showToast(`📄 Extracted questions from "${file.name}"!`, "success");
              })
              .catch((err) => {
                console.error("Mammoth error:", err);
                showToast("Error extracting Word document: " + err.message, "error");
              });
          };
          reader.readAsArrayBuffer(file);
        } else {
          showToast("Word parsing library loading. Please retry.", "error");
        }
      } else {
        const reader = new FileReader();
        reader.onload = (loadEvt) => {
          const text = loadEvt.target.result || "";
          if (!appState.mcq) appState.mcq = {};
          appState.mcq.rawMcqContent = text;
          setValue("textarea-mcq-content", text);
          renderDocument();
          showToast(`📄 Loaded "${file.name}" successfully!`, "success");
        };
        reader.readAsText(file);
      }
    });
  }

  // 1-Click Fix Formulas & Spellings in MCQ
  const btnFixMcq = document.getElementById("btn-fix-mcq-formulas");
  if (btnFixMcq) {
    btnFixMcq.addEventListener("click", () => {
      if (!appState.mcq) appState.mcq = {};
      const cur = appState.mcq.rawMcqContent || "";
      if (!cur.trim()) {
        showToast("Please enter or paste MCQ questions first!", "info");
        return;
      }
      const res = runFullCorrections(cur);
      appState.mcq.rawMcqContent = res.text;
      setValue("textarea-mcq-content", res.text);
      renderDocument();
      const total = res.formulaFixCount + res.spellingFixCount;
      if (total > 0) {
        showToast(`✨ ${res.formulaFixCount} formulas (H₂O, CO₂ etc.) & ${res.spellingFixCount} spellings auto-corrected in MCQ!`, "success");
      } else {
        showToast("All formulas (H₂O) and spellings are already clean and correct!", "info");
      }
    });
  }

  // Clear MCQ Content
  const btnClearMcq = document.getElementById("btn-clear-mcq-content");
  if (btnClearMcq) {
    btnClearMcq.addEventListener("click", () => {
      if (confirm("Clear all MCQ questions from the input area?")) {
        if (!appState.mcq) appState.mcq = {};
        appState.mcq.rawMcqContent = "";
        setValue("textarea-mcq-content", "");
        renderDocument();
        showToast("MCQ content cleared.", "info");
      }
    });
  }

  // MCQ Presets
  document.querySelectorAll("[data-mcq-preset]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const presetKey = e.currentTarget.dataset.mcqPreset;
      if (SAMPLE_MCQ_DATASETS[presetKey]) {
        if (!appState.mcq) appState.mcq = {};
        appState.mcq.rawMcqContent = SAMPLE_MCQ_DATASETS[presetKey];
        if (presetKey === "biharPolice") {
          appState.mcq.examTitle = "Bihar Police Constable Exam.";
          appState.mcq.seriesSubtitle = "Test Series for";
          appState.mcq.setNumber = "06";
          appState.mcq.startingPageNumber = 99;
          appState.mcq.footerExamText = "BIHAR POLICE CONSTABLE EXAM., TEST SERIES VOL.-1";
          appState.mcq.footerWebText = "www.rukminiprakashan.com";
          appState.mcq.watermarkText = "PLATFORM";
        } else if (presetKey === "science") {
          appState.mcq.examTitle = "General Science MCQ Test";
          appState.mcq.seriesSubtitle = "Special Practice Set for";
          appState.mcq.setNumber = "01";
          appState.mcq.startingPageNumber = 1;
          appState.mcq.footerExamText = "GENERAL SCIENCE PRACTICE SET VOL.-1";
          appState.mcq.footerWebText = "www.apnapdfs.com";
          appState.mcq.watermarkText = "Join @Apnapdfs";
        }
        syncInputsFromState();
        renderDocument();
        showToast(`Loaded "${presetKey === 'biharPolice' ? 'बिहार पुलिस सेट-06' : 'सामान्य विज्ञान MCQ'}"!`, "success");
      }
    });
  });

  // MCQ Exam & Set Branding inputs
  bindMcqInput("input-mcq-series-sub", "seriesSubtitle");
  bindMcqInput("input-mcq-exam-title", "examTitle");

  const setNumInput = document.getElementById("input-mcq-set-num");
  if (setNumInput) {
    setNumInput.addEventListener("input", (e) => {
      const val = e.target.value.trim() || "01";
      if (!appState.mcq) appState.mcq = {};
      appState.mcq.setNumber = val;
      const previewBadge = document.getElementById("preview-set-badge");
      if (previewBadge) previewBadge.innerText = val;
      renderDocument();
    });
  }

  bindMcqInput("input-mcq-top-app-text", "topAppBannerText");
  bindMcqInput("input-mcq-top-app-url", "topAppBannerUrl");
  bindMcqInput("input-mcq-footer-text", "footerExamText");
  bindMcqInput("input-mcq-footer-web", "footerWebText");
  bindMcqInput("input-mcq-start-page", "startingPageNumber", true);
  bindMcqInput("input-mcq-watermark", "watermarkText");
  bindMcqInput("select-mcq-options-layout", "optionsLayout");
  bindMcqInput("select-mcq-qnum-color", "qNumColor");
  bindMcqInput("select-mcq-col-divider", "colDivider");

  const checkAnswerKey = document.getElementById("check-mcq-answer-key");
  if (checkAnswerKey) {
    checkAnswerKey.addEventListener("change", (e) => {
      if (!appState.mcq) appState.mcq = {};
      appState.mcq.includeAnswerKey = e.target.checked;
      renderDocument();
    });
  }

  const mcqFontSizeInput = document.getElementById("input-mcq-font-size");
  if (mcqFontSizeInput) {
    mcqFontSizeInput.addEventListener("input", (e) => {
      const size = parseFloat(e.target.value) || 11.5;
      if (!appState.mcq) appState.mcq = {};
      appState.mcq.fontSize = size;
      setText("val-mcq-font-size", `${size}px`);
      renderDocument();
    });
  }

  // Diagram / Photo Inserter
  const diagramFileInput = document.getElementById("input-diagram-file");
  const diagramPreviewImg = document.getElementById("img-diagram-preview");
  const diagramPreviewWrapper = document.getElementById("wrapper-diagram-preview");
  const btnAttachDiagram = document.getElementById("btn-attach-diagram");
  let currentDiagramDataUrl = "";

  if (diagramFileInput) {
    diagramFileInput.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (!file) {
        currentDiagramDataUrl = "";
        if (diagramPreviewWrapper) diagramPreviewWrapper.classList.add("hidden");
        return;
      }
      const reader = new FileReader();
      reader.onload = (evt) => {
        currentDiagramDataUrl = evt.target.result;
        if (diagramPreviewImg) diagramPreviewImg.src = currentDiagramDataUrl;
        if (diagramPreviewWrapper) diagramPreviewWrapper.classList.remove("hidden");
      };
      reader.readAsDataURL(file);
    });
  }

  if (btnAttachDiagram) {
    btnAttachDiagram.addEventListener("click", () => {
      const qNumInput = document.getElementById("input-diagram-qnum");
      const qNum = parseInt(qNumInput ? qNumInput.value : 1, 10);
      if (!currentDiagramDataUrl) {
        showToast("Please select an image file first!", "error");
        return;
      }
      if (!appState.mcq) appState.mcq = {};
      if (!appState.mcq.questionImages) appState.mcq.questionImages = {};
      appState.mcq.questionImages[qNum] = currentDiagramDataUrl;
      renderAttachedImagesList();
      renderDocument();
      showToast(`📸 Diagram attached to Question #${qNum}!`, "success");

      currentDiagramDataUrl = "";
      if (diagramFileInput) diagramFileInput.value = "";
      if (diagramPreviewWrapper) diagramPreviewWrapper.classList.add("hidden");
    });
  }

  // Zoom Controls
  const btnZoomIn = document.getElementById("btn-zoom-in");
  if (btnZoomIn) {
    btnZoomIn.addEventListener("click", () => {
      const newZoom = Math.min(150, appState.previewZoom + 10);
      setPreviewZoom(newZoom);
    });
  }

  const btnZoomOut = document.getElementById("btn-zoom-out");
  if (btnZoomOut) {
    btnZoomOut.addEventListener("click", () => {
      const newZoom = Math.max(40, appState.previewZoom - 10);
      setPreviewZoom(newZoom);
    });
  }

  const btnZoomFit = document.getElementById("btn-zoom-fit");
  if (btnZoomFit) {
    btnZoomFit.addEventListener("click", () => {
      appState.fitToScreen = !appState.fitToScreen;
      applyZoomScale();
    });
  }

  const btnZoom100 = document.getElementById("btn-zoom-100");
  if (btnZoom100) {
    btnZoom100.addEventListener("click", () => {
      setPreviewZoom(100);
    });
  }

  // Page Navigation Buttons
  const btnPrev = document.getElementById("btn-prev-page");
  if (btnPrev) {
    btnPrev.addEventListener("click", () => {
      scrollToPage(appState.currentViewPage - 1);
    });
  }

  const btnNext = document.getElementById("btn-next-page");
  if (btnNext) {
    btnNext.addEventListener("click", () => {
      scrollToPage(appState.currentViewPage + 1);
    });
  }

  // Keyboard shortcut: Ctrl+P or Cmd+P to trigger PDF print engine
  window.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && (e.key === "p" || e.key === "P")) {
      e.preventDefault();
      triggerPrintEngine();
    }
  });

  window.onbeforeprint = () => {
    renderDocument();
  };

  // Window resize handler for fit to screen
  window.addEventListener("resize", () => {
    if (appState.fitToScreen) {
      applyZoomScale();
    }
  });
}

function bindInput(id, stateKey) {
  const el = document.getElementById(id);
  if (!el) return;
  el.addEventListener("input", (e) => {
    appState[stateKey] = e.target.value;
    renderDocument();
  });
}

function switchTab(tabName) {
  appState.activeTab = tabName;
  document.querySelectorAll(".tab-button").forEach((btn) => {
    if (btn.dataset.tab === tabName) {
      btn.classList.add("active-tab", "border-blue-600", "text-blue-600", "bg-blue-50/50");
      btn.classList.remove("text-slate-600", "border-transparent", "hover:text-slate-800");
    } else {
      btn.classList.remove("active-tab", "border-blue-600", "text-blue-600", "bg-blue-50/50");
      btn.classList.add("text-slate-600", "border-transparent", "hover:text-slate-800");
    }
  });

  document.querySelectorAll(".tab-content-panel").forEach((panel) => {
    if (panel.id === `tab-panel-${tabName}`) {
      panel.classList.remove("hidden");
    } else {
      panel.classList.add("hidden");
    }
  });
}

// ==========================================
// DUAL ENGINE MODE & MCQ WORKSPACE HELPERS
// ==========================================
function updateModeView(mode) {
  appState.currentMode = mode;
  const btnPointer = document.getElementById("btn-mode-pointer");
  const btnMcq = document.getElementById("btn-mode-mcq");
  const panelPointer = document.getElementById("panel-studio-pointer");
  const panelMcq = document.getElementById("panel-studio-mcq");
  const presetsPointer = document.getElementById("wrapper-presets-pointer");
  const presetsMcq = document.getElementById("wrapper-presets-mcq");

  if (mode === "mcq") {
    if (btnPointer) {
      btnPointer.classList.remove("active", "text-white", "bg-slate-700/80");
      btnPointer.classList.add("text-slate-300", "hover:text-white");
    }
    if (btnMcq) {
      btnMcq.classList.add("active", "text-white", "bg-red-600/90");
      btnMcq.classList.remove("text-slate-300", "hover:text-white");
    }
    if (panelPointer) panelPointer.classList.add("hidden");
    if (panelMcq) panelMcq.classList.remove("hidden");
    if (presetsPointer) presetsPointer.classList.add("hidden");
    if (presetsMcq) {
      presetsMcq.classList.remove("hidden");
      presetsMcq.classList.add("xl:flex");
    }
  } else {
    if (btnPointer) {
      btnPointer.classList.add("active", "text-white", "bg-slate-700/80");
      btnPointer.classList.remove("text-slate-300", "hover:text-white");
    }
    if (btnMcq) {
      btnMcq.classList.remove("active", "text-white", "bg-red-600/90");
      btnMcq.classList.add("text-slate-300", "hover:text-white");
    }
    if (panelPointer) panelPointer.classList.remove("hidden");
    if (panelMcq) panelMcq.classList.add("hidden");
    if (presetsPointer) {
      presetsPointer.classList.remove("hidden");
      presetsPointer.classList.add("xl:flex");
    }
    if (presetsMcq) presetsMcq.classList.add("hidden");
  }
}

function setAppMode(mode, showNotification = true) {
  updateModeView(mode);
  renderDocument();
  if (showNotification) {
    if (mode === "mcq") {
      showToast("📝 Switched to MCQ Practice Set Studio (Platform Exam Style)", "info");
    } else {
      showToast("📖 Switched to GS Pointer One-Liner Studio", "info");
    }
  }
}

function switchMcqTab(tabName) {
  if (!appState.mcq) appState.mcq = {};
  appState.mcqActiveTab = tabName;

  document.querySelectorAll(".mcq-tab-button").forEach((btn) => {
    if (btn.dataset.mcqTab === tabName) {
      btn.classList.add("active-tab", "border-red-600", "text-red-600", "bg-white", "shadow-sm");
      btn.classList.remove("text-slate-600", "border-transparent", "hover:text-slate-800");
    } else {
      btn.classList.remove("active-tab", "border-red-600", "text-red-600", "bg-white", "shadow-sm");
      btn.classList.add("text-slate-600", "border-transparent", "hover:text-slate-800");
    }
  });

  document.querySelectorAll(".mcq-tab-content-panel").forEach((panel) => {
    if (panel.id === `mcq-tab-panel-${tabName}`) {
      panel.classList.remove("hidden");
    } else {
      panel.classList.add("hidden");
    }
  });
}

function renderAttachedImagesList() {
  const listEl = document.getElementById("list-attached-images");
  const countBadge = document.getElementById("badge-attached-images-count");
  if (!listEl) return;

  const imagesMap = (appState.mcq && appState.mcq.questionImages) ? appState.mcq.questionImages : {};
  const qNums = Object.keys(imagesMap).map(Number).sort((a, b) => a - b);

  if (countBadge) {
    countBadge.innerText = `${qNums.length} Attached`;
  }

  if (qNums.length === 0) {
    listEl.innerHTML = `<p class="text-xs text-slate-400 italic">No images attached yet. Select a question above to insert a diagram.</p>`;
    return;
  }

  listEl.innerHTML = qNums.map(qNum => {
    const dataUrl = imagesMap[qNum];
    return `
      <div class="flex items-center justify-between p-2 bg-slate-50 border border-slate-200 rounded-lg hover:border-red-300 transition">
        <div class="flex items-center gap-2.5">
          <img src="${dataUrl}" class="w-10 h-10 object-contain rounded border border-slate-300 bg-white" alt="Q${qNum}">
          <div>
            <span class="text-xs font-bold text-red-600">Question #${qNum}</span>
            <div class="text-[10px] text-slate-500">Diagram / Figure Attached</div>
          </div>
        </div>
        <button type="button" onclick="deleteAttachedDiagram(${qNum})" class="px-2 py-1 text-xs text-rose-600 hover:bg-rose-50 rounded transition font-semibold cursor-pointer">
          ✕ Remove
        </button>
      </div>
    `;
  }).join("");
}

function deleteAttachedDiagram(qNum) {
  if (appState.mcq && appState.mcq.questionImages && appState.mcq.questionImages[qNum]) {
    delete appState.mcq.questionImages[qNum];
    renderAttachedImagesList();
    renderDocument();
    showToast(`Removed diagram from Question #${qNum}`, "info");
  }
}
window.deleteAttachedDiagram = deleteAttachedDiagram;

function bindMcqInput(id, mcqKey, isNumber = false) {
  const el = document.getElementById(id);
  if (!el) return;
  const eventType = el.tagName === "SELECT" ? "change" : "input";
  el.addEventListener(eventType, (e) => {
    if (!appState.mcq) appState.mcq = {};
    appState.mcq[mcqKey] = isNumber ? (parseFloat(e.target.value) || 0) : e.target.value;
    renderDocument();
  });
}

// ==========================================
// INITIALIZATION ON DOM READY
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  loadSavedSettings();
  syncInputsFromState();
  setupEventListeners();
  renderDocument();
});
