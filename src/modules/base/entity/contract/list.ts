import { EntityModel } from '@midwayjs/orm';
import { BaseEntity } from '@cool-midway/core';
import { Column } from 'typeorm';

/**
 * 合同列表
 */
@EntityModel('base_contract_list')
export class ContractListEntity extends BaseEntity {
  @Column({ comment: '合同编号', type: 'bigint' })
  contractId: string;

  @Column({ comment: '合同名称' })
  name: string;

  @Column({ comment: '合同类型' })
  contractCate: string;

  @Column({ comment: '甲方单位' })
  partyA: string;

  @Column({ comment: '乙方单位' })
  partyB: string;

  @Column({ comment: '所属项目', nullable: true })
  belongProjectId: number;

  @Column({ comment: '所属项目名称' })
  belongProject: string;

  @Column({ comment: '签订人' })
  signPeople: string;

  @Column({ comment: '签订日期', type: 'datetime' })
  signDate: number;

  @Column({ comment: '合同金额', type: 'bigint' })
  contractAmount: number;

  @Column({ comment: '合同金额（大写）', type: 'bigint', nullable: true })
  contractAmountCapital: number;

  @Column({ comment: '质保金', type: 'bigint' })
  margin: number;

  @Column({ comment: '预计回收日期', type: 'datetime' })
  expectedRecoveryDate: number;

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

  @Column({ comment: '结算方式' })
  paymentMethod: string;

  @Column({ comment: '付款方式' })
  payMethod: string;

  @Column({ comment: '预收款' })
  advancesReceived: number;

  @Column({ comment: '收款条件', nullable: true })
  payeeCondition: string;

  @Column({ comment: '工程量清单id', type: 'bigint', nullable: true })
  quantitiesId: number;

  @Column({ comment: '开始时间', type: 'datetime' })
  startTime: number;

  @Column({ comment: '结束时间', type: 'datetime' })
  endTime: number;
}
