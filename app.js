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

  science: `Q1. शक्ति का SI मात्रक क्या है === वाट (Watt)
Q2. बल का SI मात्रक क्या होता है === न्यूटन (Newton)
Q3. कार्य और ऊर्जा का मात्रक क्या है === जूल (Joule)
Q4. प्रकाश वर्ष किसकी इकाई है === दूरी की (Distance)
Q5. एक पारसेक (Parsec) कितने प्रकाश वर्ष के बराबर होता है === लगभग 3.26 प्रकाश वर्ष
Q6. ध्वनि की तीव्रता मापने की इकाई है === डेसिबल (Decibel)
Q7. वायुमंडलीय दाब मापने का यंत्र क्या कहलाता है === बैरोमीटर (Barometer)
Q8. सोनार (SONAR) अधिकांशतः प्रयोग में लाया जाता है === नौसंचालकों द्वारा
Q9. दूध के घनत्व को किसके द्वारा मापा जाता है === लैक्टोमीटर द्वारा
Q10. वायु की आर्द्रता मापने हेतु प्रयुक्त यंत्र है === हाइग्रोमीटर (Hygrometer)
Q11. भूकंप की तीव्रता किस पैमाने पर मापी जाती है === रिक्टर पैमाना (Richter Scale)
Q12. वाशिंग मशीन का कार्य सिद्धांत किस पर आधारित है === अपकेंद्रण (Centrifugation)
Q13. गुरुत्वाकर्षण का सार्वभौमिक नियम किसने दिया था === सर आइजक न्यूटन ने
Q14. पृथ्वी के केंद्र पर किसी वस्तु का भार होता है === शून्य (Zero)
Q15. पेंडुलम घड़ी तीव्र गति से चल सकती है === शीतकाल में
Q16. वर्षा की बूंद गोलाकार होती है, इसका कारण है === पृष्ठ तनाव (Surface Tension)
Q17. बत्ती वाले स्टोव में केरोसिन का ऊपर चढ़ना किस कारण होता है === केशिकत्व (Capillarity)
Q18. साबुन के बुलबुले के अंदर का दाब वायुमंडलीय दाब से === अधिक होता है
Q19. बादलों के वायुमंडल में तैरने का कारण है उनका === कम घनत्व
Q20. जल का अधिकतम घनत्व किस तापमान पर होता है === 4°C पर
Q21. प्रकाश की चाल अधिकतम होती है === निर्वात (Vacuum) में
Q22. सूर्य का प्रकाश पृथ्वी पर पहुँचने में समय लेता है === लगभग 8 मिनट 20 सेकंड
Q23. आकाश का रंग नीला दिखाई देने का प्रमुख कारण है === प्रकाश का प्रकीर्णन (Scattering)
Q24. अंतरिक्ष यात्री को आकाश का रंग दिखाई देता है === काला (Black)
Q25. इंद्रधनुष बनने का कारण है === परावर्तन, अपवर्तन एवं पूर्ण आंतरिक परावर्तन
Q26. दाढ़ी बनाने के लिए किस दर्पण का उपयोग किया जाता है === अवतल दर्पण (Concave Mirror)
Q27. वाहनों में पीछे का दृश्य (Rear View) देखने के लिए प्रयुक्त दर्पण है === उत्तल दर्पण (Convex Mirror)
Q28. मानव आँख की रेटिना पर बनने वाला प्रतिबिंब होता है === वास्तविक तथा उल्टा
Q29. निकट दृष्टि दोष (Myopia) के निवारण के लिए प्रयुक्त लेंस है === अवतल लेंस (Concave Lens)
Q30. दूर दृष्टि दोष (Hypermetropia) के निवारण के लिए प्रयुक्त लेंस है === उत्तल लेंस (Convex Lens)
Q31. प्राथमिक रंग (Primary Colors) कौन-से हैं === लाल, हरा और नीला (RGB)
Q32. परमाणु के नाभिक में कौन-से कण उपस्थित होते हैं === प्रोटॉन तथा न्यूट्रॉन
Q33. इलेक्ट्रॉन की खोज किसने की थी === जे. जे. थॉमसन ने
Q34. न्यूट्रॉन की खोज किसने की थी === जेम्स चैडविक ने
Q35. सबसे हल्की धातु कौन-सी है === लिथियम (Lithium)
Q36. सबसे भारी प्राकृतिक धातु कौन-सी है === ऑस्मियम (Osmium)`
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
  answerColor: "#dc2626", // Red default for answer as requested!
  questionColor: "#000000", // Black for question!
  bulletStyle: "➢", // "➢", "•", "◆", "➔", "none"
  stripQNumbers: true,

  // Content
  rawContent: SAMPLE_DATASETS.history,

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
      appState = { ...DEFAULT_STATE, ...parsed };
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
    appState = { ...DEFAULT_STATE };
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
// DOCUMENT RENDER ENGINE
// ==========================================
function renderDocument() {
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
      const headingDiv = document.createElement("div");
      headingDiv.className = "gs-section-banner gs-document-font";
      headingDiv.innerText = `❖ ${item.title} ❖`;
      frag.appendChild(headingDiv);
      continue;
    }

    const qText = escapeHtml(item.question);
    const aText = escapeHtml(item.answer);
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

  // Helper: Search Highlight
  function highlightText(text) {
    if (!text) return "";
    const safe = escapeHtml(text);
    if (!appState.searchQuery || !appState.searchQuery.trim()) return safe;
    const q = appState.searchQuery.trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const regex = new RegExp(`(${q})`, "gi");
    return safe.replace(regex, '<mark class="search-highlight">$1</mark>');
  }

  // Two-Column Items Content
  const hasDividerClass = appState.columnDivider !== "none" ? "has-divider" : "";
  const bulletSymbol = appState.bulletStyle === "none" ? "" : `<span class="gs-bullet">${appState.bulletStyle}</span>`;

  let itemsHtml = "";
  for (const item of pageItems) {
    if (item.isHeading) {
      itemsHtml += `
        <div class="gs-section-banner gs-document-font">
          ❖ ${highlightText(item.title)} ❖
        </div>
      `;
      continue;
    }

    const questionText = highlightText(item.question);
    const answerText = highlightText(item.answer);

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

// ==========================================
// UI SYNCHRONIZATION & INTERACTION
// ==========================================
function syncInputsFromState() {
  // Branding inputs
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

  // Layout inputs
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
  setValue("input-answer-color", appState.answerColor || "#dc2626");
  setValue("input-question-color", appState.questionColor || "#000000");
  setValue("select-bullet-style", appState.bulletStyle);
  setValue("select-outer-frame", appState.outerFrame || "none");
  setChecked("check-strip-q", appState.stripQNumbers);

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

  // Content textarea
  setValue("textarea-content", appState.rawContent);
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
    statsEl.innerHTML = `
      <span class="inline-flex items-center gap-1.5 font-medium text-slate-700">
        <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
        <strong>${itemsCount}</strong> Q&A Items
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
// INITIALIZATION ON DOM READY
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  loadSavedSettings();
  syncInputsFromState();
  setupEventListeners();
  renderDocument();
});
