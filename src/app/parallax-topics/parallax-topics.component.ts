import {
  Component,
  AfterViewInit,
  ElementRef,
  QueryList,
  ViewChildren, ViewChild, OnInit
} from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Topic {
  title: string;
  paragraphs: string[];
}

@Component({
  selector: 'app-parallax-topics',
  templateUrl: './parallax-topics.component.html',
  styleUrls: ['./parallax-topics.component.css']
})
export class ParallaxTopicsComponent implements AfterViewInit, OnInit {
  @ViewChildren('panel', { read: ElementRef }) panels!: QueryList<ElementRef>;
  titles: string[] = [];
  topics: Topic[] = [

    {
      title: 'Educație financiară',
      paragraphs: [
        `Inflația este procesul prin care prețurile bunurilor și serviciilor cresc în timp, iar puterea de cumpărare a banilor scade. Practic, ceea ce puteai cumpăra cu 100 de lei acum câțiva ani, în prezent vei cumpăra mai puțin cu aceiași bani. Deci inflatia este precum o molie care iti ,,roade” banii.`,
        'Cum te poti proteja de molia ,,inflatiei’’?',
        'Poti sa iti protejezi banii prin Depozite la termen, Conturi de Economii si Fonduri de investitii. Completeaza urmatorul chestionar ca sa aflii care metode de protejare a banilor ti se potriveste!',
        'Depozitul la termen este o opțiune bancară prin care depui o sumă de bani într-o bancă pentru o perioadă fixă de timp (de obicei între 1 lună și 5 ani). Dobânda este stabilită la început și îți va fi plătită la sfârșitul perioadei sau periodic (în funcție de tipul de depozit ales). Pentru a retrage banii înainte de termen, va trebui să plătești o penalizare, iar dobânda câștigată poate fi redusă sau pierdută.  În general, cu cât depozitul este pe o perioadă mai lungă, cu atât dobânda va fi mai mare. ',
        'Un cont de economii este un cont bancar destinat economisirii, care îți oferă o dobândă (de obicei mai mică decât cea a unui depozit la termen). Poți depune sau retrage bani în orice moment, fără penalizări. Dobânda este variabilă, iar aceasta poate fi ajustată de bancă în funcție de politica economică și condițiile pieței.',
        'Fondurile de investiții sunt portofolii gestionate de profesioniști care investesc banii adunați de la mai mulți investitori în diverse active financiare (acțiuni, obligațiuni, imobiliare etc.).Există mai multe tipuri de fonduri de investiții: fonduri de acțiuni, fonduri de obligațiuni, fonduri mixte și altele. Fiecare are un grad de risc diferit. Banii investitorilor sunt folosiți pentru a cumpăra diverse instrumente financiare. Când aceste instrumente cresc în valoare, investitorii câștigă un profit. Randamentele sunt variabile: există perioade în care fondurile pot aduce câștiguri mari, dar și perioade cu pierderi.',

        ]
    },
    {
      title: 'Prevenirea fraudelor',
      paragraphs: [

        `Rămâi sceptic: nu da click pe linkuri din e-mailuri nesolicitate. Dacă primești un mesaj de la „banca” ta, intră manual pe site-ul oficial (nu prin link) și verifică acolo. Verifică întotdeauna certificatul SSL (padlock-ul) și fii atent la extensia domeniului (ex: .com vs .co). Fraudatorii mimează adesea pagini identice cu cele originale.`,

        `Parole unice și puternice: folosește un manager de parole (ex: Bitwarden, 1Password). Activează autentificarea în doi pași peste tot (SMS, Authenticator apps, hardware tokens). Nu refolosi niciodată aceeași parolă pe două site-uri diferite. În cazul în care un serviciu este compromis, ceilalți rămân securizați.`,

        `Când ești în public: evită Wi-Fi-urile neprotejate pentru tranzacții sensibile. Dacă nu ai altă opțiune, folosește un VPN de încredere. Păstrează sistemul și aplicațiile de securitate (antivirus, anti-malware) actualizate. Nu descărca atașamente sau aplicații din surse necunoscute – chiar dacă solicitantul pare de încredere.`,

        `Monitorizare activă: setează alerte în timp real pentru orice tranzacție bancară. Verifică-ți extrasele bancare cel puțin o dată pe săptămână. Folosește aplicații de agregare financiară care raportează activități anormale. Dacă vezi ceva suspect, oprește cardul imediat și contactează banca pentru investigare.`,


      ]
    },
    {
      title: 'Simulare transfer bancar',
      paragraphs: [
        'Pentru a efectua un transfer bancar prin UniCredit Bank, trebuie să ai:',
        'Un cont curent activ deschis la UniCredit (lei sau valută).',
        'Acces la aplicația Mobile Banking UniCredit sau la Online Banking (de pe desktop).',
        'Datele beneficiarului:',
        '   - Numele complet al persoanei sau entității.',
        '   - IBAN-ul corect al contului în care transferi.',
        '   - Pentru transferuri externe: codul SWIFT/BIC al băncii destinatare.',
        '',
        'Transfer bancar din platforma online UniCredit (desktop)',
        '',
        '1. Autentificare',
        '   - Intră pe https://online.unicredit.ro.',
        '   - Introdu numele de utilizator și parola.',
        '   - Dacă ai autentificare în doi pași, confirmă logarea în aplicație sau introdu codul primit prin SMS.',
        '',
        '2. Mergi la „Plăți” sau „Transferuri”',
        '   - Din meniul principal, accesează secțiunea „Plăți” sau „Transferuri”.',
        '   - Alege tipul transferului:',
        '     - Către un cont propriu',
        '     - Către alt client UniCredit',
        '     - Către o altă bancă (națională sau internațională)',
        '',
        '3. Completează datele transferului',
        '   - Selectează contul din care trimiți banii.',
        '   - Introdu IBAN-ul destinatarului.',
        '   - Introdu numele complet al beneficiarului (așa cum apare în actul de identitate sau cont).',
        '   - Scrie suma dorită.',
        '   - Alege moneda (de obicei RON sau EUR).',
        '   - Opțional: adaugă o descriere (ex: "chirii", "factură nr. 45", "cadou").',
        '',
        '4. Selectează data și frecvența',
        '   - Poți alege între:',
        '     - Transfer unic (standard)',
        '     - Transfer programat (într-o anumită dată viitoare)',
        '     - Transfer recurent (ex: lunar)',
        '',
        '5. Confirmarea',
        '   - Verifică toate datele.',
        '   - Apasă pe „Trimite” / „Execută plata”.',
        '   - Vei fi rugat să confirmi tranzacția prin:',
        '     - Cod primit prin SMS',
        '     - Confirmare în aplicația mobilă (dacă ai activată autentificarea biometrică sau push)',
        '',
        '6. Gata!',
        '   - Primești confirmarea pe ecran.',
        '   - Poți salva o copie PDF sau face o captură.',
        '   - Verifică în istoricul tranzacțiilor că plata a fost înregistrată.',
        'Mai jos vei primi un exemplu de transfer bancar:',
      ]
    }
  ];
  activePanelIndex: number = 0;

  quizQuestions = [
    {
      text: 'Cât de importantă este siguranța totală pentru tine?',
      options: [
        'A. Foarte importantă – nu vreau niciun risc.',
        'B. Importantă, dar accept mici variații.',
        'C. Pot să-mi asum riscuri moderate pentru câștiguri mai mari.'
      ]
    },
    {
      text: 'Cât de repede ai nevoie de acces la bani?',
      options: [
        'A. Pot aștepta câteva luni sau până la scadență.',
        'B. Vreau să pot retrage oricând.',
        'C. Nu am nevoie de bani urgent – pot aștepta ani.'
      ]
    },
    {
      text: 'Ce urmărești cel mai mult?',
      options: [
        'A. Stabilitate și o sumă sigură la final.',
        'B. Flexibilitate și un mic randament în plus.',
        'C. Să-mi crească banii cât mai mult în timp.'
      ]
    },
    {
      text: 'Cât de mult te deranjează fluctuațiile pieței?',
      options: [
        'A. Nu vreau să aud de scăderi – vreau ceva sigur.',
        'B. Mici scăderi sunt ok, dar nu prea des.',
        'C. Sunt confortabil cu suișuri și coborâșuri dacă pe termen lung câștig.'
      ]
    },
    {
      text: 'Pe ce termen vrei să economisești/investești?',
      options: [
        'A. Sub 1 an',
        'B. 1–2 ani',
        'C. 3 ani sau mai mult'
      ]
    }
  ];
  isSimulationOpen = false;
  isQuizOpen = false;
  openSimulation(){
    this.isSimulationOpen = true;
  }
  closeSimulation(){
    this.isSimulationOpen = false;
  }
  openQuiz() {
    this.isQuizOpen = true;
  }

  closeQuiz() {
    this.isQuizOpen = false;
  }

  handleQuizSubmit(answers: any) {
  }
  ngOnInit() {

    for(let i of this.topics) {
      this.titles.push(i.title);
    }
  }

  ngAfterViewInit() {
    const fadeDistance = window.innerHeight * 0.5;

    this.panels.forEach(panelRef => {
      const panel = panelRef.nativeElement as HTMLElement;

      ScrollTrigger.create({
        trigger: panel,
        start: 'top top',
        end: `+=${fadeDistance}`,
        scrub: true,
        pin: true,
        pinSpacing: false,
        onUpdate: st => {
          panel.style.opacity = `${1 - st.progress}`;
        }
      });
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = this.panels.toArray().findIndex(
              (panel) => panel.nativeElement === entry.target
            );

            // Update activePanelIndex only if it has changed
            if (this.activePanelIndex !== index) {
              this.activePanelIndex = index;
            }
          }
        });
      },
      { threshold: 0.75 } // Adjust threshold to ensure proper detection
    );

    this.panels.forEach((panel) => observer.observe(panel.nativeElement));
  }

  handleSimulationSubmit($event: SubmitEvent) {
    console.log($event);
    this.closeSimulation();

  }
}
