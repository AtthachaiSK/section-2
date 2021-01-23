import { Component, Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "roundPipe" })
export class RoundPipe implements PipeTransform {
  transform(value): number {
    return value < 0 ? 1 : value;
  }
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  value: number;

  calculateType: string = "isPrime";

  get calculation(): boolean {
    return this.calculateType == "isPrime"
      ? this.isPrime(this.value)
      : this.isFibonacci(this.value);
  }
  isPrime(num) {
    for (var i = 2; i < num; i++) if (num % i === 0) return false;
    return num > 1;
  }
  isFibonacci(num) {
    var fibSeq = [0, 1],
      i = 1,
      fibSeqL;
    for (i; i <= num; i = fibSeq[fibSeqL - 1] + fibSeq[fibSeqL]) {
      fibSeq.push(i);
      fibSeqL = fibSeq.length - 1;
    }
    return fibSeq[fibSeqL] === num;
  }
}
