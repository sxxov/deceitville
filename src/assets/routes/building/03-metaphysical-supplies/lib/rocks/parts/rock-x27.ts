import rock_x27_bin from './rock-x27.bin?url';

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
			"name": "rock.028",
			"rotation": [
				0.747881293296814,
				-0.32054805755615234,
				-0.3760393261909485,
				0.4433023929595947
			],
			"translation": [
				-2.190274953842163,
				0.3900243937969208,
				-3.0887136459350586
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
			"name": "rock.028",
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
			"count": 285,
			"max": [
				0.5868445038795471,
				0.7287856936454773,
				0.5398746132850647
			],
			"min": [
				-0.5551849603652954,
				-0.8324634432792664,
				-0.45591408014297485
			],
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 285,
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 285,
			"type": "VEC2"
		},
		{
			"componentType": 5123,
			"count": 864,
			"type": "SCALAR"
		}
	],
	"bufferViews": [
		{
			"buffer": 0,
			"byteLength": 2931,
			"byteOffset": 0
		}
	],
	"buffers": [
		{
			"byteLength": 2932,
			"uri": rock_x27_bin
		}
	]
}