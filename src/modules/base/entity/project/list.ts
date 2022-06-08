import { EntityModel } from '@midwayjs/orm';
import { BaseEntity } from '@cool-midway/core';
import { Column } from 'typeorm';

/**
 * 项目列表
 */
@EntityModel('base_project_list')
export class ProjectListEntity extends BaseEntity {
  @Column({ comment: '项目编号', type: 'bigint' })
  projectId: number;

  @Column({ comment: '项目名称' })
  name: string;

  @Column({ comment: '项目地址' })
  address: string;

  @Column({ comment: '所属区域' })
  region: string;

  @Column({ comment: '工程工期' })
  projectTime: string;

  @Column({ comment: '工程量估算' })
  projectEstimate: string;

  @Column({ comment: '工程造价' })
  projectCost: string;

  @Column({ comment: '预期利润' })
  projectProfit: string;

  @Column({ comment: '造价（大写）' })
  projectCostCapital: string;

  @Column({ comment: '质量等级' })
  qualityGrade: string;

  @Column({ comment: '所属分公司' })
  company: string;

  @Column({ comment: '所属机构' })
  organization: string;

  @Column({ comment: '立项人' })
  projectPeople: string;

  @Column({ comment: '立项人联系电话' })
  contact: string;

  @Column({ comment: '跟踪人' })
  followPeople: string;

  @Column({ comment: '建设单位' })
  devOrganize: string;

  @Column({ comment: '建设单位联系人' })
  devContact: string;

  @Column({ comment: '建设单位联系方式' })
  devContactMethod: string;

  @Column({ comment: '项目类型' })
  projectCate: string;

  @Column({ comment: '项目状态' })
  projectStatus: string;

  @Column({
    comment: '审批状态 0: 未提交 1: 审批通过 2: 作废',
    type: 'tinyint',
    default: 0,
  })
  approvalStatus: number;

  /**附件地址 */
  attachment: string[];

  @Column({ comment: '开始时间', type: 'datetime' })
  startTime: number;

  @Column({ comment: '结束时间', type: 'datetime' })
  endTime: number;
}
