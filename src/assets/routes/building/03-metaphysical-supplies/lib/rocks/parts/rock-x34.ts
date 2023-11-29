import rock_x34_bin from './rock-x34.bin?url';

export default {
	"asset": {
		"generator": "Khronos glTF Blender I/O v3.6.27",
		"version": "2.0"
	},
	"extensionsUsed": [
		"KHR_draco_mesh_compression",
		"KHR_materials_transmission",
		"KHR_materials_ior"
	],
	"extensionsRequired": [
		"KHR_draco_mesh_compression"
	],
	"scene": 0,
	"scenes": [
		{
			"name": "Scene",
			"nodes": [
				0
			]
		}
	],
	"nodes": [
		{
			"mesh": 0,
			"name": "rock.047",
			"rotation": [
				-0.4805228114128113,
				-0.6980994939804077,
				-0.528775155544281,
				0.046387482434511185
			],
			"translation": [
				1.1043621301651,
				1.5393832921981812,
				-0.5714379549026489
			]
		}
	],
	"materials": [
		{
			"doubleSided": true,
			"extensions": {
				"KHR_materials_transmission": {
					"transmissionFactor": 1
				},
				"KHR_materials_ior": {
					"ior": 1.4500000476837158
				}
			},
			"name": "Material.001",
			"pbrMetallicRoughness": {
				"baseColorFactor": [
					0.8394935727119446,
					0.8394935727119446,
					0.8394935727119446,
					1
				],
				"metallicFactor": 0.921450138092041,
				"roughnessFactor": 0.17824772000312805
			}
		}
	],
	"meshes": [
		{
			"name": "rock.015",
			"primitives": [
				{
					"attributes": {
						"POSITION": 0,
						"NORMAL": 1,
						"TEXCOORD_0": 2
					},
					"extensions": {
						"KHR_draco_mesh_compression": {
							"bufferView": 0,
							"attributes": {
								"POSITION": 0,
								"NORMAL": 1,
								"TEXCOORD_0": 2
							}
						}
					},
					"indices": 3,
					"material": 0,
					"mode": 4
				}
			]
		}
	],
	"accessors": [
		{
			"componentType": 5126,
			"count": 196,
			"max": [
				0.517623782157898,
				0.8224615454673767,
				0.5219908356666565
			],
			"min": [
				-0.4373781681060791,
				-0.6909284591674805,
				-0.5481271147727966
			],
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 196,
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 196,
			"type": "VEC2"
		},
		{
			"componentType": 5123,
			"count": 576,
			"type": "SCALAR"
		}
	],
	"bufferViews": [
		{
			"buffer": 0,
			"byteLength": 2106,
			"byteOffset": 0
		}
	],
	"buffers": [
		{
			"byteLength": 2108,
			"uri": rock_x34_bin
		}
	]
}