import { EntityModel } from '@midwayjs/orm';
import { BaseEntity } from '@cool-midway/core';
import { Column } from 'typeorm';

/**
 * 收入报表
 */
@EntityModel('contract_report_entity')
export class ContractReportEntity extends BaseEntity {
  @Column({ comment: '描述' })
  xxx: string;
}
