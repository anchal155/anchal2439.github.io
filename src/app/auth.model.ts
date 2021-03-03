
export interface CurrentUserProfile {
  active_user_profile: any;
  active_org_profile: any;
  switchable_orgs: Array<any>;
  active_user_checklist: any;
  active_org_checklist: any;
  is_staff: boolean;
  is_superuser?: boolean;
  is_verified?: boolean;
  extra_data?: any;
  created_at?: Date;
  updated_at?: Date;
  primary_interests?: any;
}

export class Waffle {
  switches: Array<any>;
  flags: Array<any>;
  samples: Array<any>;
}
