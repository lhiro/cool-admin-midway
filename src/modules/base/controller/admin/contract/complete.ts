import { Provide } from '@midwayjs/decorator';
import { CoolController, BaseController } from '@cool-midway/core';
import { ContractCompleteEntity } from '../../../entity/contract/complete';
import { ContractService } from '../../../service/contract';

/**
 * 合同
 */
@Provide()
@CoolController({
  api: ['add', 'delete', 'update', 'info', 'list', 'page'],
  entity: ContractCompleteEntity,
  service: ContractService,
  insertParam() {
    return {
    };
  }
})
export class ContractCompleteController extends BaseController {}
