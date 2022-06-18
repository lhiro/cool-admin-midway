import { EntityModel } from '@midwayjs/orm';
import { BaseEntity } from '@cool-midway/core';
import { Column } from 'typeorm';

/**
 * 合同收款
 */
@EntityModel('base_contract_proceed')
export class ContractProceedEntity extends BaseEntity {
  @Column({ comment: '收款编号', type: 'bigint' })
  proceedId: string;

  @Column({ comment: '收款名称' })
  name: string;

  @Column({ comment: '合同名称' })
  contractName: string;

  @Column({ comment: '项目', nullable: true })
  belongProjectId: number;

  @Column({ comment: '项目名称' })
  belongProject: string;

  @Column({ comment: '甲方单位' })
  partyA: string;

  @Column({ comment: '罚款', type: 'bigint', nullable: true })
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

  @Column({ comment: '账户信息', nullable: true })
  accountInfo: string;

  @Column({ comment: '银行账户', nullable: true })
  bankAccount: string;

  @Column({ comment: '结算类型 1: 按进度付款 2: 按合同付款', nullable: true })
  proceedType: number;

  @Column({ comment: '已开票金额', type: 'bigint' })
  invoicedAmount: number;

  @Column({ comment: '已收款金额', type: 'bigint' })
  proceedsAmount: number;

  @Column({ comment: '收款金额', type: 'bigint' })
  amount: number;

  @Column({ comment: '收款金额（大写）', type: 'bigint', nullable: true })
  amountCapital: number;

  @Column({ comment: '填报人' })
  informant: string;
}
