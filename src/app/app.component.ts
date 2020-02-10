import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  length = 0;
  password = '';
  selectNumber = false;
  selectLetter = false;
  selectSymbol = false;
  degerata = '';

  


  enterLength(value: string) {
    const degerebak = parseInt(value);
    if (!isNaN(degerebak)) {
      this.length = degerebak;
    }
  }
  onGenerate() {
    const number = '123456789';
    const letter = 'qwertyuıopasdfghjklşizxcvbnmöç';
    const symbol = '!^+%&/()=?';

    if (this.selectNumber) {
      this.degerata += number;
    }
    if (this.selectLetter) {
      this.degerata += letter;
    }
    if (this.selectSymbol) {
      this.degerata += symbol;
    }

     let generatePassword = '';
    for (let i = 0; i < this.length; i++) {
      const i = Math.floor(Math.random() * this.degerata.length)
      generatePassword += this.degerata[i];
    }
    this.password = generatePassword;
  }
  onChangeNumber() {
    this.selectNumber = !this.selectNumber;
  }
  onChangeLetter() {
    this.selectLetter = !this.selectLetter;
  }
  onChangeSymbol() {
    this.selectSymbol = !this.selectSymbol;
  }

}

