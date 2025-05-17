import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-quiz-popup',
  templateUrl: './quiz-popup.component.html',
  styleUrls: ['./quiz-popup.component.css']
})
export class QuizPopupComponent {
  @Input() quizQuestions: any[] = [];
  @Output() close = new EventEmitter<void>();
  @Output() submit = new EventEmitter<any>();

  resultMessage: string = ''; // Property to store the result message

  closePopup() {
    this.close.emit();
  }

  submitQuiz(answers: any) {
    let A = 0, B = 0, C = 0;
    const strings = Object.values(answers) as string[];
    strings.forEach((str) => {
      if (str.startsWith('A')) {
        A++;
      } else if (str.startsWith('B')) {
        B++;
      } else if (str.startsWith('C')) {
        C++;
      }
    });



    console.log(answers);
    console.log(`A: ${A}, B: ${B}, C: ${C}`);
    // Determine the most used letter and set the result message
    if (A >= B && A >= C) {
      this.resultMessage = 'Majoritatea A – Depozit la termen\nVrei siguranță, randament fix și nu te deranjează să aștepți. Ești genul conservator – depozitul bancar ți se potrivește perfect.';
    } else if (B >= A && B >= C) {
      this.resultMessage = 'Majoritatea B – Cont de economii\nAi nevoie de flexibilitate, dar vrei să nu-ți stea banii degeaba. Îți plac soluțiile simple și rapide.';
    } else if (C >= A && C >= B) {
      this.resultMessage = 'Majoritatea C – Fond de investiții\nAi obiective pe termen lung și ești dispus să-ți asumi un risc moderat. Vrei să-ți crești banii, nu doar să-i protejezi.';
    }
    console.log(this.resultMessage);
    this.submit.emit(answers);
  }
}
