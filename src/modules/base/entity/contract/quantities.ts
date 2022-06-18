import { EntityModel } from '@midwayjs/orm';
import { BaseEntity } from '@cool-midway/core';
import { Column } from 'typeorm';

/**
 * 工程量清单
 */
@EntityModel('base_contract_quantities')
export class QuantitiesEntity extends BaseEntity {
  @Column({ comment: '编号', type: 'bigint' })
  quantitiesId: number;

  @Column({ comment: '清单子目' })
  listingSubitem: string;

  @Column({ comment: '单位' })
  unit: string;

  @Column({ comment: '工程量' })
  quantity: number;

  @Column({ comment: '含税单价' })
  taxUnitPrice: number;

  @Column({ comment: '税率' })
  taxRate: number;

  @Column({ comment: '不含税单价' })
  notaxUnitPrice: number;

  @Column({ comment: '不含税金额' })
  notaxAmount: number

  @Column({ comment: '含税金额' })
  taxAmount: number;

  @Column({ comment: '税额' })
  tax: number;

  @Column({ comment: '备注' })
  remark: string;
}