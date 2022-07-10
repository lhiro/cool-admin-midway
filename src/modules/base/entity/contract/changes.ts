import { EntityModel } from '@midwayjs/orm';
import { BaseEntity } from '@cool-midway/core';
import { Column } from 'typeorm';

/**
 * 合同变更
 */
@EntityModel('contract_changes_entity')
export class ContractChangesEntity extends BaseEntity {
  @Column({ comment: '描述' })
  xxx: string;
}
