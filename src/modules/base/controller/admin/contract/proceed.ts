import { Provide } from '@midwayjs/decorator';
import { CoolController, BaseController } from '@cool-midway/core';
import { ContractProceedEntity } from '../../../entity/contract/proceed';
import { ContractService } from '../../../service/contract';

/**
 * 合同
 */
@Provide()
@CoolController({
  api: ['add', 'delete', 'update', 'info', 'list', 'page'],
  entity: ContractProceedEntity,
  service: ContractService,
  insertParam() {
    return {
    };
  }
})
export class ContractProceedController extends BaseController {}
