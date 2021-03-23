import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { MemberService } from '../../service/member.service';

@Component({
  templateUrl: './create-member-profile.component.html',
  styleUrls: ['./create-member-profile.component.scss']
})
export class CreateMemberProfileComponent implements OnInit, OnDestroy {
  onDestroy$ = new Subject();

  constructor(private formBuilder: FormBuilder, private memberService: MemberService, private ngZone: NgZone, private router: Router) {
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
  }

  memberForm: FormGroup;
  errorMessage: String;

  ngOnInit(): void {
    this.createMemberForm();
  }

  createMemberForm() {
    this.memberForm = this.formBuilder.group({
      memberName: ['', [Validators.required]],
      statusCode: ['', [Validators.required]],
      statusType: ['', [Validators.required]],
      initialStockPurchaseRequired: [{value: 'Yes', disabled: true}, [Validators.required]],
      initalStockPurchaseDate: [{value: '12/12/2021', disabled: true}, [Validators.required]],
      votingState: [{value: 'Yes', disabled: true}, [Validators.required]],
      memberDdaAccount: [{value: '000 001 110 111', disabled: true}, [Validators.required]],
      capitalStockAsset: ['', [Validators.required]],
      capitalStockAssetDate: ['', [Validators.required]],
      pendingStockAsset: ['', [Validators.required]],
      pendingStockAssetDate: ['', [Validators.required]],
      memberStockAssetDate: ['', [Validators.required]],
      memberStockMaxRequirement: ['', [Validators.required]],
      mrcs: ['', [Validators.required]],
      mrcsInputDate: ['', [Validators.required]],
      mrcsRedemptionDate: ['', [Validators.required]],
      memberDirectorFirstName: ['', [Validators.required]],
      memberDirectorLastName: ['', [Validators.required]],
      memberDirectorTitle: ['', [Validators.required]],
      memberDirectorStartDate: ['', [Validators.required]],
      memberDirectorEndDate: ['', [Validators.required]],
      disappearingMemberNumber: [{value: '000 001 110 111', disabled: true}, [Validators.required]],
      survivingMemberNUmber: [{value: '000 001 110 111', disabled: true}, [Validators.required]],
      memberToMemberMergeDate: [{value: '01/01/2021', disabled: true}, [Validators.required]]
    })
  }

  submitMemberForm(memberForm: FormGroup) {
    this.memberService.createMember(memberForm.value)
      .subscribe(() => {
        this.ngZone.run(() => { this.router.navigate(['/dashboard']) });
      },
        error => {
          this.errorMessage = error;
        });
  }

}
