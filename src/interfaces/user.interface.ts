export interface IUser {
  id: number;
  name: string;
  email: string;
  email_verified_at: string;
  updated_at: string;
  created_at: string;
  isAdmin: boolean;
  roles: Role[];
}

export interface Role {
  id: number;
  name: string;
  guard_name: string;
  created_at: string;
  updated_at: string;
  pivot: RolePivot;
}

export interface RolePivot {
  model_id: number;
  role_id: number;
  model_type: string;
}
