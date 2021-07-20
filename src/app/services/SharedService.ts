import { EventEmitter, Injectable } from "@angular/core"
import { Employee } from "../models/employee"

@Injectable()
export class SharedService{
  public OpenDetail$ = new EventEmitter<Employee>();
  public OpenInfo$ = new EventEmitter<Employee>();
  public OpenSkill$ = new EventEmitter<Employee>();
  public OpenShift$ = new EventEmitter<Employee>();
}