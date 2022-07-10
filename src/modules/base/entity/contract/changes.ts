import { EntityModel } from '@midwayjs/orm';
import { BaseEntity } from '@cool-midway/core';
import { Column } from 'typeorm';

/**
 * 合同变更
 */
@EntityModel('base_contract_changes')
export class ContractChangesEntity extends BaseEntity {
  @Column({ comment: '签证编号', type: 'bigint' })
  signId: string;

  @Column({ comment: '变更名称' })
  name: string;

  @Column({ comment: '合同变更名称' })
  contractName: string;

  @Column({ comment: '项目', nullable: true })
  belongProjectId: number;

  @Column({ comment: '项目名称' })
  belongProject: string;

  @Column({ comment: '签证日期', type: 'datetime' })
  date: number;

  @Column({ comment: '变更金额', type: 'bigint' })
  amount: number;

  @Column({ comment: '变更金额（大写）', type: 'bigint', nullable: true })
  amountCaptial: number;

  @Column({
    comment: '流程状态 0: 未提交 1: 审批通过 2: 作废',
    type: 'tinyint',
    default: 0,
  })
  status: number;

  /**附件地址 */
  attachment: string[];

  @Column({ comment: '备注', nullable: true })
  remark: string;

  @Column({ comment: '主要条款', nullable: true })
  mainTerms: string;

  @Column({ comment: '收款条件', nullable: true })
  receiveTerms: string;

  @Column({ comment: '变更签订人', nullable: true })
  signer: string;

  @Column({
    comment:
      '结算方式 1: 按进度付款 2: 按合同付款 3: 分段付款 4: 竣工后一次结算',
    nullable: true,
  })
  proceedType: number;

  @Column({ comment: '工程量清单id', type: 'bigint', nullable: true })
  quantitiesId: number;
}
