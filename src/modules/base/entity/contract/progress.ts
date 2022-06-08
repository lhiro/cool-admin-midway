import { EntityModel } from '@midwayjs/orm';
import { BaseEntity } from '@cool-midway/core';
import { Column } from 'typeorm';

/**
 * 进度款申报
 */
@EntityModel('base_contract_progress')
export class ContractProgressEntity extends BaseEntity {
  @Column({ comment: '申报编号', type: 'bigint' })
  declareId: string;

  @Column({ comment: '申报名称' })
  name: string;

  @Column({ comment: '合同名称' })
  contractName: string;

  @Column({ comment: '甲方单位' })
  partyA: string;

  @Column({ comment: '所属项目', nullable: true })
  belongProjectId: number;

  @Column({ comment: '所属项目名称' })
  belongProject: string;

  @Column({ comment: '罚款', type: 'bigint' })
  mulct: number;

  @Column({ comment: '日期', type: 'datetime' })
  date: number;

  @Column({ comment: '合同金额', type: 'bigint' })
  contractAmount: number;

  @Column({ comment: '合同金额（大写）', type: 'bigint', nullable: true })
  contractAmountCaptial: number;

  @Column({ comment: '扣款', type: 'bigint' })
  deductions: number;

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

  @Column({ comment: '结算类型 1: 进度结算 2: 完工结算' })
  paymentType: number;

  @Column({ comment: '工程量清单id', type: 'bigint', nullable: true })
  quantitiesId: number;

  @Column({ comment: '批复金额', type: 'bigint' })
  reply: number;

  @Column({ comment: '批复金额（大写）', type: 'bigint', nullable: true })
  replyCapital: number;

  @Column({ comment: '填报人' })
  informant: string;
}
