# FSPH Fast Smart Phone Home

## FSPH je web aplikacija preko koje će korisnici imati mogućnosti da pretvore svoj stari telefon u sigurnosnu kameru, zvučni sistem i postoji mogućnost za daljnim proširenjem

IDEJA:
Svi korisnici koji imaju stare telefone će imati mogućnosti da te iste stare uređaje iskoriste i vrate ih ponovo u život preko naše FSPH web aplikacije na kojoj
će imati mogućnost da strimaju video prenos sa tih starih telefona. Momenta kada se prijave na stranicu uočit će dvije opcije, jedna da povežu kameru tog starog uređaja i strimaju prenos na stranici, a druga mogućnost će biti da biraju koje uređaje žele da pogledaju jer će moći povezati više uređaja. Ovim načinom želimo omogućiti svim korisnicima da maksimalno iskoriste potencijale svih svojih uređaja u domu, da ne moraju da ih bacaju, i još će dobiti alternativnu sigurnosnu kameru koja ih neće koštatu ništa. Trebaju samo postaviti stari uređaj na bilo koje poželjno mjesto, priključiti na punjač kako bi uređaj bio dostupan i u funkcionalnosti 24/7, uključiti kameru te potom taj uređaj povezati na našu stranicu kako bi mogli pristupiti strimu preko naše stranice kada god im je potrebno.

KAKO KORISTITI:
Kada korisnik pristupi FSPH web stranici pojavit će mu se mogućnost prijave na sistem kako bi mogao imati pristup svojim uređajima. Poslije validacije korisničkih podataka otvara se Home page preko kojeg se može pristupiti Cameras page na kojoj se nalaze dva dugmića. Preko jednog dugmića klijenat može da da prikaže sve moguće kamere kojima može pristupiti i koje su aktivne. Drugi dugmić omogućava korisniku da dodaje trenutni uređaj i kameru koje će kasnije koristiti.

KORIŠTENI ALATI:
Kao najoptimalniji framework koji smo odlučili koristiti za ovu web aplikaciju je ReactJS. Uz ovaj framework smo koristili i ReactRouter DOM paket koji smo iskoristili za redirektovanje između stranica.
Uz WebRTC, možemo dodati mogućnosti komunikacije u realnom vremenu našoj aplikaciji koja radi na vrhu otvorenog standarda. Podržava video, glasovne i generičke podatke koji se šalju između klijenta i njegovih uređaja. Tehnologija je dostupna na svim modernim pretraživačima, kao i na izvornim klijentima za sve glavne platforme.
Socket.IO je biblioteka koja nam omogućava nisko kašnjenje, dvosmjernu i komunikaciju zasnovanu na događajima između klijenta i servera. Izgrađen je na vrhu WebSocket protokola i pruža dodatne garancije kao što je povratak na HTTP dugotrajno ispitivanje ili automatsko ponovno povezivanje.
PeerJS je biblioteka koja uspostavlja peer konekciju izmedju dva uređaja. Preko naše aplikacije se uspostavlja peer konekcija između dva uređaja koji dijele video stream ili sound stream.

NAPOMENA:
U našem projektu nismo uspjeli realizovati sve operacije i mogućnosti koje smo naveli, ali uspjeli smo povezati uređaj na našu stranicu i omogućiti da ima uživo prenos sa kamere tog uređaja. Nismo imali dovoljno vremena, ni mogućnosti da realizujemo to do kraja, i nismo stigli također realizovati prenos zvuka. Također ovaj projekat nam omogućava još nekih daljih mogućnosti i operacija koje bi mogli realizovati i implementirati kako bi nastavili u razvijanju ove aplikacije.
