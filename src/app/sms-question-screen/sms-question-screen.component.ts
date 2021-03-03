import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { DataService } from "../data.service";
import { SEOServiceService } from "../seoservice.service";
import { MatSnackBar } from "@angular/material";
import { count } from "rxjs/operators";

@Component({
  selector: "app-sms-question-screen",
  templateUrl: "./sms-question-screen.component.html",
  styleUrls: ["./sms-question-screen.component.scss"],
})
export class SmsQuestionScreenComponent implements OnInit {
  loading: boolean = true;
  showmsg: boolean = false;
  expired: boolean = false;
  expiredLink: boolean = false;
  jd = `A Graphic Designer job opportunity in Udaipur with a leading Real Estate firm for an extremely creative and
  driven professional holding at least 1-3 years’ experience in the design space.

  Your Employer:
  A leading privately held Indian real estate and construction company headquartered in Udaipur

  Key Responsibilities:
  • Creating designs, images, logo and layouts and engaging graphic communication for real estate company
  websites
  • Designing dynamic & responsive web pages for the real estate business.
  • Conceptualizing visuals and developing creative designs and graphic solution based on requirements`;

  step = 1;
  questions = [
    {
      question: "Do you have 4+ years of experience in the Graphic Designer?",
      options: ["yes", "no"],
      correctanswers: ["yes"],
    },
    {
      question: "Mark the tools regarding the Graphic Designe you know?",
      options: ["Photshop", "Adobe XD", "Coral"],
      correctanswers: ["Coral", "Photshop"],
    },
  ];
  questions_length: any;
  questionnaire_data: any;
  id: any;
  userIndex = 0;
  constructor(
    private route: ActivatedRoute,
    public http: HttpClient,
    private seoservice: SEOServiceService,
    private snackbar: MatSnackBar
  ) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      console.log(param.get("id"));
      this.id = param.get("id");
    });
    this.sendstatus(3);
    this.getquestions(this.id).subscribe(
      (res: any) => {
        console.log(res);
        this.loading = false;
        if (res.success && res["questions"]) {
          this.questionnaire_data = res;
          this.expired = res.is_expired;
        } else if (res.success == false && res.msg) {
          this.expiredLink = true;
          // this.snackbar.open(res.msg, 'Ok', <any>{ duration: 3000 });
        } else {
        }
        this.questions_length = this.questionnaire_data.questions.length;
        console.log(this.questionnaire_data);
      },
      (error: any) => {
        this.snackbar.open("Please contact FrejunHR!", "Ok", <any>{
          duration: 3000,
        });
      }
    );
  }
  getquestions(id) {
    const headers = new HttpHeaders({ "X-Requested-With": "XMLHttpRequest" });
    const fd = new FormData();
    fd.append("id", id);

    return this.http.post(
      "https://product.hr.frejun.com/api/v1/scheduling/candidatesmslink/",
      //"https://beta.frejun.com/api/v1/scheduling/candidatesmslink/",

      fd,
      { headers }
    );
  }

  changeIndex(number) {
    console.log(this.userIndex);
    if (
      this.userIndex >= 0 &&
      this.userIndex < this.questionnaire_data.questions.length - 1
    ) {
      //index must be less than length of array
      // console.log(number);
      // console.log(this.userIndex);
      this.userIndex += number;
      this.displaymsg(this.userIndex);
    } else {
      this.step = 1;
    }
  }
  selectopts: boolean;
  selectcount: any;
  displaymsg(index) {
    if (this.questionnaire_data.questions[index].type == "Multiple Choice") {
      let count = 0;
      for (
        let i = 0;
        i < this.questionnaire_data.questions[index].options.length;
        i++
      ) {
        if (
          this.questionnaire_data.questions[index].options[i].isCorrect == true
        ) {
          count += 1;
        }
      }
      if (count > 1) {
        this.selectcount = count;
        this.selectopts = true;
      }
    }
  }

  submit(value, id, userIndex, type) {
    console.log(userIndex);
    this.selectopts = false;
    if (type == "Multiple Choice") {
      let answers = [];
      let choice = [];
      console.log(value);

      for (let i in value) {
        console.log(value[i]);
        if (value[i] == true) {
          answers.push(i);
        }
        if (value[i] == false || value[i] == "") {
          choice.push(i);
        }
      }
      if (
        choice.length ==
        this.questionnaire_data["questions"][userIndex].options.length
      ) {
        // this.snackbar.open('Please select atleast one ', 'Ok', <any>{ duration: 3000 });
        // this.showmsg=true;
        this.selectopts = true;
      } else if (answers.length < this.selectcount) {
        this.selectopts = true;
      } else {
        console.log(answers);
        let choosen_correct = 0;
        let wrong = 0;
        let correct = 0;
        for (
          let i = 0;
          i < this.questionnaire_data["questions"][userIndex].options.length;
          i++
        ) {
          for (let j = 0; j < answers.length; j++) {
            if (
              this.questionnaire_data["questions"][userIndex].options[i]
                .choice == answers[j] &&
              this.questionnaire_data["questions"][userIndex].options[i]
                .isCorrect == true
            ) {
              choosen_correct += 1;
            } else if (
              this.questionnaire_data["questions"][userIndex].options[i]
                .choice == answers[j] &&
              this.questionnaire_data["questions"][userIndex].options[i]
                .isCorrect == false
            ) {
              wrong += 1;
            }
          }
        }
        for (
          let k = 0;
          k < this.questionnaire_data["questions"][userIndex].options.length;
          k++
        ) {
          if (
            this.questionnaire_data["questions"][userIndex].options[k]
              .isCorrect == true
          ) {
            correct += 1;
          }
        }
        // console.log(correct);
        // console.log(choosen_correct);

        if (choosen_correct == correct && wrong == 0) {
          if (userIndex == this.questionnaire_data["questions"].length - 1) {
            console.log(userIndex);
            this.step = 2;
            this.sendstatus(5);
          } else {
            this.changeIndex(1);
            this.checkbox = 0;
          }
        } else {
          this.sendstatus(2);
          this.step = 2;
        }
      }
      //  console.log(id);
      //  console.log(userIndex);
    }
    if (type == "Yes or No Option") {
      if (value.choice == "") {
        // this.snackbar.open('Please select atleast one option', 'Ok', <any>{ duration: 3000 });
        this.showmsg = true;
      } else {
        let choosen_correct = 0;
        let wrong = 0;
        console.log(value);
        for (
          let i = 0;
          i < this.questionnaire_data["questions"][userIndex].options.length;
          i++
        ) {
          if (
            this.questionnaire_data["questions"][userIndex].options[i].choice ==
              value.choice &&
            this.questionnaire_data["questions"][userIndex].options[i]
              .isCorrect == true
          ) {
            if (userIndex == this.questionnaire_data["questions"].length - 1) {
              console.log(userIndex);

              this.step = 2;
              this.sendstatus(5);
            } else {
              this.changeIndex(1);
            }
            choosen_correct += 1;
          } else {
            wrong += 1;
          }
        }
        if (wrong == 2) {
          console.log(userIndex);
          this.step = 2;
          this.sendstatus(2);
        }
      }
    }
  }
  sendstatus(number) {
    console.log(number);
    const fd = new FormData();

    fd.append("id", this.id);
    fd.append("status", number);

    let x = this.http.post(
      "https://product.hr.frejun.com/api/v1/scheduling/sms-screening/",
      //"https://beta.frejun.com/api/v1/scheduling/sms-screening/",
      fd
    );
    x.subscribe((res) => {
      console.log(res);
    });
  }
  changeshowmsg() {
    console.log("show");
    this.showmsg = false;
  }
  checkbox = 0;
  showselectopts(check) {
    console.log(check.checked);
    if (check.checked == false) {
      this.checkbox++;
      console.log(this.checkbox);
    }
    if (check.checked == true) {
      this.checkbox--;
      console.log(this.checkbox);
    }
    console.log(this.checkbox);
    console.log(this.selectcount);
    if (this.checkbox >= this.selectcount) {
      console.log(this.checkbox);
      console.log(this.selectcount);
      this.selectopts = false;
    } else if (this.checkbox < this.selectcount) {
      this.selectopts = true;
    }
  }
}
